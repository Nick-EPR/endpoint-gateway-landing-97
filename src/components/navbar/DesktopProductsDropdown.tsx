
interface DesktopProductsDropdownProps {
  scrolled: boolean;
  isDark: boolean;
  linkClasses: string;
  onAllProductsClick: (e: React.MouseEvent) => void;
}

const DesktopProductsDropdown = ({ 
  linkClasses, 
  onAllProductsClick 
}: DesktopProductsDropdownProps) => {
  return (
    <button 
      className={linkClasses}
      onClick={onAllProductsClick}
    >
      Products
    </button>
  );
};

export default DesktopProductsDropdown;
