
import { Monitor } from "@/types/monitor";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { calculateAverageUptime, calculateAverageResponseTime } from "@/utils/monitorUtils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <Card className="p-6 bg-white/90 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{monitor.name}</h3>
        {getStatusBadge(monitor.status)}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Last checked: {new Date(monitor.lastCheckTime).toLocaleString()}
      </p>
      
      {/* Historical uptime visualization integrated with status bar */}
      <div className="mt-4 relative h-2">
        <div className={`absolute inset-0 rounded-full ${getStatusColor(monitor.status)}`} />
        <div className="absolute inset-0 opacity-50">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monitor.metrics} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={`uptimeGradient-${monitor.name}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="uptime"
                stroke="rgba(255,255,255,0.5)"
                fill={`url(#uptimeGradient-${monitor.name})`}
                strokeWidth={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="mt-4">
        <Button
          variant="ghost"
          className="w-full flex items-center justify-between"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>View Details</span>
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>30-day Average Uptime: {calculateAverageUptime(monitor.metrics)}%</span>
            <span>Average Response Time: {calculateAverageResponseTime(monitor.metrics)}ms</span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MonitorCard;
