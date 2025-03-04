
import { useState, useCallback } from "react";
import { createContext, useContext } from "react";

// Create a context to share navigation state across components
const NavigationContext = createContext<ReturnType<typeof useNavigationState> | undefined>(undefined);

// This is the actual hook implementation
function useNavigationState() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

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
    handleChatClick,
    handleCalculatorClick
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
    // Create singleton instance if no provider is found
    // This behavior maintains the existing code functionality
    // while still enabling shared state
    return useNavigationState();
  }
  return context;
}
