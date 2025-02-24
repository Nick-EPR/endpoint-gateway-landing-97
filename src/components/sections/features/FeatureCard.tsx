
import React, { memo } from "react";
import { Feature } from "./types";

interface FeatureCardProps extends Feature {
  className?: string;
  style?: React.CSSProperties;
}

export const FeatureCard = memo(({
  icon,
  title,
  description,
  comingSoon,
  className = "",
  style
}: FeatureCardProps) => {
  return (
    <div 
      className={`p-4 rounded-lg bg-white dark:bg-neutral-900/50 shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full relative ${className}`}
      style={style}
    >
      {comingSoon && (
        <span className="absolute top-2 right-2 text-xs px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full leading-none animate-fade-in">
          Soon
        </span>
      )}
      <div className="w-10 h-10 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center mb-3 animate-fade-up">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-1.5 text-neutral-800 dark:text-neutral-100 animate-fade-up" style={{ animationDelay: '50ms' }}>
        {title}
      </h3>
      <p className="text-neutral dark:text-neutral-300 text-sm animate-fade-up" style={{ animationDelay: '100ms' }}>
        {description}
      </p>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";
