
import { useTheme } from "next-themes";

export const useNavLinkStyles = (scrolled: boolean) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const getLinkClasses = () => {
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
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
