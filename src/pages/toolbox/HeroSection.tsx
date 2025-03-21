
import { Button } from "@/components/ui/button";
import warehouseImage from "/lovable-uploads/1677d91d-eaaf-4e2c-b98f-d73469344a71.png";
import toolboxLogo from "/lovable-uploads/5f646840-4a0c-484c-bd5d-6707af1f66ca.png";
import { OptimizedImage } from "@/components/ui/optimized-image";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/60 backdrop-blur-[3px] z-10 dark:from-black/95 dark:via-black/85 dark:to-black/70"></div>
        <OptimizedImage 
          src={warehouseImage}
          alt="Warehouse Operations"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center mb-12">
          <img src={toolboxLogo} alt="Toolbox Logo" className="h-16 mb-8 animate-fade-in" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in [animation-delay:200ms]">
            Physical Asset Management & Repair
          </h1>
          <p className="text-lg text-white/90 max-w-2xl animate-fade-in [animation-delay:400ms]">
            Bridge the gap between IT asset management and repair operations with Toolbox's comprehensive suite of warehouse, logistics, and repair depot integration tools.
          </p>
          <div className="flex gap-4 mt-8 animate-fade-in [animation-delay:600ms]">
            <Button size="lg" className="bg-primary/90 hover:bg-primary">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
