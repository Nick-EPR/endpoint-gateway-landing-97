
import { Link } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  scrolled: boolean;
  onClose: () => void;
  onFeatureClick: () => void;
}

const MobileMenu = ({ isOpen, scrolled, onClose, onFeatureClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <ProductsDropdown scrolled={scrolled} isMobile onItemClick={onClose} />
        <Link 
          to="/pricing" 
          className="text-neutral-600 hover:text-primary transition-colors duration-200 text-left py-2"
          onClick={onClose}
        >
          Pricing
        </Link>
        <button 
          onClick={onFeatureClick} 
          className="text-neutral-600 hover:text-primary transition-colors duration-200 text-left py-2"
        >
          Features
        </button>
        <div className="flex flex-col space-y-4">
          <NavLinks scrolled={true} onClose={onClose} />
        </div>
        <a 
          href="https://app.lifetimeepr.io"
          className="bg-[#93C851] text-white px-6 py-2 rounded-lg hover:bg-[#84b449] transition-colors duration-200 inline-block text-center"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
        >
          Login
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
