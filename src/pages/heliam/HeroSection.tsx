
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4ab1-81fa-ad040f234e85.png";

const HeroSection = () => {
  const [showLight, setShowLight] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLight(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 backdrop-blur-[2px] z-10 dark:from-black/90 dark:via-black/80 dark:to-black/70"></div>
        <img 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Modern Warehouse Asset Management"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center mb-12">
          <img src={heliamLogo} alt="HeliAM Logo" className="h-24 mb-8 animate-fade-in" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in [animation-delay:200ms]">
            ITAM done{' '}
            <span className="relative inline-block min-w-[2ch]">
              <span className={`absolute transition-opacity duration-500 ${showLight ? 'opacity-0' : 'opacity-100'}`}>
                right
              </span>
              <span className={`transition-opacity duration-500 ${showLight ? 'opacity-100' : 'opacity-0'}`}>
                light
              </span>
            </span>
            .
          </h1>
          <p className="text-lg text-white/90 max-w-2xl animate-fade-in [animation-delay:400ms]">
            HeliAM streamlines IT asset lifecycle management with comprehensive tracking, security, and management capabilities within the Lifetime EPR ecosystem.
          </p>
          <div className="flex gap-4 mt-8 animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="bg-primary/90 hover:bg-primary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
