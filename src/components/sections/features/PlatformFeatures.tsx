import React from "react";
import { Feature } from "./types";
import { FeatureCard } from "./FeatureCard";
interface PlatformFeaturesProps {
  features: Feature[];
  triangleImage: string;
}
export const PlatformFeatures = ({
  features,
  triangleImage
}: PlatformFeaturesProps) => {
  return <div className="relative mb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl"></div>
      <div className="relative">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold mb-2">What You Get Out of The Box</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Start with our core platform features and add any combination of our specialized products 
            to build your complete ITAM solution.
          </p>
        </div>
        <img src={triangleImage} alt="EPR Platform" className="w-16 h-16 mx-auto mb-12 animate-float" style={{
        animation: 'float 3s ease-in-out infinite'
      }} />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => <FeatureCard key={index} {...feature} className="bg-gradient-to-br from-white via-neutral-50 to-white shadow-md" style={{
          animationDuration: '3s',
          animationDelay: `${index * 0.5}s`
        }} />)}
        </div>
        <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2">
          <div className="absolute w-8 h-8 rounded-full -bottom-4 -left-[14px] border-2 border-primary/20"></div>
        </div>
        <div className="absolute -bottom-32 left-0 w-full">
          
        </div>
      </div>
    </div>;
};