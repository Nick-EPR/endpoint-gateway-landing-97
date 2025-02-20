
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import toolboxLogo from "/lovable-uploads/c2b68dd4-11bc-4aec-847b-9a07bd311771.png";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const Toolbox = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              Endpoint Management, Simplified
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Enhance HeliAM with Toolbox's comprehensive suite of tools for streamlined IT asset management, bringing circularity to your endpoint management process.
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
                Minimize downtime through rapid device replacement services, keeping employees productive with minimal interruption.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Asset Recovery</h3>
              <p className="text-neutral-600">
                Maximize the value of your technology investments through efficient asset recovery and processing workflows.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Repair & Refurbish</h3>
              <p className="text-neutral-600">
                Extend asset lifecycles with our Grade A refurbishment process, ensuring devices meet OEM standards.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Logistics Provisioning</h3>
              <p className="text-neutral-600">
                End-to-end logistics management with integrated tracking and chain of custody controls.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Secure Disposition</h3>
              <p className="text-neutral-600">
                Industry-compliant data protection through secure decommissioning services.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Remarket & Return</h3>
              <p className="text-neutral-600">
                Optimize asset value through remarketing services or efficient inventory reintegration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Optimize Your IT Investment</h2>
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
            As an integrated component of HeliAM, Toolbox enhances your asset management capabilities within the Lifetime EPR ecosystem.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/heliam">
              <Button variant="outline">Learn About HeliAM</Button>
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
