
import { useState } from 'react';
import { X, ChevronDown, ChevronUp, Minimize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import StatsCards from '../StatsCards';
import { TrendResults } from '@/utils/roi/types';

interface MobileStatsPanelProps {
  trends: TrendResults;
  isOpen: boolean;
  isMinimized: boolean;
  togglePanel: () => void;
  minimizePanel: () => void;
  maximizePanel: () => void;
}

const MobileStatsPanel = ({
  trends,
  isOpen,
  isMinimized,
  togglePanel,
  minimizePanel,
  maximizePanel,
}: MobileStatsPanelProps) => {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const toggleMobileExpand = () => {
    setMobileExpanded(!mobileExpanded);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 w-full rounded-b-none rounded-t-lg shadow-xl z-[1100] bg-white dark:bg-neutral-800 transition-all duration-300 ${
        isMinimized
          ? 'opacity-0 scale-95 pointer-events-none transform translate-y-10 invisible'
          : 'opacity-100 scale-100 visible'
      }`}
      style={{
        maxHeight: mobileExpanded ? '80vh' : '140px',
        transition: 'max-height 0.3s ease-in-out, opacity 0.3s, transform 0.3s, visibility 0.3s',
      }}
    >
      <div className="p-3 border-b dark:border-neutral-700 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-base sm:text-lg dark:text-white">ROI Stats</h3>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            onClick={toggleMobileExpand}
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            {mobileExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>
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

      <div
        className={`p-3 ${mobileExpanded ? 'p-4' : 'pb-1'} overflow-y-auto ${
          mobileExpanded ? 'max-h-[calc(80vh-60px)]' : 'max-h-[85px]'
        }`}
      >
        <StatsCards
          trends={trends}
          compact={!mobileExpanded}
          onMaximize={mobileExpanded ? undefined : maximizePanel}
        />
      </div>
    </div>
  );
};

export default MobileStatsPanel;
