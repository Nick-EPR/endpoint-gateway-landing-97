
import React, { memo } from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";
import { Settings, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { featureData } from "./featureData";

interface PlatformFeaturesProps {
  features: Feature[];
  triangleImage: string;
  isSearching?: boolean;
}

const FeatureTitle = memo(({ children, description }: { children: React.ReactNode; description?: string }) => (
  <div className="text-center mb-12">
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
        
        {/* Your Perfect ITAM Solution */}
        <div id="perfect-itam-solution" className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Settings className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Your Perfect ITAM Solution</h3>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our specialized products to create an ITAM solution that perfectly matches 
            your use case and business requirements.
          </p>
        </div>

        {/* Additional Platform Capabilities */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Additional Platform Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featureData.detailedFeatures.map((category, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-lg text-foreground">{category.category}</h4>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
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
