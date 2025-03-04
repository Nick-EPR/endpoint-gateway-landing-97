
import React from "react";
import { Shield, Zap, BarChart, Layers, Users, Clock } from "lucide-react";

const PricingFeatures = () => {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Enterprise Security",
      description: "ISO27001:2022 certified security with SOC 2 compliance to protect your sensitive data."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Fast Implementation",
      description: "Get up and running quickly with our streamlined onboarding process."
    },
    {
      icon: <BarChart className="w-10 h-10 text-primary" />,
      title: "Detailed Analytics",
      description: "Comprehensive reporting and insights to optimize your IT asset management."
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: "Scalable Solution",
      description: "Easily scale from dozens to thousands of devices as your organization grows."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Unlimited Users",
      description: "No restrictions on the number of users who can access the platform."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your ITAM solution runs smoothly."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">All Plans Include</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Core features available across all pricing tiers
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFeatures;
