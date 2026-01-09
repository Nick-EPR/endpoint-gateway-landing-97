
import SolutionCard from "./products/SolutionCard";
import SectionHeader from "./products/SectionHeader";
import VerticalDataFlow from "./products/VerticalDataFlow";
import { Solution } from "@/types/solution";
import toolboxLogo from "/lovable-uploads/c1f14b18-5227-48a7-bed0-d8e8a08ffc32.png";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import lueminLogo from "/lovable-uploads/8c6d4f78-d6a8-4d31-8e1f-502cbfc3e160.png";
import marketplaceLogo from "/lovable-uploads/marketplace-logo.png";
import triangleImage from "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";

const Solutions = () => {
  const solutions: Solution[] = [{
    title: "HeliAM",
    description: "Our core IT asset management platform that provides comprehensive lifecycle management within the Lifetime EPR ecosystem",
    logo: heliamLogo
  }, {
    title: "Toolbox",
    description: "Integrated suite of tools within HeliAM that optimizes asset tracking, security, and management throughout the lifecycle",
    logo: toolboxLogo
  }, {
    title: "Luemin",
    description: "Unified Endpoint Management (UEM) solution integrated into the Lifetime EPR platform for comprehensive device management",
    logo: lueminLogo
  }, {
    title: "Marketplace",
    description: "Streamlined hardware procurement for IT asset managers. Order desktops, laptops, and peripherals with native HeliAM integration for purchase orders and shipment tracking, while Toolbox handles the logistics.",
    logo: marketplaceLogo,
    iconMode: true,
    comingSoon: true
  }];

  return (
    <section id="solutions" className="py-8 md:py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <SectionHeader triangleImage={triangleImage} />
        
        {/* Products grid with vertical connectors */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top row - HeliAM, Toolbox, Luemin */}
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.slice(0, 3).map((solution, index) => (
              <SolutionCard
                key={solution.title}
                solution={solution}
                index={index}
                totalSolutions={3}
              />
            ))}
          </div>
          
          {/* Vertical connectors - hidden on mobile */}
          <div className="hidden md:block relative h-8 mt-0">
            {/* Connector from HeliAM to Marketplace */}
            <div 
              className="absolute h-full w-[2px] bg-primary/10 dark:bg-primary-foreground/10"
              style={{ left: 'calc(16.67% - 1px)' }}
            >
              <VerticalDataFlow />
            </div>
            {/* Connector from Toolbox to Marketplace */}
            <div 
              className="absolute h-full w-[2px] bg-primary/10 dark:bg-primary-foreground/10"
              style={{ left: 'calc(50% - 1px)' }}
            >
              <VerticalDataFlow />
            </div>
          </div>
          
          {/* Bottom row - Marketplace */}
          <div className="grid md:grid-cols-3 gap-8 mt-0 md:mt-0">
            <div className="md:col-span-2">
              <SolutionCard
                solution={solutions[3]}
                index={0}
                totalSolutions={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
