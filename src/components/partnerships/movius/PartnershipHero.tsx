
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PartnershipHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-white dark:bg-neutral-900 overflow-hidden">
      {/* Background patterns with higher contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[radial-gradient(#444_1px,transparent_1px)] opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex space-x-6 items-center mb-6">
              <img 
                src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png" 
                alt="Lifetime EPR Logo" 
                className="h-10"
              />
              <div className="bg-neutral-400 h-8 w-px"></div>
              <img 
                src="/lovable-uploads/451c6e0c-a782-43f8-99d3-0354cd584350.png" 
                alt="Movius Logo" 
                className="h-10"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white animate-fade-in">
              Modernize Your Communications with <span className="text-primary">Movius</span> and Lifetime EndPoint Resources
            </h1>
            
            <p className="text-lg text-neutral-700 dark:text-neutral-300 animate-fade-in [animation-delay:200ms]">
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
          
          <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in [animation-delay:300ms] border border-neutral-200 dark:border-neutral-800">
            <div className="aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1bec5ea3-8432-40d1-8f5c-3cabbe8483be.png" 
                alt="Cell Tower Communications" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 via-neutral-800/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="w-16 h-1 bg-primary mb-4 rounded-full"></div>
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
        
        <div className="mt-16 bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 shadow-md border border-neutral-200 dark:border-neutral-700 animate-fade-in [animation-delay:500ms]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">About Movius Secure Communications</h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                Movius offers a comprehensive alternative to legacy PBX systems, focusing on secure voice/messaging and customer engagement. As a mobile-first platform, Movius seamlessly integrates enterprise-grade communications with T-Mobile's network, providing a robust solution for modern businesses.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Lifetime EPR as Your Implementation Partner</h2>
              <p className="text-neutral-700 dark:text-neutral-300">
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
