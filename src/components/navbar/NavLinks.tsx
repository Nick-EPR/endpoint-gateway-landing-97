
import { Link } from "react-router-dom";

interface NavLinksProps {
  scrolled: boolean;
  onClose?: () => void;
}

const NavLinks = ({ scrolled, onClose }: NavLinksProps) => {
  return (
    <>
      <Link 
        to="/security" 
        className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        Security
      </Link>
      <Link 
        to="/mission" 
        className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        Mission
      </Link>
      <Link 
        to="/contact" 
        className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
