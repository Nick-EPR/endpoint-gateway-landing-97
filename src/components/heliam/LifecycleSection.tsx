
import { PackageOpen, Workflow, MonitorSmartphone, Wrench, RefreshCcw, LifeBuoy } from "lucide-react";
import type { LifecycleStage } from "@/types/heliam";

const LifecycleSection = () => {
  const lifecycleStages: LifecycleStage[] = [
    {
      icon: PackageOpen,
      title: "Procurement",
      description: "Streamlined asset acquisition and vendor management"
    },
    {
      icon: Workflow,
      title: "Configuration",
      description: "Automated setup and software deployment"
    },
    {
      icon: MonitorSmartphone,
      title: "Deployment",
      description: "Efficient distribution and tracking"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Proactive repairs and updates"
    },
    {
      icon: RefreshCcw,
      title: "Redeployment",
      description: "Asset redistribution optimization"
    },
    {
      icon: LifeBuoy,
      title: "ITAD",
      description: "Secure asset disposition"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Complete Lifecycle Management</h2>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          From procurement to retirement, HeliAM manages every stage of your IT assets' lifecycle with precision and efficiency.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {lifecycleStages.map((stage, index) => (
            <div key={index} className="p-4 bg-white rounded-lg text-center">
              <div className="inline-flex p-2 bg-primary/10 rounded-lg mb-3">
                <stage.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{stage.title}</h3>
              <p className="text-sm text-neutral-600">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifecycleSection;
