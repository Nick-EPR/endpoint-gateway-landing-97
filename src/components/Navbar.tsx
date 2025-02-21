
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-provider";
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
        scrolled ? 'bg-background dark:bg-background' : 'bg-transparent'
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
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Features
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-200 flex items-center gap-1`}>
                Products <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background">
                <DropdownMenuItem>
                  <Link to="/heliam" className="w-full">HeliAM</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/toolbox" className="w-full">Toolbox</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="opacity-75 cursor-not-allowed">
                  Luemin (Coming Soon)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              to="/security" 
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Security
            </Link>
            <Link 
              to="/contact" 
              className={`${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors duration-200`}
            >
              Contact
            </Link>
            <ThemeToggle />
            <a 
              href="https://app.lifetimeepr.io"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${scrolled ? 'text-foreground' : 'text-white'} hover:text-primary`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('features')} 
                className="text-foreground hover:text-primary transition-colors duration-200 text-left py-2"
              >
                Features
              </button>
              <div className="flex flex-col space-y-2 pl-4">
                <Link 
                  to="/heliam" 
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HeliAM
                </Link>
                <Link 
                  to="/toolbox" 
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Toolbox
                </Link>
                <span className="text-muted-foreground py-2">
                  Luemin (Coming Soon)
                </span>
              </div>
              <Link 
                to="/security" 
                className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://app.lifetimeepr.io"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 inline-block text-center"
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
