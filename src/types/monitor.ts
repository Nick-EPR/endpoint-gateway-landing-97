
export interface Monitor {
  name: string;
  status: "healthy" | "degraded" | "down";
  lastCheckTime: string;
  metrics: {
    date: string;
    uptime: number;
    responseTime: number;
  }[];
}

export interface CronitorMonitor {
  name: string;
  status: string;
  latest_ping: {
    timestamp: string;
  };
  metrics: {
    uptime: {
      daily: Array<{
        date: string;
        value: number;
      }>;
    };
    latency: {
      daily: Array<{
        date: string;
        value: number;
      }>;
    };
  };
}
