
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, RefreshCcw } from "lucide-react";

const IntegrationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lifetime EPR Integration</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-neutral-50 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Toolbox Integration</h3>
            </div>
            <p className="text-neutral-600 mb-4">
              Seamlessly connect with Toolbox for enhanced asset tracking, security protocols, and management capabilities.
            </p>
            <Link to="/toolbox">
              <Button variant="outline">Learn About Toolbox</Button>
            </Link>
          </div>
          <div className="p-6 bg-neutral-50 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <RefreshCcw className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Ravive Integration</h3>
            </div>
            <p className="text-neutral-600 mb-4">
              Streamline repair workflows and asset disposition processes with direct Ravive integration.
            </p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
