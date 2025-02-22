
import { Globe, Shield, Users, Server, Replace, Zap, Recycle, Timer, Microscope, Lock, ShieldCheck, HardDrive, Cloud, RemoteControl } from "lucide-react";
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
    icon: <Microscope className="w-8 h-8 text-primary" />,
    title: "Automated Diagnostics",
    description: "Hardware diagnostics performed securely within authorized repair facilities",
    isHighlighted: true
  }, {
    icon: <HardDrive className="w-8 h-8 text-primary" />,
    title: "Device Provisioning",
    description: "Secure on-site device provisioning and configuration management within controlled environments"
  }, {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Data Handling",
    description: "On-site data wiping and secure device destruction with audit trails",
    isHighlighted: true
  }, {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Remote Device Control",
    description: "Remotely manage, lock, or wipe devices directly through the EPR platform",
    isHighlighted: true,
    comingSoon: true
  }, {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Auto-Sync Hardware",
    description: "Automatic hardware attribute updates synchronized with HeliAM's CMDB",
    isHighlighted: true,
    comingSoon: true
  }, {
    icon: <Replace className="w-8 h-8 text-primary" />,
    title: "Asset Exchange",
    description: "Streamlined device deployment and replacement workflow management"
  }, {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Nationwide Coverage",
    description: "Manage assets across multiple locations and jurisdictions, with intelligent decision support",
    isHighlighted: true
  }, {
    icon: <Timer className="w-8 h-8 text-primary" />,
    title: "Next-Day Resolution",
    description: "Overnight device replacement anywhere in the US, ensuring minimal downtime for your team",
    isHighlighted: true
  }, {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Remote Support",
    description: "Direct device access for remote troubleshooting and maintenance",
    comingSoon: true
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Security First",
    description: "Enterprise-grade security and compliance measures for all device operations",
    link: {
      to: "/security",
      text: "Learn More"
    }
  }, {
    icon: <Recycle className="w-8 h-8 text-primary" />,
    title: "Lifecycle Management",
    description: "Maximize device ROI through intelligent asset lifecycle optimization",
    isHighlighted: true
  }];

  return <section id="features" className="py-32 md:py-48 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">
          Platform Features
        </h2>
        <p className="text-center text-lg mb-16 animate-on-scroll">
          Complete device lifecycle management with{' '}
          <span className="text-primary font-semibold">intelligent predictive maintenance</span>{' '}
          capabilities
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl transition-all duration-500 backdrop-blur-sm border 
                ${feature.isHighlighted 
                  ? 'bg-gradient-to-br from-white via-primary-light to-white border-primary/20 shadow-lg hover:shadow-xl hover:-translate-y-2' 
                  : 'bg-white/80 border-neutral-100 hover:shadow-xl hover:-translate-y-1'
                } animate-on-scroll relative`}
            >
              <div className={`mb-4 w-12 h-12 rounded-lg flex items-center justify-center 
                ${feature.isHighlighted 
                  ? 'bg-primary/10' 
                  : 'bg-gray-50'
                }`}
              >
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-2 
                ${feature.isHighlighted 
                  ? 'text-primary' 
                  : 'text-neutral-800'
                }`}
              >
                {feature.title}
                {feature.comingSoon && (
                  <span className="ml-2 text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-neutral-600 mb-4">{feature.description}</p>
              {feature.link && <Link to={feature.link.to} className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                  {feature.link.text}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
