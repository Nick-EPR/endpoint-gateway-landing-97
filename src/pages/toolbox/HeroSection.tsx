
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import warehouseImage from "/lovable-uploads/1677d91d-eaaf-4e2c-b98f-d73469344a71.png";
import toolboxLogo from "/lovable-uploads/5f646840-4a0c-484c-bd5d-6707af1f66ca.png";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/60 backdrop-blur-[3px] z-10 dark:from-black/95 dark:via-black/85 dark:to-black/70"></div>
        <img 
          src={warehouseImage}
          alt="Warehouse Operations"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="flex flex-col">
            <img src={toolboxLogo} alt="Toolbox Logo" className="h-16 mb-8 animate-fade-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in [animation-delay:200ms]">
              Streamline Your Physical <span className="text-primary">Asset Management</span> &amp; Repair
            </h1>
            <p className="text-lg text-white/90 mb-8 animate-fade-in [animation-delay:400ms]">
              Bridge the gap between IT asset management and physical operations with Toolbox's comprehensive suite for warehouse, logistics, and repair depot management.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="bg-primary/90 hover:bg-primary gap-2 rounded-full">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 gap-2 rounded-full">
                <Play className="h-4 w-4 fill-current" /> Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 animate-fade-in [animation-delay:800ms]">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">24-48h</div>
                  <div className="text-xs text-white/70">Average repair time</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">40%</div>
                  <div className="text-xs text-white/70">Reduced logistics costs</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-white">95%+</div>
                  <div className="text-xs text-white/70">First-time fix rate</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/5 p-1 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl animate-fade-in [animation-delay:1000ms]">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Toolbox Dashboard" 
                className="rounded-xl"
              />
              <div className="absolute bottom-4 right-4">
                <img 
                  src={toolboxLogo} 
                  alt="Toolbox Logo" 
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
