
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import toolboxLogo from "/lovable-uploads/c2b68dd4-11bc-4aec-847b-9a07bd311771.png";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Toolbox = () => {
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
            <img src={toolboxLogo} alt="Toolbox Logo" className="h-16 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Introduce Circularity to Endpoint Management
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Toolbox is designed to close the loop for ITAM administrators, providing a comprehensive solution within the HeliAM platform for sustainable IT asset management and value recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Fast Exchange</h3>
              <p className="text-neutral-600">
                Minimize productivity loss with rapid device replacement services. Our streamlined process ensures employees stay operational with minimal downtime.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Asset Recovery</h3>
              <p className="text-neutral-600">
                Efficiently recover and process IT assets through our proven workflows, maximizing the value of your technology investments.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Repair & Refurbish</h3>
              <p className="text-neutral-600">
                Extend asset life with our Grade A refurbishment process, ensuring devices meet OEM standards with 80%+ battery health and minimal cosmetic wear.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Logistics Provisioning</h3>
              <p className="text-neutral-600">
                Streamline the entire logistics process from collection to delivery, with integrated tracking and chain of custody management.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Secure Disposition</h3>
              <p className="text-neutral-600">
                Ensure complete data protection with our secure decommissioning services, meeting industry compliance standards.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Remarket & Return</h3>
              <p className="text-neutral-600">
                Maximize asset value through our remarketing services or efficiently reintegrate assets back into your inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Maximize Value, Minimize Costs</h2>
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                  <p className="text-neutral-600">Reduction in annual IT CapEx compared to new device procurement</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Grade A</div>
                  <p className="text-neutral-600">Refurbishment quality with 80%+ battery health and minimal cosmetic wear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Seamless HeliAM Integration</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            As part of the HeliAM platform, Toolbox provides comprehensive asset tracking, security, and management capabilities within a single, unified solution.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/heliam">
              <Button variant="outline">Explore HeliAM</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Toolbox;
