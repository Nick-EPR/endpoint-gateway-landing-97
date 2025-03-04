
import { useState, useEffect } from "react";

export function useStatsPanel(isCalculatorVisible: boolean) {
  const [isStatsPanelMinimized, setIsStatsPanelMinimized] = useState(false);

  // Reset the minimized state when calculator becomes visible
  useEffect(() => {
    if (isCalculatorVisible && isStatsPanelMinimized) {
      setIsStatsPanelMinimized(false);
    }
  }, [isCalculatorVisible, isStatsPanelMinimized]);

  // Find EventEmitter when ROI component is updated for minimized state
  useEffect(() => {
    const handleStatsMinimized = (event: CustomEvent) => {
      setIsStatsPanelMinimized(event.detail.minimized);
    };

    window.addEventListener('statsMinimized' as any, handleStatsMinimized);
    
    return () => {
      window.removeEventListener('statsMinimized' as any, handleStatsMinimized);
    };
  }, []);

  const handleMaximizeCalculator = () => {
    setIsStatsPanelMinimized(false);
  };

  return { 
    isStatsPanelMinimized, 
    setIsStatsPanelMinimized,
    handleMaximizeCalculator 
  };
}
