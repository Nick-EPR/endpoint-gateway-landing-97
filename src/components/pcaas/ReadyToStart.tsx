import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Globe, Rocket, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";
const ReadyToStart = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    isVisible
  } = useIntersectionObserver(sectionRef, {
    threshold: 0.1
  });
  const steps = [{
    text: "Check your elgibility",
    icon: Phone
  }, {
    text: "Choose your bundle",
    icon: CheckCircle
  }, {
    text: "Deploy in days",
    icon: Rocket
  }];
  return <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10 dark:from-primary/5 dark:via-neutral-900 dark:to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Ready to Get Started?
              </h2>
            </div>
            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8">
              Join the growing number of SMBs who've simplified their IT with PCaaS
            </p>
          </div>

          {/* Process Steps */}
          <div className={`flex flex-col md:flex-row justify-center items-center gap-8 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {steps.map((step, index) => <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/20 dark:bg-primary/30 rounded-full flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {step.text}
                  </span>
                </div>
                {index < steps.length - 1 && <ArrowRight className="w-6 h-6 text-primary/60 hidden md:block" />}
              </div>)}
          </div>

          {/* CTA Button */}
          <div className={`mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button size="lg" className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 shadow-xl group transition-all duration-300 hover:scale-105" onClick={() => window.open('https://test.lifetimeepr.io/pcaas-enrollment', '_blank')}>
              Start Your PCaaS Journey
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Options */}
          <div className={`grid md:grid-cols-3 gap-6 max-w-2xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            
            
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default ReadyToStart;