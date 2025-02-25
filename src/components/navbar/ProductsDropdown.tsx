
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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
  }

  const getLinkClasses = () => {
    const baseClasses = 'transition-colors duration-200 flex items-center gap-1';
    
    if (scrolled) {
      if (isDark) {
        return `${baseClasses} text-neutral-200 hover:text-white`;
      }
      return `${baseClasses} text-neutral-600 hover:text-primary`;
    }
    
    return `${baseClasses} text-white hover:text-primary`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={getLinkClasses()}>
        Products <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-neutral-900 dark:border-neutral-800 min-w-[200px]">
        <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white">
          <ProductItem
            to="/heliam"
            imgSrc="/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png"
            alt="HeliAM Logo"
          >
            HeliAM
          </ProductItem>
        </DropdownMenuItem>
        <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white">
          <ProductItem
            to="/toolbox"
            imgSrc="/lovable-uploads/578da381-52de-48c5-a714-3b9c9015b8a2.png"
            alt="Toolbox Icon"
          >
            Toolbox
          </ProductItem>
        </DropdownMenuItem>
        <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white">
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
