import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Building, Users, Handshake, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";

const About = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    // Keep this for potential future use
  };

  const solutions = [
    {
      title: "IT Asset Lifecycle Management",
      description: "Comprehensive management of IT assets from procurement to retirement, ensuring maximum value and efficiency throughout their lifecycle.",
      icon: Building
    },
    {
      title: "HeliAM",
      description: "Our core platform providing integrated asset management capabilities with advanced tracking and reporting features.",
      icon: Users
    },
    {
      title: "Toolbox",
      description: "A suite of specialized tools designed to optimize asset management processes and enhance operational efficiency.",
      icon: Handshake
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-neutral-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lifetime EPR</h1>
            <p className="text-lg text-neutral mb-8">
              Transforming IT Asset Management for a Digital Future
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-neutral leading-relaxed">
              Our mission is to deliver a world-class end-user experience through customized IT lifecycle management solutions that boost efficiency, optimize resources, and evolve with our clients' needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <solution.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                  <p className="text-neutral">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Learn More About Our Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Partners</h2>
            <div className="glass-card p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/999e601c-e7e8-4f68-96a2-84dc5eb27a58.png"
                    alt="T-Mobile Logo"
                    className="h-16 object-contain"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-4">Strategic Partnership with T-Mobile</h3>
                  <p className="text-neutral mb-6">
                    Our collaboration with T-Mobile enables us to provide comprehensive connected device solutions and enhanced mobility management capabilities to our clients.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => window.open("https://www.t-mobile.com/business", "_blank")}
                  >
                    Learn More About T-Mobile Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
