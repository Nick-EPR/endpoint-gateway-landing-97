interface MobileProductsMenuProps {
  onItemClick?: () => void;
  onAllProductsClick: (e: React.MouseEvent) => void;
}

const MobileProductsMenu = ({ onAllProductsClick }: MobileProductsMenuProps) => {
  return (
    <div 
      className="flex items-center gap-2 cursor-pointer text-primary dark:text-primary font-medium"
      onClick={onAllProductsClick}
    >
      Products
    </div>
  );
};

export default MobileProductsMenu;
