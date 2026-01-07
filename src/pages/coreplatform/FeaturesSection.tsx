import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Layers, 
  Shield,
  BarChart3,
  Radio,
  Users,
  Zap,
  Settings,
  Database,
  FileCheck
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: "discovery",
      title: "Asset Discovery",
      description: "Automatically discover and inventory all IT assets across your organization with comprehensive scanning technology.",
      icon: Search,
      video: "https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Invoice%20Parsing.mov",
      details: [
        "Identify hardware, software, and cloud assets",
        "Capture detailed configuration information",
        "Continuous real-time discovery",
        "Automated classification and tagging"
      ]
    },
    {
      id: "lifecycle",
      title: "Lifecycle Tracking",
      description: "Track and manage assets throughout their entire lifecycle, from procurement to retirement and disposal.",
      icon: Layers,
      video: "https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Asset%20Lifecycle%20Timeline.mov",
      details: [
        "Procurement and onboarding workflows",
        "Maintenance and upgrade tracking",
        "End-of-life planning and processing",
        "Historical audit trails for compliance"
      ]
    },
    {
      id: "compliance",
      title: "Compliance & Reporting",
      description: "Ensure adherence to security policies and compliance requirements with comprehensive monitoring and reporting.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      details: [
        "R2v3 and ISO 14001 compliance tracking",
        "DoD standard adherence monitoring",
        "Software license compliance tracking",
        "Role-based access control and audit logs"
      ]
    },
    {
      id: "optimization",
      title: "Cost Optimization",
      description: "Turn asset data into actionable insights with powerful analytics and cost optimization tools.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      details: [
        "Total cost of ownership analysis",
        "Usage patterns and trend analysis",
        "ROI tracking and reporting",
        "Budget forecasting and planning"
      ]
    }
  ];

  const capabilities = [
    {
      icon: Radio,
      title: "Real-time Monitoring",
      description: "Get real-time status updates and alerts on all your assets, ensuring you always have the most current information."
    },
    {
      icon: Settings,
      title: "Automated Workflows",
      description: "Streamline asset management with automated workflows for provisioning, maintenance, and retirement processes."
    },
    {
      icon: Users,
      title: "Multi-tenant Support",
      description: "Manage assets across multiple locations and departments with role-based access and tenant isolation."
    },
    {
      icon: Database,
      title: "API Integrations",
      description: "Connect seamlessly with your existing tools through our comprehensive REST API and pre-built integrations."
    },
    {
      icon: FileCheck,
      title: "Custom Reporting",
      description: "Generate detailed reports tailored to your needs with our flexible reporting engine and export options."
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Leverage advanced analytics to identify cost-saving opportunities and predict future asset needs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Complete Asset Management Platform</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            The Core Platform provides everything you need to manage, secure, and optimize your IT assets at every stage of their lifecycle.
          </p>
        </div>

        <Tabs defaultValue="discovery" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-neutral-100 dark:bg-neutral-800/50 p-1 rounded-lg">
              {features.map(feature => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-800 data-[state=active]:text-primary text-xs md:text-sm"
                >
                  <feature.icon className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{feature.title}</span>
                  <span className="sm:hidden">{feature.title.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map(feature => (
            <TabsContent key={feature.id} value={feature.id} className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 dark:text-white">{feature.title}</h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <feature.icon className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="order-1 md:order-2 relative">
                  <div className="overflow-hidden rounded-xl">
                    {feature.video ? (
                      <video 
                        src={feature.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto block scale-125"
                      />
                    ) : (
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto"
                      />
                    )}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-lg bg-primary/10 dark:bg-primary/20"></div>
                  <div className="absolute -z-10 -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20"></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Capabilities section */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12 dark:text-white">Platform Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-neutral-50 dark:bg-neutral-800/30 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3 dark:text-white">{capability.title}</h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
