
import { Minimize2, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Move from './Move';

interface PanelHeaderProps {
  isMobile: boolean;
  mobileExpanded: boolean;
  toggleMobileExpand: () => void;
  minimizePanel: () => void;
  togglePanel: () => void;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
}

const PanelHeader = ({
  isMobile,
  mobileExpanded,
  toggleMobileExpand,
  minimizePanel,
  togglePanel,
  handleMouseDown,
  handleTouchStart
}: PanelHeaderProps) => {
  return (
    <div 
      className={`p-3 border-b dark:border-neutral-700 flex justify-between items-center ${!isMobile && 'cursor-grab'}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="flex items-center gap-2">
        {!isMobile && <Move />}
        <h3 className="font-medium text-base sm:text-lg dark:text-white">ROI Stats</h3>
      </div>
      <div className="flex gap-2">
        {isMobile && (
          <Button 
            variant="ghost" 
            onClick={toggleMobileExpand} 
            size="icon" 
            className="h-8 w-8 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            {mobileExpanded ? 
              <ChevronDown className="h-4 w-4" /> : 
              <ChevronUp className="h-4 w-4" />
            }
          </Button>
        )}
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
  );
};

export default PanelHeader;
