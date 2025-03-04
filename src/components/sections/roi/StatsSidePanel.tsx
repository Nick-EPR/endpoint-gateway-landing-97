
import { useEffect, useRef, useState } from 'react';
import { Minimize2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StatsCards from './StatsCards';
import { TrendResults } from '@/utils/roi/types';

interface StatsSidePanelProps {
  trends: TrendResults;
  isOpen: boolean;
  isMinimized?: boolean;
  togglePanel: () => void;
  minimizePanel: () => void;
  maximizePanel: () => void;
  isCalculatorVisible: boolean;
}

const StatsSidePanel = ({ 
  trends, 
  isOpen, 
  isMinimized = false,
  togglePanel, 
  minimizePanel,
  maximizePanel,
  isCalculatorVisible 
}: StatsSidePanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Update panel visibility when minimized state changes
  useEffect(() => {
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: isMinimized }
    }));
  }, [isMinimized]);

  // If panel is closed, return null
  if (!isOpen) return null;
  
  return (
    <div 
      ref={panelRef}
      className={`fixed ${
        isMobile 
          ? 'left-0 right-0 bottom-0 w-full rounded-b-none rounded-t-lg' 
          : 'right-4 bottom-24 w-[800px] rounded-lg'
      } bg-white dark:bg-neutral-800 shadow-xl z-[1000] transition-all duration-300 ${
        isMinimized 
          ? 'opacity-0 scale-95 pointer-events-none transform translate-y-10' 
          : 'opacity-100 scale-100 transform translate-y-0'
      }`}
      style={{ maxHeight: isMobile ? '80vh' : '80vh' }}
    >
      <div className="p-4 border-b dark:border-neutral-700 flex justify-between items-center">
        <h3 className="font-medium text-lg dark:text-white">ROI Stats</h3>
        <div className="flex gap-2">
          {!isMobile ? (
            <Button 
              variant="ghost" 
              onClick={minimizePanel} 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
          ) : (
            <Button 
              variant="ghost" 
              onClick={togglePanel} 
              size="icon" 
              className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <div className={`p-4 overflow-y-auto ${isMobile ? 'max-h-[60vh]' : ''}`}>
        <StatsCards 
          trends={trends} 
          compact={isMobile} 
          onMaximize={maximizePanel} 
        />
      </div>
    </div>
  );
};

export default StatsSidePanel;
