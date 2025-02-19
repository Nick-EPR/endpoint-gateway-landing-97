
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  showNavbar: boolean;
  onMouseEnter: () => void;
}

const Navbar = ({ showNavbar, onMouseEnter }: NavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 glass-card transition-all duration-300 ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      onMouseEnter={onMouseEnter}
    >
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
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleNavigation('features')} 
            className="hover-lift text-neutral-600 hover:text-primary"
          >
            Features
          </button>
          <button 
            onClick={() => handleNavigation('solutions')} 
            className="hover-lift text-neutral-600 hover:text-primary"
          >
            Solutions
          </button>
          <Link 
            to="/security" 
            className="hover-lift text-neutral-600 hover:text-primary"
          >
            Security
          </Link>
          <Link 
            to="/contact" 
            className="hover-lift text-neutral-600 hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
