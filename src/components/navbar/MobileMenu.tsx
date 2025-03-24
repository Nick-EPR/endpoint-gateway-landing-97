
import { Link } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";
import NavLinks from "./NavLinks";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  scrolled: boolean;
  onClose: () => void;
  onFeatureClick: () => void;
}

const MobileMenu = ({ isOpen, scrolled, onClose, onFeatureClick }: MobileMenuProps) => {
  const [showSolutions, setShowSolutions] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg dark:shadow-black/30">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        <ProductsDropdown scrolled={scrolled} isMobile onItemClick={onClose} />
        
        <button 
          onClick={onFeatureClick} 
          className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 text-left py-2"
        >
          Features
        </button>
        
        <div className="space-y-2">
          <button 
            onClick={() => setShowSolutions(!showSolutions)}
            className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center justify-between w-full"
          >
            <span>Solutions</span>
            {showSolutions ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {showSolutions && (
            <div className="pl-4 space-y-2 border-l border-neutral-200 dark:border-neutral-700">
              <Link 
                to="/partnerships/movius" 
                className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 block py-1"
                onClick={onClose}
              >
                Movius Communications
              </Link>
            </div>
          )}
        </div>
        
        <Link 
          to="/security" 
          className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          onClick={onClose}
        >
          Security
        </Link>
        
        <Link 
          to="/mission" 
          className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          onClick={onClose}
        >
          Mission
        </Link>
        <Link 
          to="/contact" 
          className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          onClick={onClose}
        >
          Contact
        </Link>
        
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
