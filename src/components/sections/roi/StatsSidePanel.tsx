
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
  isCalculatorVisible: boolean; // New prop to track ROI calculator visibility
}

export const StatsSidePanel = ({ trends, isOpen, togglePanel, isCalculatorVisible }: StatsSidePanelProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Check if we're on desktop or mobile
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Don't render anything if calculator is not visible
  if (!isCalculatorVisible) {
    return null;
  }

  return (
    <>
      {/* Mobile/Tablet Toggle Button (fixed at bottom right) */}
      {!isDesktop && !isOpen && (
        <div className="fixed bottom-24 right-4 z-40">
          <Button 
            onClick={togglePanel}
            className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-white shadow-lg"
          >
            Stats
          </Button>
        </div>
      )}

      {/* Stats Panel */}
      <div 
        className={cn(
          "fixed z-30 transition-all duration-300 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm shadow-xl",
          isDesktop 
            ? cn(
                "top-1/2 -translate-y-1/2 h-auto max-h-[90vh] overflow-y-auto rounded-r-xl border-r border-t border-b border-neutral-200 dark:border-neutral-700",
                isOpen ? "left-0" : "-left-[320px]" // Slightly narrower
              )
            : cn(
                "left-0 right-0 rounded-t-xl border-t border-neutral-200 dark:border-neutral-700",
                isOpen ? "bottom-0" : "-bottom-[400px]"
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
          isDesktop ? "w-[320px]" : "w-full" // Narrower panel
        )}>
          <StatsCards trends={trends} compact={true} /> {/* Use compact mode */}
        </div>

        {/* Desktop Tab/Handle */}
        {isDesktop && (
          <div 
            className={cn(
              "absolute top-1/2 -right-11 -translate-y-1/2 rotate-90 bg-primary text-white px-3 py-1.5 rounded-t-lg cursor-pointer shadow-md text-sm",
              !isOpen && "animate-pulse"
            )}
            onClick={togglePanel}
          >
            Statistics
          </div>
        )}
      </div>
    </>
  );
};
