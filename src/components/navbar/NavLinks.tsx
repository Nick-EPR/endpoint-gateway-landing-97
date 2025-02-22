
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavLinksProps {
  scrolled: boolean;
  onClose?: () => void;
}

const NavLinks = ({ scrolled, onClose }: NavLinksProps) => {
  const location = useLocation();
  const isITAMPage = location.pathname === '/what-is-itam';

  return (
    <>
      <Link 
        to="/security" 
        className={`${isITAMPage ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-neutral-600' : 'text-white')} hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        Security
      </Link>
      <Link 
        to="/mission" 
        className={`${isITAMPage ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-neutral-600' : 'text-white')} hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        Mission
      </Link>
      <Link 
        to="/contact" 
        className={`${isITAMPage ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-neutral-600' : 'text-white')} hover:text-primary transition-colors duration-300`}
        onClick={onClose}
      >
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
