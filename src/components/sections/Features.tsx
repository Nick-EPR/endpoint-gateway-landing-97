import { Globe, Shield, Users, Server, Replace, Zap, Recycle, Timer, Microscope, Lock, ShieldCheck, HardDrive, Cloud, Layers } from "lucide-react";
import { Link } from "react-router-dom";

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
}

const Features = () => {
  const features: Feature[] = [{
    icon: <img src="/lovable-uploads/9924917e-87ae-46a8-94de-825e91b581ba.png" alt="Toolbox Logo" className="w-8 h-8" />,
    title: "Toolbox Integration",
    description: "Connect your ITAM system with repair depot and warehouse operations for end-to-end device management",
    isHighlighted: true
  }, {
    icon: <Microscope className="w-8 h-8 text-neutral-700" />,
    title: "Automated Diagnostics",
    description: "Hardware diagnostics performed securely within authorized repair facilities",
    isHighlighted: true
  }, {
    icon: <HardDrive className="w-8 h-8 text-neutral-700" />,
    title: "Device Provisioning",
    description: "Secure on-site device provisioning and configuration management within controlled environments"
  }, {
    icon: <ShieldCheck className="w-8 h-8 text-neutral-700" />,
    title: "Secure Data Handling",
    description: "On-site data wiping and secure device destruction with audit trails",
    isHighlighted: true
  }, {
    icon: <Cloud className="w-8 h-8 text-neutral-700" />,
    title: "Remote Device Control",
    description: "Remotely manage, lock, or wipe devices directly through the EPR platform",
    isHighlighted: true,
    comingSoon: true
  }, {
    icon: <Zap className="w-8 h-8 text-neutral-700" />,
    title: "Hardware Spec Sync",
    description: "Automatically detect and update device specifications in your CMDB and asset inventory",
    isHighlighted: true,
    comingSoon: true
  }, {
    icon: <Replace className="w-8 h-8 text-neutral-700" />,
    title: "Asset Exchange",
    description: "Streamlined device deployment and replacement workflow management"
  }, {
    icon: <Globe className="w-8 h-8 text-neutral-700" />,
    title: "Nationwide Coverage",
    description: "Manage assets across multiple locations and jurisdictions, with intelligent decision support",
    isHighlighted: true
  }, {
    icon: <Timer className="w-8 h-8 text-neutral-700" />,
    title: "Next-Day Resolution",
    description: "Overnight device replacement anywhere in the US, ensuring minimal downtime for your team",
    isHighlighted: true
  }, {
    icon: <Users className="w-8 h-8 text-neutral-700" />,
    title: "Remote Support",
    description: "Direct device access for remote troubleshooting and maintenance",
    comingSoon: true
  }, {
    icon: <Shield className="w-8 h-8 text-neutral-700" />,
    title: "Security First",
    description: "Enterprise-grade security and compliance measures for all device operations",
    link: {
      to: "/security",
      text: "Learn More"
    }
  }, {
    icon: <Recycle className="w-8 h-8 text-neutral-700" />,
    title: "Lifecycle Management",
    description: "Maximize device ROI through intelligent asset lifecycle optimization",
    isHighlighted: true
  }];

  return <section id="features" className="py-20 md:py-32 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 animate-on-scroll flex items-center justify-center gap-2">
          <Layers className="w-8 h-8 text-neutral-700" />
          Platform Features
        </h2>
        <p className="text-center text-base md:text-lg mb-10 animate-on-scroll max-w-2xl mx-auto">
          Complete device lifecycle management with{' '}
          <span className="text-neutral-800 font-semibold">intelligent predictive maintenance</span>{' '}
          capabilities
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
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
      </div>
    </section>;
};

export default Features;
