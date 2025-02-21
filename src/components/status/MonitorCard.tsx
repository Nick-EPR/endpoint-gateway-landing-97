
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
        return "bg-green-500";
      case "degraded":
        return "bg-yellow-500";
      case "down":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: Monitor["status"]) => {
    switch (status) {
      case "healthy":
        return <Badge className="bg-green-500">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-500">Degraded</Badge>;
      case "down":
        return <Badge className="bg-red-500">Down</Badge>;
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>;
    }
  };

  return (
    <Card 
      className="overflow-hidden bg-white/90 backdrop-blur-sm"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Status bar at the very top */}
      <div className="h-1 w-full">
        <div className={`h-full ${getStatusColor(monitor.status)}`} />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{monitor.name}</h3>
          {getStatusBadge(monitor.status)}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Last checked: {new Date(monitor.lastCheckTime).toLocaleString()}
        </p>

        {isExpanded && (
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
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
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="date" 
                    tick={{ fill: '#666' }} 
                    tickLine={{ stroke: '#666' }}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    tick={{ fill: '#666' }}
                    tickLine={{ stroke: '#666' }}
                    domain={[95, 100]}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '4px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="uptime"
                    stroke="#22c55e"
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
