
import React from "react";
import { GitMerge, ServerCog, ShieldCheck, Truck } from "lucide-react";

const advantages = [
  {
    icon: GitMerge,
    title: "Expert Platform Integration",
    description: "Our team ensures seamless integration of Movius with your existing systems, minimizing disruption while maximizing the value of your communication infrastructure."
  },
  {
    icon: ServerCog,
    title: "Comprehensive Asset Management",
    description: "We provide complete lifecycle tracking of your communication assets and secure end-of-life disposition, ensuring optimal performance and compliance."
  },
  {
    icon: ShieldCheck,
    title: "Security and Compliance Focus",
    description: "Our implementation process prioritizes security and regulatory compliance, ensuring your Movius deployment meets all applicable industry requirements."
  },
  {
    icon: Truck,
    title: "Nationwide Support Network",
    description: "Leverage our nationwide logistics network and 24/7 technical support to ensure business continuity throughout your migration to Movius."
  }
];

const LEPRAdvantageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {advantages.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 animate-fade-in" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-primary/10 rounded-lg h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{item.title}</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">The Lifetime EndPoint Resources Advantage</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300">
                As your strategic implementation partner for Movius Secure Communications, Lifetime EPR brings specialized expertise and a comprehensive support ecosystem to ensure your successful transition.
              </p>
              <div className="relative rounded-xl overflow-hidden shadow-lg animate-fade-in border border-neutral-200 dark:border-neutral-700">
                <img 
                  src="/lovable-uploads/45c7b0cf-c185-4361-b18b-f70b74863424.png" 
                  alt="Enterprise Support Ecosystem" 
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-medium">Enterprise Support Ecosystem</p>
                    <p className="text-sm opacity-90">Nationwide technical and logistics capabilities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LEPRAdvantageSection;
