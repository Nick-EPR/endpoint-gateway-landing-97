
import ProductItem from "./ProductItem";

interface MobileProductsMenuProps {
  onItemClick?: () => void;
  onAllProductsClick: (e: React.MouseEvent) => void;
}

const MobileProductsMenu = ({ onItemClick, onAllProductsClick }: MobileProductsMenuProps) => {
  return (
    <div className="flex flex-col space-y-2 pl-4">
      <div 
        className="flex items-center gap-2 cursor-pointer text-primary dark:text-primary"
        onClick={onAllProductsClick}
      >
        All Products
      </div>
      <ProductItem
        to="/heliam"
        imgSrc="/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png"
        alt="HeliAM Logo"
        onClick={onItemClick}
      >
        HeliAM
      </ProductItem>
      <ProductItem
        to="/toolbox"
        imgSrc="/lovable-uploads/578da381-52de-48c5-a714-3b9c9015b8a2.png"
        alt="Toolbox Icon"
        onClick={onItemClick}
      >
        Toolbox
      </ProductItem>
      <ProductItem
        to="/luemin"
        imgSrc="/lovable-uploads/07886d9e-4595-41a4-b460-0ea37b032e61.png"
        alt="Luemin Logo"
        comingSoon={true}
        onClick={onItemClick}
      >
        Luemin
      </ProductItem>
    </div>
  );
};

export default MobileProductsMenu;
