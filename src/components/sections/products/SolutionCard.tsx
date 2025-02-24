
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { Solution } from "@/types/solution";
import DataFlow from "./DataFlow";

interface SolutionCardProps {
  solution: Solution;
  index: number;
  totalSolutions: number;
}

const SolutionCard = memo(({ solution, index, totalSolutions }: SolutionCardProps) => {
  return (
    <div className="relative">
      <div 
        className={`solution-card p-8 rounded-xl transition-all duration-300 hover:shadow-lg ${
          solution.comingSoon ? 'opacity-75' : ''
        } bg-white dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 hover:border-primary/30 animate-fade-up`}
        style={{
          animationDelay: `${index * 200}ms`,
          position: 'relative',
          zIndex: 2
        }}
      >
        {solution.logo ? (
          <div className="mb-6 h-16 flex items-center justify-center">
            <img 
              src={solution.logo} 
              alt={`${solution.title} logo`}
              loading="lazy"
              className={`object-contain ${
                solution.title === 'HeliAM' ? 'h-12' : 
                solution.title === 'Luemin' ? 'max-w-[160px]' : 
                'max-h-8'
              }`} 
            />
          </div>
        ) : (
          <h3 className="text-xl font-semibold mb-6 text-neutral-800 dark:text-white">
            {solution.title}
          </h3>
        )}
        <p className="text-neutral dark:text-neutral-300 mb-6 leading-relaxed">
          {solution.description}
        </p>
        {solution.comingSoon ? (
          <div className="flex justify-center mt-4">
            <span className="text-primary font-medium">Coming Soon</span>
          </div>
        ) : solution.path && (
          <Link to={solution.path} className="block w-full">
            <Button 
              variant="outline" 
              className="w-full hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
          </Link>
        )}
      </div>
      
      {index < totalSolutions - 1 && (
        <div 
          className="hidden md:block absolute top-1/2 -right-4 w-16 h-[2px] bg-primary/10" 
          style={{ 
            transform: 'translateY(-50%) translateX(4px)',
            zIndex: 1
          }}
        >
          <DataFlow />
        </div>
      )}
    </div>
  );
});

SolutionCard.displayName = "SolutionCard";

export default SolutionCard;
