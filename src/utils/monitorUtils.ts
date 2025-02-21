
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
    case "true": // For "passing: true"
      return "healthy";
    case "degraded":
    case "notice":
    case "warning":
      return "degraded";
    case "down":
    case "error":
    case "failed":
    case "false": // For "passing: false"
      return "down";
    default:
      console.log('Unknown status:', status);
      return "degraded"; // Default to degraded if status is unknown
  }
};

export const fetchMonitors = async (): Promise<Monitor[]> => {
  console.log('Starting monitor fetch...');
  
  try {
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
    const monitors = data.monitors.map((monitor: CronitorMonitor) => {
      console.log('Processing monitor:', monitor.name, monitor.status);
      
      // Ensure we have valid metrics arrays
      const dailyMetrics = monitor.metrics?.uptime?.daily || [];
      const latencyMetrics = monitor.metrics?.latency?.daily || [];
      
      // Create the metrics array with proper date formatting
      const metrics = dailyMetrics.map((day, index) => ({
        date: format(new Date(day.date), 'MMM dd'),
        uptime: day.value,
        responseTime: latencyMetrics[index]?.value || 0,
      }));

      // If we don't have enough metrics, pad with defaults
      while (metrics.length < 30) {
        const date = new Date();
        date.setDate(date.getDate() - metrics.length);
        metrics.push({
          date: format(date, 'MMM dd'),
          uptime: 100,
          responseTime: 200,
        });
      }

      return {
        name: monitor.name || 'Unnamed Monitor',
        status: mapCronitorStatus(monitor.status),
        lastCheckTime: monitor.latest_ping?.timestamp || new Date().toISOString(),
        metrics: metrics.slice(0, 30).reverse(), // Ensure we only return 30 days, in chronological order
      };
    });

    if (monitors.length === 0) {
      throw new Error('No monitors found');
    }

    console.log('Processed monitors:', monitors);
    return monitors;

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
        })).reverse(),
      },
      {
        name: "Database",
        status: "healthy",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 99.8,
          responseTime: 150,
        })).reverse(),
      },
      {
        name: "Web Application",
        status: "degraded",
        lastCheckTime: new Date().toISOString(),
        metrics: Array.from({ length: 30 }, (_, i) => ({
          date: format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd'),
          uptime: 98.5,
          responseTime: 500,
        })).reverse(),
      },
    ];
  }
};

export const calculateAverageUptime = (metrics: Monitor['metrics']) => {
  const validMetrics = metrics.filter(m => typeof m.uptime === 'number' && !isNaN(m.uptime));
  if (validMetrics.length === 0) return "100.00";
  return (validMetrics.reduce((acc, curr) => acc + curr.uptime, 0) / validMetrics.length).toFixed(2);
};

export const calculateAverageResponseTime = (metrics: Monitor['metrics']) => {
  const validMetrics = metrics.filter(m => typeof m.responseTime === 'number' && !isNaN(m.responseTime));
  if (validMetrics.length === 0) return 0;
  return Math.round(validMetrics.reduce((acc, curr) => acc + curr.responseTime, 0) / validMetrics.length);
};
