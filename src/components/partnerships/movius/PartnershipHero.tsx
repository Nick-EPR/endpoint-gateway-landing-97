
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PartnershipHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex space-x-6 items-center mb-6">
              <img 
                src="/lovable-uploads/d617d373-5a61-48c7-bae3-04ab533555b5.png" 
                alt="Lifetime EPR Logo" 
                className="h-10"
              />
              <div className="bg-neutral-200 dark:bg-neutral-700 h-8 w-px"></div>
              <img 
                src="/lovable-uploads/451c6e0c-a782-43f8-99d3-0354cd584350.png" 
                alt="Movius Logo" 
                className="h-10"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground animate-fade-in">
              Modernize Your Communications with Movius and Lifetime EndPoint Resources
            </h1>
            
            <p className="text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
              Transform your business communications with a secure, mobile-first solution that replaces legacy PBX systems and enhances customer engagement—all with expert implementation support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a href="mailto:marc@lifetimeepr.com">
                  Contact Our Team
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-in [animation-delay:300ms]">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <img 
                src="/lovable-uploads/a5045023-7264-4440-a6c2-12276c798c19.jpg" 
                alt="Secure Mobile Communications" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xl font-semibold">
                  Mobile-First Communications Platform
                </p>
                <p className="text-sm opacity-90">
                  Integrated with T-Mobile's network for enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-card rounded-xl p-6 shadow-md border border-border animate-fade-in [animation-delay:500ms]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">About Movius Secure Communications</h2>
              <p className="text-muted-foreground">
                Movius offers a comprehensive alternative to legacy PBX systems, focusing on secure voice/messaging and customer engagement. As a mobile-first platform, Movius seamlessly integrates enterprise-grade communications with T-Mobile's network, providing a robust solution for modern businesses.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Lifetime EPR as Your Implementation Partner</h2>
              <p className="text-muted-foreground">
                Lifetime EndPoint Resources serves as your strategic implementation partner for Movius, bringing expertise in platform integration, asset management, security & compliance, and comprehensive support services to ensure a smooth transition and optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipHero;
