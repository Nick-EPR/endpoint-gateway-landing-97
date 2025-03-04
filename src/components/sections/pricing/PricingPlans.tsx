
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPlans = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Choose Your Plan</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Our flexible pricing options are designed to grow with your business
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Essentials Plan */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Essentials</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">For small businesses getting started</p>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold dark:text-white">$29</span>
              <span className="text-neutral-600 dark:text-neutral-400 ml-2">/month per user</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              {["Basic device inventory", "Device lifecycle tracking", "Compliance reporting", "Email support", "Up to 100 devices"].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>

        {/* Professional Plan - Highlighted */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden border-2 border-primary relative transform scale-105">
          <div className="absolute top-0 inset-x-0 bg-primary text-center py-1 text-white text-sm font-medium">
            Most Popular
          </div>
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-700 pt-9">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Professional</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">For growing organizations</p>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold dark:text-white">$49</span>
              <span className="text-neutral-600 dark:text-neutral-400 ml-2">/month per user</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Essentials",
                "Advanced reporting",
                "Software license management",
                "Priority support",
                "Automated workflows",
                "Up to 500 devices",
                "Custom integrations"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow duration-300">
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Enterprise</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">For large organizations</p>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold dark:text-white">Custom</span>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Professional",
                "Unlimited devices",
                "Dedicated account manager",
                "Custom reporting",
                "24/7 priority support",
                "Advanced security features",
                "Custom SLA",
                "On-premise deployment option"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
