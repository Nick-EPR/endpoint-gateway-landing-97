
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, X } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      price: annual ? 499 : 49,
      description: "Perfect for small businesses getting started with ITAM",
      features: [
        "Up to 250 assets",
        "Basic asset discovery",
        "Hardware & software inventory",
        "5 user licenses",
        "Basic reporting",
        "Email support"
      ],
      notIncluded: [
        "Advanced security features",
        "Custom dashboards",
        "API access",
        "Advanced compliance reporting"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: annual ? 999 : 99,
      description: "Designed for growing organizations with complex IT environments",
      features: [
        "Up to 1,000 assets",
        "Advanced asset discovery & tracking",
        "Software license management",
        "15 user licenses",
        "Advanced reporting & analytics",
        "Custom dashboards",
        "API access",
        "Priority support"
      ],
      notIncluded: [
        "AI-powered insights",
        "White-label portal"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for large organizations with extensive IT infrastructure",
      features: [
        "Unlimited assets",
        "Global deployment",
        "Unlimited user licenses",
        "Advanced security features",
        "Complete compliance suite",
        "AI-powered insights",
        "White-label portal",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integration services"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-50 dark:bg-neutral-800/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Simple, Transparent Pricing</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Choose the plan that fits your organization's needs, with flexible options to scale as you grow.
          </p>
          
          {/* Toggle annual/monthly */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!annual ? 'text-neutral-600 dark:text-neutral-300' : 'text-primary font-semibold'}`}>
              Annual Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${annual ? 'bg-neutral-300 dark:bg-neutral-600' : 'bg-primary'}`}
            >
              <span 
                className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${annual ? 'left-1' : 'left-8'}`}
              ></span>
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-neutral-600 dark:text-neutral-300' : 'text-primary font-semibold'}`}>
              Monthly Billing
            </span>
          </div>
          
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            Save up to 20% with annual billing
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden border ${
                plan.popular 
                  ? 'border-primary relative ring-2 ring-primary/20 dark:ring-primary/30' 
                  : 'border-transparent'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary">
                  Most Popular
                </Badge>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-5">{plan.description}</p>
                
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-end">
                      <span className="text-4xl font-bold dark:text-white">${plan.price}</span>
                      <span className="text-neutral-500 dark:text-neutral-400 ml-2 mb-1">
                        /{annual ? 'year' : 'month'}
                      </span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold dark:text-white">{plan.price}</div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                >
                  {plan.cta}
                </Button>
              </div>
              
              <div className="border-t dark:border-neutral-700 p-8">
                <h4 className="font-medium mb-4 dark:text-white">What's included:</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-5 w-5 rounded-full flex shrink-0 items-center justify-center bg-green-100 dark:bg-green-900/30 mr-3 mt-0.5">
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-medium mb-4 text-neutral-600 dark:text-neutral-400">Not included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="h-5 w-5 rounded-full flex shrink-0 items-center justify-center bg-red-100 dark:bg-red-900/30 mr-3 mt-0.5">
                            <X className="h-3 w-3 text-red-600 dark:text-red-400" />
                          </div>
                          <span className="text-sm text-neutral-500 dark:text-neutral-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-600 dark:text-neutral-300 mb-2">
            Need a customized solution? Contact our sales team.
          </p>
          <Button variant="outline" className="dark:text-white">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
