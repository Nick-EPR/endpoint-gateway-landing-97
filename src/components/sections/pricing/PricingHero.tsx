
import React from "react";

const PricingHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Pricing Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
            Find the perfect plan for your IT asset management needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
