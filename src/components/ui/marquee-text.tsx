import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeText = ({ children, className }: MarqueeTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = useCallback(() => {
    if (!containerRef.current || !textRef.current) return;
    
    const containerWidth = containerRef.current.clientWidth;
    const textWidth = textRef.current.scrollWidth;
    
    // If container has no width yet (carousel not visible), retry on next frame
    if (containerWidth === 0) {
      requestAnimationFrame(checkOverflow);
      return;
    }
    
    setIsOverflowing(textWidth > containerWidth + 1);
  }, []);

  useEffect(() => {
    checkOverflow();
    
    // Use ResizeObserver for robust detection (works with carousels)
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }
    
    // Also check when fonts are loaded
    document.fonts?.ready.then(checkOverflow);
    
    return () => resizeObserver.disconnect();
  }, [children, checkOverflow]);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "overflow-hidden w-full min-w-0",
        isOverflowing ? "whitespace-nowrap group/marquee" : ""
      )}
    >
      {isOverflowing ? (
        <span className="inline-flex animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none will-change-transform">
          <span ref={textRef} className={className}>
            {children}
          </span>
          <span className="px-8" aria-hidden="true">•</span>
          <span className={className} aria-hidden="true">
            {children}
          </span>
          <span className="px-8" aria-hidden="true">•</span>
        </span>
      ) : (
        <span ref={textRef} className={cn("truncate block", className)}>
          {children}
        </span>
      )}
    </div>
  );
};

export default MarqueeText;
