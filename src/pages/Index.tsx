
import { useEffect, useRef } from "react";
import { Globe, Shield, Users, Server } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b2341ac3-771a-4393-be7c-4147f249071d.png"
              alt="Lifetime EndPoint Resources"
              className="h-8 md:h-10"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover-lift text-neutral-600 hover:text-primary">Features</a>
            <a href="#solutions" className="hover-lift text-neutral-600 hover:text-primary">Solutions</a>
            <a href="#contact" className="hover-lift text-neutral-600 hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-primary-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Comprehensive ITAM Solutions for Your Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-neutral mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Transform your IT asset management with our end-to-end solution
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover-lift animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
            Comprehensive Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Global Coverage",
                description: "Manage assets across multiple locations and jurisdictions"
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Security First",
                description: "Enterprise-grade security and compliance measures"
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Team Collaboration",
                description: "Streamlined workflows for enhanced team productivity"
              },
              {
                icon: <Server className="w-8 h-8 text-primary" />,
                title: "Asset Tracking",
                description: "Real-time monitoring and lifecycle management"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 glass-card rounded-xl hover-lift animate-on-scroll">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              End-to-End ITAM Solutions
            </h2>
            <p className="text-lg text-neutral animate-on-scroll">
              Streamline your IT asset management with our comprehensive suite of tools and services
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Asset Discovery",
                description: "Automatically identify and catalog all IT assets in your network"
              },
              {
                title: "Lifecycle Management",
                description: "Track and manage assets from procurement to retirement"
              },
              {
                title: "Compliance Management",
                description: "Stay compliant with regulatory requirements and internal policies"
              },
              {
                title: "Cost Optimization",
                description: "Identify cost-saving opportunities and optimize asset utilization"
              }
            ].map((solution, index) => (
              <div key={index} className="p-8 glass-card rounded-xl animate-on-scroll">
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-neutral">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Contact us today to learn how we can help transform your IT asset management
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover-lift animate-on-scroll">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-light py-8">
        <div className="container mx-auto px-4 text-center text-neutral">
          <p>© 2024 LifetimeEPR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
