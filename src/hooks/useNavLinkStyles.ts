
import { useTheme } from "next-themes";
import { useLocation } from "react-router-dom";

export const useNavLinkStyles = (scrolled: boolean, forceMoviusStyle?: boolean) => {
  const { theme } = useTheme();
  const location = useLocation();
  
  // Check if we're on the Movius partnership page 
  const isMoviusPage = location.pathname === '/partnerships/movius';
  
  // Use the user's theme preference, don't force dark mode
  const isDark = theme === 'dark';
  
  const getLinkClasses = () => {
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
    // For Movius page with light background, need better visibility
    if (isMoviusPage && !scrolled && theme === 'light') {
      return `${baseClasses} text-neutral-800 hover:text-primary`;
    }
    
    // For special case when explicitly requesting Movius styling
    if (forceMoviusStyle) {
      return `${baseClasses} text-neutral-200 hover:text-white`;
    }
    
    if (scrolled) {
      if (isDark) {
        return `${baseClasses} text-neutral-200 hover:text-white`;
      }
      return `${baseClasses} text-neutral-600 hover:text-primary`;
    }
    
    return `${baseClasses} text-white hover:text-primary`;
  };

  return { getLinkClasses, isDark };
};
