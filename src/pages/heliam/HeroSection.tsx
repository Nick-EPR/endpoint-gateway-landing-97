
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4ab1-81fa-ad040f234e85.png";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Blue tech background - darkened at top */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-600/20 to-blue-700/10 dark:from-blue-950/50 dark:via-blue-900/30 dark:to-blue-950/20"></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-15" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}
      ></div>
      
      {/* Digital circuit lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <svg className="absolute top-0 left-0 w-full h-full" 
             viewBox="0 0 100 100" 
             preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2" fill="none"></path>
          <path d="M0,20 L100,20" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M0,40 L100,40" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M0,60 L100,60" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M0,80 L100,80" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M20,0 L20,100" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M40,0 L40,100" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M60,0 L60,100" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
          <path d="M80,0 L80,100" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.2"></path>
        </svg>
      </div>
      
      {/* Animated circles background - changed to blue tones */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-blue-400/10 dark:bg-blue-400/15 blur-3xl"></div>
      </div>
      
      {/* Dark overlay at the very top to ensure navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-950/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm w-fit">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Next-Gen ITAM Solution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight dark:text-white">
              Revolutionize Your <span className="text-blue-500">IT Asset</span> Management
            </h1>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-lg">
              HeliAM's AI-powered platform gives you complete visibility and control over your IT assets throughout their entire lifecycle, reducing costs and increasing operational efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 rounded-full bg-blue-500 hover:bg-blue-600">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 rounded-full dark:text-white border-blue-200 dark:border-blue-800" 
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
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl dark:shadow-blue-500/10 lg:ml-12 border border-blue-200/30 dark:border-blue-500/20">
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
            
            {/* Stats card - updated with blue theme */}
            <div className="absolute -bottom-6 -left-6 lg:-left-10 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-lg shadow-lg p-4 z-20 max-w-[200px] animate-fade-up [animation-delay:600ms] border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-center gap-2 text-lg font-bold dark:text-white">
                <span className="text-blue-500">98%</span> Accuracy
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
