
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Smartphone, Shield, Zap, ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const PCaaSHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(heroRef, { threshold: 0.1 });

  return (
    <section 
      ref={heroRef}
      className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-white to-neutral-50 dark:from-primary/5 dark:via-neutral-900 dark:to-neutral-800 relative overflow-hidden"
    >
      {/* Light background image */}
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content overlay with improved contrast */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline - Enhanced contrast */}
            <h1 className={`text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white mb-6 drop-shadow-sm transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Simplify Your IT.{" "}
              <span className="text-primary drop-shadow-sm">Mobilize</span> Your Workforce.{" "}
              <span className="text-primary drop-shadow-sm">Cut CapEx.</span>
            </h1>
            
            {/* Sub-headline - Improved readability */}
            <p className={`text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-8 drop-shadow-sm transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <strong>PCaaS:</strong> A fully managed device solution combining 5G connectivity 
              with white-glove IT services for SMBs.
            </p>
            
            {/* Intro paragraph - Better contrast */}
            <p className={`text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto drop-shadow-sm transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Today's small and medium-sized businesses need more than just laptops— they need 
              fully connected, secure, and ready-to-deploy endpoints that scale as fast as their business.
            </p>
            
            {/* Partner Logos */}
            <div className={`flex flex-col items-center justify-center gap-6 mb-10 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Powered by</span>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                {/* T-Mobile Logo */}
                <div className="w-24 hover:scale-105 transition-transform duration-300">
                  <AspectRatio ratio={1 / 1}>
                    <div className="flex items-center justify-center bg-white/90 dark:bg-neutral-800/90 rounded-lg p-4 shadow-md border border-neutral-200 dark:border-neutral-700 h-full backdrop-blur-sm">
                      <img
                        src="/lovable-uploads/ee44a1eb-a16e-4d5f-a307-d13e5e3b9f8c.png"
                        alt="T-Mobile Logo"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </AspectRatio>
                </div>
                
                {/* Plus symbol */}
                <span className="text-2xl text-neutral-500 font-light drop-shadow-sm animate-pulse">+</span>
                
                {/* Lifetime EPR Logo */}
                <div className="w-24 hover:scale-105 transition-transform duration-300">
                  <AspectRatio ratio={1 / 1}>
                    <div className="flex items-center justify-center bg-white/90 dark:bg-neutral-800/90 rounded-lg p-4 shadow-md border border-neutral-200 dark:border-neutral-700 h-full backdrop-blur-sm">
                      <img
                        src="/lovable-uploads/467232dc-d05e-4376-85e7-318f7ce01380.png"
                        alt="Lifetime EndPoint Resources Logo"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className={`mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 shadow-lg group transition-all duration-300 hover:scale-105" 
                onClick={() => window.open('https://test.lifetimeepr.io/pcaas-enrollment', '_blank')}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Key benefits icons */}
            <div className={`grid md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-lg transition-shadow">
                  <Smartphone className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 drop-shadow-sm">
                  Always Connected
                </span>
              </div>
              <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-lg transition-shadow">
                  <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 drop-shadow-sm">
                  Enterprise Security
                </span>
              </div>
              <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:shadow-lg transition-shadow">
                  <Zap className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 drop-shadow-sm">
                  Fast Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCaaSHero;
