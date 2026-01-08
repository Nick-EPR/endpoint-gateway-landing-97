import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeText = ({ children, className }: MarqueeTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (!containerRef.current || !measureRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const textWidth = measureRef.current.scrollWidth;
    
    if (containerWidth === 0) {
      requestAnimationFrame(checkOverflow);
      return;
    }
    
    setIsOverflowing(textWidth > containerWidth);
  }, []);

  useEffect(() => {
    checkOverflow();
    
    const resizeObserver = new ResizeObserver(checkOverflow);
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    document.fonts?.ready.then(checkOverflow);
    
    return () => resizeObserver.disconnect();
  }, [children, checkOverflow]);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden w-full min-w-0 whitespace-nowrap relative"
    >
      {/* Hidden measurement span - stable, never animated */}
      <span 
        ref={measureRef} 
        className="absolute invisible whitespace-nowrap"
        aria-hidden="true"
      >
        {children}
      </span>
      
      {isOverflowing ? (
        <span className="inline-flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none will-change-transform">
          <span className={className}>{children}</span>
          <span className="px-8" aria-hidden="true">•</span>
          <span className={className} aria-hidden="true">{children}</span>
          <span className="px-8" aria-hidden="true">•</span>
        </span>
      ) : (
        <span className={cn("truncate block", className)}>
          {children}
        </span>
      )}
    </div>
  );
};

export default MarqueeText;
