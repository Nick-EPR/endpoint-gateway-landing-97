
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Database, GitMerge, Globe, Shield, Users, Server, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";
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

  const features = [
    {
      icon: Database,
      title: "Comprehensive Asset Tracking",
      description: "Track every asset through its entire lifecycle with detailed histories and real-time status updates."
    },
    {
      icon: GitMerge,
      title: "Seamless Integration",
      description: "Native integration with all Lifetime EPR solutions for complete lifecycle visibility."
    },
    {
      icon: Server,
      title: "Asset Intelligence",
      description: "Advanced tracking capabilities powered by our innovative agent technology."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security with role-based access control and detailed audit logs."
    },
    {
      icon: Globe,
      title: "Global Visibility",
      description: "Monitor and manage assets across multiple locations and organizations."
    },
    {
      icon: Users,
      title: "User Management",
      description: "Streamlined asset assignment and user lifecycle management."
    }
  ];

  const stats = [
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: "30%",
      label: "Average cost reduction"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      value: "99.9%",
      label: "Asset visibility"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      value: "1M+",
      label: "Assets managed"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 backdrop-blur-[2px] z-10 dark:from-black/90 dark:via-black/80 dark:to-black/70"></div>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Modern Warehouse Asset Management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={heliamLogo} alt="HeliAM Logo" className="h-24 mb-8 animate-fade-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in [animation-delay:200ms]">
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
            <p className="text-lg text-white/90 max-w-2xl animate-fade-in [animation-delay:400ms]">
              HeliAM streamlines IT asset lifecycle management with comprehensive tracking, security, and management capabilities within the Lifetime EPR ecosystem.
            </p>
            <div className="flex gap-4 mt-8 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="bg-primary/90 hover:bg-primary">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                  <div className="inline-flex p-3 rounded-lg bg-primary/5 dark:bg-primary/10 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Comprehensive Asset Management</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Everything you need to manage your IT assets throughout their entire lifecycle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((Feature, index) => (
              <div key={index} className="p-6 bg-white dark:bg-neutral-800/50 rounded-xl hover:shadow-lg transition-all group dark:shadow-black/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{Feature.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{Feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolbox Integration */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-primary/5 dark:bg-primary/10 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Enhanced with Toolbox</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                Leverage Toolbox's powerful features within HeliAM to optimize asset tracking, security, and management throughout the lifecycle.
              </p>
              <Link to="/toolbox">
                <Button variant="outline" className="group dark:text-white dark:border-neutral-700">
                  Explore Toolbox Features
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Ready to Transform Your IT Asset Management?</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            Join leading organizations that trust HeliAM for their IT asset lifecycle management.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Schedule Platform Demo</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="dark:text-white dark:border-neutral-700">Request Platform Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HeliAM;
