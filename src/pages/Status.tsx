
import { useState, useEffect } from "react";
import NavigationProgress from "../components/NavigationProgress";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import MonitorCard from "@/components/status/MonitorCard";
import { fetchMonitors } from "@/utils/monitorUtils";

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
    refetchInterval: 60000, // Refetch every minute
  });

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
                <MonitorCard key={index} monitor={monitor} />
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
