
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component for better performance
 * - Automatically converts Unsplash images to WebP format
 * - Adds proper sizing based on width/height
 * - Implements lazy loading for non-priority images
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(!priority);

  // Transform Unsplash URLs to include sizing and WebP format
  const optimizedSrc = useMemo(() => {
    // If it's an Unsplash image, optimize it
    if (src.includes("images.unsplash.com")) {
      // Extract the base URL and photo ID
      const urlParts = src.split("?")[0];
      
      // Add sizing and WebP format
      const sizingParams = width ? `&w=${width}` : '';
      const heightParams = height ? `&h=${height}` : '';
      return `${urlParts}?fm=webp&q=80${sizingParams}${heightParams}&fit=crop`;
    }
    
    // For local assets, just return the original
    return src;
  }, [src, width, height]);

  // Handle image load completion
  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleImageLoaded}
        className={cn(
          "transition-opacity duration-300", 
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
