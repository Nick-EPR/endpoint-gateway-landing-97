
import { useState, useEffect } from "react";
import NavigationProgress from "../components/NavigationProgress";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { subDays, format } from "date-fns";

interface Monitor {
  name: string;
  status: "healthy" | "degraded" | "down";
  lastCheckTime: string;
  metrics: {
    date: string;
    uptime: number;
    responseTime: number;
  }[];
}

const Status = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generateMockMetrics = () => {
    return Array.from({ length: 30 }).map((_, i) => ({
      date: format(subDays(new Date(), 29 - i), 'MMM dd'),
      uptime: 98 + Math.random() * 2, // Random uptime between 98-100%
      responseTime: 100 + Math.random() * 150, // Random response time between 100-250ms
    }));
  };

  const { data: monitors, isLoading } = useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      // This is a mock implementation. Replace with actual Cronitor API call
      const mockMonitors: Monitor[] = [
        {
          name: "API Service",
          status: "healthy",
          lastCheckTime: new Date().toISOString(),
          metrics: generateMockMetrics(),
        },
        {
          name: "Database",
          status: "healthy",
          lastCheckTime: new Date().toISOString(),
          metrics: generateMockMetrics(),
        },
        {
          name: "Authentication Service",
          status: "healthy",
          lastCheckTime: new Date().toISOString(),
          metrics: generateMockMetrics(),
        },
      ];
      return mockMonitors;
    },
    refetchInterval: 60000, // Refetch every minute
  });

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

  const calculateAverageUptime = (metrics: Monitor['metrics']) => {
    return (metrics.reduce((acc, curr) => acc + curr.uptime, 0) / metrics.length).toFixed(2);
  };

  const calculateAverageResponseTime = (metrics: Monitor['metrics']) => {
    return Math.round(metrics.reduce((acc, curr) => acc + curr.responseTime, 0) / metrics.length);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: 'url("/photo-1487058792275-0ad4aaf24ca7.jpg")',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => setScrolled(true)} />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">System Status</h1>
          
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <Skeleton className="h-4 w-48 mt-4" />
                  <Skeleton className="h-32 w-full mt-4" />
                </Card>
              ))
            ) : (
              monitors?.map((monitor, index) => (
                <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{monitor.name}</h3>
                    {getStatusBadge(monitor.status)}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Last checked: {new Date(monitor.lastCheckTime).toLocaleString()}
                  </p>
                  <div className={`h-2 mt-4 rounded-full ${getStatusColor(monitor.status)}`} />
                  
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
                </Card>
              ))
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Incident History</h2>
            <Card className="p-6 bg-white/90 backdrop-blur-sm">
              <p className="text-gray-500">No incidents reported in the last 90 days.</p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Status;
