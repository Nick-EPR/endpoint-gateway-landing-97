
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if we're on the Movius partnership page or PCaaS page
  const isMoviusPage = location.pathname === '/partnerships/movius';
  const isPCaaSPage = location.pathname === '/pcaas';

  // Always use appropriate logo for specific pages or scrolled state
  const isScrolledView = scrolled || location.pathname === '/status' || isMoviusPage || isPCaaSPage;
  
  // Use dark mode logo only when in dark mode
  const isDarkMode = theme === 'dark';
  const darkModeLogo = isDarkMode ? "/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png" : "/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png";

  return (
    <div className="relative h-8 md:h-10 w-[120px] md:w-[150px]">
      <Link to="/" onClick={handleLogoClick}>
        <img 
          src={darkModeLogo}
          alt="Lifetime EndPoint Resources"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
            isScrolledView ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img 
          src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png"
          alt="Lifetime EndPoint Resources"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
            isScrolledView ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </Link>
    </div>
  );
};

export default Logo;
