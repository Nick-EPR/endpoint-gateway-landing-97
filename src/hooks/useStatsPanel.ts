
import { useState, useEffect } from "react";

export function useStatsPanel(isCalculatorVisible: boolean) {
  const [isStatsPanelVisible, setIsStatsPanelVisible] = useState(true);
  const [isStatsPanelMinimized, setIsStatsPanelMinimized] = useState(true); // Set to true by default

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

  const toggleStatsPanel = (minimize?: boolean) => {
    // Always ensure the panel is visible when toggling
    setIsStatsPanelVisible(true);
    
    if (minimize !== undefined) {
      // If minimize is specified, set the minimize state directly
      setIsStatsPanelMinimized(minimize);
      
      // Dispatch event to ensure all components are in sync
      window.dispatchEvent(new CustomEvent('statsMinimized', { 
        detail: { minimized: minimize }
      }));
    } else {
      // Toggle minimized state
      const newMinimizedState = !isStatsPanelMinimized;
      setIsStatsPanelMinimized(newMinimizedState);
      
      // Dispatch event to ensure all components are in sync
      window.dispatchEvent(new CustomEvent('statsMinimized', { 
        detail: { minimized: newMinimizedState }
      }));
    }
    
    // Log when panel state changes
    console.log("Stats panel toggled:", { 
      isStatsPanelVisible: true, 
      isStatsPanelMinimized: minimize !== undefined ? minimize : !isStatsPanelMinimized 
    });
  };

  const handleMaximizeCalculator = () => {
    setIsStatsPanelMinimized(false);
    setIsStatsPanelVisible(true);
    
    // Dispatch event to ensure all components are in sync
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: false }
    }));
    
    // Add scrolling to ROI calculator section if needed
    const roiSection = document.getElementById('roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Log when maximizing calculator
    console.log("Calculator maximized, panel state:", {
      isStatsPanelVisible: true,
      isStatsPanelMinimized: false
    });
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
