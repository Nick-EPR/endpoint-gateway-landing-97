
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowUp } from "lucide-react";

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
  
  // Animation states for scroll-to-top button
  const [shouldRenderScrollTop, setShouldRenderScrollTop] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  
  // Animation states for ROI button
  const [shouldRenderROI, setShouldRenderROI] = useState(false);
  const [isROIVisible, setIsROIVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll-to-top button fade in/out
  useEffect(() => {
    if (showScrollTop) {
      setShouldRenderScrollTop(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsScrollTopVisible(true));
      });
    } else {
      setIsScrollTopVisible(false);
      const timeout = setTimeout(() => setShouldRenderScrollTop(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [showScrollTop]);

  // Determine if ROI button should show
  const showROIButton = (!isCalculatorVisible && !isCalculatorMinimized) || isCalculatorMinimized;

  // Handle ROI button fade in/out
  useEffect(() => {
    if (showROIButton) {
      setShouldRenderROI(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsROIVisible(true));
      });
    } else {
      setIsROIVisible(false);
      const timeout = setTimeout(() => setShouldRenderROI(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [showROIButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleROIClick = () => {
    if (isCalculatorMinimized && onMaximizeCalculator) {
      onMaximizeCalculator();
    } else {
      onCalculatorClick();
    }
  };

  return (
    <>
      {shouldRenderROI && (
        <Button
          onClick={handleROIClick}
          className={`fixed bottom-2 right-16 z-50 bg-[#93C851] hover:bg-[#84b449] text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white transition-all duration-300 ease-out ${
            isROIVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          size="sm"
          aria-label={isCalculatorMinimized ? "Maximize ROI Stats Panel" : "Toggle ROI stats panel"}
        >
          <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm">ROI</span>
        </Button>
      )}

      {shouldRenderScrollTop && (
        <Button
          onClick={scrollToTop}
          className={`fixed bottom-2 right-2 z-50 bg-[#93C851] hover:bg-[#84b449] text-white rounded-full shadow-lg dark:bg-[#93C851] dark:hover:bg-[#84b449] dark:text-white h-10 w-10 transition-all duration-300 ease-out ${
            isScrollTopVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
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
