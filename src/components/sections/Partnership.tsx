
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Partnership = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Strategic Partnership: Movius Secure Communications
            </h2>
            <p className="text-muted-foreground mb-6">
              Transform your business communications with the power of mobile-first technology. 
              Our strategic partnership with Movius delivers a comprehensive alternative to legacy 
              PBX systems, focusing on secure voice/messaging and enhanced customer engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="gap-2">
                <Link to="/partnerships/movius">
                  Learn About Our Partnership
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:marc@lifetimeepr.com">
                  Contact Our Team
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-neutral-100 dark:bg-neutral-800 relative min-h-[300px]">
            <img 
              src="/lovable-uploads/a5045023-7264-4440-a6c2-12276c798c19.jpg" 
              alt="Mobile Business Communications" 
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent p-8 md:p-12 flex flex-col justify-end">
              <div className="text-white">
                <div className="mb-4 flex space-x-4 items-center">
                  <img 
                    src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png" 
                    alt="Lifetime EPR Logo" 
                    className="h-8 brightness-200"
                  />
                  <div className="bg-white/30 h-8 w-px"></div>
                  <img 
                    src="/lovable-uploads/movius-logo.png" 
                    alt="Movius Logo" 
                    className="h-8 brightness-200"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/200x80/FFFFFF/FFFFFF?text=MOVIUS";
                      target.className = "h-8 bg-white/20 p-1 rounded";
                    }}
                  />
                </div>
                <p className="text-lg font-medium">Modernize Your Communications</p>
                <p className="text-sm opacity-80">Mobile-first platform with enterprise-grade security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
