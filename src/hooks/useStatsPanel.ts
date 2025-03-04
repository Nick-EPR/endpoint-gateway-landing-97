
import { useState, useEffect } from "react";

export function useStatsPanel(isCalculatorVisible: boolean) {
  const [isStatsPanelVisible, setIsStatsPanelVisible] = useState(true);
  const [isStatsPanelMinimized, setIsStatsPanelMinimized] = useState(false);

  // Reset the minimized state when calculator becomes visible
  useEffect(() => {
    if (isCalculatorVisible) {
      setIsStatsPanelMinimized(false);
    }
  }, [isCalculatorVisible]);

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

  const toggleStatsPanel = () => {
    setIsStatsPanelVisible(!isStatsPanelVisible);
  };

  const handleMaximizeCalculator = () => {
    setIsStatsPanelMinimized(false);
    
    // Dispatch event to ensure all components are in sync
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: false }
    }));
    
    // Add scrolling to ROI calculator section if needed
    const roiSection = document.getElementById('roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { 
    isStatsPanelVisible,
    setIsStatsPanelVisible,
    isStatsPanelMinimized, 
    setIsStatsPanelMinimized,
    toggleStatsPanel,
    handleMaximizeCalculator 
  };
}
