
import { Link } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";
import NavLinks from "./NavLinks";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useUnreadNews } from "@/hooks/useUnreadNews";

interface MobileMenuProps {
  isOpen: boolean;
  scrolled: boolean;
  onClose: () => void;
  onFeatureClick: () => void;
}

const MobileMenu = ({ isOpen, scrolled, onClose, onFeatureClick }: MobileMenuProps) => {
  const [showSolutions, setShowSolutions] = useState(false);
  const location = useLocation();
  const { data: unreadCount = 0 } = useUnreadNews();

  // Check if we're currently on the features section
  const isFeatureActive = location.pathname === '/' && location.hash === '#features';

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg dark:shadow-black/30">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
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
                to="/core-platform" 
                className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 block py-1"
                onClick={onClose}
              >
                Core Platform
              </Link>
              <Link 
                to="/ans" 
                className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 block py-1"
                onClick={onClose}
              >
                ANS
              </Link>
              <Link 
                to="/partnerships/movius" 
                className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 block py-1"
                onClick={onClose}
              >
                Communication
              </Link>
              <Link 
                to="/pcaas" 
                className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 block py-1"
                onClick={onClose}
              >
                PCaaS
              </Link>
            </div>
          )}
        </div>
        
        <a
          href="/#features"
          className={`text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 text-left py-2 ${isFeatureActive ? 'text-primary font-medium' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            onFeatureClick();
            onClose();
          }}
        >
          Features
        </a>
        
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
          to="/news" 
          className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200 relative inline-flex items-center gap-1.5"
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
          className="text-neutral-600 dark:text-neutral-200 hover:text-primary dark:hover:text-primary transition-colors duration-200"
          onClick={onClose}
        >
          Contact
        </Link>
        
        <a 
          href="https://lifetimeepr.app"
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
