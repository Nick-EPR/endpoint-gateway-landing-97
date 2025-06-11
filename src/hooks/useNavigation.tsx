
import { useState, useCallback } from "react";
import { createContext, useContext } from "react";
import { useStatsPanel } from "./useStatsPanel";

// Create a context to share navigation state across components
const NavigationContext = createContext<ReturnType<typeof useNavigationState> | undefined>(undefined);

// This is the actual hook implementation
function useNavigationState() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  
  // Integrate stats panel functionality
  const {
    isStatsPanelVisible,
    setIsStatsPanelVisible,
    isStatsPanelMinimized,
    setIsStatsPanelMinimized,
    toggleStatsPanel,
    handleMaximizeCalculator
  } = useStatsPanel(isCalculatorOpen);

  const handleChatClick = useCallback(() => {
    setIsChatOpen(prev => !prev);
  }, []);

  const handleCalculatorClick = useCallback(() => {
    // Scroll to ROI section if calculator is opened
    const roiSection = document.getElementById('roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
      setIsCalculatorOpen(true);
    }
  }, []);

  return {
    isChatOpen,
    setIsChatOpen,
    isCalculatorOpen,
    setIsCalculatorOpen,
    isCalculatorVisible: isCalculatorOpen, // Alias for backward compatibility
    isStatsPanelVisible,
    setIsStatsPanelVisible,
    isStatsPanelMinimized,
    setIsStatsPanelMinimized,
    handleChatClick,
    handleCalculatorClick,
    handleMaximizeCalculator,
    toggleStatsPanel
  };
}

// Context provider
export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const navigationState = useNavigationState();
  
  return (
    <NavigationContext.Provider value={navigationState}>
      {children}
    </NavigationContext.Provider>
  );
};

// This is the hook that components will use
export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
