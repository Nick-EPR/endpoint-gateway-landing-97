
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
  const [animationState, setAnimationState] = useState<'entering' | 'visible' | 'exiting' | 'hidden'>(isOpen ? 'visible' : 'hidden');
  
  // Check if we're on desktop or mobile
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Handle animation states based on isOpen
  useEffect(() => {
    console.log("StatsSidePanel isOpen:", isOpen);
    
    if (isOpen && (animationState === 'hidden' || animationState === 'exiting')) {
      console.log("Setting animation state to entering");
      setAnimationState('entering');
      const timer = setTimeout(() => {
        console.log("Setting animation state to visible");
        setAnimationState('visible');
      }, 50);
      return () => clearTimeout(timer);
    } 
    else if (!isOpen && (animationState === 'visible' || animationState === 'entering')) {
      console.log("Setting animation state to exiting");
      setAnimationState('exiting');
      const timer = setTimeout(() => {
        console.log("Setting animation state to hidden");
        setAnimationState('hidden');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, animationState]);

  // Force the panel to be visible when calculator is visible
  useEffect(() => {
    if (isCalculatorVisible && !isOpen) {
      console.log("Calculator is visible but panel is closed - should open");
      // Let the parent component handle the toggle logic
      // This is just a suggestion to open when calculator is visible
    }
  }, [isCalculatorVisible, isOpen]);

  console.log("Current animation state:", animationState);

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
