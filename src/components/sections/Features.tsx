import { Globe, Shield, Users, Server, Replace, Zap, Recycle, Timer, Microscope, Lock, ShieldCheck, HardDrive, Cloud, Layers, Search, UserCog, Package2, UserPlus, Warehouse } from "lucide-react";
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

  const features: Feature[] = [{
    icon: <UserCog className="w-8 h-8 text-neutral-700" />,
    title: "Intelligent Onboarding Automation",
    description: "Automatically generate and assign standardized equipment packages based on employee roles and departments",
    isHighlighted: true,
    keywords: ["onboarding", "roles", "equipment", "packages", "groups", "standardization", "automation"]
  }, {
    icon: <UserPlus className="w-8 h-8 text-neutral-700" />,
    title: "HR-Integrated Deployment",
    description: "Trigger equipment deployments automatically from your HR system, with Toolbox handling fulfillment and delivery",
    isHighlighted: true,
    keywords: ["HR", "integration", "onboarding", "workflow", "automation", "shipping"]
  }, {
    icon: <Warehouse className="w-8 h-8 text-neutral-700" />,
    title: "Secure Asset Storage",
    description: "Store and manage your IT assets in Toolbox's access-controlled warehouse facilities with real-time inventory monitoring",
    isHighlighted: true,
    keywords: ["warehouse", "storage", "security", "inventory", "management", "tracking"]
  }, {
    icon: <Microscope className="w-8 h-8 text-neutral-700" />,
    title: "Professional Device Diagnostics",
    description: "Expert hardware assessment and repair services performed in authorized repair facilities",
    isHighlighted: true,
    keywords: ["repair", "diagnostics", "hardware", "automation", "testing", "maintenance", "troubleshooting"]
  }, {
    icon: <ShieldCheck className="w-8 h-8 text-neutral-700" />,
    title: "Secure Asset Retirement",
    description: "Professional data sanitization and certified device destruction with complete audit documentation",
    isHighlighted: true,
    keywords: ["security", "data", "wiping", "destruction", "audit", "compliance", "GDPR", "HIPAA"]
  }, {
    icon: <Cloud className="w-8 h-8 text-neutral-700" />,
    title: "Remote Device Management",
    description: "Centralized platform for remote device control, including lock and wipe capabilities",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["remote", "control", "manage", "lock", "wipe", "RDP", "remote desktop", "remote access"]
  }, {
    icon: <Globe className="w-8 h-8 text-neutral-700" />,
    title: "Multi-Location Support",
    description: "Unified asset management across all your locations with location-specific policies and workflows",
    isHighlighted: true,
    keywords: ["nationwide", "coverage", "locations", "management", "global", "multi-site"]
  }, {
    icon: <Timer className="w-8 h-8 text-neutral-700" />,
    title: "24-Hour Device Resolution",
    description: "Next-day replacement device delivery nationwide to minimize employee downtime",
    isHighlighted: true,
    keywords: ["next-day", "resolution", "replacement", "overnight", "shipping", "speed", "fast", "quick", "delivery"]
  }, {
    icon: <Users className="w-8 h-8 text-neutral-700" />,
    title: "Remote IT Support",
    description: "On-demand technical support with secure remote access capabilities",
    comingSoon: true,
    keywords: ["remote", "support", "troubleshooting", "maintenance", "help desk", "IT support"]
  }, {
    icon: <Shield className="w-8 h-8 text-neutral-700" />,
    title: "Enterprise Security",
    description: "Comprehensive security controls and compliance features for all asset operations",
    link: {
      to: "/security",
      text: "Learn More"
    },
    keywords: ["security", "compliance", "enterprise", "encryption", "protection"]
  }, {
    icon: <Recycle className="w-8 h-8 text-neutral-700" />,
    title: "Asset Lifecycle Optimization",
    description: "AI-powered insights to maximize asset ROI throughout their operational lifespan",
    isHighlighted: true,
    keywords: ["lifecycle", "management", "ROI", "optimization", "asset management", "depreciation"]
  }];

  const detailedFeatures: DetailedFeature[] = [
    {
      category: "User Management",
      features: [
        "Role-based access control with granular permissions",
        "Custom user groups and organizational hierarchies",
        "Employee onboarding and offboarding workflows",
        "Department-level asset allocation rules",
        "User activity logging and audit trails",
        "Automated equipment package assignment",
        "HR system integration for seamless onboarding"
      ]
    },
    {
      category: "Asset Management",
      features: [
        "Comprehensive asset lifecycle tracking from procurement to retirement",
        "Asset depreciation and ROI calculations",
        "Custom asset categories and attributes",
        "Secure warehouse storage and inventory management",
        "Asset history and chain of custody tracking",
        "Software license management and compliance",
        "Role-based equipment package templates",
        "Automated onboarding kit assembly"
      ]
    },
    {
      category: "Reporting & Analytics",
      features: [
        "Customizable dashboards and reports",
        "Asset utilization and performance metrics",
        "Cost center allocation and chargeback reporting",
        "Compliance and audit reporting",
        "Predictive maintenance analytics",
        "Budget forecasting and planning tools",
        "Onboarding kit fulfillment metrics",
        "Equipment package optimization insights"
      ]
    },
    {
      category: "Integration & APIs",
      features: [
        "REST API for custom integrations",
        "LDAP/Active Directory integration",
        "SSO support (SAML, OAuth)",
        "Integration with major MDM platforms",
        "ServiceNow and ITSM tool integration",
        "Custom webhook support",
        "Native Toolbox integration for logistics",
        "HR system connectors"
      ]
    }
  ];

  const filteredFeatures = features.filter(feature => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      feature.title.toLowerCase().includes(searchTerm) ||
      feature.description.toLowerCase().includes(searchTerm) ||
      feature.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm))
    );
  });

  return <section id="features" className="py-20 md:py-32 bg-neutral-light">
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {filteredFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg transition-all duration-500 backdrop-blur-sm border 
                ${feature.isHighlighted 
                  ? 'bg-gradient-to-br from-white via-neutral-50 to-white border-neutral-200 shadow-md hover:shadow-lg hover:-translate-y-1' 
                  : 'bg-white/80 border-neutral-100 hover:shadow-lg hover:-translate-y-0.5'
                } animate-on-scroll relative ${feature.comingSoon ? 'opacity-60' : ''}`}
            >
              <div className={`mb-3 w-10 h-10 rounded-lg flex items-center justify-center 
                ${feature.isHighlighted 
                  ? 'bg-neutral-100' 
                  : 'bg-gray-50'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-lg font-semibold mb-1.5 flex items-center gap-2 
                ${feature.isHighlighted 
                  ? 'text-neutral-800' 
                  : 'text-neutral-800'
                }`}
              >
                {feature.title}
                {feature.comingSoon && (
                  <span className="text-xs px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded-full leading-none">
                    Soon
                  </span>
                )}
              </h3>
              <p className="text-neutral-600 text-sm">{feature.description}</p>
              {feature.link && <Link to={feature.link.to} className="inline-flex items-center text-xs text-neutral-700 hover:text-neutral-900 font-medium transition-colors mt-2">
                  {feature.link.text}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
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
    </section>;
};

export default Features;
