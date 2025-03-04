
import { useNavLinkStyles } from "@/hooks/useNavLinkStyles";
import { navigateToProductsSection } from "@/utils/navigation";
import MobileProductsMenu from "./MobileProductsMenu";
import DesktopProductsDropdown from "./DesktopProductsDropdown";

interface ProductsDropdownProps {
  scrolled: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const ProductsDropdown = ({ scrolled, isMobile, onItemClick }: ProductsDropdownProps) => {
  const { getLinkClasses, isDark } = useNavLinkStyles(scrolled);
  
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
