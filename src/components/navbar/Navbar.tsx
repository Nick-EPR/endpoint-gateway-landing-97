
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { NavbarProps } from "./types";
import Logo from "./Logo";
import ProductsDropdown from "./ProductsDropdown";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = ({ scrolled, onMouseEnter }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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

  const isWhiteBackground = scrolled || location.pathname === '/what-is-itam';

  return (
    <header 
      className="fixed top-0 w-full z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className={`transition-all duration-300 ${
        isWhiteBackground ? 'bg-white dark:bg-neutral-900 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo scrolled={isWhiteBackground} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ProductsDropdown scrolled={isWhiteBackground} />
            <button 
              onClick={() => handleNavigation('features')} 
              className={`${isWhiteBackground ? 'text-neutral-600 dark:text-neutral-200' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Features
            </button>
            <NavLinks scrolled={isWhiteBackground} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${isWhiteBackground ? '' : 'text-white'} hover:bg-transparent`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
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
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`${isWhiteBackground ? '' : 'text-white'} hover:bg-transparent`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isWhiteBackground ? 'text-neutral-600 dark:text-white' : 'text-white'} hover:text-primary`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
