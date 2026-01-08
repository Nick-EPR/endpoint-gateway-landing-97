import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  children: React.ReactNode;
  className?: string;
}

const MarqueeText = ({ children, className }: MarqueeTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && textRef.current) {
        const isOver = textRef.current.scrollWidth > containerRef.current.clientWidth;
        setIsOverflowing(isOver);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [children]);

  if (!isOverflowing) {
    return (
      <div ref={containerRef} className="overflow-hidden">
        <span ref={textRef} className={cn("truncate block", className)}>
          {children}
        </span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap group/marquee">
      <span className="inline-flex animate-marquee group-hover/marquee:[animation-play-state:paused]">
        <span ref={textRef} className={className}>
          {children}
        </span>
        <span className="px-8" aria-hidden="true">•</span>
        <span className={className} aria-hidden="true">
          {children}
        </span>
        <span className="px-8" aria-hidden="true">•</span>
      </span>
    </div>
  );
};

export default MarqueeText;
