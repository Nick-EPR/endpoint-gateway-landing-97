
import { Box, RefreshCcw, Server } from "lucide-react";
import type { Feature } from "@/types/heliam";

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      icon: Box,
      title: "Digital Onboarding Kits",
      description: "Streamline employee onboarding with pre-configured asset bundles and automated deployment workflows."
    },
    {
      icon: RefreshCcw,
      title: "Asset Lifecycle Management",
      description: "Track and manage assets through their entire lifecycle, from procurement to retirement."
    },
    {
      icon: Server,
      title: "API Integration",
      description: "Seamlessly connect with your existing CRM, ERP, and HR systems through our robust API."
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Modern IT Asset Management</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
