
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

  // Fetch monitors from Cronitor API
  try {
    console.log('Attempting to fetch from Cronitor API...');
    const response = await fetch('https://cronitor.io/api/v3/monitors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${secretData}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Cronitor API error response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      toast.error(`Failed to fetch monitors: ${response.status} ${response.statusText}`);
      throw new Error('Failed to fetch monitors');
    }

    const data = await response.json();
    console.log('Successfully fetched Cronitor data:', data);
    
    if (!data.monitors || !Array.isArray(data.monitors)) {
      console.error('Unexpected Cronitor API response format:', data);
      toast.error('Unexpected response format from Cronitor');
      throw new Error('Invalid response format');
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
    toast.error('Failed to fetch system status');
    throw error;
  }
};

export const calculateAverageUptime = (metrics: Monitor['metrics']) => {
  return (metrics.reduce((acc, curr) => acc + curr.uptime, 0) / metrics.length).toFixed(2);
};

export const calculateAverageResponseTime = (metrics: Monitor['metrics']) => {
  return Math.round(metrics.reduce((acc, curr) => acc + curr.responseTime, 0) / metrics.length);
};
