
import { Link } from "react-router-dom";

interface ProductItemProps { 
  to?: string;
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
  onClick?: () => void;
  comingSoon?: boolean;
}

const ProductItem = ({ 
  to, 
  imgSrc, 
  alt, 
  children, 
  onClick,
  comingSoon 
}: ProductItemProps) => {
  const content = (
    <>
      <img 
        src={imgSrc}
        alt={alt}
        className="w-4 h-4 object-contain"
      />
      <span className="dark:text-neutral-200">
        {children}
        {comingSoon && <span className="ml-2 text-xs text-primary">(Coming Soon)</span>}
      </span>
    </>
  );

  if (!to) return null;

  return (
    <Link 
      to={to} 
      className="w-full flex items-center gap-2 dark:text-neutral-200 dark:hover:text-white"
      onClick={onClick}
    >
      {content}
    </Link>
  );
};

export default ProductItem;
