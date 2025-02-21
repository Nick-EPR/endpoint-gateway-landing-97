
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bookmark, Target, Users, Zap, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mission = () => {
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

  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering superior solutions that exceed client expectations.",
      icon: Target
    },
    {
      title: "Client-Centric",
      description: "Our clients are at the heart of our business. We build lasting partnerships through trust and dedication.",
      icon: Users
    },
    {
      title: "Innovation",
      description: "We embrace innovation and continuously evolve our solutions to meet the changing needs of our clients.",
      icon: Zap
    },
    {
      title: "Security",
      description: "We prioritize the security and privacy of our clients' data through industry-leading practices and certifications.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            alt="IT Asset Management Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Bookmark className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Our Mission</h1>
            </div>
            <p className="text-lg text-white/90">
              Our mission is to deliver a world-class end-user experience through customized IT lifecycle management solutions that boost efficiency, optimize resources, and evolve with our clients' needs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="flex items-start gap-4">
                  <value.icon className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-neutral">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
