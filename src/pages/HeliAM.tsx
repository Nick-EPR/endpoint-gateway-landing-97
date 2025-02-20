
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const HeliAM = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  const handleMouseEnter = () => {
    setIsScrolled(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={heliamLogo} alt="HeliAM Logo" className="h-20 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete CMDB Management
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              A comprehensive Configuration Management Database platform that seamlessly integrates with your Lifetime EPR asset lifecycle management solution.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Asset Tracking</h3>
              <p className="text-neutral-600">
                Monitor and manage your IT assets throughout their entire lifecycle with detailed tracking capabilities.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Configuration Control</h3>
              <p className="text-neutral-600">
                Maintain accurate records of hardware and software configurations across your organization.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Relationship Mapping</h3>
              <p className="text-neutral-600">
                Visualize and manage complex relationships between IT assets, services, and infrastructure components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to enhance your asset management?</h2>
          <Link to="/contact">
            <Button size="lg">Contact Sales</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeliAM;
