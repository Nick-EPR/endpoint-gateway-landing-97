
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavbarProps } from "./types";
import Logo from "./Logo";
import ProductsDropdown from "./ProductsDropdown";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = ({ scrolled, onMouseEnter }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const isITAMPage = location.pathname === '/what-is-itam';

  return (
    <header 
      className="fixed top-0 w-full z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm' 
          : isITAMPage 
            ? 'bg-transparent'
            : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo scrolled={scrolled} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ProductsDropdown scrolled={scrolled || (isITAMPage && scrolled)} />
            <button 
              onClick={() => handleNavigation('features')} 
              className={`${scrolled || (isITAMPage && scrolled) ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Features
            </button>
            <NavLinks scrolled={scrolled || (isITAMPage && scrolled)} />
            <a 
              href="https://app.lifetimeepr.io"
              className="bg-[#93C851] text-white px-6 py-2 rounded-lg hover:bg-[#84b449] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${scrolled || (isITAMPage && scrolled) ? 'text-neutral-600' : 'text-white'} hover:text-primary`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          scrolled={scrolled}
          onClose={() => setIsMenuOpen(false)}
          onFeatureClick={() => handleNavigation('features')}
        />
      </div>
    </header>
  );
};

export default Navbar;
