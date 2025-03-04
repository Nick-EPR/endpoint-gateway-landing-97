
import { useState } from "react";

export function useNavigation() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleChatClick = () => {
    setIsChatOpen(prev => !prev);
  };

  const handleCalculatorClick = () => {
    // Scroll to ROI section if calculator is opened
    const roiSection = document.getElementById('roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
      setIsCalculatorOpen(true);
    }
  };

  return {
    isChatOpen,
    setIsChatOpen,
    isCalculatorOpen,
    setIsCalculatorOpen,
    handleChatClick,
    handleCalculatorClick
  };
}
