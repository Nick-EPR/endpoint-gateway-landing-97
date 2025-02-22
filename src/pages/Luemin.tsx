
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  DeviceTablet,
  Shield,
  Zap,
  Settings,
  ArrowRight,
  Network,
  CloudCog,
} from "lucide-react";
import lueminLogo from "/lovable-uploads/07886d9e-4595-41a4-b460-0ea37b032e61.png";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Luemin = () => {
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
      icon: DeviceTablet,
      title: "Unified Device Management",
      description: "Centralized control over all your mobile devices, laptops, and tablets from a single interface."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Robust security policies, remote wipe capabilities, and detailed compliance reporting."
    },
    {
      icon: Zap,
      title: "Automated Enrollment",
      description: "Zero-touch deployment and automated device provisioning for seamless scaling."
    },
    {
      icon: Settings,
      title: "Policy Management",
      description: "Granular control over device settings, applications, and security policies."
    },
    {
      icon: Network,
      title: "Real-time Monitoring",
      description: "Continuous device health monitoring and detailed analytics dashboard."
    },
    {
      icon: CloudCog,
      title: "Cloud Integration",
      description: "Seamless integration with HeliAM and Toolbox for complete lifecycle management."
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
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
            alt="Modern Device Management"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-8 animate-fade-in">
              Coming Soon
            </div>
            <img src={lueminLogo} alt="Luemin Logo" className="h-16 mb-8 animate-fade-in [animation-delay:200ms]" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in [animation-delay:400ms]">
              Unified Endpoint Management
            </h1>
            <p className="text-lg text-white/90 max-w-2xl animate-fade-in [animation-delay:600ms]">
              Complete device management and security, fully integrated with the Lifetime EPR ecosystem.
            </p>
            <div className="flex gap-4 mt-8 animate-fade-in [animation-delay:800ms]">
              <Button size="lg" className="bg-primary/90 hover:bg-primary">
                Join Waitlist
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Upcoming Features</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A preview of what's coming in our unified endpoint management solution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((Feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{Feature.title}</h3>
                </div>
                <p className="text-neutral-600">{Feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Part of the Lifetime EPR Ecosystem</h2>
            <p className="text-lg text-neutral-600 mb-12">
              Luemin will integrate seamlessly with HeliAM and Toolbox, providing complete device lifecycle management from deployment to retirement.
            </p>
            <div className="flex justify-center gap-6">
              <Link to="/heliam">
                <Button variant="outline" className="group">
                  Explore HeliAM
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/toolbox">
                <Button variant="outline" className="group">
                  Explore Toolbox
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Luemin;
