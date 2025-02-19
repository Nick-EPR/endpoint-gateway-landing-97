
import { Globe, Shield, Users, Server, Replace } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Features = () => {
  const features: Feature[] = [
    {
      icon: (
        <img 
          src="/lovable-uploads/9924917e-87ae-46a8-94de-825e91b581ba.png" 
          alt="Toolbox Logo" 
          className="w-8 h-8"
        />
      ),
      title: "Repair Management",
      description: "Streamlined repair process management through Toolbox integration with Lifetime Service"
    },
    {
      icon: <Replace className="w-8 h-8 text-primary" />,
      title: "Replace Processing",
      description: "Efficient device replacement workflow integrated with repair depot services"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Coverage",
      description: "Manage assets across multiple locations and jurisdictions"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security First",
      description: "Enterprise-grade security and compliance measures"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Team Collaboration",
      description: "Streamlined workflows for enhanced team productivity"
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Asset Tracking",
      description: "Real-time monitoring and lifecycle management"
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
          Comprehensive Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 glass-card rounded-xl hover-lift animate-on-scroll">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
