
import { Monitor } from "@/types/monitor";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { calculateAverageUptime, calculateAverageResponseTime } from "@/utils/monitorUtils";
import { useState } from "react";

interface MonitorCardProps {
  monitor: Monitor;
}

const MonitorCard = ({ monitor }: MonitorCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: Monitor["status"]) => {
    switch (status) {
      case "healthy":
        return "bg-emerald-500";
      case "degraded":
        return "bg-yellow-500";
      case "down":
        return "bg-red-500";
      default:
        return "bg-neutral-500";
    }
  };

  const getStatusBadge = (status: Monitor["status"]) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-0">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 border-0">Degraded</Badge>;
      case "down":
        return <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 border-0">Down</Badge>;
      default:
        return <Badge className="bg-neutral-500/20 text-neutral-400 hover:bg-neutral-500/30 border-0">Unknown</Badge>;
    }
  };

  return (
    <Card 
      className="overflow-hidden bg-neutral-900/40 backdrop-blur-sm border-neutral-800"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Status bar at the very top */}
      <div className="h-1 w-full">
        <div className={`h-full ${getStatusColor(monitor.status)}`} />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-neutral-200">{monitor.name}</h3>
          {getStatusBadge(monitor.status)}
        </div>
        <p className="text-sm text-neutral-400 mt-2">
          Last checked: {new Date(monitor.lastCheckTime).toLocaleString()}
        </p>

        {isExpanded && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm text-neutral-400">
              <span>30-day Average Uptime: {calculateAverageUptime(monitor.metrics)}%</span>
              <span>Average Response Time: {calculateAverageResponseTime(monitor.metrics)}ms</span>
            </div>
            
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={monitor.metrics}
                  margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: '#9ca3af' }} 
                    tickLine={{ stroke: '#9ca3af' }}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    tick={{ fill: '#9ca3af' }}
                    tickLine={{ stroke: '#9ca3af' }}
                    domain={[95, 100]}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(23, 23, 23, 0.9)',
                      border: '1px solid rgba(82, 82, 82, 0.2)',
                      borderRadius: '4px',
                      color: '#e5e7eb'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="uptime"
                    stroke="#34d399"
                    fillOpacity={1}
                    fill="url(#uptimeGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MonitorCard;
