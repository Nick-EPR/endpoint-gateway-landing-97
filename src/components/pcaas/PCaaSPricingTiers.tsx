import { useState } from "react";
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
  const [selectedTier, setSelectedTier] = useState<'essential' | 'professional'>('essential');

  const tiers = {
    essential: {
      name: "Essential Bundle",
      price: "$99",
      popular: false,
      color: "border-neutral-200 dark:border-neutral-700"
    },
    professional: {
      name: "Professional Bundle", 
      price: "$175",
      popular: true,
      color: "border-primary dark:border-primary"
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
      return <X className="w-4 h-4 text-red-500" />;
    }
    if (value === true) {
      return <Check className="w-4 h-4 text-green-500" />;
    }
    return <span className="text-sm text-neutral-700 dark:text-neutral-300">{value}</span>;
  };

  return (
    <div className="space-y-8">
      {/* Tier Selection */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {Object.entries(tiers).map(([key, tier]) => (
          <Card 
            key={key}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedTier === key ? tier.color : 'border-neutral-200 dark:border-neutral-700'
            } ${selectedTier === key ? 'ring-2 ring-primary/20' : ''}`}
            onClick={() => setSelectedTier(key as 'essential' | 'professional')}
          >
            <CardContent className="p-6 text-center relative">
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                {tier.name}
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">
                {tier.price}
                <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400">
                  /month/36 months
                </span>
              </div>
              <Button 
                variant={selectedTier === key ? "default" : "outline"}
                size="sm"
                className="mt-2"
              >
                {selectedTier === key ? 'Selected' : 'Select Plan'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Tier Details */}
      <Card className="border-2 border-primary/20 dark:border-primary/30">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
            <Check className="w-6 h-6 text-primary" />
            {tiers[selectedTier].name} Features
          </h3>
          
          <div className="space-y-4">
            {features.map((feature, index) => {
              const value = selectedTier === 'essential' ? feature.essential : feature.professional;
              
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
                      {feature.category}
                    </h4>
                    <div className="flex items-center gap-2">
                      {renderFeatureValue(value)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PCaaSPricingTiers;