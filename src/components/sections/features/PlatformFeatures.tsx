
import React from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";
import { Settings, Package } from "lucide-react";

interface PlatformFeaturesProps {
  features: Feature[];
  triangleImage: string;
}

export const PlatformFeatures = ({
  features,
  triangleImage
}: PlatformFeaturesProps) => {
  const isSearching = features.length !== 6; // Platform features has 6 items by default

  return <div className="relative mb-32">
      <div className="relative">
        {!isSearching && (
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Package className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">What You Get Out of The Box</h3>
            </div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Start with our core platform features and add any combination of our specialized products 
              to build your complete ITAM solution.
            </p>
          </div>
        )}
        
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {features.length > 0 ? features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                {...feature} 
                className="bg-gradient-to-br from-white via-neutral-50 to-white shadow-md animate-fade-up w-full"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'float 3s ease-in-out infinite'
                }} 
              />
            )) : (
              <div className="text-center py-8 text-neutral-500">
                No features match your search criteria
              </div>
            )}
          </div>
        </div>

        {!isSearching && (
          <>
            <div className="text-center mt-32 mb-16">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Build Your Perfect ITAM Solution</h3>
              </div>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Choose from our specialized products to create an ITAM solution that perfectly matches 
                your use case and business requirements.
              </p>
            </div>

            <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2">
              <div className="absolute w-8 h-8 rounded-full -bottom-4 -left-[14px] border-2 border-primary/20"></div>
            </div>
            <div className="absolute -bottom-32 left-0 w-full">
            </div>
          </>
        )}
      </div>
    </div>;
};
