import { useLocation } from "react-router-dom";

export const useNavLinkStyles = (scrolled: boolean, forceMoviusStyle?: boolean) => {
  const location = useLocation();
  
  // Check if we're on pages with white backgrounds
  const isMoviusPage = location.pathname === '/partnerships/movius';
  const isPCaaSPage = location.pathname === '/pcaas';
  const isHomePage = location.pathname === '/';
  
  const getLinkClasses = () => {
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
    // For special case when explicitly requesting Movius styling
    if (forceMoviusStyle) {
      return `${baseClasses} text-neutral-200 hover:text-white`;
    }
    
    // For pages with white backgrounds - use Tailwind dark: variants to prevent flash
    if (scrolled || isHomePage || isMoviusPage || isPCaaSPage) {
      return `${baseClasses} text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-white`;
    }
    
    return `${baseClasses} text-white hover:text-primary`;
  };

  return { getLinkClasses };
};
