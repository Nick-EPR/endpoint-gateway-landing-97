
import { useEffect, useRef } from 'react';
import { X, Minimize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StatsCards from './StatsCards';
import { TrendResults } from '@/utils/roi/types';

interface StatsSidePanelProps {
  trends: TrendResults;
  isOpen: boolean;
  isMinimized?: boolean;
  togglePanel: () => void;
  maximizePanel: () => void;
  isCalculatorVisible: boolean;
}

const StatsSidePanel = ({ 
  trends, 
  isOpen, 
  isMinimized = false,
  togglePanel, 
  maximizePanel,
  isCalculatorVisible 
}: StatsSidePanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Update panel height when minimized state changes
  useEffect(() => {
    if (panelRef.current) {
      const updatePanelSize = () => {
        if (isMinimized) {
          panelRef.current!.style.height = '60px';
          panelRef.current!.style.overflow = 'hidden';
        } else {
          panelRef.current!.style.height = 'auto';
          panelRef.current!.style.overflow = 'visible';
        }
      };
      
      updatePanelSize();
      
      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent('statsMinimized', { 
        detail: { minimized: isMinimized }
      }));
    }
  }, [isMinimized]);

  if (!isOpen || (!isCalculatorVisible && !isMinimized)) return null;

  return (
    <div 
      ref={panelRef}
      className={`fixed right-4 bottom-24 w-[800px] bg-white dark:bg-neutral-800 rounded-lg shadow-xl z-40 transition-all duration-300 ${!isCalculatorVisible && !isMinimized ? 'opacity-0' : 'opacity-100'}`}
      style={{ maxHeight: isMinimized ? '60px' : '80vh' }}
    >
      {!isMinimized && (
        <div className="p-4 border-b dark:border-neutral-700 flex justify-between items-center">
          <h3 className="font-medium text-lg dark:text-white">ROI Stats</h3>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              onClick={togglePanel} 
              size="icon" 
              className="h-8 w-8 rounded-full"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              onClick={togglePanel} 
              size="icon" 
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      <div className={`transition-all duration-300 ${isMinimized ? 'p-0' : 'p-4 overflow-y-auto'}`}>
        <StatsCards trends={trends} compact={isMinimized} onMaximize={maximizePanel} />
      </div>
    </div>
  );
};

export default StatsSidePanel;
