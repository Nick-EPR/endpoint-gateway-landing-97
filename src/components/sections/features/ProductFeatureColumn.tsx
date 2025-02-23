
import React from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";

interface ProductFeatureColumnProps {
  logo: string;
  features: Feature[];
  logoAlt: string;
}

export const ProductFeatureColumn = ({ logo, features, logoAlt }: ProductFeatureColumnProps) => {
  return (
    <div>
      <div className="text-center mb-8">
        <img 
          src={logo} 
          alt={logoAlt} 
          className={`mx-auto ${logoAlt === "HeliAM" ? "h-10" : "h-8"}`} 
        />
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature} 
            className="animate-fade-up"
            style={{
              animationDelay: `${index * 0.2}s`,
              animation: 'float 3s ease-in-out infinite'
            }}
          />
        ))}
      </div>
    </div>
  );
};
