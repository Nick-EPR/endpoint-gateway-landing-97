
import { useNavLinkStyles } from "@/hooks/useNavLinkStyles";
import { navigateToProductsSection } from "@/utils/navigation";
import MobileProductsMenu from "./MobileProductsMenu";
import DesktopProductsDropdown from "./DesktopProductsDropdown";

interface ProductsDropdownProps {
  scrolled: boolean;
  forceDarkMode?: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const ProductsDropdown = ({ scrolled, forceDarkMode = false, isMobile, onItemClick }: ProductsDropdownProps) => {
  const { getLinkClasses, isDark } = useNavLinkStyles(scrolled, forceDarkMode);
  
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
      isDark={isDark || forceDarkMode}
      linkClasses={getLinkClasses()} 
      onAllProductsClick={handleProductsNavigation} 
    />
  );
};

export default ProductsDropdown;
