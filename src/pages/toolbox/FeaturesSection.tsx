
import { Card, CardContent } from "@/components/ui/card";
import { 
  Warehouse, 
  Wrench, 
  Truck, 
  Cog, 
  ShieldCheck, 
  Recycle 
} from "lucide-react";
import { ToolboxFeature } from "./types";

const FeaturesSection = () => {
  const features: ToolboxFeature[] = [
    {
      icon: <Warehouse className="w-6 h-6 text-primary" />,
      title: "Warehouse Operations",
      description: "Streamline receiving, storage, and dispatch operations with integrated warehouse management tools and inventory tracking."
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "Repair Management",
      description: "Track devices through the repair process, from intake and diagnosis to repair completion and quality assurance."
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Logistics Control",
      description: "Manage shipping, receiving, and chain of custody with real-time tracking and automated notifications."
    },
    {
      icon: <Cog className="w-6 h-6 text-primary" />,
      title: "Parts Management",
      description: "Track repair parts inventory, automate reordering, and maintain optimal stock levels for efficient repairs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Quality Control",
      description: "Ensure repaired devices meet OEM specifications with comprehensive testing and quality assurance workflows."
    },
    {
      icon: <Recycle className="w-6 h-6 text-primary" />,
      title: "Asset Recovery",
      description: "Maximize device value through efficient triage, repair, and redistribution or remarketing channels."
    }
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Comprehensive Repair Management</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Streamline your repair operations with our integrated suite of tools designed for modern IT asset management.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow dark:bg-neutral-800/50 dark:border-neutral-700/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
