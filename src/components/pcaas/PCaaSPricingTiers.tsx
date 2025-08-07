import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, Laptop, Zap, Shield, Users, Wifi, Headphones, TrendingUp, Plus, ChevronDown, ChevronUp, Monitor, Cpu, Palette, Eye, Sun, Smartphone, Camera, Fingerprint, HardDrive, Battery } from "lucide-react";
import { useState } from "react";

interface TierFeature {
  category: string;
  icon: any;
  essential: string | boolean;
  professional: string | boolean;
  hasUpgrade?: boolean;
  isNew?: boolean;
  isDeviceSpec?: boolean;
}

interface DeviceSpec {
  category: string;
  essential: string | boolean;
  professional: string | boolean;
  hasUpgrade?: boolean;
  isNew?: boolean;
}

const PCaaSPricingTiers = () => {
  const [highlightedTier, setHighlightedTier] = useState<string | null>(null);
  const [isDeviceExpanded, setIsDeviceExpanded] = useState(false);

  const tiers = {
    essential: {
      name: "Essential",
      price: "$99",
      popular: true,
    },
    professional: {
      name: "Professional", 
      price: "$175",
      popular: false,
    }
  };

  const deviceSpecs: DeviceSpec[] = [
    {
      category: "Model",
      essential: "Lenovo ThinkPad T14 Gen 6 R5 Pro 340",
      professional: "Lenovo ThinkPad T14 Gen 6 R7 Pro 350"
    },
    {
      category: "Preloaded Operating System",
      essential: "Windows 11 Pro",
      professional: "Windows 11 Pro"
    },
    {
      category: "Processor",
      essential: "AMD Ryzen AI 5 PRO 340",
      professional: "AMD Ryzen AI 7 PRO 350",
      hasUpgrade: true
    },
    {
      category: "Color",
      essential: "Black",
      professional: "Black"
    },
    {
      category: "Human Presence Detection",
      essential: false,
      professional: true,
      isNew: true
    },
    {
      category: "Display Size",
      essential: "14\"",
      professional: "14\""
    },
    {
      category: "Anti-Glare",
      essential: false,
      professional: true,
      isNew: true
    },
    {
      category: "Touchscreen",
      essential: false,
      professional: true,
      isNew: true
    },
    {
      category: "Camera",
      essential: "5MP RGB+IR with Microphone",
      professional: "5MP RGB+IR with Microphone"
    },
    {
      category: "Fingerprint Reader",
      essential: true,
      professional: true
    },
    {
      category: "Memory",
      essential: "16GB DDR5 5600",
      professional: "32GB DDR5 5600",
      hasUpgrade: true
    },
    {
      category: "Storage",
      essential: "512GB SSD M.2",
      professional: "512GB SSD M.2"
    },
    {
      category: "Battery",
      essential: "4 Cell 57 WH Li-Ion",
      professional: "4 Cell 57 WH Li-Polymer",
      hasUpgrade: true
    }
  ];

  // Basic specs to show when collapsed (first 3 items)
  const basicDeviceSpecs = deviceSpecs.slice(0, 3);
  const detailedDeviceSpecs = deviceSpecs.slice(3);

  const features: TierFeature[] = [
    {
      category: "Device Specifications",
      icon: Laptop,
      essential: "Lenovo Thinkpad T14 Gen 6 R5 Pro 340",
      professional: "Lenovo Thinkpad T14 Gen 6 R7 Pro 350",
      isDeviceSpec: true
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

  const renderDeviceSpecValue = (value: string | boolean, isEssential: boolean = true, spec?: DeviceSpec) => {
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

    // Show indicators for Professional tier
    if (!isEssential && spec) {
      // Handle memory upgrade with highlighting
      if (spec.category === "Memory" && spec.hasUpgrade) {
        const essentialMemory = parseInt(String(spec.essential).replace(/\D/g, ''));
        const professionalMemory = parseInt(String(spec.professional).replace(/\D/g, ''));
        const difference = professionalMemory - essentialMemory;
        
        return (
          <div className="text-xs">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-1">
              <TrendingUp className="w-2 h-2" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">{essentialMemory}GB </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ {difference}GB</span>
            <span className="text-neutral-700 dark:text-neutral-300"> ({professionalMemory}GB total)</span>
          </div>
        );
      }

      // Handle processor upgrade with highlighting
      if (spec.category === "Processor" && spec.hasUpgrade) {
        return (
          <div className="text-xs">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-1">
              <TrendingUp className="w-2 h-2" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">AMD Ryzen AI </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ 7 PRO 350</span>
          </div>
        );
      }

      // Handle battery upgrade with highlighting  
      if (spec.category === "Battery" && spec.hasUpgrade) {
        return (
          <div className="text-xs">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-1">
              <TrendingUp className="w-2 h-2" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">4 Cell 57 WH </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ Li-Polymer</span>
          </div>
        );
      }

      // Handle new features
      if (spec.isNew && spec.essential === false) {
        return (
          <div className="text-xs">
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs mr-1">
              <Plus className="w-2 h-2" />
              ADDED
            </span>
            <br />
            <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{value}</span>
          </div>
        );
      }
      
      // Handle identical device specs - show in grey for Professional tier
      if (spec && spec.essential === spec.professional && typeof spec.professional === 'string') {
        return <span className="text-xs text-neutral-400 dark:text-neutral-500">{value}</span>;
      }
    }

    return <span className="text-xs text-neutral-700 dark:text-neutral-300">{value}</span>;
  };

  const getDeviceSpecIcon = (category: string) => {
    const iconMap: { [key: string]: any } = {
      "Model": Laptop,
      "Preloaded Operating System": Monitor,
      "Processor": Cpu,
      "Color": Palette,
      "Human Presence Detection": Eye,
      "Display Size": Monitor,
      "Anti-Glare": Sun,
      "Touchscreen": Smartphone,
      "Camera": Camera,
      "Fingerprint Reader": Fingerprint,
      "Memory": HardDrive,
      "Storage": HardDrive,
      "Battery": Battery
    };
    return iconMap[category] || Laptop;
  };

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
      
      // Handle Device comparison with part highlighting
      if (feature.category === "Device Specifications" && 
          typeof essentialValue === 'string' && typeof professionalValue === 'string') {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">Lenovo Thinkpad T14 Gen 6 </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ R7 Pro 350</span>
          </div>
        );
      }
      
      // Handle 5G Data comparison with improved styling
      if (feature.category === "5G High Speed Data Allowance" && 
          typeof essentialValue === 'string' && typeof professionalValue === 'string') {
        const essentialGB = parseInt(essentialValue.replace(/\D/g, ''));
        const professionalGB = parseInt(professionalValue.replace(/\D/g, ''));
        const difference = professionalGB - essentialGB;
        
        return (
          <div className="text-sm text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">{essentialGB} GB </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ {difference} GB</span>
            <span className="text-neutral-700 dark:text-neutral-300"> ({professionalGB} GB total)</span>
          </div>
        );
      }

      // Handle AI comparison with part highlighting
      if (feature.category === "AI") {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">Microsoft Copilot - </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ Enterprise</span>
          </div>
        );
      }

      // Handle Security comparison with part highlighting
      if (feature.category === "Standard Security") {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ {value}</span>
          </div>
        );
      }

      // Handle Patch Management with part highlighting
      if (feature.category === "Patch Management") {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ Managed</span>
            <span className="text-neutral-400 dark:text-neutral-500"> Patch Management</span>
          </div>
        );
      }

      // Handle Helpdesk with part highlighting
      if (feature.category === "Helpdesk") {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">24/7/365 Email, Phone, </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ Live Chat</span>
          </div>
        );
      }

      // Handle Deployment with part highlighting
      if (feature.category === "Deployment") {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">End User Level </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ 2 Day Shipping</span>
          </div>
        );
      }

      // Handle Business Continuity with part highlighting
      if (feature.category === "Business Continuity") {
        return (
          <div className="text-sm">
            <span className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold text-xs mr-2">
              <TrendingUp className="w-3 h-3" />
              UPGRADE
            </span>
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">Advanced Exchange </span>
            <span className="text-blue-300 dark:text-blue-300 font-semibold">+ 2 Day Shipping</span>
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
            <br />
            <span className="text-neutral-700 dark:text-neutral-300 font-semibold">{value}</span>
          </div>
        );
      }
      
      // Handle identical features - show in grey for Professional tier
      if (essentialValue === professionalValue && typeof professionalValue === 'string') {
        return <span className="text-sm text-neutral-400 dark:text-neutral-500">{value}</span>;
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
        <Card 
          className={`border-2 ${
            highlightedTier === 'essential' 
              ? 'border-primary dark:border-primary shadow-xl' 
              : 'border-primary dark:border-primary'
          } hover:shadow-xl transition-all duration-300 relative cursor-pointer`}
          onMouseEnter={() => setHighlightedTier('essential')}
          onMouseLeave={() => setHighlightedTier(null)}
          onClick={() => setHighlightedTier(highlightedTier === 'essential' ? null : 'essential')}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
            <Badge className="bg-primary text-primary-foreground px-4 py-1">
              Most Popular
            </Badge>
          </div>
          <CardContent className="p-6 text-center bg-primary/5 dark:bg-primary/10">
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 mt-2">
              {tiers.essential.name}
            </h4>
            <div className="text-3xl font-bold text-primary mb-3">
              {tiers.essential.price}
              <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 block">
                /month/36 months
              </span>
            </div>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </CardContent>
        </Card>

        <Card 
          className={`border-2 ${
            highlightedTier === 'professional' 
              ? 'border-primary dark:border-primary shadow-xl' 
              : 'border-neutral-200 dark:border-neutral-700'
          } hover:shadow-lg transition-all duration-300 cursor-pointer`}
          onMouseEnter={() => setHighlightedTier('professional')}
          onMouseLeave={() => setHighlightedTier(null)}
          onClick={() => setHighlightedTier(highlightedTier === 'professional' ? null : 'professional')}
        >
          <CardContent className="p-6 text-center">
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              {tiers.professional.name}
            </h4>
            <div className="text-3xl font-bold text-primary mb-3">
              {tiers.professional.price}
              <span className="text-sm font-normal text-neutral-600 dark:text-neutral-400 block">
                /month/36 months
              </span>
            </div>
            <Button variant="outline" size="sm" className="w-full">
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
        
        {/* Feature Comparison Table */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1px_1fr] bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
            <div className="p-4 font-semibold text-neutral-900 dark:text-white">
              Features
            </div>
            <div className={`p-4 text-center font-semibold transition-all duration-300 ${
              highlightedTier === 'essential' 
                ? 'bg-primary/10 dark:bg-primary/20' 
                : ''
            }`}>
              Essential
            </div>
            <div className="hidden md:block w-px bg-neutral-200 dark:bg-neutral-700"></div>
            <div className={`p-4 text-center font-semibold transition-all duration-300 ${
              highlightedTier === 'professional' 
                ? 'bg-primary/10 dark:bg-primary/20' 
                : ''
            }`}>
              Professional
            </div>
          </div>

          {/* Table Body */}
          {features.map((feature, index) => (
            <div key={index}>
              {/* Regular Feature Row */}
              {!feature.isDeviceSpec && (
                <div 
                  className={`grid grid-cols-1 md:grid-cols-[2fr_1fr_1px_1fr] hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-200 ${
                    index !== features.length - 1 
                      ? 'border-b border-neutral-100 dark:border-neutral-800' 
                      : ''
                  }`}
                >
                  {/* Feature Name */}
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {feature.category}
                    </span>
                  </div>

                  {/* Essential Column */}
                  <div className={`p-4 text-center transition-all duration-300 ${
                    highlightedTier === 'essential' 
                      ? 'bg-primary/5 dark:bg-primary/10' 
                      : ''
                  }`}>
                    <div className="flex items-center justify-center min-h-[3rem]">
                      {renderFeatureValue(feature.essential, true, feature)}
                    </div>
                  </div>

                  {/* Vertical Separator */}
                  <div className="hidden md:block w-px bg-neutral-200 dark:bg-neutral-700"></div>

                  {/* Professional Column */}
                  <div className={`p-4 text-center transition-all duration-300 ${
                    highlightedTier === 'professional' 
                      ? 'bg-primary/5 dark:bg-primary/10' 
                      : ''
                  }`}>
                    <div className="flex items-center justify-center min-h-[3rem]">
                      {renderFeatureValue(feature.professional, false, feature)}
                    </div>
                  </div>
                </div>
              )}

              {/* Device Specifications Expandable Row */}
              {feature.isDeviceSpec && (
                <div className="border-b border-neutral-100 dark:border-neutral-800">
                  {/* Device Header Row */}
                  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1px_1fr] hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-200">
                    {/* Feature Name with Toggle */}
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <span className="font-medium text-neutral-900 dark:text-white">
                            {feature.category}
                          </span>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                            {isDeviceExpanded ? "Detailed hardware comparison" : "Click to view detailed specs"}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsDeviceExpanded(!isDeviceExpanded)}
                        className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 hover:text-primary"
                      >
                        {isDeviceExpanded ? (
                          <>
                            <ChevronUp className="w-4 h-4" />
                            Hide Details
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4" />
                            Show Details
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Essential Device Summary */}
                    <div className={`p-4 text-center transition-all duration-300 ${
                      highlightedTier === 'essential' 
                        ? 'bg-primary/5 dark:bg-primary/10' 
                        : ''
                    }`}>
                      <div className="flex items-center justify-center min-h-[3rem]">
                        {renderFeatureValue(feature.essential, true, feature)}
                      </div>
                    </div>

                    {/* Vertical Separator */}
                    <div className="hidden md:block w-px bg-neutral-200 dark:bg-neutral-700"></div>

                    {/* Professional Device Summary */}
                    <div className={`p-4 text-center transition-all duration-300 ${
                      highlightedTier === 'professional' 
                        ? 'bg-primary/5 dark:bg-primary/10' 
                        : ''
                    }`}>
                      <div className="flex items-center justify-center min-h-[3rem]">
                        {renderFeatureValue(feature.professional, false, feature)}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Device Details */}
                  {isDeviceExpanded && (
                    <div className="bg-neutral-25 dark:bg-neutral-900/50">
                      {/* Basic specs - always shown when expanded */}
                      {basicDeviceSpecs.map((spec, specIndex) => (
                        <div key={specIndex} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1px_1fr] border-b border-neutral-100 dark:border-neutral-800 last:border-b-0">
                          <div className="px-4 py-3 pl-8 flex items-center gap-3">
                            <div className="w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              {(() => {
                                const IconComponent = getDeviceSpecIcon(spec.category);
                                return <IconComponent className="w-3 h-3 text-primary" />;
                              })()}
                            </div>
                            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                              {spec.category}
                            </span>
                          </div>
                          <div className={`px-4 py-3 text-center transition-all duration-300 ${
                            highlightedTier === 'essential' 
                              ? 'bg-primary/5 dark:bg-primary/10' 
                              : ''
                          }`}>
                            <div className="flex items-center justify-center">
                              {renderDeviceSpecValue(spec.essential, true, spec)}
                            </div>
                          </div>
                          <div className="hidden md:block w-px bg-neutral-200 dark:bg-neutral-700"></div>
                          <div className={`px-4 py-3 text-center transition-all duration-300 ${
                            highlightedTier === 'professional' 
                              ? 'bg-primary/5 dark:bg-primary/10' 
                              : ''
                          }`}>
                            <div className="flex items-center justify-center">
                              {renderDeviceSpecValue(spec.professional, false, spec)}
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Detailed specs */}
                      {detailedDeviceSpecs.map((spec, specIndex) => (
                        <div key={`detailed-${specIndex}`} className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1px_1fr] border-b border-neutral-100 dark:border-neutral-800 last:border-b-0">
                          <div className="px-4 py-3 pl-8 flex items-center gap-3">
                            <div className="w-6 h-6 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              {(() => {
                                const IconComponent = getDeviceSpecIcon(spec.category);
                                return <IconComponent className="w-3 h-3 text-primary" />;
                              })()}
                            </div>
                            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                              {spec.category}
                            </span>
                          </div>
                          <div className={`px-4 py-3 text-center transition-all duration-300 ${
                            highlightedTier === 'essential' 
                              ? 'bg-primary/5 dark:bg-primary/10' 
                              : ''
                          }`}>
                            <div className="flex items-center justify-center">
                              {renderDeviceSpecValue(spec.essential, true, spec)}
                            </div>
                          </div>
                          <div className="hidden md:block w-px bg-neutral-200 dark:bg-neutral-700"></div>
                          <div className={`px-4 py-3 text-center transition-all duration-300 ${
                            highlightedTier === 'professional' 
                              ? 'bg-primary/5 dark:bg-primary/10' 
                              : ''
                          }`}>
                            <div className="flex items-center justify-center">
                              {renderDeviceSpecValue(spec.professional, false, spec)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PCaaSPricingTiers;