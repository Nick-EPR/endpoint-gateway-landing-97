
import { useEffect, useState } from 'react';
import { Trend } from "@/utils/roi";
import { X } from 'lucide-react';
import { StatsCards } from './StatsCards';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StatsSidePanelProps {
  trends: Trend[];
  isOpen: boolean;
  togglePanel: () => void;
  isCalculatorVisible: boolean; // Prop to track ROI calculator visibility
}

export const StatsSidePanel = ({ trends, isOpen, togglePanel, isCalculatorVisible }: StatsSidePanelProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [animationState, setAnimationState] = useState<'entering' | 'visible' | 'exiting' | 'hidden'>('hidden');
  
  // Check if we're on desktop or mobile
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Handle animation states based on calculator visibility
  useEffect(() => {
    if (isCalculatorVisible && animationState === 'hidden') {
      // Enter animation when calculator becomes visible
      setAnimationState('entering');
      const timer = setTimeout(() => setAnimationState('visible'), 500); // Duration of enter animation
      return () => clearTimeout(timer);
    } else if (!isCalculatorVisible && (animationState === 'visible' || animationState === 'entering')) {
      // Exit animation when calculator becomes invisible
      setAnimationState('exiting');
      const timer = setTimeout(() => setAnimationState('hidden'), 500); // Duration of exit animation
      return () => clearTimeout(timer);
    }
  }, [isCalculatorVisible, animationState]);

  // Don't render anything if panel should be fully hidden
  if (animationState === 'hidden') {
    return null;
  }

  return (
    <>
      {/* Stats Panel with animations */}
      <div 
        className={cn(
          "fixed z-30 transition-all duration-500 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm shadow-xl",
          isDesktop 
            ? cn(
                "top-1/2 -translate-y-1/2 h-auto max-h-[90vh] overflow-y-auto rounded-r-xl border-r border-t border-b border-neutral-200 dark:border-neutral-700",
                animationState === 'entering' ? "animate-fade-in left-0" : 
                animationState === 'visible' ? "left-0" : 
                animationState === 'exiting' ? "animate-fade-out -left-[320px]" : "-left-[320px]"
              )
            : cn(
                "left-0 right-0 rounded-t-xl border-t border-neutral-200 dark:border-neutral-700",
                animationState === 'entering' ? "animate-fade-in bottom-0" : 
                animationState === 'visible' ? "bottom-0" : 
                animationState === 'exiting' ? "animate-fade-out -bottom-[400px]" : "-bottom-[400px]"
              )
        )}
      >
        {/* Panel Header with close button */}
        <div className="p-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 sticky top-0 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm">
          <h3 className="font-medium text-base">ROI Statistics</h3>
          <Button variant="ghost" size="icon" onClick={togglePanel} className="h-7 w-7">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Panel Content */}
        <div className={cn(
          "p-3",
          isDesktop ? "w-[320px]" : "w-full"
        )}>
          <StatsCards trends={trends} compact={true} />
        </div>
      </div>
    </>
  );
};
