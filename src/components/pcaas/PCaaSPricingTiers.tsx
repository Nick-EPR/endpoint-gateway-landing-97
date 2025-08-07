import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Laptop, Zap, Shield, Users, Wifi, Headphones } from "lucide-react";

interface TierFeature {
  category: string;
  icon: any;
  essential: string | boolean;
  professional: string | boolean;
}

const PCaaSPricingTiers = () => {
  const tiers = {
    essential: {
      name: "Essential Bundle",
      price: "$99",
      popular: false,
    },
    professional: {
      name: "Professional Bundle", 
      price: "$175",
      popular: true,
    }
  };

  const features: TierFeature[] = [
    {
      category: "Device",
      icon: Laptop,
      essential: "Lenovo Thinkpad T14 Gen 6 R5 Pro 340",
      professional: "Lenovo Thinkpad T14 Gen 6 R7 Pro 350"
    },
    {
      category: "5G High Speed Data Allowance",
      icon: Wifi,
      essential: "75 GB",
      professional: "125 GB"
    },
    {
      category: "AI",
      icon: Zap,
      essential: "Microsoft Copilot Bing Chat (included with Windows 11)",
      professional: "Microsoft Copilot - Enterprise"
    },
    {
      category: "Collaboration Services",
      icon: Users,
      essential: false,
      professional: "Microsoft M365 Business Standard (including Teams)"
    },
    {
      category: "Standard Security",
      icon: Shield,
      essential: "Window Security (included with Windows 11)",
      professional: "Absolute Resilience for Automation"
    },
    {
      category: "Patch Management",
      icon: Shield,
      essential: "Unmanaged Patch Management",
      professional: "Managed Patch Management"
    },
    {
      category: "Internal Hardware Loss Prevention",
      icon: Shield,
      essential: "Embedded Agent",
      professional: "Embedded Agent"
    },
    {
      category: "Managed Security Services",
      icon: Shield,
      essential: false,
      professional: "Proactive Workstation Monitoring"
    },
    {
      category: "Helpdesk",
      icon: Headphones,
      essential: "24/7/365 Email, Phone",
      professional: "24/7/365 Email, Phone, Live Chat"
    },
    {
      category: "Support",
      icon: Headphones,
      essential: "Device, Operating System, and Microsoft Software Support",
      professional: "Device, Operating System, and Microsoft Software Support"
    },
    {
      category: "Remote Support",
      icon: Headphones,
      essential: "User-Initiated Remote Support",
      professional: "User-Initiated Remote Support"
    },
    {
      category: "Deployment",
      icon: Zap,
      essential: "Company Level Ground Shipping",
      professional: "End User Level 2 Day Shipping"
    },
    {
      category: "Business Continuity",
      icon: Zap,
      essential: "Advanced Exchange Ground Shipping",
      professional: "Advanced Exchange 2 Day Shipping"
    },
    {
      category: "End of Lease",
      icon: Zap,
      essential: "Recovery",
      professional: "Recovery"
    }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (value === false) {
      return (
        <div className="flex items-center justify-center">
          <X className="w-4 h-4 text-red-500" />
        </div>
      );
    }
    if (value === true) {
      return (
        <div className="flex items-center justify-center">
          <Check className="w-4 h-4 text-green-500" />
        </div>
      );
    }
    return <span className="text-sm text-neutral-700 dark:text-neutral-300">{value}</span>;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
          Compare T-Mobile PCaaS Plans
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          Choose the plan that best fits your business needs
        </p>
      </div>

      {/* Side-by-Side Comparison */}
      <Card className="border-2 border-primary/20 dark:border-primary/30 overflow-hidden">
        <CardContent className="p-0">
          {/* Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 dark:border-neutral-700">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-800">
              <h4 className="font-semibold text-neutral-900 dark:text-white">Features</h4>
            </div>
            <div className="p-6 text-center border-l border-neutral-200 dark:border-neutral-700">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {tiers.essential.name}
              </h4>
              <div className="text-2xl font-bold text-primary mb-3">
                {tiers.essential.price}
                <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 block">
                  /month/36 months
                </span>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
            <div className="p-6 text-center border-l border-neutral-200 dark:border-neutral-700 bg-primary/5 dark:bg-primary/10 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                Most Popular
              </Badge>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {tiers.professional.name}
              </h4>
              <div className="text-2xl font-bold text-primary mb-3">
                {tiers.professional.price}
                <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 block">
                  /month/36 months
                </span>
              </div>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>

          {/* Feature Comparison Rows */}
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200 dark:border-neutral-700 hover:bg-primary/5 transition-colors ${
                index % 2 === 0 ? 'bg-neutral-50/50 dark:bg-neutral-800/50' : ''
              }`}
            >
              <div className="p-4 flex items-center gap-3 bg-neutral-50 dark:bg-neutral-800">
                <div className="w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-3 h-3 text-primary" />
                </div>
                <span className="font-medium text-neutral-900 dark:text-white text-sm">
                  {feature.category}
                </span>
              </div>
              <div className="p-4 border-l border-neutral-200 dark:border-neutral-700">
                {renderFeatureValue(feature.essential)}
              </div>
              <div className="p-4 border-l border-neutral-200 dark:border-neutral-700">
                {renderFeatureValue(feature.professional)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PCaaSPricingTiers;