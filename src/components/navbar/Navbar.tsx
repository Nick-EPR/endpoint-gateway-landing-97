
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

  const shouldShowDark = scrolled;
  const showLightContent = !shouldShowDark;

  return (
    <header 
      className="fixed top-0 w-full z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className={`transition-all duration-300 ${
        shouldShowDark ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo scrolled={!showLightContent} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ProductsDropdown scrolled={!showLightContent} />
            <button 
              onClick={() => handleNavigation('features')} 
              className={`${showLightContent ? 'text-white' : 'text-black'} hover:text-primary transition-colors duration-200`}
            >
              Features
            </button>
            <NavLinks scrolled={!showLightContent} />
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
            className={`md:hidden p-2 ${showLightContent ? 'text-white' : 'text-black'} hover:text-primary`}
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
