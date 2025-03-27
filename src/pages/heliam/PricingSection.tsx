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
  return;
};
export default PricingSection;