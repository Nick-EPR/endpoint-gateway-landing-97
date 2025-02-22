
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
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
  disabled 
}: { 
  to?: string;
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const content = (
    <>
      <img 
        src={imgSrc}
        alt={alt}
        className="w-4 h-4 object-contain"
      />
      <span>{children}</span>
    </>
  );

  if (disabled) {
    return (
      <span className="opacity-75 cursor-not-allowed flex items-center gap-2">
        {content}
      </span>
    );
  }

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
  const location = useLocation();
  const isITAMPage = location.pathname === '/what-is-itam';

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
          imgSrc="/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png"
          alt="Toolbox Logo"
          onClick={onItemClick}
        >
          Toolbox
        </ProductItem>
        <ProductItem
          imgSrc="/lovable-uploads/07886d9e-4595-41a4-b460-0ea37b032e61.png"
          alt="Luemin Logo"
          disabled
          to=""
        >
          Luemin (Coming Soon)
        </ProductItem>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`${isITAMPage ? (scrolled ? 'text-black' : 'text-white') : (scrolled ? 'text-neutral-600' : 'text-white')} hover:text-primary transition-colors duration-300 flex items-center gap-1`}>
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
            imgSrc="/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png"
            alt="Toolbox Logo"
          >
            Toolbox
          </ProductItem>
        </DropdownMenuItem>
        <DropdownMenuItem className="opacity-75 cursor-not-allowed">
          <ProductItem
            imgSrc="/lovable-uploads/07886d9e-4595-41a4-b460-0ea37b032e61.png"
            alt="Luemin Logo"
            disabled
            to=""
          >
            Luemin (Coming Soon)
          </ProductItem>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsDropdown;
