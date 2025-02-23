
import { Globe, Shield, Users, Server, Replace, Zap, Recycle, Timer, Microscope, Lock, ShieldCheck, HardDrive, Cloud, Layers, Search, UserCog, Package2, UserPlus, Warehouse, Network, Database, BoxSelect } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: {
    to: string;
    text: string;
  };
  isHighlighted?: boolean;
  comingSoon?: boolean;
  keywords?: string[];
}

interface DetailedFeature {
  category: string;
  features: string[];
}

const Features = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const platformFeatures: Feature[] = [{
    icon: <Database className="w-8 h-8 text-neutral-700" />,
    title: "Unified Asset Database",
    description: "Centralized asset management across all EPR products with real-time synchronization",
    isHighlighted: true,
    keywords: ["platform", "database", "centralized", "unified", "sync"]
  }, {
    icon: <Network className="w-8 h-8 text-neutral-700" />,
    title: "Cross-Product Integration",
    description: "Seamless workflows between HeliAM, Toolbox, and Luemin for comprehensive device lifecycle management",
    isHighlighted: true,
    keywords: ["integration", "workflow", "platform", "unified"]
  }, {
    icon: <BoxSelect className="w-8 h-8 text-neutral-700" />,
    title: "Enterprise Controls",
    description: "Unified security, compliance, and access controls across all EPR platform products",
    isHighlighted: true,
    keywords: ["security", "compliance", "enterprise", "controls", "platform"]
  }];

  const heliamFeatures: Feature[] = [{
    icon: <UserCog className="w-8 h-8 text-neutral-700" />,
    title: "Intelligent Onboarding",
    description: "Automatically generate and assign standardized equipment packages based on employee roles",
    isHighlighted: true,
    keywords: ["onboarding", "roles", "equipment", "packages"]
  }, {
    icon: <UserPlus className="w-8 h-8 text-neutral-700" />,
    title: "HR Integration",
    description: "Trigger equipment deployments automatically from your HR system",
    isHighlighted: true,
    keywords: ["HR", "integration", "onboarding", "automation"]
  }, {
    icon: <Recycle className="w-8 h-8 text-neutral-700" />,
    title: "Lifecycle Management",
    description: "AI-powered insights to maximize asset ROI throughout their lifespan",
    isHighlighted: true,
    keywords: ["lifecycle", "ROI", "optimization", "management"]
  }];

  const toolboxFeatures: Feature[] = [{
    icon: <Warehouse className="w-8 h-8 text-neutral-700" />,
    title: "Secure Storage",
    description: "Access-controlled warehouse facilities with real-time inventory monitoring",
    isHighlighted: true,
    keywords: ["warehouse", "storage", "inventory", "security"]
  }, {
    icon: <Timer className="w-8 h-8 text-neutral-700" />,
    title: "24-Hour Resolution",
    description: "Next-day replacement device delivery nationwide",
    isHighlighted: true,
    keywords: ["delivery", "replacement", "shipping", "speed"]
  }, {
    icon: <Microscope className="w-8 h-8 text-neutral-700" />,
    title: "Device Services",
    description: "Professional diagnostics and repair in authorized facilities",
    isHighlighted: true,
    keywords: ["repair", "diagnostics", "maintenance"]
  }];

  const lueminFeatures: Feature[] = [{
    icon: <Cloud className="w-8 h-8 text-neutral-700" />,
    title: "Remote Management",
    description: "Centralized platform for remote device control and monitoring",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["remote", "control", "manage", "monitor"]
  }, {
    icon: <Users className="w-8 h-8 text-neutral-700" />,
    title: "IT Support",
    description: "On-demand technical support with secure remote access",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["support", "remote", "help desk"]
  }, {
    icon: <ShieldCheck className="w-8 h-8 text-neutral-700" />,
    title: "Security Controls",
    description: "Advanced device security and compliance enforcement",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["security", "compliance", "control"]
  }];

  const filteredFeatures = (features: Feature[]) => {
    const searchTerm = searchQuery.toLowerCase();
    return features.filter(feature => (
      feature.title.toLowerCase().includes(searchTerm) ||
      feature.description.toLowerCase().includes(searchTerm) ||
      feature.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm))
    ));
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 animate-on-scroll flex items-center justify-center gap-2">
          <Layers className="w-8 h-8 text-neutral-700" />
          Platform Features
        </h2>
        <p className="text-center text-base md:text-lg mb-6 animate-on-scroll max-w-2xl mx-auto">
          Complete device lifecycle management with{' '}
          <span className="text-neutral-800 font-semibold">intelligent predictive maintenance</span>{' '}
          capabilities
        </p>
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <Input
              type="text"
              placeholder="Search features (e.g., repair, RDP, shipping)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/80 border-neutral-200"
            />
          </div>
        </div>

        {/* Platform Features */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {filteredFeatures(platformFeatures).map((feature, index) => (
            <div 
              key={index}
              className="col-span-3 p-4 rounded-lg bg-gradient-to-br from-white via-neutral-50 to-white border border-neutral-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product-Specific Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* HeliAM Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">HeliAM</h3>
              <p className="text-sm text-neutral-600">Asset Management Platform</p>
            </div>
            {filteredFeatures(heliamFeatures).map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-white/80 border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Toolbox Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Toolbox</h3>
              <p className="text-sm text-neutral-600">Logistics & Maintenance</p>
            </div>
            {filteredFeatures(toolboxFeatures).map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-white/80 border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Luemin Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Luemin</h3>
              <p className="text-sm text-neutral-600">Device Management</p>
            </div>
            {filteredFeatures(lueminFeatures).map((feature, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-white/80 border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm relative"
              >
                {feature.comingSoon && (
                  <span className="absolute top-2 right-2 text-xs px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded-full leading-none">
                    Soon
                  </span>
                )}
                <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Features Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-xl font-semibold text-center mb-8">Additional Platform Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedFeatures.map((category, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-lg text-neutral-800">{category.category}</h4>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-neutral-600">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
