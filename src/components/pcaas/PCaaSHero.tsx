
import React from "react";
import { ArrowRight, Laptop, Wifi, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const PCaaSHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/a353927e-954d-4f2b-8485-dc70088f7f43.png"
          alt="Tech Professional with Lenovo Laptop"
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay - darker at top for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30"></div>
        {/* Additional top overlay for better header text contrast */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header with enhanced text styling */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
            <span className="text-white">Modernize and Cut</span>{" "}
            <span 
              className="inline-block px-2 py-1 rounded-lg font-bold text-white shadow-lg"
              style={{ 
                backgroundColor: '#93C852',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                border: '2px solid rgba(255,255,255,0.2)'
              }}
            >
              CAPEX
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 animate-fade-in text-white/95 drop-shadow-md font-medium" 
             style={{ animationDelay: "0.2s" }}>
            Transform IT spending with PC-as-a-Service: predictable monthly costs, 
            always-current technology, and comprehensive support.
          </p>

          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-fade-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" 
               style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/b256dcc1-0c91-4c89-84dd-fa02e6675757.png" 
                alt="Lifetime EndPoint Resources" 
                className="h-12 w-auto"
              />
              <span className="text-white text-xl font-semibold">+</span>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center p-2">
                <img 
                  src="/lovable-uploads/db5c2503-a1b3-49cc-a4d8-2e1cca8144e9.png" 
                  alt="T-Mobile" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-white/90 text-sm font-medium">
              Powered by 5G connectivity and enterprise-grade support
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" 
               style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Laptop className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Latest Hardware</h3>
              <p className="text-white/80 text-sm">5G-ready Lenovo ThinkPads with enterprise security</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Wifi className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Always Connected</h3>
              <p className="text-white/80 text-sm">Built-in 5G with 75-125GB monthly data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Complete Support</h3>
              <p className="text-white/80 text-sm">24/7 helpdesk, security, and lifecycle management</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" 
               style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Calculate Savings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCaaSHero;
