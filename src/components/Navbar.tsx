
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  scrolled: boolean;
  onMouseEnter: () => void;
}

const Navbar = ({ scrolled, onMouseEnter }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header 
      className="fixed top-0 w-full z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className={`transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/80' : 'bg-white/50'
      } border-b border-neutral-200/10`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png"
                alt="Lifetime EndPoint Resources"
                className="h-8 md:h-10"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('features')} 
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavigation('solutions')} 
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              Solutions
            </button>
            <Link 
              to="/leadership" 
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              Leadership
            </Link>
            <Link 
              to="/security" 
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
            >
              Security
            </Link>
            <Link 
              to="/contact" 
              className="text-neutral-600 hover:text-primary transition-colors duration-200"
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
