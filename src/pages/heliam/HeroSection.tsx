
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4ab1-81fa-ad040f234e85.png";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-white dark:from-primary/10 dark:via-neutral-900 dark:to-neutral-900"></div>
      
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 rounded-full px-3 py-1 shadow-sm w-fit">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Next-Gen ITAM Solution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white">
              Revolutionize Your <span className="text-primary">IT Asset</span> Management
            </h1>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-lg">
              HeliAM's AI-powered platform gives you complete visibility and control over your IT assets throughout their entire lifecycle, reducing costs and increasing operational efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 rounded-full">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 rounded-full dark:text-white" 
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play className="h-4 w-4 fill-current" /> Watch Demo
              </Button>
            </div>
            
            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-neutral-800 overflow-hidden bg-neutral-200 dark:bg-neutral-700"
                  ></div>
                ))}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">
                <strong>500+</strong> organizations trust HeliAM
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl dark:shadow-primary/10 lg:ml-12">
              <img 
                src="https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="HeliAM Dashboard" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <img 
                src={heliamLogo} 
                alt="HeliAM Logo" 
                className="absolute bottom-4 right-4 h-12"
              />
            </div>
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-4 z-20 max-w-[200px] animate-fade-up [animation-delay:600ms]">
              <div className="flex items-center gap-2 text-lg font-bold dark:text-white">
                <span className="text-primary">98%</span> Accuracy
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                in asset tracking & discovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
