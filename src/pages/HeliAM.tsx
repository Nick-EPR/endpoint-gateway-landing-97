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
            <img src={heliamLogo} alt="HeliAM Logo" className="h-20 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ITAM done light.
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl">
              HeliAM is an all-in-one platform designed to simplify and streamline your IT asset lifecycle. Our comprehensive solution ensures accountable management from procurement to disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Lifecycle Solutions</h3>
              <p className="text-neutral-600">
                Scalable and predictable IT lifecycle management solutions that maximize asset ROI and optimize IT spending.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Data Lifecycle Management</h3>
              <p className="text-neutral-600">
                Ensure data integrity and compliance with comprehensive data handling at every stage of the asset lifecycle.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Asset Agent Software</h3>
              <p className="text-neutral-600">
                Customizable solution for secure hardware and software information collection, with self-destruct capabilities after transmission.
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
                A comprehensive suite of tools designed to optimize IT asset tracking, security, and management throughout the asset lifecycle.
              </p>
              <Link to="/toolbox">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose HeliAM?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Clear Insights</h3>
                <p className="text-neutral-600">
                  Make smart, cost-effective technology decisions with actionable insights that evolve with your business.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Efficient Management</h3>
                <p className="text-neutral-600">
                  Reduce overhead in data-entry, dev-ops, and analytics through automated, standardized information collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to simplify your IT asset management?</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Whether you're a school, business, or organization with remote workforce needs, we have solutions tailored for you.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Schedule Consultation</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Request Pricing</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeliAM;
