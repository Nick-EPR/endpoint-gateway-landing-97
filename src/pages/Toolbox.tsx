
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import toolboxLogo from "/lovable-uploads/c2b68dd4-11bc-4aec-847b-9a07bd311771.png";

const Toolbox = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={toolboxLogo} alt="Toolbox Logo" className="h-16 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Repair Depot Integration
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Connect your repair depot services directly with Lifetime EPR through our proven Toolbox product integration.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Streamlined Workflow</h3>
              <p className="text-neutral-600">
                Automate repair ticket creation and tracking between your EPR system and repair depot.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Real-time Updates</h3>
              <p className="text-neutral-600">
                Get instant status updates and repair progress notifications directly in your EPR dashboard.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Cost Management</h3>
              <p className="text-neutral-600">
                Track repair costs and manage warranties efficiently through integrated reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to streamline your repair process?</h2>
          <Link to="/contact">
            <Button size="lg">Contact Sales</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Toolbox;
