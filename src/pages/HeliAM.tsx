
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  Database, GitMerge, Globe, Shield, Users, Server,
  Box, RefreshCcw, Wrench, Api, LifeBuoy, Laptop,
  MonitorSmartphone, PackageOpen, Workflow
} from "lucide-react";
import heliamLogo from "/lovable-uploads/e008c00c-4bf6-4bf1-81fa-ad040f234e85.png";
import Navbar from "@/components/Navbar";
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
      icon: Box,
      title: "Digital Onboarding Kits",
      description: "Streamline employee onboarding with pre-configured asset bundles and automated deployment workflows."
    },
    {
      icon: RefreshCcw,
      title: "Asset Lifecycle Management",
      description: "Track and manage assets through their entire lifecycle, from procurement to retirement."
    },
    {
      icon: Api,
      title: "API Integration",
      description: "Seamlessly connect with your existing CRM, ERP, and HR systems through our robust API."
    }
  ];

  const lifecycleStages = [
    {
      icon: PackageOpen,
      title: "Procurement",
      description: "Streamlined asset acquisition and vendor management"
    },
    {
      icon: Workflow,
      title: "Configuration",
      description: "Automated setup and software deployment"
    },
    {
      icon: MonitorSmartphone,
      title: "Deployment",
      description: "Efficient distribution and tracking"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Proactive repairs and updates"
    },
    {
      icon: RefreshCcw,
      title: "Redeployment",
      description: "Asset redistribution optimization"
    },
    {
      icon: LifeBuoy,
      title: "ITAD",
      description: "Secure asset disposition"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/50 backdrop-blur-[2px] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="HeliAM Interface"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={heliamLogo} alt="HeliAM Logo" className="h-24 mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              HeliAM IT Asset Management—an all-in-one platform designed to simplify and streamline your IT asset lifecycle.
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-8">
              Transform your IT asset management with enterprise-grade security, automated workflows, and deep analytics that optimize asset utilization while reducing operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features for Modern IT Asset Management</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="HeliAM Dashboard"
              className="w-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Lifecycle Management */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Complete Lifecycle Management</h2>
          <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-12">
            From procurement to retirement, HeliAM manages every stage of your IT assets' lifecycle with precision and efficiency.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {lifecycleStages.map((stage, index) => (
              <div key={index} className="p-4 bg-white rounded-lg text-center">
                <div className="inline-flex p-2 bg-primary/10 rounded-lg mb-3">
                  <stage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{stage.title}</h3>
                <p className="text-sm text-neutral-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Asset Management?</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Join leading organizations that trust HeliAM for their IT asset lifecycle management needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto">Schedule a Demo</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeliAM;
