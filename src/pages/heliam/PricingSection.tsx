
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, HelpCircle, X } from "lucide-react";

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [{
    name: "Starter",
    price: annual ? 499 : 49,
    description: "Perfect for small businesses getting started with ITAM",
    features: ["Up to 250 assets", "Basic asset discovery", "Hardware & software inventory", "5 user licenses", "Basic reporting", "Email support"],
    notIncluded: ["Advanced security features", "Custom dashboards", "API access", "Advanced compliance reporting"],
    popular: false,
    cta: "Get Started"
  }, {
    name: "Professional",
    price: annual ? 999 : 99,
    description: "Designed for growing organizations with complex IT environments",
    features: ["Up to 1,000 assets", "Advanced asset discovery & tracking", "Software license management", "15 user licenses", "Advanced reporting & analytics", "Custom dashboards", "API access", "Priority support"],
    notIncluded: ["AI-powered insights", "White-label portal"],
    popular: true,
    cta: "Start Free Trial"
  }, {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations with extensive IT infrastructure",
    features: ["Unlimited assets", "Global deployment", "Unlimited user licenses", "Advanced security features", "Complete compliance suite", "AI-powered insights", "White-label portal", "Dedicated account manager", "24/7 priority support", "Custom integration services"],
    notIncluded: [],
    popular: false,
    cta: "Contact Sales"
  }];

  return (
    <section className="py-20 bg-white dark:bg-neutral-900" id="pricing">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Choose the plan that works best for your organization's needs and scale as you grow
            </p>
            
            {/* Billing toggle */}
            <div className="flex items-center justify-center mt-8">
              <span className={`mr-3 ${annual ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>
                Annual Billing
              </span>
              <button 
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${annual ? 'bg-neutral-200 dark:bg-neutral-700' : 'bg-primary'}`}
              >
                <span 
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${annual ? 'translate-x-1' : 'translate-x-7'}`} 
                />
              </button>
              <span className={`ml-3 ${!annual ? 'text-neutral-900 dark:text-white' : 'text-neutral-500 dark:text-neutral-400'}`}>
                Monthly Billing
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-lg' 
                    : 'border border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <h3 className="font-bold text-xl mb-2 text-neutral-900 dark:text-white">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                    {typeof plan.price === 'number' && (
                      <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                        {annual ? '/year' : '/month'}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                  
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start text-neutral-500 dark:text-neutral-500">
                      <X className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-neutral-800 dark:bg-neutral-700 hover:bg-neutral-700 dark:hover:bg-neutral-600'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
