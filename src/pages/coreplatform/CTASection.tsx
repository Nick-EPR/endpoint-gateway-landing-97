import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-neutral-800 rounded-3xl shadow-xl dark:shadow-blue-500/5 overflow-hidden border border-blue-100/50 dark:border-blue-800/20">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                Ready to Transform Your IT Asset Management?
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                Join organizations worldwide that trust Lifetime EPR's Core Platform for complete visibility and control over their IT ecosystem.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-blue-500" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Full lifecycle management from day one
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-blue-500" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Enterprise-grade security and compliance
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3 text-blue-500" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Dedicated onboarding and support team
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="dark:text-white border-blue-200 dark:border-blue-800/50">
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="hidden md:flex items-center justify-center p-12 bg-gradient-to-br from-blue-100/50 to-blue-50/30 dark:from-blue-900/20 dark:to-blue-800/10">
              <img 
                src="/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png"
                alt="Lifetime EPR Core Platform" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
