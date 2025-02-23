
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
        <img src={logo} alt={logoAlt} className="h-8 mx-auto" />
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};
