
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
    // Dispatch event to ensure all components are in sync
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: false }
    }));
  };

  return { 
    isStatsPanelMinimized, 
    setIsStatsPanelMinimized,
    handleMaximizeCalculator 
  };
}
