import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useUnreadNews } from "@/hooks/useUnreadNews";

interface NavLinksProps {
  scrolled: boolean;
  onClose?: () => void;
  forceLight?: boolean;
}

const NavLinks = ({ scrolled, onClose, forceLight }: NavLinksProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const { data: unreadCount = 0 } = useUnreadNews();
  
  const isDark = theme === 'dark';

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    const baseClasses = 'transition-colors duration-200';
    
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
    const solutionsPages = ['/partnerships/movius', '/pcaas'];
    const isActive = solutionsPages.includes(location.pathname);
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
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

  // Check if Features is active (on homepage with #features hash)
  const isFeatureActive = (location.pathname === '/' && location.hash === '#features') || location.hash === '#features';
  
  // Use the same style logic for features as other links
  const getFeaturesClasses = () => {
    const baseClasses = 'transition-colors duration-200';
    
    if (forceLight) {
      return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
    }
    
    if (scrolled) {
      if (isDark) {
        return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
      }
      return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`;
    }
    
    return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-white hover:text-primary'}`;
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
                <span>Communication</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white dark:text-neutral-200 focus:text-neutral-900">
              <Link
                to="/pcaas"
                className="flex items-center gap-2 w-full"
                onClick={onClose}
              >
                <span>PCaaS</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <a 
        href="/#features" 
        className={getFeaturesClasses()}
        onClick={(e) => {
          e.preventDefault();
          if (location.pathname !== '/') {
            window.location.href = '/#features';
          } else {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            // Update URL with hash
            window.history.pushState(null, '', `#features`);
          }
          if (onClose) onClose();
        }}
      >
        Features
      </a>

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
        to="/news" 
        className={`${getLinkClasses('/news')} relative inline-flex items-center gap-1.5`}
        onClick={onClose}
      >
        News
        {unreadCount > 0 && (
          <Badge 
            variant="destructive" 
            className="h-5 min-w-5 px-1 text-xs animate-pulse"
          >
            {unreadCount}
          </Badge>
        )}
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

export default NavLinks;
