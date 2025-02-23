import { Globe, Shield, Users, Server, Replace, Zap, Recycle, Timer, Microscope, Lock, ShieldCheck, HardDrive, Cloud, Layers, Search, UserCog, Package2, UserPlus, Warehouse, Network, Database, BoxSelect, Footprints, Brain, UserMinus, HardDriveDownload } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import toolboxLogo from "/lovable-uploads/c1f14b18-5227-48a7-bed0-d8e8a08ffc32.png";
import lueminLogo from "/lovable-uploads/82f53487-163f-495f-a2d0-f1535273a1df.png";
import triangleImage from "/lovable-uploads/fd6a644f-7ba7-44e3-b09d-3edb949ad75a.png";
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
    description: "Centralized asset management across all EPR products with real-time synchronization and automated workflows",
    isHighlighted: true,
    keywords: ["platform", "database", "centralized", "unified", "sync"]
  }, {
    icon: <Network className="w-8 h-8 text-neutral-700" />,
    title: "Cross-Product Integration",
    description: "Seamless data flow between HeliAM, Toolbox, and Luemin for comprehensive device lifecycle management",
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
    title: "Equipment Onboarding",
    description: "Streamlined equipment assignment workflow with standardized packages based on roles",
    isHighlighted: true,
    keywords: ["onboarding", "roles", "equipment", "packages"]
  }, {
    icon: <UserMinus className="w-8 h-8 text-neutral-700" />,
    title: "Offboarding Management",
    description: "Automated device recovery and reassignment during employee transitions",
    isHighlighted: true,
    keywords: ["offboarding", "recovery", "transition"]
  }, {
    icon: <Brain className="w-8 h-8 text-neutral-700" />,
    title: "AI/ML Insights",
    description: "Predictive analytics for device lifespan, maintenance needs, and optimal resale timing",
    isHighlighted: true,
    keywords: ["AI", "ML", "analytics", "prediction", "insights"]
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
    title: "Remote Device Control",
    description: "Remote lock, wipe, and management capabilities for all endpoint devices",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["remote", "control", "manage", "lock", "wipe"]
  }, {
    icon: <HardDriveDownload className="w-8 h-8 text-neutral-700" />,
    title: "Hardware Monitoring",
    description: "Automatic hardware information collection and HeliAM asset record updates",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["hardware", "monitoring", "sync", "inventory"]
  }, {
    icon: <Footprints className="w-8 h-8 text-neutral-700" />,
    title: "Device Tracking",
    description: "Real-time device location and usage tracking with detailed audit logs",
    isHighlighted: true,
    comingSoon: true,
    keywords: ["tracking", "location", "monitoring", "audit"]
  }];
  const detailedFeatures: DetailedFeature[] = [{
    category: "Platform Integration",
    features: ["Unified asset database across all products", "Seamless workflow automation between products", "Cross-product data synchronization", "Centralized security and compliance controls", "Single sign-on across all EPR products", "API-driven integration capabilities", "Real-time data updates across platform"]
  }, {
    category: "Asset Management",
    features: ["Complete lifecycle tracking and management", "Automated equipment package assignment", "Asset utilization analytics and reporting", "Role-based access control and permissions", "Secure warehouse storage and inventory", "Professional device maintenance services", "Next-day replacement nationwide"]
  }, {
    category: "Security & Compliance",
    features: ["Enterprise-grade security controls", "Compliance reporting and documentation", "Secure data handling and destruction", "Access-controlled facilities", "Audit trails for all asset operations", "Device security policy enforcement", "Remote device control capabilities"]
  }, {
    category: "Support & Services",
    features: ["24/7 technical support access", "Professional repair services", "Nationwide logistics network", "Remote troubleshooting assistance", "On-site service options", "Device diagnostics and testing", "End-of-life asset disposition"]
  }];
  const filteredFeatures = (features: Feature[]) => {
    const searchTerm = searchQuery.toLowerCase();
    return features.filter(feature => feature.title.toLowerCase().includes(searchTerm) || feature.description.toLowerCase().includes(searchTerm) || feature.keywords?.some(keyword => keyword.toLowerCase().includes(searchTerm)));
  };
  return <section id="features" className="py-20 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 animate-on-scroll flex items-center justify-center gap-2">
          <Layers className="w-8 h-8 text-neutral-700" />
          Complete ITAM Solutions
        </h2>
        <p className="text-center text-base md:text-lg mb-6 animate-on-scroll max-w-2xl mx-auto">
          Comprehensive device lifecycle management with AI/ML-powered predictive maintenance
        </p>
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <Input type="text" placeholder="Search features (e.g., repair, RDP, shipping)" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 bg-white/80 border-neutral-200" />
          </div>
        </div>

        {/* Platform Features */}
        <div className="relative mb-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl"></div>
          <div className="relative">
            <img src={triangleImage} alt="EPR Platform" className="w-16 h-16 mx-auto mb-8" />
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold">EPR Platform Foundation</h3>
              <p className="text-neutral-600">Shared capabilities across all products</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {filteredFeatures(platformFeatures).map((feature, index) => <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-white via-neutral-50 to-white border border-neutral-200 shadow-md hover:shadow-lg transition-all duration-500 backdrop-blur-sm animate-float" style={{
              animationDuration: '3s',
              animationDelay: `${index * 0.5}s`
            }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                      <p className="text-neutral-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="absolute -bottom-16 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2">
              <div className="absolute w-8 h-8 rounded-full -bottom-4 -left-[14px] border-2 border-primary/20"></div>
            </div>
            <div className="absolute -bottom-32 left-0 w-full">
              
            </div>
          </div>
        </div>

        {/* Product-Specific Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* HeliAM Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <img src={heliamLogo} alt="HeliAM" className="h-12 mx-auto mb-4" />
              <p className="text-sm text-neutral-600">Asset Management Platform</p>
            </div>
            {filteredFeatures(heliamFeatures).map((feature, index) => <div key={index} className="p-4 rounded-lg bg-white/80 border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>)}
          </div>

          {/* Toolbox Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <img src={toolboxLogo} alt="Toolbox" className="h-8 mx-auto mb-4" />
              <p className="text-sm text-neutral-600">Logistics & Maintenance</p>
            </div>
            {filteredFeatures(toolboxFeatures).map((feature, index) => <div key={index} className="p-4 rounded-lg bg-white/80 border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>)}
          </div>

          {/* Luemin Column */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <img src={lueminLogo} alt="Luemin" className="h-16 mx-auto mb-4" />
              <p className="text-sm text-neutral-600">Remote Device Management (MDM)</p>
            </div>
            {filteredFeatures(lueminFeatures).map((feature, index) => <div key={index} className="p-4 rounded-lg bg-white/80 border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 backdrop-blur-sm relative">
                {feature.comingSoon && <span className="absolute top-2 right-2 text-xs px-1.5 py-0.5 bg-neutral-100 text-neutral-600 rounded-full leading-none">
                    Soon
                  </span>}
                <div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1.5 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>)}
          </div>
        </div>

        {/* Detailed Features Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h3 className="text-xl font-semibold text-center mb-8">Additional Platform Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {detailedFeatures.map((category, index) => <div key={index} className="space-y-4">
                <h4 className="font-semibold text-lg text-neutral-800">{category.category}</h4>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start gap-2 text-neutral-600">
                      <div className="mt-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                      </div>
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Features;