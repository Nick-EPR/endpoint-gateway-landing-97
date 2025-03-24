
import { useNavLinkStyles } from "@/hooks/useNavLinkStyles";
import { navigateToProductsSection } from "@/utils/navigation";
import MobileProductsMenu from "./MobileProductsMenu";
import DesktopProductsDropdown from "./DesktopProductsDropdown";
import { useLocation } from "react-router-dom";

interface ProductsDropdownProps {
  scrolled: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
  forceLight?: boolean;
}

const ProductsDropdown = ({ scrolled, isMobile, onItemClick, forceLight }: ProductsDropdownProps) => {
  const location = useLocation();
  const isMoviusPage = location.pathname === '/partnerships/movius';
  
  // Use the dark styling for Movius page or when passed explicitly
  const forceMoviusStyle = isMoviusPage || forceLight;
  
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
