
import React, { memo } from "react";
import { Feature } from "./types";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends Feature {
  className?: string;
  style?: React.CSSProperties;
}

const baseCardStyles = "p-4 rounded-lg backdrop-blur-md border transition-all duration-500 h-full relative";
const lightCardStyles = "bg-white/95 border-neutral-100";
const darkCardStyles = "dark:bg-neutral-800/50 dark:border-neutral-700/50";

const badgeStyles = "absolute top-2 right-2 text-xs px-1.5 py-0.5 rounded-full leading-none animate-fade-in";
const badgeLightStyles = "bg-neutral-100/80 text-neutral-600";
const badgeDarkStyles = "dark:bg-neutral-800/80 dark:text-neutral-400";

const iconContainerStyles = "w-10 h-10 rounded-lg flex items-center justify-center mb-3";
const iconLightStyles = "bg-neutral-50/90";
const iconDarkStyles = "dark:bg-neutral-800/60";

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
      className={cn(
        baseCardStyles,
        lightCardStyles,
        darkCardStyles,
        className
      )}
      style={style}
    >
      {comingSoon && (
        <span className={cn(
          badgeStyles,
          badgeLightStyles,
          badgeDarkStyles
        )}>
          Soon
        </span>
      )}
      <div className={cn(
        iconContainerStyles,
        iconLightStyles,
        iconDarkStyles
      )}>
        {icon}
      </div>
      <h3 
        className="text-lg font-semibold mb-1.5 glass-text"
      >
        {title}
      </h3>
      <p 
        className="glass-text-subtle text-sm"
      >
        {description}
      </p>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";
