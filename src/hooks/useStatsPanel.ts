
import { useState, useEffect } from "react";

export function useStatsPanel(isCalculatorVisible: boolean) {
  const [isStatsPanelMinimized, setIsStatsPanelMinimized] = useState(false);

  // Reset the minimized state when calculator becomes visible
  useEffect(() => {
    if (isCalculatorVisible && isStatsPanelMinimized) {
      setIsStatsPanelMinimized(false);
    }
  }, [isCalculatorVisible, isStatsPanelMinimized]);

  // Listen for custom event when stats panel is minimized
  useEffect(() => {
    const handleStatsMinimized = (event: CustomEvent<{minimized: boolean}>) => {
      setIsStatsPanelMinimized(event.detail.minimized);
    };

    // Add type assertion to make TypeScript happy
    window.addEventListener('statsMinimized', handleStatsMinimized as EventListener);
    
    return () => {
      window.removeEventListener('statsMinimized', handleStatsMinimized as EventListener);
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
