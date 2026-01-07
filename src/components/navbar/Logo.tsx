import { Link, useLocation } from "react-router-dom";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  const location = useLocation();
  
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

  // Full text logos
  const lightModeLogo = "/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png";
  const darkModeLogo = "/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png";
  
  // EPR emblem logo for compact/scrolled state
  const emblemLogo = "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";

  return (
    <div className={`relative h-8 md:h-10 transition-all duration-300 ${
      isScrolledView ? 'w-8 md:w-10' : 'w-[120px] md:w-[150px]'
    }`}>
      <Link to="/" onClick={handleLogoClick}>
        {/* Full logo - visible when NOT scrolled */}
        <img 
          src={darkModeLogo}
          alt="Lifetime EndPoint Resources"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
            isScrolledView ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* EPR Emblem - visible when scrolled (compact mode) - light mode */}
        <img 
          src={emblemLogo}
          alt="EPR"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 dark:opacity-0 ${
            isScrolledView ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* EPR Emblem - visible when scrolled (compact mode) - dark mode */}
        <img 
          src={emblemLogo}
          alt="EPR"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
            isScrolledView ? 'opacity-0 dark:opacity-100' : 'opacity-0'
          }`}
        />
      </Link>
    </div>
  );
};

export default Logo;
