
import { format } from "date-fns";
import { Monitor, CronitorMonitor } from "@/types/monitor";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const mapCronitorStatus = (status: string | undefined): "healthy" | "degraded" | "down" => {
  if (!status) return "down";
  
  const normalizedStatus = status.toLowerCase();
  console.log('Mapping status:', status, 'normalized:', normalizedStatus);
  
  switch (normalizedStatus) {
    case "healthy":
    case "up":
    case "ok":
    case "active":
      return "healthy";
    case "degraded":
    case "notice":
    case "warning":
      return "degraded";
    case "down":
    case "error":
    case "failed":
      return "down";
    default:
      console.log('Unknown status:', status);
      return "healthy"; // Default to healthy if status is unknown
  }
};

export const fetchMonitors = async (): Promise<Monitor[]> => {
  console.log('Starting monitor fetch...');
  
  try {
    // Call our Edge Function to fetch the monitors
    const { data, error } = await supabase.functions.invoke('fetch-monitors', {
      method: 'GET',
    });

    if (error) {
      console.error('Edge function error:', error);
      throw new Error('Failed to fetch monitors from edge function');
    }

    console.log('Received data from edge function:', data);
    
    if (!data || !data.monitors || !Array.isArray(data.monitors)) {
      console.error('Unexpected response format:', data);
      throw new Error('Invalid response format from Cronitor');
    }
    
    // Map Cronitor data to our Monitor interface
    return data.monitors.map((monitor: CronitorMonitor) => {
      console.log('Processing monitor:', monitor);
      return {
        name: monitor.name || 'Unnamed Monitor',
        status: mapCronitorStatus(monitor.status),
        lastCheckTime: monitor.latest_ping?.timestamp || new Date().toISOString(),
        metrics: monitor.metrics?.uptime?.daily?.map((day, index) => ({
          date: format(new Date(day.date), 'MMM dd'),
          uptime: day.value || 100,
          responseTime: monitor.metrics?.latency?.daily?.[index]?.value || 0,
        })) || Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 100,
          responseTime: 0,
        })),
      };
    });
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
