
import React from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70 backdrop-blur-[2px] z-10"></div>
        <OptimizedImage 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          alt="Security Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>
      <div className="container mx-auto relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Secure IT Asset Management: A Whitepaper on Data Protection
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Ensuring Data Security and Compliance Across the IT Asset Lifecycle
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
