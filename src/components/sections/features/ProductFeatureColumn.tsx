
import React from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";

interface ProductFeatureColumnProps {
  logo: string;
  features: Feature[];
  logoAlt: string;
}

export const ProductFeatureColumn = ({ logo, features, logoAlt }: ProductFeatureColumnProps) => {
  const darkModeLogos: Record<string, string> = {
    "Toolbox": "/lovable-uploads/8dd82be9-672a-44e1-ad3e-e474a8ef097a.png",
    "HeliAM": "/lovable-uploads/89972c5d-a519-465a-a07e-c1513af67d51.png",
  };
  const darkLogo = darkModeLogos[logoAlt] || logo;
  
  return (
    <div>
      <div className="text-center mb-8">
        <img 
          src={logo} 
          alt={logoAlt} 
          className={`mx-auto ${logoAlt === "HeliAM" ? "h-10" : "h-8"} block dark:hidden`} 
        />
        <img 
          src={darkLogo} 
          alt={logoAlt} 
          className={`mx-auto ${logoAlt === "HeliAM" ? "h-10" : "h-8"} hidden dark:block`} 
        />
      </div>
      <div className="space-y-4">
        {features.length > 0 ? (
          features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              {...feature} 
            />
          ))
        ) : (
          <div className="text-center py-8 text-neutral-500">
            No features match your search
          </div>
        )}
      </div>
    </div>
  );
};
