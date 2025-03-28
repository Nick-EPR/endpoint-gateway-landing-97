
import React, { memo } from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";
import { Settings, Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformFeaturesProps {
  features: Feature[];
  triangleImage: string;
  isSearching?: boolean;
}

const FeatureTitle = memo(({ children, description }: { children: React.ReactNode; description?: string }) => (
  <div className="text-center mb-16 mt-20">
    <div className="flex items-center justify-center gap-2 mb-2 animate-fade-up">
      <Package className="w-8 h-8 text-primary" />
      <h3 className="text-xl font-semibold dark:text-white">{children}</h3>
    </div>
    {description && (
      <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
        {description}
      </p>
    )}
  </div>
));

FeatureTitle.displayName = "FeatureTitle";

const NoFeaturesFound = memo(() => (
  <div className="text-center py-8 text-neutral-500 dark:text-neutral-400 animate-fade-up">
    No features match your search criteria
  </div>
));

NoFeaturesFound.displayName = "NoFeaturesFound";

export const PlatformFeatures = memo(({
  features,
  triangleImage,
  isSearching = false
}: PlatformFeaturesProps) => {
  return (
    <div className="relative mb-32">
      <div className="relative">
        {!isSearching && (
          <FeatureTitle
            description="Start with our core platform features and add any combination of our specialized products to build your complete ITAM solution."
          >
            What You Get Out of The Box
          </FeatureTitle>
        )}
        
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {features.length > 0 ? features.map((feature, index) => (
              <FeatureCard 
                key={feature.title} 
                {...feature} 
                className={cn(
                  "w-full",
                  "bg-white/95 dark:bg-neutral-800/50",
                  "backdrop-blur-sm",
                  "border border-neutral-100 dark:border-neutral-700/50",
                  "shadow-md hover:shadow-lg",
                  "animate-fade-up"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: 'translateY(0)',
                  opacity: 1,
                  transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
                }} 
              />
            )) : (
              <NoFeaturesFound />
            )}
          </div>
        </div>

        {!isSearching && (
          <>
            <div className="text-center mt-32 mb-16">
              <div className="flex items-center justify-center gap-2 mb-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold dark:text-white">Build Your Perfect ITAM Solution</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
                Choose from our specialized products to create an ITAM solution that perfectly matches 
                your use case and business requirements.
              </p>
            </div>

            <div 
              className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2"
              style={{
                animation: 'pulse 2s infinite'
              }}
            >
              <div 
                className="absolute w-8 h-8 rounded-full -bottom-4 -left-[14px] border-2 border-primary/20"
                style={{
                  animation: 'pulse 2s infinite'
                }}
              />
            </div>
            <div className="absolute -bottom-32 left-0 w-full" />
          </>
        )}
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
});

PlatformFeatures.displayName = "PlatformFeatures";
