
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

  // Handle animation states based on isOpen (which should reflect calculator visibility)
  useEffect(() => {
    if (isOpen) {
      // When panel should be open, start the entering animation
      setAnimationState('entering');
      // After animation completes, set to visible state
      const timer = setTimeout(() => setAnimationState('visible'), 500);
      return () => clearTimeout(timer);
    } else if (animationState !== 'hidden') {
      // Only start exiting animation if not already hidden
      setAnimationState('exiting');
      // After exit animation completes, set to hidden
      const timer = setTimeout(() => setAnimationState('hidden'), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, animationState]);

  // Don't render anything if panel should be fully hidden
  if (animationState === 'hidden') {
    return null;
  }

  return (
    <>
      {/* Stats Panel with slide animations */}
      <div 
        className={cn(
          "fixed z-30 transition-all duration-500 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm shadow-xl",
          isDesktop 
            ? "top-1/2 -translate-y-1/2 h-auto max-h-[90vh] overflow-y-auto rounded-r-xl border-r border-t border-b border-neutral-200 dark:border-neutral-700"
            : "left-0 right-0 rounded-t-xl border-t border-neutral-200 dark:border-neutral-700"
        )}
        style={{
          width: isDesktop ? '320px' : '100%',
          transform: isDesktop 
            ? `translateY(-50%) translateX(${animationState === 'entering' || animationState === 'visible' ? '0' : '-100%'})` 
            : `translateY(${animationState === 'entering' || animationState === 'visible' ? '0' : '100%'})`
        }}
      >
        {/* Panel Header with close button */}
        <div className="p-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 sticky top-0 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm">
          <h3 className="font-medium text-base">ROI Statistics</h3>
          <Button variant="ghost" size="icon" onClick={togglePanel} className="h-7 w-7">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Panel Content */}
        <div className="p-3 w-full">
          <StatsCards trends={trends} compact={true} />
        </div>
      </div>
    </>
  );
};
