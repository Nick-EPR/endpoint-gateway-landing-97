
import { memo } from "react";

interface SectionHeaderProps {
  triangleImage: string;
}

const SectionHeader = memo(({ triangleImage }: SectionHeaderProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-16">
      <div className="flex justify-center mb-8 relative">
        <div className="relative">
          <img 
            src={triangleImage} 
            alt="Decorative triangle"
            loading="lazy"
            width={100}
            height={100}
            className="w-[6.25rem] h-auto shadow-lg border border-neutral-200/20 rounded-lg p-2 animate-float" 
          />
          <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-primary/20 -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white animate-fade-up">
        The Lifetime EPR Platform
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
        Our integrated suite of solutions delivers comprehensive IT asset lifecycle management
      </p>
    </div>
  );
});

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
