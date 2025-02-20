
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
      <section className="relative pt-32 pb-24 px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 backdrop-blur-[2px] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600880292089-90a649e273f0?auto=format&fit=crop&q=80"
            alt="Warehouse Operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={toolboxLogo} alt="Toolbox Logo" className="h-16 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Physical Asset Management & Repair
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Bridge the gap between IT asset management and repair operations with Toolbox's comprehensive suite of warehouse, logistics, and repair depot integration tools.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Warehouse Operations</h3>
              <p className="text-neutral-600">
                Streamline receiving, storage, and dispatch operations with integrated warehouse management tools and inventory tracking.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Repair Management</h3>
              <p className="text-neutral-600">
                Track devices through the repair process, from intake and diagnosis to repair completion and quality assurance.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Logistics Control</h3>
              <p className="text-neutral-600">
                Manage shipping, receiving, and chain of custody with real-time tracking and automated notifications.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Parts Management</h3>
              <p className="text-neutral-600">
                Track repair parts inventory, automate reordering, and maintain optimal stock levels for efficient repairs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
              <p className="text-neutral-600">
                Ensure repaired devices meet OEM specifications with comprehensive testing and quality assurance workflows.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Asset Recovery</h3>
              <p className="text-neutral-600">
                Maximize device value through efficient triage, repair, and redistribution or remarketing channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Optimize Your Repair Operations</h2>
            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24-48h</div>
                  <p className="text-neutral-600">Average repair turnaround time for standard repairs</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%+</div>
                  <p className="text-neutral-600">First-time repair success rate with OEM-certified technicians</p>
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
            Connect your physical asset operations directly with HeliAM for complete visibility and control over your device lifecycle.
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
