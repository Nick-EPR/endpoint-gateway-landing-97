
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProductsDropdownProps {
  scrolled: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const ProductItem = ({ 
  to, 
  imgSrc, 
  alt, 
  children, 
  onClick,
  comingSoon 
}: { 
  to?: string;
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
  onClick?: () => void;
  comingSoon?: boolean;
}) => {
  const content = (
    <>
      <img 
        src={imgSrc}
        alt={alt}
        className="w-4 h-4 object-contain"
      />
      <span>
        {children}
        {comingSoon && <span className="ml-2 text-xs text-primary">(Coming Soon)</span>}
      </span>
    </>
  );

  if (!to) return null;

  return (
    <Link 
      to={to} 
      className="w-full flex items-center gap-2"
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

const ProductsDropdown = ({ scrolled, isMobile, onItemClick }: ProductsDropdownProps) => {
  if (isMobile) {
    return (
      <div className="flex flex-col space-y-2 pl-4">
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
          imgSrc="/lovable-uploads/b256dcc1-0c91-4c89-84dd-fa02e6675757.png"
          alt="Toolbox Emblem"
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
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${scrolled ? 'text-neutral-600' : 'text-white'} hover:text-primary transition-colors duration-200 flex items-center gap-1`}>
        Products <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white min-w-[200px]">
        <DropdownMenuItem>
          <ProductItem
            to="/heliam"
            imgSrc="/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png"
            alt="HeliAM Logo"
          >
            HeliAM
          </ProductItem>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ProductItem
            to="/toolbox"
            imgSrc="/lovable-uploads/b256dcc1-0c91-4c89-84dd-fa02e6675757.png"
            alt="Toolbox Emblem"
          >
            Toolbox
          </ProductItem>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ProductItem
            to="/luemin"
            imgSrc="/lovable-uploads/07886d9e-4595-41a4-b460-0ea37b032e61.png"
            alt="Luemin Logo"
            comingSoon={true}
          >
            Luemin
          </ProductItem>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsDropdown;
