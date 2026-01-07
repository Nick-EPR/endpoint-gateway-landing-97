import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state, hash } = useLocation();

  useEffect(() => {
    // If there's a specific section to scroll to via state, let NavigationProgress handle it
    if (state?.scrollTo) {
      return;
    }
    
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      setTimeout(() => {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    
    // Otherwise, scroll to top
    window.scrollTo(0, 0);
  }, [pathname, state, hash]);

  return null;
};

export default ScrollToTop;

