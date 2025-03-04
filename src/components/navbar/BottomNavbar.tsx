import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator, ArrowUp, Maximize2 } from "lucide-react";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 py-3 bg-black/10 backdrop-blur-sm dark:bg-black/30">
      <div className="container mx-auto flex justify-end items-center gap-3 px-4 sm:px-6 md:gap-6">
        {!isCalculatorVisible && !isCalculatorMinimized && (
          <Button
            onClick={onCalculatorClick}
            className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white animate-fade-in"
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
            className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white animate-fade-in"
            size="sm"
            aria-label="Maximize ROI Stats Panel"
          >
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="ml-1 sm:ml-2 text-xs sm:text-sm">ROI</span>
          </Button>
        )}

        <Button
          onClick={onChatClick}
          className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white"
          size="sm"
          aria-label="Open chat"
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm">Chat</span>
        </Button>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white"
            size="sm"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BottomNavbar;
