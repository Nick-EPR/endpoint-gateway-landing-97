
import { useTheme } from "next-themes";
import { useLocation } from "react-router-dom";

export const useNavLinkStyles = (scrolled: boolean, forceMoviusStyle?: boolean) => {
  const { theme } = useTheme();
  const location = useLocation();
  
  // Check if we're on the Movius partnership page 
  const isMoviusPage = location.pathname === '/partnerships/movius';
  
  // Force dark mode on Movius page only when in dark mode or when specifically requested
  const isDark = theme === 'dark' || (isMoviusPage && theme === 'dark') || forceMoviusStyle;
  
  const getLinkClasses = () => {
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
    // For Movius page in dark mode, use light text regardless of scroll state
    if ((isMoviusPage && theme === 'dark') || forceMoviusStyle) {
      return `${baseClasses} text-neutral-200 hover:text-white`;
    }
    
    if (scrolled) {
      if (isDark) {
        return `${baseClasses} text-neutral-200 hover:text-white`;
      }
      return `${baseClasses} text-neutral-600 hover:text-primary`;
    }
    
    // For Movius page in light mode without scroll, make text dark for better visibility
    if (isMoviusPage && theme === 'light') {
      return `${baseClasses} text-neutral-800 hover:text-primary`;
    }
    
    return `${baseClasses} text-white hover:text-primary`;
  };

  return { getLinkClasses, isDark };
};
