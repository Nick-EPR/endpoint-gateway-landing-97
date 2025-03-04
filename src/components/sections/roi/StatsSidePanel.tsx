
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

  // Update panel visibility when minimized state changes
  useEffect(() => {
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: isMinimized }
    }));
  }, [isMinimized]);

  // If panel is closed, return null
  if (!isOpen) return null;
  
  // If panel is minimized, return null but still dispatch the event
  if (isMinimized) return null;

  return (
    <div 
      ref={panelRef}
      className="fixed right-4 bottom-24 w-[800px] bg-white dark:bg-neutral-800 rounded-lg shadow-xl z-40 transition-all duration-300"
      style={{ maxHeight: '80vh' }}
    >
      <div className="p-4 border-b dark:border-neutral-700 flex justify-between items-center">
        <h3 className="font-medium text-lg dark:text-white">ROI Stats</h3>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            onClick={minimizePanel} 
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
      
      <div className="p-4 overflow-y-auto">
        <StatsCards trends={trends} compact={false} onMaximize={maximizePanel} />
      </div>
    </div>
  );
};

export default StatsSidePanel;
