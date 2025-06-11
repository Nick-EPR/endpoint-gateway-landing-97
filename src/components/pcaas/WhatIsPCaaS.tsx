
import { Card, CardContent } from "@/components/ui/card";
import { Check, Laptop, Shield, Headphones, RefreshCw } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const WhatIsPCaaS = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const inclusions = [
    { text: "Lenovo® ThinkPad™ (T14 Gen 5 or T14s Gen 6 options)", icon: Laptop },
    { text: "Microsoft 365 (Basic or Business Premium) + AI-powered Copilot", icon: RefreshCw },
    { text: "Built-in 5G connectivity (75–125GB/month)", icon: RefreshCw },
    { text: "Pre-configured setup + shipping (devices arrive ready-to-use)", icon: Check },
    { text: "24/7 helpdesk support", icon: Headphones },
    { text: "Break-fix service, device recovery, and advanced exchange", icon: RefreshCw },
    { text: "Embedded Security Agent + Remote Wipe, Microsoft Defender, Patch management", icon: Shield },
    { text: "Secure offboarding and end-of-life device management", icon: Shield }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Laptop className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                What is PC-as-a-Service?
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                PCaaS stands for <strong>PC-as-a-Service</strong>. It's a <strong>fully managed device solution</strong> that 
                bundles 5G-ready laptops, Microsoft 365, live support, security, and lifecycle services into{" "}
                <strong>one predictable monthly fee</strong>.
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                This is <strong>not just leasing</strong>, but a fully managed service where device ownership 
                transfer is an option at the end of the term.
              </p>
            </div>
          </div>

          {/* What's Included Card */}
          <Card className={`border-2 border-primary/20 dark:border-primary/30 transition-all duration-1000 delay-300 hover:shadow-xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
                <Check className="w-6 h-6 text-primary" />
                What's Included in Your PCaaS Bundle
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {inclusions.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 group transition-all duration-500 hover:bg-primary/5 rounded-lg p-3 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPCaaS;
