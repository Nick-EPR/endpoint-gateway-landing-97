
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
}

export const StatsSidePanel = ({ trends, isOpen, togglePanel }: StatsSidePanelProps) => {
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

  return (
    <>
      {/* Mobile/Tablet Toggle Button (fixed at bottom right) */}
      {!isDesktop && !isOpen && (
        <div className="fixed bottom-4 right-4 z-40">
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
                isOpen ? "left-0" : "-left-[350px]"
              )
            : cn(
                "left-0 right-0 rounded-t-xl border-t border-neutral-200 dark:border-neutral-700",
                isOpen ? "bottom-0" : "-bottom-[400px]"
              )
        )}
      >
        {/* Panel Header with close button */}
        <div className="p-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 sticky top-0 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm">
          <h3 className="font-medium text-lg">ROI Statistics</h3>
          <Button variant="ghost" size="icon" onClick={togglePanel} className="h-8 w-8">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Panel Content */}
        <div className={cn(
          "p-4",
          isDesktop ? "w-[350px]" : "w-full"
        )}>
          <StatsCards trends={trends} />
        </div>

        {/* Desktop Tab/Handle */}
        {isDesktop && (
          <div 
            className={cn(
              "absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 bg-primary text-white px-4 py-2 rounded-t-lg cursor-pointer shadow-md",
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
