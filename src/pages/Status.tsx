
import { useState, useEffect } from "react";
import NavigationProgress from "../components/NavigationProgress";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import MonitorCard from "@/components/status/MonitorCard";
import { fetchMonitors } from "@/utils/monitorUtils";
import { Server, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Status = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: monitors, isLoading } = useQuery({
    queryKey: ["status"],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
  });

  const getSystemStatus = () => {
    if (!monitors) return { text: "Loading status...", color: "text-muted-foreground" };
    
    const downCount = monitors.filter(m => m.status === "down").length;
    const degradedCount = monitors.filter(m => m.status === "degraded").length;
    
    if (downCount > 0) {
      return {
        text: `${downCount} system${downCount > 1 ? 's' : ''} down`,
        color: "text-red-400"
      };
    }
    if (degradedCount > 0) {
      return {
        text: `${degradedCount} system${degradedCount > 1 ? 's' : ''} degraded`,
        color: "text-yellow-400"
      };
    }
    return { text: "All systems operational", color: "text-emerald-400" };
  };

  const status = getSystemStatus();

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop")',
          backgroundColor: 'rgba(20, 24, 32, 0.85)',
          backgroundBlendMode: 'multiply'
        }}
      />
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => setScrolled(true)} />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Server className="h-8 w-8 text-foreground" />
              <h1 className="text-4xl font-bold text-foreground">System Status</h1>
            </div>
            <Button 
              variant="outline" 
              className="bg-background/40 hover:bg-background/60 border-border"
              onClick={() => window.location.href = '/contact'}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
              Report an Issue
            </Button>
          </div>

          <Card className="p-6 mb-8 bg-background/40 backdrop-blur-sm border-border">
            <p className={`text-xl font-semibold ${status.color}`}>
              {status.text}
            </p>
          </Card>
          
          <div className="space-y-6">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <Card key={index} className="p-6 bg-background/40 backdrop-blur-sm border-border">
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
                <div 
                  key={index}
                  className="transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  <MonitorCard monitor={monitor} />
                </div>
              ))
            )}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Incident History</h2>
            <Card className="p-6 bg-background/40 backdrop-blur-sm border-border">
              <p className="text-muted-foreground">No incidents reported in the last 90 days.</p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Status;
