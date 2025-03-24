
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface NavLinksProps {
  scrolled: boolean;
  onClose?: () => void;
}

const NavLinks = ({ scrolled, onClose }: NavLinksProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    const baseClasses = 'transition-colors duration-200';
    
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
      <Link 
        to="/security" 
        className={getLinkClasses('/security')}
        onClick={onClose}
      >
        Security
      </Link>

      <div className="relative flex items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className={getSolutionsLinkClasses()}>Solutions</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Our solutions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button 
              className={`${getSolutionsLinkClasses()} p-1`}
              aria-label="Solutions dropdown"
            >
              <ChevronDown size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="bg-white dark:bg-neutral-900 dark:border-neutral-800 min-w-[200px] z-50"
          >
            <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white dark:text-neutral-200 focus:text-neutral-900">
              <Link
                to="/partnerships/movius"
                className="flex items-center gap-2 w-full"
                onClick={onClose}
              >
                <span>Movius Communications</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
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

export default NavLinks;
