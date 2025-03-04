
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

  // Handle scroll to show/hide scroll-to-top button
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
      <div className="container mx-auto flex justify-end items-center gap-6">
        {/* ROI Calculator button - only shown when panel is not visible */}
        {!isCalculatorVisible && !isCalculatorMinimized && (
          <Button
            onClick={onCalculatorClick}
            className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white animate-fade-in"
            size="lg"
            aria-label="Toggle ROI stats panel"
          >
            <Calculator className="h-5 w-5" />
            <span className="ml-2">ROI</span>
          </Button>
        )}
        
        {/* Maximize button - only shown when stats panel is minimized */}
        {isCalculatorMinimized && onMaximizeCalculator && (
          <Button
            onClick={onMaximizeCalculator}
            className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white animate-fade-in"
            size="lg"
            aria-label="Maximize ROI Stats Panel"
          >
            <Calculator className="h-5 w-5" />
            <span className="ml-2">ROI</span>
          </Button>
        )}

        {/* Chat button */}
        <Button
          onClick={onChatClick}
          className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white"
          size="lg"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="ml-2">Chat</span>
        </Button>

        {/* Scroll to top button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="bg-[#93C851] hover:bg-[#84b449] transition-colors duration-200 text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white h-11 w-11 animate-fade-in"
            size="icon"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BottomNavbar;
