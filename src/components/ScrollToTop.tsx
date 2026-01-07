import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If there's a specific section to scroll to, let NavigationProgress handle it
    if (state?.scrollTo) {
      return;
    }
    
    // Otherwise, scroll to top
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;

