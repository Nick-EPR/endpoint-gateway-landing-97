
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  Warehouse, 
  Wrench, 
  Truck, 
  Cog, 
  ShieldCheck, 
  Recycle,
  ArrowRight,
  BarChart3,
  Timer,
  CheckCircle2,
  CircleDollarSign
} from "lucide-react";
import toolboxLogo from "/lovable-uploads/5f646840-4a0c-484c-bd5d-6707af1f66ca.png";
import warehouseImage from "/lovable-uploads/1677d91d-eaaf-4e2c-b98f-d73469344a71.png";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Toolbox = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const handleMouseEnter = () => {
    setIsScrolled(true);
  };

  const features = [
    {
      icon: <Warehouse className="w-6 h-6 text-primary" />,
      title: "Warehouse Operations",
      description: "Streamline receiving, storage, and dispatch operations with integrated warehouse management tools and inventory tracking."
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      title: "Repair Management",
      description: "Track devices through the repair process, from intake and diagnosis to repair completion and quality assurance."
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Logistics Control",
      description: "Manage shipping, receiving, and chain of custody with real-time tracking and automated notifications."
    },
    {
      icon: <Cog className="w-6 h-6 text-primary" />,
      title: "Parts Management",
      description: "Track repair parts inventory, automate reordering, and maintain optimal stock levels for efficient repairs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Quality Control",
      description: "Ensure repaired devices meet OEM specifications with comprehensive testing and quality assurance workflows."
    },
    {
      icon: <Recycle className="w-6 h-6 text-primary" />,
      title: "Asset Recovery",
      description: "Maximize device value through efficient triage, repair, and redistribution or remarketing channels."
    }
  ];

  const stats = [
    {
      icon: <Timer className="w-8 h-8 text-primary" />,
      value: "24-48h",
      label: "Average repair turnaround time"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      value: "95%+",
      label: "First-time repair success rate"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: "40%",
      label: "Reduction in repair costs"
    },
    {
      icon: <CircleDollarSign className="w-8 h-8 text-primary" />,
      value: "2.5x",
      label: "ROI in first year"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/60 backdrop-blur-[3px] z-10 dark:from-black/95 dark:via-black/85 dark:to-black/70"></div>
          <img 
            src={warehouseImage}
            alt="Warehouse Operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <img src={toolboxLogo} alt="Toolbox Logo" className="h-16 mb-8 animate-fade-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in [animation-delay:200ms]">
              Physical Asset Management & Repair
            </h1>
            <p className="text-lg text-white/90 max-w-2xl animate-fade-in [animation-delay:400ms]">
              Bridge the gap between IT asset management and repair operations with Toolbox's comprehensive suite of warehouse, logistics, and repair depot integration tools.
            </p>
            <div className="flex gap-4 mt-8 animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="bg-primary/90 hover:bg-primary">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Comprehensive Repair Management</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Streamline your repair operations with our integrated suite of tools designed for modern IT asset management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow dark:bg-neutral-800/50 dark:border-neutral-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Proven Results</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Our customers achieve significant improvements in their repair operations
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
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

      {/* Integration Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Seamless HeliAM Integration</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            Connect your physical asset operations directly with HeliAM for complete visibility and control over your device lifecycle.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/heliam">
              <Button variant="outline" className="group dark:text-white dark:border-neutral-700">
                Learn About HeliAM
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button>Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Toolbox;
