
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Database, 
  Shield, 
  BarChart3, 
  Search,
  Layers, 
  Clock,
  Radio,
  Users,
  Zap
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: "discovery",
      title: "Asset Discovery",
      description: "Automatically discover and inventory all IT assets across your organization with our agent-based and agentless scanning technology.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      details: [
        "Identify hardware, software, and cloud assets",
        "Capture detailed configuration information",
        "Continuous real-time discovery",
        "Automated classification and tagging"
      ]
    },
    {
      id: "lifecycle",
      title: "Lifecycle Management",
      description: "Track and manage assets throughout their entire lifecycle, from procurement to retirement and disposal.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
      details: [
        "Procurement and onboarding workflows",
        "Maintenance and upgrade tracking",
        "End-of-life planning and processing",
        "Historical audit trails for compliance"
      ]
    },
    {
      id: "security",
      title: "Security & Compliance",
      description: "Ensure adherence to security policies and compliance requirements with comprehensive monitoring and reporting.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
      details: [
        "Vulnerability detection and management",
        "Compliance reporting for SOX, GDPR, HIPAA",
        "Software license compliance tracking",
        "Role-based access control and audit logs"
      ]
    },
    {
      id: "insights",
      title: "Analytics & Insights",
      description: "Turn asset data into actionable insights with powerful analytics and customizable dashboards.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      details: [
        "Cost optimization recommendations",
        "Usage patterns and trend analysis",
        "Predictive maintenance alerts",
        "Custom reporting and data visualization"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Comprehensive Asset Management Platform</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            HeliAM provides a complete solution for managing, securing, and optimizing your IT assets at every stage of their lifecycle.
          </p>
        </div>

        <Tabs defaultValue="discovery" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-neutral-100 dark:bg-neutral-800/50 p-1 rounded-lg">
              {features.map(feature => (
                <TabsTrigger 
                  key={feature.id} 
                  value={feature.id}
                  className="data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-800 data-[state=active]:text-primary"
                >
                  <feature.icon className="h-4 w-4 mr-2" />
                  {feature.title}
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
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg dark:shadow-primary/10">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-lg bg-primary/10 dark:bg-primary/20"></div>
                  <div className="absolute -z-10 -top-6 -left-6 w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-500/20"></div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Capabilities section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-50 dark:bg-neutral-800/30 p-8 rounded-xl">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Radio className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Real-time Monitoring</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Get real-time status updates and alerts on all your assets, ensuring you always have the most current information.
            </p>
          </div>
          
          <div className="bg-neutral-50 dark:bg-neutral-800/30 p-8 rounded-xl">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">User Management</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Streamline asset assignment and user lifecycle management with automated workflows and approval processes.
            </p>
          </div>
          
          <div className="bg-neutral-50 dark:bg-neutral-800/30 p-8 rounded-xl">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">AI-Powered Insights</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Leverage advanced machine learning to identify cost-saving opportunities and predict future asset needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
