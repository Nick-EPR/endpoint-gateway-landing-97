
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heliamLogo from "/lovable-uploads/86e03333-0375-4f28-821b-9566b23c8ce4.png";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

const HeliAM = () => {
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
            <div className="text-sm text-primary mb-4 font-medium">Part of the Lifetime EPR Platform</div>
            <img src={heliamLogo} alt="HeliAM Logo" className="h-20 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITAM done light.
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              HeliAM, a core solution within the Lifetime EPR platform, streamlines your IT asset lifecycle management. As an integral part of our comprehensive platform, it ensures accountable management from procurement to disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Unified Platform Integration</h3>
              <p className="text-neutral-600">
                Seamlessly integrated with Lifetime EPR's ecosystem, providing scalable and predictable IT lifecycle management that maximizes ROI.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Data Lifecycle Management</h3>
              <p className="text-neutral-600">
                Part of Lifetime EPR's comprehensive approach to ensuring data integrity and compliance throughout the asset lifecycle.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Asset Intelligence</h3>
              <p className="text-neutral-600">
                Advanced asset tracking and management capabilities powered by Lifetime EPR's innovative agent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Components */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Integrated Solutions</h2>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-primary/5 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Toolbox</h3>
              <p className="text-neutral-600 mb-4">
                A powerful suite of tools within HeliAM that optimizes IT asset tracking, security, and management. Toolbox introduces circularity to endpoint management as part of our comprehensive solution.
              </p>
              <Link to="/toolbox">
                <Button variant="outline">Explore Toolbox Features</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Lifetime EPR Advantage</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Centralized Management</h3>
                <p className="text-neutral-600">
                  Access all your IT asset management needs through a single, unified platform that evolves with your business.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
                <p className="text-neutral-600">
                  Experience the power of HeliAM working in harmony with other Lifetime EPR solutions for complete asset lifecycle management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Power of Unified IT Asset Management</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Join organizations worldwide who trust Lifetime EPR's comprehensive platform for their IT asset management needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Schedule Platform Demo</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Request Platform Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeliAM;
