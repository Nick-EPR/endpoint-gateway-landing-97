
import { useState, useEffect } from "react";

export function useStatsPanel(isCalculatorVisible: boolean) {
  // Panel starts hidden by default
  const [isStatsPanelVisible, setIsStatsPanelVisible] = useState(false);
  const [isStatsPanelMinimized, setIsStatsPanelMinimized] = useState(true);

  // Show panel when calculator section becomes visible
  useEffect(() => {
    console.log("Calculator visibility changed:", isCalculatorVisible);
    if (isCalculatorVisible) {
      setIsStatsPanelVisible(true);
      setIsStatsPanelMinimized(false);
      
      // Dispatch event to sync all components
      window.dispatchEvent(new CustomEvent('statsMinimized', { 
        detail: { minimized: false }
      }));
      
      console.log("Auto-showing stats panel because calculator is visible");
    }
  }, [isCalculatorVisible]);

  // Listen for custom event when stats panel is minimized
  useEffect(() => {
    const handleStatsMinimized = (event: CustomEvent<{minimized: boolean}>) => {
      console.log("Stats minimized event received:", event.detail);
      setIsStatsPanelMinimized(event.detail.minimized);
    };

    window.addEventListener('statsMinimized', handleStatsMinimized as EventListener);
    
    return () => {
      window.removeEventListener('statsMinimized', handleStatsMinimized as EventListener);
    };
  }, []);

  const toggleStatsPanel = (minimize?: boolean) => {
    if (minimize !== undefined) {
      // If minimize is specified, set that state directly
      setIsStatsPanelMinimized(minimize);
      
      // Always make panel visible when toggling
      setIsStatsPanelVisible(true);
      
      window.dispatchEvent(new CustomEvent('statsMinimized', { 
        detail: { minimized: minimize }
      }));
    } else {
      // Toggle minimized state
      const newMinimizedState = !isStatsPanelMinimized;
      setIsStatsPanelMinimized(newMinimizedState);
      
      // Always make panel visible when toggling
      setIsStatsPanelVisible(true);
      
      window.dispatchEvent(new CustomEvent('statsMinimized', { 
        detail: { minimized: newMinimizedState }
      }));
    }
    
    console.log("Stats panel toggled:", { 
      isStatsPanelVisible: true, 
      isStatsPanelMinimized: minimize !== undefined ? minimize : !isStatsPanelMinimized 
    });
  };

  const handleMaximizeCalculator = () => {
    setIsStatsPanelMinimized(false);
    setIsStatsPanelVisible(true);
    
    window.dispatchEvent(new CustomEvent('statsMinimized', { 
      detail: { minimized: false }
    }));
    
    // Add scrolling to ROI calculator section if needed
    const roiSection = document.getElementById('roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
    }
    
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
