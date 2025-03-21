
import { Server, PackageOpen, MonitorSmartphone, Workflow, AlertTriangle } from "lucide-react";
const PhysicalReality = () => {
  return <section className="py-16 md:py-24 bg-neutral-light dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mb-2 animate-float">
              <Server className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Beyond the Software: The Untouched Physical Reality
          </h2>
          <p className="text-lg text-muted-foreground">
            Most ITAM solutions neglect the physical lifecycle of assets, 
            leaving organizations with manual, inefficient processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl animate-on-scroll">
              <img alt="IT Asset Physical Management" className="w-full h-full object-cover" src="/lovable-uploads/8a4193c5-136d-406e-a66e-4c8fa14deb77.jpg" />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-2xl bg-primary/10"></div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                <PackageOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Manual Procurement</h3>
                <p className="text-muted-foreground">
                  Researching, ordering, and tracking new IT assets often involves 
                  multiple spreadsheets, emails, and manual approval processes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                <MonitorSmartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Laborious Onboarding</h3>
                <p className="text-muted-foreground">
                  Unboxing, manual provisioning with custom OS images, BIOS configuration, 
                  security settings, and UEM agent deployment take hours of IT staff time.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Non-Standardized Processes</h3>
                <p className="text-muted-foreground">
                  Asset provisioning often requires complex "if-then" logic based on 
                  user roles, departments, or locations, creating inconsistency.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">End-of-Life Risks</h3>
                <p className="text-muted-foreground">
                  Without proper decommissioning processes, organizations face data 
                  security risks and miss opportunities for asset value recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PhysicalReality;
