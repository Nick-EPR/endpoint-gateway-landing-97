import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Laptop, Zap, Shield, Users, Wifi, Headphones, TrendingUp, Plus } from "lucide-react";

interface TierFeature {
  category: string;
  icon: any;
  essential: string | boolean;
  professional: string | boolean;
}

const PCaaSPricingTiers = () => {
  const tiers = {
    essential: {
      name: "Essential",
      price: "$99",
      popular: false,
    },
    professional: {
      name: "Professional", 
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

  const renderFeatureValue = (value: string | boolean, isEssential: boolean = true, feature?: TierFeature) => {
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

    // Calculate and show difference for Professional tier
    if (!isEssential && feature) {
      const essentialValue = feature.essential;
      const professionalValue = feature.professional;
      
      // Handle 5G Data comparison
      if (feature.category === "5G High Speed Data Allowance" && 
          typeof essentialValue === 'string' && typeof professionalValue === 'string') {
        const essentialGB = parseInt(essentialValue.replace(/\D/g, ''));
        const professionalGB = parseInt(professionalValue.replace(/\D/g, ''));
        const difference = professionalGB - essentialGB;
        
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="text-green-600 dark:text-green-400 font-semibold">+{difference}GB </span>
            {value}
          </div>
        );
      }

      // Handle upgrades for other features
      const upgradeFeatures = [
        "Device", // R5 to R7 processor
        "AI", // Basic to Enterprise Copilot
        "Standard Security", // Windows Security to Absolute Resilience
        "Patch Management", // Unmanaged to Managed
        "Helpdesk", // Email/Phone to Email/Phone/Live Chat
        "Deployment", // Ground to 2 Day Shipping
        "Business Continuity" // Ground to 2 Day Shipping
      ];

      if (upgradeFeatures.includes(feature.category) && essentialValue !== false) {
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            {value}
          </div>
        );
      }

      // Handle new features (Essential is false, Professional has value)
      if (essentialValue === false && professionalValue !== false) {
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs mr-2">
              <Plus className="w-3 h-3" />
              ADDED
            </span>
            {value}
          </div>
        );
      }
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

      {/* Plan Headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-2 border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 text-center">
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              {tiers.essential.name}
            </h4>
            <div className="text-3xl font-bold text-primary mb-3">
              {tiers.essential.price}
              <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 block">
                /month/36 months
              </span>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Get Started
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-primary dark:border-primary hover:shadow-xl transition-all duration-300 relative">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
            <Badge className="bg-primary text-primary-foreground px-4 py-1">
              Most Popular
            </Badge>
          </div>
          <CardContent className="p-6 text-center bg-primary/5 dark:bg-primary/10">
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 mt-2">
              {tiers.professional.name}
            </h4>
            <div className="text-3xl font-bold text-primary mb-3">
              {tiers.professional.price}
              <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 block">
                /month/36 months
              </span>
            </div>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Feature Comparison */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white text-center mb-6">
          Feature Comparison
        </h4>
        
        {features.map((feature, index) => (
          <Card 
            key={index}
            className="hover:shadow-md transition-all duration-200 border border-neutral-200 dark:border-neutral-700"
          >
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Feature Name */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {feature.category}
                  </span>
                </div>

                {/* Essential Features */}
                <div className="md:text-center">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 font-medium uppercase tracking-wide">
                    Essential
                  </div>
                  <div className="min-h-[2rem] flex items-center md:justify-center">
                    {renderFeatureValue(feature.essential, true, feature)}
                  </div>
                </div>

                {/* Professional Features */}
                <div className="md:text-center">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-1 font-medium uppercase tracking-wide">
                    Professional
                  </div>
                  <div className="min-h-[2rem] flex items-center md:justify-center">
                    {renderFeatureValue(feature.professional, false, feature)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PCaaSPricingTiers;