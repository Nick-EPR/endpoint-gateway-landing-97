import { useRef } from "react";
import { 
  Search,
  Layers, 
  Radio,
  Users,
  Zap,
  Settings,
  Database,
  FileCheck
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const features = [
    {
      id: "discovery",
      title: "Asset Discovery",
      description: "Automatically discover and inventory all IT assets across your organization with comprehensive scanning technology.",
      icon: Search,
      video: "https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Invoice%20Parsing%20Trimmed.mov",
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
      video: "https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Asset%20Lifecycle%20Timeline%20Trimmed.mov",
      details: [
        "Procurement and onboarding workflows",
        "Maintenance and upgrade tracking",
        "End-of-life planning and processing",
        "Historical audit trails for compliance"
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
    <section ref={sectionRef} id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Complete Asset Management Platform</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            The Core Platform provides everything you need to manage, secure, and optimize your IT assets at every stage of their lifecycle.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 200}ms` }}
            >
              <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{feature.title}</h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <feature.icon className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`relative ${index % 2 === 0 ? "order-1 md:order-2" : "order-1"}`}>
                <div className="overflow-hidden rounded-xl">
                  <video 
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block scale-125"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 rounded-lg bg-primary/10 dark:bg-primary/20"></div>
                <div className="absolute -z-10 -top-6 -left-6 w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Capabilities section */}
        <div className={`mt-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "600ms" }}>
          <h3 className="text-2xl font-bold text-center mb-12 dark:text-white">Platform Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className={`bg-neutral-50 dark:bg-neutral-800/30 p-8 rounded-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
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
