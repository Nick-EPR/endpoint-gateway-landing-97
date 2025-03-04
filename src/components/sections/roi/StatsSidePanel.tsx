import { useEffect, useState } from 'react';
import { Trend } from "@/utils/roi";
import { X, Calculator, Maximize2, Minimize2 } from 'lucide-react';
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
  const [isMinimized, setIsMinimized] = useState(false);
  
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    if (isCalculatorVisible) {
      setAnimationState(prev => prev === 'hidden' ? 'entering' : 'visible');
      if (animationState === 'entering') {
        const timer = setTimeout(() => setAnimationState('visible'), 500);
        return () => clearTimeout(timer);
      }
    } else {
      setAnimationState(prev => prev !== 'hidden' ? 'exiting' : 'hidden');
      if (animationState === 'exiting') {
        const timer = setTimeout(() => setAnimationState('hidden'), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [isCalculatorVisible, animationState]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (animationState === 'hidden') {
    return null;
  }

  return (
    <>
      {isMinimized && (
        <Button
          onClick={toggleMinimize}
          className="fixed bottom-6 right-[10rem] z-40 shadow-lg rounded-full p-0 w-10 h-10 bg-primary text-white hover:bg-primary/90 animate-fade-up"
          aria-label="Maximize ROI Stats Panel"
          size="icon"
        >
          <Maximize2 className="h-5 w-5" />
        </Button>
      )}

      <div 
        className={cn(
          "fixed z-30 transition-all duration-500 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm shadow-xl",
          isDesktop 
            ? cn(
                "top-1/2 -translate-y-1/2 h-auto max-h-[90vh] overflow-y-auto rounded-r-xl border-r border-t border-b border-neutral-200 dark:border-neutral-700",
                isMinimized ? "-translate-x-full" : "",
                animationState === 'entering' ? "left-0 translate-x-0" : 
                animationState === 'visible' ? "left-0 translate-x-0" : 
                animationState === 'exiting' ? "-translate-x-full" : "-translate-x-full"
              )
            : cn(
                "left-0 right-0 rounded-t-xl border-t border-neutral-200 dark:border-neutral-700",
                isMinimized ? "translate-y-full" : "",
                animationState === 'entering' ? "bottom-0 translate-y-0" : 
                animationState === 'visible' ? "bottom-0 translate-y-0" : 
                animationState === 'exiting' ? "translate-y-full" : "translate-y-full"
              )
        )}
        style={{
          width: isDesktop ? '320px' : '100%',
          transform: isDesktop 
            ? `translateY(-50%) translateX(${isMinimized ? '-100%' : animationState === 'entering' || animationState === 'visible' ? '0' : '-100%'})` 
            : `translateY(${isMinimized ? '100%' : animationState === 'entering' || animationState === 'visible' ? '0' : '100%'})`
        }}
      >
        <div className="p-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 sticky top-0 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm">
          <h3 className="font-medium text-base">ROI Statistics</h3>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={toggleMinimize} className="h-7 w-7" aria-label="Minimize panel">
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={togglePanel} className="h-7 w-7" aria-label="Close panel">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-3 w-full">
          <StatsCards trends={trends} compact={true} />
        </div>
      </div>
    </>
  );
};
