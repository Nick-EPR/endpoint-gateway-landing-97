
import { X, Minimize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StatsCards from '../StatsCards';
import { TrendResults } from '@/utils/roi/types';

interface Position {
  x: number;
  y: number;
}

interface DesktopStatsPanelProps {
  trends: TrendResults;
  isOpen: boolean;
  isMinimized: boolean;
  position: Position;
  isDragging: boolean;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  togglePanel: () => void;
  minimizePanel: () => void;
  maximizePanel: () => void;
}

const DesktopStatsPanel = ({
  trends,
  isOpen,
  isMinimized,
  position,
  isDragging,
  handleMouseDown,
  handleTouchStart,
  togglePanel,
  minimizePanel,
  maximizePanel,
}: DesktopStatsPanelProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed rounded-lg shadow-xl z-[1100] bg-white dark:bg-neutral-800 transition-all duration-300 ${
        isMinimized
          ? 'opacity-0 scale-95 pointer-events-none transform translate-y-10 invisible'
          : 'opacity-100 scale-100 visible'
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: '320px',
        cursor: isDragging ? 'grabbing' : 'auto',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div 
        className="p-3 border-b dark:border-neutral-700 flex justify-between items-center cursor-grab"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-base sm:text-lg dark:text-white">ROI Stats</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            onClick={minimizePanel}
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            onClick={togglePanel}
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4 max-h-[70vh] overflow-y-auto">
        <StatsCards trends={trends} onMaximize={maximizePanel} />
      </div>
    </div>
  );
};

export default DesktopStatsPanel;
