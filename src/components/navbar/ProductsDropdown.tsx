
import { useNavLinkStyles } from "@/hooks/useNavLinkStyles";
import { navigateToProductsSection } from "@/utils/navigation";
import MobileProductsMenu from "./MobileProductsMenu";
import DesktopProductsDropdown from "./DesktopProductsDropdown";
import { useLocation } from "react-router-dom";
import { useTheme } from "next-themes";

interface ProductsDropdownProps {
  scrolled: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
  forceLight?: boolean;
}

const ProductsDropdown = ({ scrolled, isMobile, onItemClick, forceLight }: ProductsDropdownProps) => {
  const location = useLocation();
  const { theme } = useTheme();
  const isMoviusPage = location.pathname === '/partnerships/movius';
  
  // Only apply Movius styling if we're on the Movius page AND in dark mode
  const forceMoviusStyle = (isMoviusPage && theme === 'dark') || forceLight;
  
  const { getLinkClasses, isDark } = useNavLinkStyles(scrolled, forceMoviusStyle);
  
  const handleProductsNavigation = (e: React.MouseEvent) => {
    navigateToProductsSection(e, onItemClick);
  };

  if (isMobile) {
    return <MobileProductsMenu 
      onItemClick={onItemClick} 
      onAllProductsClick={handleProductsNavigation} 
    />;
  }

  return (
    <DesktopProductsDropdown 
      scrolled={scrolled} 
      isDark={isDark} 
      linkClasses={getLinkClasses()} 
      onAllProductsClick={handleProductsNavigation} 
    />
  );
};

export default ProductsDropdown;
