
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Zap } from "lucide-react";

const PCaaSHero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-neutral-50 dark:from-primary/5 dark:via-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            Simplify Your IT.{" "}
            <span className="text-primary">Mobilize</span> Your Workforce.{" "}
            <span className="text-primary">Cut CapEx.</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-8">
            <strong>PCaaS:</strong> A fully managed device solution combining 5G connectivity 
            with white-glove IT services for SMBs.
          </p>
          
          {/* Intro paragraph */}
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-3xl mx-auto">
            Today's small and medium-sized businesses need more than just laptops— they need 
            fully connected, secure, and ready-to-deploy endpoints that scale as fast as their business.
          </p>
          
          {/* Powered by badge */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Powered by</span>
            <span className="font-semibold text-primary">T-Mobile</span>
            <span className="text-neutral-400">+</span>
            <span className="font-semibold text-primary">Lifetime Endpoint Resources</span>
          </div>
          
          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://test.lifetimeepr.io/pcaas-enrollment', '_blank')}
            >
              Get Started Today
            </Button>
          </div>
          
          {/* Key benefits icons */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Always Connected
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Enterprise Security
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Fast Deployment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCaaSHero;
