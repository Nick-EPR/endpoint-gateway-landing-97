
import { format } from "date-fns";
import { Monitor, CronitorMonitor } from "@/types/monitor";
import { supabase } from "@/integrations/supabase/client";

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
  // First, get the API key from Supabase
  const { data: secrets, error } = await supabase
    .from('secrets')
    .select('value')
    .eq('name', 'CRONITOR_API_KEY')
    .maybeSingle();

  if (error || !secrets?.value) {
    throw new Error('Cronitor API key not found');
  }

  // Fetch monitors from Cronitor API
  const response = await fetch('https://cronitor.io/api/v3/monitors', {
    headers: {
      'Authorization': `Bearer ${secrets.value}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch monitors');
  }

  const data = await response.json();
  
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
};

export const calculateAverageUptime = (metrics: Monitor['metrics']) => {
  return (metrics.reduce((acc, curr) => acc + curr.uptime, 0) / metrics.length).toFixed(2);
};

export const calculateAverageResponseTime = (metrics: Monitor['metrics']) => {
  return Math.round(metrics.reduce((acc, curr) => acc + curr.responseTime, 0) / metrics.length);
};
