
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useDraggablePanel } from './hooks/useDraggablePanel';
import MobileStatsPanel from './mobile/MobileStatsPanel';
import DesktopStatsPanel from './desktop/DesktopStatsPanel';
import { TrendResults } from '@/utils/roi/types';
import { defaultTrends } from '@/utils/roi/trendCalculations';

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
  trends,
  isOpen,
  isMinimized = false,
  togglePanel,
  minimizePanel,
  maximizePanel,
  isCalculatorVisible,
}: StatsSidePanelProps) => {
  // Use provided trends or use defaultTrends
  const validTrends = trends || defaultTrends;

  const panelRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { position, isDragging, handleMouseDown, handleTouchStart } = useDraggablePanel(isMobile);

  // Initialize isMinimized based on the prop
  useEffect(() => {
    // Dispatch custom event to notify other components
    window.dispatchEvent(
      new CustomEvent('statsMinimized', {
        detail: { minimized: isMinimized },
      })
    );
  }, [isMinimized]);

  // If panel is closed, return null
  if (!isOpen) return null;

  return isMobile ? (
    <MobileStatsPanel
      trends={validTrends}
      isOpen={isOpen}
      isMinimized={isMinimized}
      togglePanel={togglePanel}
      minimizePanel={minimizePanel}
      maximizePanel={maximizePanel}
    />
  ) : (
    <DesktopStatsPanel
      trends={validTrends}
      isOpen={isOpen}
      isMinimized={isMinimized}
      position={position}
      isDragging={isDragging}
      handleMouseDown={handleMouseDown}
      handleTouchStart={handleTouchStart}
      togglePanel={togglePanel}
      minimizePanel={minimizePanel}
      maximizePanel={maximizePanel}
    />
  );
};

export default StatsSidePanel;
