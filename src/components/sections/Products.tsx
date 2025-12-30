
import SolutionCard from "./products/SolutionCard";
import SectionHeader from "./products/SectionHeader";
import { Solution } from "@/types/solution";
import toolboxLogo from "/lovable-uploads/c1f14b18-5227-48a7-bed0-d8e8a08ffc32.png";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import lueminLogo from "/lovable-uploads/8c6d4f78-d6a8-4d31-8e1f-502cbfc3e160.png";
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
  }];

  return (
    <section id="solutions" className="py-8 md:py-12 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <SectionHeader triangleImage={triangleImage} />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={index}
              totalSolutions={solutions.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
