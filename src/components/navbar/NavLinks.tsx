
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

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

  return (
    <>
      <Link 
        to="/security" 
        className={getLinkClasses('/security')}
        onClick={onClose}
      >
        Security
      </Link>
      <Link 
        to="/partnerships/movius" 
        className={getLinkClasses('/partnerships/movius')}
        onClick={onClose}
      >
        Partnerships
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

export default NavLinks;
