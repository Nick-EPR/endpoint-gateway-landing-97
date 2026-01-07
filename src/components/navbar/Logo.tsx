import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if we're on pages that should always show emblem
  const isMoviusPage = location.pathname === '/partnerships/movius';
  const isPCaaSPage = location.pathname === '/pcaas';
  const forceEmblem = location.pathname === '/status' || isMoviusPage || isPCaaSPage;

  // Show emblem if mobile (limited space) OR on specific pages that always need compact
  const showEmblem = isMobile || forceEmblem;

  // Full text logos
  const lightModeLogo = "/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png";
  const darkModeLogo = "/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png";
  
  // EPR emblem logo for compact/scrolled state
  const emblemLogo = "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";

  return (
    <div className={`relative h-8 md:h-10 transition-all duration-300 ${
      showEmblem ? 'w-8 md:w-10' : 'w-[120px] md:w-[150px]'
    }`}>
      <Link to="/" onClick={handleLogoClick}>
        {/* Full logo - light mode */}
        <img 
          src={lightModeLogo}
          alt="Lifetime EndPoint Resources"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 dark:opacity-0 ${
            showEmblem ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Full logo - dark mode */}
        <img 
          src={darkModeLogo}
          alt="Lifetime EndPoint Resources"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 opacity-0 ${
            showEmblem ? '' : 'dark:opacity-100'
          }`}
        />
        {/* EPR Emblem - visible when space is limited (mobile/compact) */}
        <img 
          src={emblemLogo}
          alt="EPR"
          className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-300 ${
            showEmblem ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </Link>
    </div>
  );
};

export default Logo;
