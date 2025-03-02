
import { Database, GitMerge, Globe, Shield, Users, Server } from "lucide-react";
import { Feature } from "./types";

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: Database,
      title: "Comprehensive Asset Tracking",
      description: "Track every asset through its entire lifecycle with detailed histories and real-time status updates."
    },
    {
      icon: GitMerge,
      title: "Seamless Integration",
      description: "Native integration with all Lifetime EPR solutions for complete lifecycle visibility."
    },
    {
      icon: Server,
      title: "Asset Intelligence",
      description: "Advanced tracking capabilities powered by our innovative agent technology."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security with role-based access control and detailed audit logs."
    },
    {
      icon: Globe,
      title: "Global Visibility",
      description: "Monitor and manage assets across multiple locations and organizations."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Streamlined asset assignment and user lifecycle management."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Comprehensive Asset Management</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Everything you need to manage your IT assets throughout their entire lifecycle
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((Feature, index) => (
            <div key={index} className="p-6 bg-white dark:bg-neutral-800/50 rounded-xl hover:shadow-lg transition-all group dark:shadow-black/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">{Feature.title}</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300">{Feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
