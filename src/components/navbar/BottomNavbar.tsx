
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator, ArrowUp } from "lucide-react";

interface BottomNavbarProps {
  onChatClick: () => void;
  onCalculatorClick: () => void;
  isCalculatorMinimized?: boolean;
  onMaximizeCalculator?: () => void;
  isCalculatorVisible?: boolean;
}

const BottomNavbar = ({ 
  onChatClick, 
  onCalculatorClick, 
  isCalculatorMinimized = false, 
  onMaximizeCalculator,
  isCalculatorVisible = true
}: BottomNavbarProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!isCalculatorVisible && !isCalculatorMinimized && (
        <Button
          onClick={onCalculatorClick}
          className="fixed bottom-2 right-16 z-50 bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white animate-fade-in"
          size="sm"
          aria-label="Toggle ROI stats panel"
        >
          <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm">ROI</span>
        </Button>
      )}
      
      {isCalculatorMinimized && onMaximizeCalculator && (
        <Button
          onClick={onMaximizeCalculator}
          className="fixed bottom-2 right-16 z-50 bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white animate-fade-in"
          size="sm"
          aria-label="Maximize ROI Stats Panel"
        >
          <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm">ROI</span>
        </Button>
      )}

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-2 right-2 z-50 bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white h-10 w-10"
          size="icon"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default BottomNavbar;
