
import { format } from "date-fns";
import { Monitor, CronitorMonitor } from "@/types/monitor";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const mapCronitorStatus = (status: string | undefined): "healthy" | "degraded" | "down" => {
  if (!status) return "down";
  
  switch (status.toLowerCase()) {
    case "healthy":
    case "up":
    case "passing":
      return "healthy";
    case "degraded":
    case "notice":
      return "degraded";
    case "down":
    case "error":
    case "failed":
      return "down";
    default:
      return "down";
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
      // Calculate daily metrics from the latest events and metrics
      const dailyMetrics = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        const dateStr = format(date, 'yyyy-MM-dd');
        
        // Try to find matching metrics for this date
        const uptimeMetric = monitor.metrics?.uptime?.daily?.find(d => d.date === dateStr);
        const latencyMetric = monitor.metrics?.latency?.daily?.find(d => d.date === dateStr);
        
        return {
          date: format(date, 'MMM dd'),
          uptime: uptimeMetric?.value || 100, // Default to 100 if no data
          responseTime: latencyMetric?.value || 0, // Default to 0 if no data
        };
      });

      // Default to latest_ping timestamp if latest_event is not available
      const lastCheckTime = monitor.latest_event?.stamp 
        ? new Date(monitor.latest_event.stamp * 1000).toISOString()
        : monitor.latest_ping?.timestamp || new Date().toISOString();

      return {
        name: monitor.name || 'Unnamed Monitor',
        status: mapCronitorStatus(monitor.status || (monitor.passing === true ? 'healthy' : 'down')),
        lastCheckTime,
        metrics: dailyMetrics,
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
