
import { useEffect, useRef } from 'react';
import { TrendResults } from '@/utils/roi/types';
import { defaultTrends } from '@/utils/roi/trendCalculations';
import PanelHeader from './panel/PanelHeader';
import PanelContent from './panel/PanelContent';
import PanelContainer from './panel/PanelContainer';
import { useDraggablePanel } from './panel/useDraggablePanel';

interface StatsSidePanelProps {
  trends?: TrendResults;
  isOpen: boolean;
  isMinimized?: boolean;
  togglePanel: () => void;
  minimizePanel: () => void;
  maximizePanel: () => void;
  isCalculatorVisible: boolean;
}

const StatsSidePanel = ({ 
  trends = defaultTrends, 
  isOpen, 
  isMinimized = false,
  togglePanel, 
  minimizePanel,
  maximizePanel,
  isCalculatorVisible 
}: StatsSidePanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const {
    isMobile,
    mobileExpanded,
    position,
    isDragging,
    toggleMobileExpand,
    handleMouseDown,
    handleTouchStart
  } = useDraggablePanel();

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
    <PanelContainer
      ref={panelRef}
      isMobile={isMobile}
      isMinimized={isMinimized}
      position={position}
      isDragging={isDragging}
    >
      <PanelHeader
        isMobile={isMobile}
        mobileExpanded={mobileExpanded}
        toggleMobileExpand={toggleMobileExpand}
        minimizePanel={minimizePanel}
        togglePanel={togglePanel}
        handleMouseDown={handleMouseDown}
        handleTouchStart={handleTouchStart}
      />
      
      <PanelContent
        trends={trends}
        isMobile={isMobile}
        mobileExpanded={mobileExpanded}
        maximizePanel={maximizePanel}
      />
    </PanelContainer>
  );
};

export default StatsSidePanel;
