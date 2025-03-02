
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Warehouse, 
  Wrench, 
  Truck, 
  Cog, 
  ShieldCheck, 
  Recycle, 
  Package,
  Calendar,
  BarChart,
  List,
  Target,
  Tool
} from "lucide-react";
import { ToolboxFeature, FeatureCategory, CategoryTab } from "./types";
import { cn } from "@/lib/utils";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<FeatureCategory>('repair');

  const categoryTabs: CategoryTab[] = [
    {
      value: 'repair',
      label: 'Repair Operations',
      icon: <Wrench className="w-5 h-5" />,
      description: 'Comprehensive repair management tools for efficient device servicing and quality control'
    },
    {
      value: 'warehouse',
      label: 'Warehouse Management',
      icon: <Warehouse className="w-5 h-5" />,
      description: 'Complete inventory and warehouse operation tools to optimize storage and retrieval'
    },
    {
      value: 'logistics',
      label: 'Logistics Network',
      icon: <Truck className="w-5 h-5" />,
      description: 'Advanced shipping and transportation management for your repair supply chain'
    }
  ];

  const features: ToolboxFeature[] = [
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "Repair Management",
      description: "Track devices through the repair process, from intake and diagnosis to repair completion and quality assurance.",
      category: 'repair'
    },
    {
      icon: <Tool className="w-6 h-6 text-primary" />,
      title: "Diagnostic Tools",
      description: "Access comprehensive diagnostic utilities for accurate problem identification and repair validation.",
      category: 'repair'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Quality Control",
      description: "Ensure repaired devices meet OEM specifications with comprehensive testing and quality assurance workflows.",
      category: 'repair'
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "SLA Tracking",
      description: "Monitor and manage repair service level agreements with real-time visibility into repair timelines.",
      category: 'repair'
    },
    {
      icon: <Warehouse className="w-6 h-6 text-primary" />,
      title: "Inventory Management",
      description: "Streamline receiving, storage, and dispatch operations with integrated warehouse management tools.",
      category: 'warehouse'
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: "Parts Management",
      description: "Track repair parts inventory, automate reordering, and maintain optimal stock levels for efficient repairs.",
      category: 'warehouse'
    },
    {
      icon: <List className="w-6 h-6 text-primary" />,
      title: "Asset Tracking",
      description: "Keep detailed records of all stored devices with location tracking and status updates.",
      category: 'warehouse'
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Inventory Analytics",
      description: "Gain insights into inventory trends, usage patterns, and optimization opportunities.",
      category: 'warehouse'
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Shipping Management",
      description: "Manage shipping, receiving, and chain of custody with real-time tracking and automated notifications.",
      category: 'logistics'
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Delivery Scheduling",
      description: "Coordinate efficient pickup and delivery schedules to minimize downtime and maximize resource utilization.",
      category: 'logistics'
    },
    {
      icon: <Cog className="w-6 h-6 text-primary" />,
      title: "Logistics Automation",
      description: "Automate routing, carrier selection, and documentation to streamline transportation operations.",
      category: 'logistics'
    },
    {
      icon: <Recycle className="w-6 h-6 text-primary" />,
      title: "Asset Recovery",
      description: "Maximize device value through efficient triage, repair, and redistribution or remarketing channels.",
      category: 'logistics'
    }
  ];

  const filteredFeatures = features.filter(feature => feature.category === activeTab);

  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Comprehensive Repair Management</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Streamline your repair operations with our integrated suite of tools designed for modern IT asset management.
          </p>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <Tabs defaultValue="repair" onValueChange={(value) => setActiveTab(value as FeatureCategory)} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg">
              {categoryTabs.map((tab) => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value}
                  className={cn(
                    "flex items-center gap-2 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-700",
                    "transition-all duration-200"
                  )}
                >
                  <span className="hidden sm:inline-flex">{tab.icon}</span>
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categoryTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-0">
                <div className="bg-white dark:bg-neutral-800/60 p-6 rounded-lg mb-8 text-center border border-neutral-100 dark:border-neutral-700/50">
                  <p className="text-neutral-600 dark:text-neutral-300">{tab.description}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative overflow-hidden group transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1",
                "dark:bg-neutral-800/50 dark:border-neutral-700/50",
                "h-full"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10"></div>
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-lg inline-flex mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{feature.title}</h3>
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
