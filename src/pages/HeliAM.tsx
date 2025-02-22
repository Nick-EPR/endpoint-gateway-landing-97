import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Database, GitMerge, Globe, Shield, Users, Server } from "lucide-react";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4ab1-81fa-ad040f234e85.png";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const HeliAM = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLight(true);
    }, 2000);

    return () => clearTimeout(timer);
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Modern Warehouse Asset Management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={heliamLogo} alt="HeliAM Logo" className="h-24 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ITAM done{' '}
              <span className="relative inline-block min-w-[2ch]">
                <span className={`absolute transition-opacity duration-500 ${showLight ? 'opacity-0' : 'opacity-100'}`}>
                  right
                </span>
                <span className={`transition-opacity duration-500 ${showLight ? 'opacity-100' : 'opacity-0'}`}>
                  light
                </span>
              </span>
              .
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              HeliAM streamlines IT asset lifecycle management with comprehensive tracking, security, and management capabilities within the Lifetime EPR ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Complete Asset Management</h3>
              </div>
              <p className="text-neutral-600">
                Unified asset tracking and management within the Lifetime EPR ecosystem for maximum visibility and control.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GitMerge className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Seamless Integration</h3>
              </div>
              <p className="text-neutral-600">
                Native integration with all Lifetime EPR solutions for comprehensive lifecycle management.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Asset Intelligence</h3>
              </div>
              <p className="text-neutral-600">
                Advanced tracking capabilities powered by Lifetime EPR's innovative agent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toolbox Integration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Enhanced with Toolbox</h2>
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-primary/5 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Toolbox</h3>
              <p className="text-neutral-600 mb-4">
                Leverage Toolbox's powerful features within HeliAM to optimize asset tracking, security, and management throughout the lifecycle.
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
                <h3 className="text-xl font-semibold mb-4">Centralized Control</h3>
                <p className="text-neutral-600">
                  Manage your entire IT asset lifecycle through one unified platform.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Ecosystem Integration</h3>
                <p className="text-neutral-600">
                  Seamlessly connect with all Lifetime EPR solutions for complete asset management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your IT Asset Management</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Experience the power of unified IT asset management with Lifetime EPR's comprehensive platform.
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

      <Footer />
    </div>
  );
};

export default HeliAM;
