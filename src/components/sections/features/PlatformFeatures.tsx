
import React from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";

interface PlatformFeaturesProps {
  features: Feature[];
  triangleImage: string;
}

export const PlatformFeatures = ({ features, triangleImage }: PlatformFeaturesProps) => {
  return (
    <div className="relative mb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl"></div>
      <div className="relative">
        <img 
          src={triangleImage} 
          alt="EPR Platform" 
          className="w-16 h-16 mx-auto mb-12"
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              className="bg-gradient-to-br from-white via-neutral-50 to-white shadow-md"
              style={{
                animationDuration: '3s',
                animationDelay: `${index * 0.5}s`
              }}
            />
          ))}
        </div>
        <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2">
          <div className="absolute w-8 h-8 rounded-full -bottom-4 -left-[14px] border-2 border-primary/20"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full">
          <div className="relative h-16">
            <div className="absolute left-1/6 right-1/6 top-1/2 h-px bg-primary/20"></div>
            <div className="absolute left-1/6 top-0 h-full w-px bg-primary/20"></div>
            <div className="absolute right-1/6 top-0 h-full w-px bg-primary/20"></div>
            <div className="absolute left-1/6 bottom-0 w-2 h-2 rounded-full bg-primary/20 -ml-1"></div>
            <div className="absolute right-1/6 bottom-0 w-2 h-2 rounded-full bg-primary/20 -ml-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
