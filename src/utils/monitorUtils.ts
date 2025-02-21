
import { format } from "date-fns";
import { Monitor, CronitorMonitor } from "@/types/monitor";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const mapCronitorStatus = (status: string): "healthy" | "degraded" | "down" => {
  switch (status.toLowerCase()) {
    case "healthy":
    case "up":
      return "healthy";
    case "degraded":
    case "notice":
      return "degraded";
    case "down":
    case "error":
      return "down";
    default:
      return "down";
  }
};

export const fetchMonitors = async (): Promise<Monitor[]> => {
  console.log('Starting monitor fetch...');
  
  try {
    // First, get the API key from Supabase
    const { data: secretData, error: secretError } = await supabase
      .rpc('get_secret', { secret_name: 'CRONITOR_API_KEY' });

    if (secretError) {
      console.error('Error fetching API key:', secretError);
      toast.error('Failed to fetch API key from database');
      throw new Error('Failed to fetch Cronitor API key');
    }

    if (!secretData) {
      console.error('No API key found in database');
      toast.error('Cronitor API key not found in database');
      throw new Error('Cronitor API key not found');
    }

    console.log('Successfully retrieved API key from Supabase');

    // If we can't fetch real data, return mock data for testing
    const mockMonitors: Monitor[] = [
      {
        name: "API Service",
        status: "healthy",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 99.9,
          responseTime: 250,
        })),
      },
      {
        name: "Database",
        status: "healthy",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 99.8,
          responseTime: 150,
        })),
      },
      {
        name: "Web Application",
        status: "degraded",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 98.5,
          responseTime: 500,
        })),
      },
    ];

    // Attempt to fetch real data
    console.log('Attempting to fetch from Cronitor API...');
    const response = await fetch('https://cronitor.io/api/v3/monitors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${secretData}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cronitor API error response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      console.log('Falling back to mock data due to API error');
      toast.error('Using mock data - Could not fetch live monitors');
      return mockMonitors;
    }

    const data = await response.json();
    console.log('Successfully fetched Cronitor data:', data);
    
    if (!data.monitors || !Array.isArray(data.monitors)) {
      console.error('Unexpected Cronitor API response format:', data);
      console.log('Falling back to mock data due to invalid response format');
      toast.error('Using mock data - Invalid response format from Cronitor');
      return mockMonitors;
    }
    
    // Map Cronitor data to our Monitor interface
    return data.monitors.map((monitor: CronitorMonitor) => ({
      name: monitor.name,
      status: mapCronitorStatus(monitor.status),
      lastCheckTime: monitor.latest_ping?.timestamp || new Date().toISOString(),
      metrics: monitor.metrics.uptime.daily.map((day, index) => ({
        date: format(new Date(day.date), 'MMM dd'),
        uptime: day.value,
        responseTime: monitor.metrics.latency.daily[index]?.value || 0,
      })),
    }));
  } catch (error) {
    console.error('Error fetching monitors:', error);
    console.log('Falling back to mock data due to error');
    toast.error('Using mock data - Could not fetch live monitors');
    
    // Return mock data as fallback
    return [
      {
        name: "API Service",
        status: "healthy",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 99.9,
          responseTime: 250,
        })),
      },
      {
        name: "Database",
        status: "healthy",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 99.8,
          responseTime: 150,
        })),
      },
      {
        name: "Web Application",
        status: "degraded",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 98.5,
          responseTime: 500,
        })),
      },
    ];
  }
};

export const calculateAverageUptime = (metrics: Monitor['metrics']) => {
  return (metrics.reduce((acc, curr) => acc + curr.uptime, 0) / metrics.length).toFixed(2);
};

export const calculateAverageResponseTime = (metrics: Monitor['metrics']) => {
  return Math.round(metrics.reduce((acc, curr) => acc + curr.responseTime, 0) / metrics.length);
};
