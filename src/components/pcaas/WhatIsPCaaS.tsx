
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const WhatIsPCaaS = () => {
  const inclusions = [
    "Lenovo® ThinkPad™ (T14 Gen 5 or T14s Gen 6 options)",
    "Microsoft 365 (Basic or Business Premium) + AI-powered Copilot",
    "Built-in 5G connectivity (75–125GB/month)",
    "Pre-configured setup + shipping (devices arrive ready-to-use)",
    "24/7 helpdesk support",
    "Break-fix service, device recovery, and advanced exchange",
    "Embedded Security Agent + Remote Wipe, Microsoft Defender, Patch management",
    "Secure offboarding and end-of-life device management"
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              What is PC-as-a-Service?
            </h2>
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
          <Card className="border-2 border-primary/20 dark:border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
                What's Included in Your PCaaS Bundle
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
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
