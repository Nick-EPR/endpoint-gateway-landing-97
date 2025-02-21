
import { useState, useEffect } from "react";
import NavigationProgress from "../components/NavigationProgress";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

interface Monitor {
  name: string;
  status: "healthy" | "degraded" | "down";
  lastCheckTime: string;
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

  const { data: monitors, isLoading } = useQuery({
    queryKey: ["status"],
    queryFn: async () => {
      // This is a mock implementation. Replace with actual Cronitor API call
      const mockMonitors: Monitor[] = [
        {
          name: "API Service",
          status: "healthy",
          lastCheckTime: new Date().toISOString(),
        },
        {
          name: "Database",
          status: "healthy",
          lastCheckTime: new Date().toISOString(),
        },
        {
          name: "Authentication Service",
          status: "healthy",
          lastCheckTime: new Date().toISOString(),
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

  return (
    <div className="min-h-screen">
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => setScrolled(true)} />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">System Status</h1>
          
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-24" />
                  </div>
                  <Skeleton className="h-4 w-48 mt-4" />
                </Card>
              ))
            ) : (
              monitors?.map((monitor, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{monitor.name}</h3>
                    {getStatusBadge(monitor.status)}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Last checked: {new Date(monitor.lastCheckTime).toLocaleString()}
                  </p>
                  <div className={`h-2 mt-4 rounded-full ${getStatusColor(monitor.status)}`} />
                </Card>
              ))
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Incident History</h2>
            <Card className="p-6">
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
