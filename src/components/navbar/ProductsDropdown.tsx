import { useNavLinkStyles } from "@/hooks/useNavLinkStyles";
import { navigateToProductsSection } from "@/utils/navigation";
import MobileProductsMenu from "./MobileProductsMenu";
import DesktopProductsDropdown from "./DesktopProductsDropdown";
interface ProductsDropdownProps {
  scrolled: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
  forceLight?: boolean;
}
const ProductsDropdown = ({
  scrolled,
  isMobile,
  onItemClick,
  forceLight
}: ProductsDropdownProps) => {
  const {
    getLinkClasses
  } = useNavLinkStyles(scrolled, forceLight);
  const handleProductsNavigation = (e: React.MouseEvent) => {
    navigateToProductsSection(e, onItemClick);
  };
  if (isMobile) {
    return <MobileProductsMenu onItemClick={onItemClick} onAllProductsClick={handleProductsNavigation} />;
  }
  return;
};
export default ProductsDropdown;