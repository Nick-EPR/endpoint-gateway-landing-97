
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLinksProps {
  scrolled: boolean;
  onClose?: () => void;
  forceLight?: boolean;
}

const NavLinks = ({ scrolled, onClose, forceLight }: NavLinksProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  
  // Use dark mode only when theme is dark, not based on page
  const isDark = theme === 'dark';

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    const baseClasses = 'transition-colors duration-200';
    
    // Special case for forceLight prop
    if (forceLight) {
      return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
    }
    
    if (scrolled) {
      if (isDark) {
        return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
      }
      return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`;
    }
    
    return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-white hover:text-primary'}`;
  };

  const getSolutionsLinkClasses = () => {
    const solutionsPages = ['/partnerships/movius'];
    const isActive = solutionsPages.includes(location.pathname);
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
    // Special case for forceLight prop
    if (forceLight) {
      return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
    }
    
    if (scrolled) {
      if (isDark) {
        return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
      }
      return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`;
    }
    
    return `${baseClasses} ${isActive ? 'text-primary font-medium' : 'text-white hover:text-primary'}`;
  };

  return (
    <>
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className={getSolutionsLinkClasses()}>
              <span>Solutions</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start"
            className="bg-white dark:bg-neutral-900 dark:border-neutral-800 min-w-[200px] z-50"
          >
            <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white dark:text-neutral-200 focus:text-neutral-900">
              <Link
                to="/partnerships/movius"
                className="flex items-center gap-2 w-full"
                onClick={onClose}
              >
                <img 
                  src="/lovable-uploads/451c6e0c-a782-43f8-99d3-0354cd584350.png" 
                  alt="Movius Logo" 
                  className="h-4 w-auto" 
                />
                <span>Movius Communications</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <button 
        onClick={onClose} 
        className={getFeaturesClasses()}
      >
        Features
      </button>

      <Link 
        to="/security" 
        className={getLinkClasses('/security')}
        onClick={onClose}
      >
        Security
      </Link>
      
      <Link 
        to="/mission" 
        className={getLinkClasses('/mission')}
        onClick={onClose}
      >
        Mission
      </Link>
      <Link 
        to="/contact" 
        className={getLinkClasses('/contact')}
        onClick={onClose}
      >
        Contact
      </Link>
    </>
  );
};

// Helper function for "Features" link class
function getFeaturesClasses() {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const isFeatureActive = location.pathname === '/' && location.hash === '#features';
  const baseClasses = 'transition-colors duration-200';
  
  if (location.pathname === '/what-is-itam' || location.pathname === '/status' || location.hash === '#features') {
    if (isDark) {
      return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
    }
    return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`;
  }
  
  return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-white hover:text-primary'}`;
}

export default NavLinks;
