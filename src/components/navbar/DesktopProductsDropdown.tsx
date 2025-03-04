
import { ChevronDown } from "lucide-react";
import ProductItem from "./ProductItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

interface DesktopProductsDropdownProps {
  scrolled: boolean;
  isDark: boolean;
  linkClasses: string;
  onAllProductsClick: (e: React.MouseEvent) => void;
}

const DesktopProductsDropdown = ({ 
  scrolled, 
  isDark, 
  linkClasses, 
  onAllProductsClick 
}: DesktopProductsDropdownProps) => {
  return (
    <div className="relative flex items-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              className={`${linkClasses} mr-1`}
              onClick={onAllProductsClick}
            >
              Products
            </button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View all products</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button 
            className={`${linkClasses} p-1`}
            aria-label="Products dropdown"
          >
            <ChevronDown size={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-white dark:bg-neutral-900 dark:border-neutral-800 min-w-[200px] z-50"
        >
          <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white dark:text-neutral-200 focus:text-neutral-900">
            <ProductItem
              to="/heliam"
              imgSrc="/lovable-uploads/64b90815-7ab9-4ac6-b29f-29d4adb4537e.png"
              alt="HeliAM Logo"
            >
              HeliAM
            </ProductItem>
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white dark:text-neutral-200 focus:text-neutral-900">
            <ProductItem
              to="/toolbox"
              imgSrc="/lovable-uploads/578da381-52de-48c5-a714-3b9c9015b8a2.png"
              alt="Toolbox Icon"
            >
              Toolbox
            </ProductItem>
          </DropdownMenuItem>
          <DropdownMenuItem className="dark:focus:bg-neutral-800 dark:focus:text-white dark:text-neutral-200 focus:text-neutral-900">
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
    </div>
  );
};

export default DesktopProductsDropdown;
