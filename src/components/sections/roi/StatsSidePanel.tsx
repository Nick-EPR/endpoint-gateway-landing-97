
import { useEffect, useState, useRef } from 'react';
import { Trend } from "@/utils/roi";
import { X, Minimize2, Maximize2, Calculator } from 'lucide-react';
import { StatsCards } from './StatsCards';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface StatsSidePanelProps {
  trends: Trend[];
  isOpen: boolean;
  togglePanel: () => void;
  isCalculatorVisible: boolean;
}

export const StatsSidePanel = ({ trends, isOpen, togglePanel, isCalculatorVisible }: StatsSidePanelProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [animationState, setAnimationState] = useState<'entering' | 'visible' | 'exiting' | 'hidden'>('hidden');
  const [isMinimized, setIsMinimized] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { isVisible: isPanelInView } = useIntersectionObserver(panelRef, { threshold: 0.1 });
  
  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    console.log('StatsSidePanel: isCalculatorVisible changed to', isCalculatorVisible);
    console.log('StatsSidePanel: isOpen is', isOpen);
    
    if (isOpen && isCalculatorVisible) {
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
  }, [isCalculatorVisible, isOpen, animationState]);

  const toggleMinimize = () => {
    console.log('Toggling minimize state, current:', isMinimized);
    setIsMinimized(prev => !prev);
  };

  if (animationState === 'hidden') {
    return null;
  }

  const getMinimizedSize = () => {
    if (isDesktop) {
      return isMinimized ? '40px' : '320px';
    } else {
      return isMinimized ? '40px' : 'auto';
    }
  };

  return (
    <>
      <div 
        ref={panelRef}
        className={cn(
          "fixed z-30 transition-all duration-500 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm shadow-xl",
          isDesktop 
            ? cn(
                "top-1/2 -translate-y-1/2 h-auto max-h-[90vh] overflow-y-auto rounded-r-xl border-r border-t border-b border-neutral-200 dark:border-neutral-700",
                animationState === 'entering' ? "left-0 translate-x-0" : 
                animationState === 'visible' ? "left-0 translate-x-0" : 
                animationState === 'exiting' ? "-translate-x-full" : "-translate-x-full"
              )
            : cn(
                "left-0 right-0 rounded-t-xl border-t border-neutral-200 dark:border-neutral-700",
                animationState === 'entering' ? "bottom-0 translate-y-0" : 
                animationState === 'visible' ? "bottom-0 translate-y-0" : 
                animationState === 'exiting' ? "translate-y-full" : "translate-y-full"
              )
        )}
        style={{
          width: isDesktop ? getMinimizedSize() : '100%',
          height: !isDesktop && isMinimized ? getMinimizedSize() : 'auto',
          transform: isDesktop 
            ? `translateY(-50%) translateX(${animationState === 'entering' || animationState === 'visible' ? '0' : '-100%'})` 
            : `translateY(${animationState === 'entering' || animationState === 'visible' ? '0' : '100%'})`
        }}
      >
        <div className={cn(
          "p-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 sticky top-0 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm",
          isMinimized && isDesktop && "writing-mode-vertical-rl rotate-180 h-full p-2 border-b-0 border-l border-neutral-200 dark:border-neutral-700"
        )}>
          {isMinimized ? (
            <span className="font-medium text-base">ROI Stats</span>
          ) : (
            <h3 className="font-medium text-base">ROI Statistics</h3>
          )}
          <div className={cn("flex items-center gap-1", isMinimized && "mt-2")}>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMinimize}
              className={cn(
                "h-7 w-7", 
                isMinimized && "bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600",
                isMinimized && isDesktop && "p-1 mb-2 rounded-md"
              )}
              aria-label={isMinimized ? "Maximize panel" : "Minimize panel"}
            >
              {isMinimized ? (
                <Maximize2 className="h-4 w-4 text-primary dark:text-primary-foreground" />
              ) : (
                <Minimize2 className="h-4 w-4" />
              )}
            </Button>
            {!isMinimized && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={togglePanel} 
                className="h-7 w-7"
                aria-label="Close panel"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {!isMinimized && (
          <div className="p-3 w-full">
            <StatsCards trends={trends} compact={true} />
          </div>
        )}
      </div>

      {/* Floating action button that matches scroll-to-top button style */}
      {isMinimized && isDesktop && (
        <button
          onClick={toggleMinimize}
          className={cn(
            "fixed z-40 bottom-6 left-6 p-3 rounded-full shadow-lg transition-all duration-300",
            "bg-primary text-white hover:bg-primary/90 flex items-center justify-center",
            "transform transition-transform animate-fade-in w-12 h-12",
            !isPanelInView && "translate-y-24 opacity-0 pointer-events-none"
          )}
          aria-label="Open ROI statistics panel"
        >
          {isPanelInView ? (
            <Maximize2 className="h-5 w-5" />
          ) : (
            <Calculator className="h-5 w-5" />
          )}
        </button>
      )}
    </>
  );
};
