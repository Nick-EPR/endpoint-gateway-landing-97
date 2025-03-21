
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { memo, useMemo } from "react";
import { Solution } from "@/types/solution";
import DataFlow from "./DataFlow";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface SolutionCardProps {
  solution: Solution;
  index: number;
  totalSolutions: number;
}

const SolutionCard = memo(({ solution, index, totalSolutions }: SolutionCardProps) => {
  // Use useMemo to prevent unnecessary renders
  const logoElement = useMemo(() => {
    if (!solution.logo) return null;
    
    return (
      <div className="mb-6 h-16 flex items-center justify-center">
        <OptimizedImage 
          src={solution.logo} 
          alt={`${solution.title} logo`}
          loading="lazy"
          className={`object-contain ${
            solution.title === 'HeliAM' ? 'h-12' : 
            solution.title === 'Luemin' ? 'max-w-[160px]' : 
            'max-h-8'
          }`} 
          width={160}
          height={64}
        />
      </div>
    );
  }, [solution.logo, solution.title]);

  return (
    <div className="relative">
      <div 
        className={cn(
          "solution-card p-8 rounded-xl",
          "bg-white/95 dark:bg-neutral-800/50 backdrop-blur-sm",
          "border border-neutral-100 dark:border-neutral-700/50",
          solution.comingSoon && "opacity-75"
        )}
        style={{
          animationDelay: `${index * 200}ms`,
          position: 'relative',
          zIndex: 2
        }}
      >
        {solution.logo ? logoElement : (
          <h3 className="text-xl font-semibold mb-6 glass-text">
            {solution.title}
          </h3>
        )}
        <p className="glass-text-subtle mb-6 leading-relaxed">
          {solution.description}
        </p>
        {solution.comingSoon ? (
          <div className="flex justify-center mt-4">
            <span className="text-primary font-medium dark:text-primary-foreground">Coming Soon</span>
          </div>
        ) : solution.path && (
          <Link to={solution.path} className="block w-full">
            <Button 
              variant="outline" 
              className="w-full"
            >
              Learn More
            </Button>
          </Link>
        )}
      </div>
      
      {index < totalSolutions - 1 && (
        <div 
          className="hidden md:block absolute top-1/2 -right-4 w-16 h-[2px] bg-primary/10 dark:bg-primary-foreground/10" 
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
