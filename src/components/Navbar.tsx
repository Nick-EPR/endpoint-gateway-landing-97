
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Box } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  scrolled: boolean;
  onMouseEnter: () => void;
}

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

  return (
    <header 
      className="fixed top-0 w-full z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className={`transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="relative h-8 md:h-10 w-[120px] md:w-[150px]">
            <Link to="/">
              <img 
                src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png"
                alt="Lifetime EndPoint Resources"
                className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <img 
                src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png"
                alt="Lifetime EndPoint Resources"
                className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
                  scrolled ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('features')} 
              className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Features
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200 flex items-center gap-1`}>
                Products <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white min-w-[200px]">
                <DropdownMenuItem>
                  <Link to="/heliam" className="w-full flex items-center gap-2">
                    <img 
                      src="/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png"
                      alt="HeliAM Logo"
                      className="w-4 h-4 object-contain"
                    />
                    <span>HeliAM</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/toolbox" className="w-full flex items-center gap-2">
                    <Box className="w-4 h-4" />
                    <span>Toolbox</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="opacity-75 cursor-not-allowed flex items-center gap-2">
                  <Box className="w-4 h-4" />
                  <span>Luemin (Coming Soon)</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              to="/security" 
              className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Security
            </Link>
            <Link 
              to="/mission" 
              className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Mission
            </Link>
            <Link 
              to="/contact" 
              className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Contact
            </Link>
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
            className={`md:hidden p-2 ${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('features')} 
                className="text-neutral-600 hover:text-primary transition-colors duration-200 text-left py-2"
              >
                Features
              </button>
              <div className="flex flex-col space-y-2 pl-4">
                <Link 
                  to="/heliam" 
                  className="text-neutral-600 hover:text-primary transition-colors duration-200 py-2 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img 
                    src="/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png"
                    alt="HeliAM Logo"
                    className="w-4 h-4 object-contain"
                  />
                  <span>HeliAM</span>
                </Link>
                <Link 
                  to="/toolbox" 
                  className="text-neutral-600 hover:text-primary transition-colors duration-200 py-2 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Box className="w-4 h-4" />
                  <span>Toolbox</span>
                </Link>
                <span className="text-neutral-400 py-2 flex items-center gap-2">
                  <Box className="w-4 h-4" />
                  <span>Luemin (Coming Soon)</span>
                </span>
              </div>
              <Link 
                to="/security" 
                className="text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link 
                to="/mission" 
                className="text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Mission
              </Link>
              <Link 
                to="/contact" 
                className="text-neutral-600 hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://app.lifetimeepr.io"
                className="bg-[#93C851] text-white px-6 py-2 rounded-lg hover:bg-[#84b449] transition-colors duration-200 inline-block text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
