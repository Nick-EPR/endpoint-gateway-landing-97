
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  // This useEffect ensures components using theme are only rendered after mount
  // to prevent hydration mismatch between server and client
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check if we're on the homepage and if the URL contains #features
    const isOnFeatures = location.pathname === '/' && location.hash === '#features';
    setIsFeatureActive(isOnFeatures);
  }, [location]);

  // Check if we're on specific pages
  const isMoviusPage = location.pathname === '/partnerships/movius';
  const isPCaaSPage = location.pathname === '/pcaas';
  const isNewsPage = location.pathname.startsWith('/news');
  const isANSPage = location.pathname === '/ans';
  
  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL with hash
        window.history.pushState(null, '', `#${sectionId}`);
        setIsFeatureActive(sectionId === 'features');
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  // Always treat specific pages as having a white background, regardless of scroll position
  // Include homepage, Movius, PCaaS, and news pages as having a white background (homepage has PCaaS banner at top)
  // ANS page has dark video background so needs transparent navbar with light text (unless scrolled)
  const isWhiteBackground = scrolled || location.pathname === '/' || location.pathname === '/what-is-itam' || location.pathname === '/status' || isMoviusPage || isPCaaSPage || isNewsPage;
  // Only access theme after component has mounted to prevent hydration mismatch
  const isDark = mounted ? theme === 'dark' : false;

  const getFeaturesClasses = () => {
    const baseClasses = 'transition-colors duration-200';
    
    if (isWhiteBackground) {
      if (isDark) {
        return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-200 hover:text-white'}`;
      }
      return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-neutral-600 hover:text-primary'}`;
    }
    
    return `${baseClasses} ${isFeatureActive ? 'text-primary font-medium' : 'text-white hover:text-primary'}`;
  };

  // For Movius and PCaaS pages, use an appropriate background based on theme
  // Using Tailwind dark: variants to prevent flash on initial load
  const navbarBgClass = isWhiteBackground 
    ? 'bg-white dark:bg-[#020817] shadow-sm dark:shadow-none dark:border-b dark:border-[#1e293b]' 
    : 'bg-transparent';

  return (
    <header 
      className="fixed top-0 w-full z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className={`transition-all duration-300 ${navbarBgClass}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo scrolled={isWhiteBackground} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ProductsDropdown scrolled={isWhiteBackground} />
            <NavLinks scrolled={isWhiteBackground} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`${isWhiteBackground ? '' : 'text-white'} hover:bg-transparent`}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <a 
              href="https://lifetimeepr.app"
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
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`${isWhiteBackground ? '' : 'text-white'} hover:bg-transparent`}
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${
                isWhiteBackground
                  ? 'text-neutral-600 dark:text-white'
                  : 'text-white'
              } hover:text-primary`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
