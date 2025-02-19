import { useEffect, useRef, useState } from "react";
import { Globe, Shield, Users, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY === 0) {
          // Always show at top
          setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

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

  const handleMouseEnter = () => {
    setShowNavbar(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 glass-card transition-all duration-300 ${
          showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        onMouseEnter={handleMouseEnter}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2f749bc8-b845-4784-bf84-c8c3ad303a49.png"
              alt="Lifetime EndPoint Resources"
              className="h-8 md:h-10"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="hover-lift text-neutral-600 hover:text-primary">Features</a>
            <a href="#solutions" className="hover-lift text-neutral-600 hover:text-primary">Solutions</a>
            <Link to="/contact" className="hover-lift text-neutral-600 hover:text-primary">Contact</Link>
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

      {/* Partnership Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
                Strategic Partnership
              </h2>
              <p className="text-lg text-neutral mb-8 animate-on-scroll">
                Enhancing our ITAM solutions through strategic collaboration
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Partnership with Lifetime Service
                </h3>
                <p className="text-neutral mb-6">
                  Through our exclusive partnership with Lifetime Service, we deliver comprehensive repair and maintenance solutions that set us apart in the industry.
                </p>
                <ul className="space-y-4 text-neutral">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="ml-3">Expert repair services for all IT assets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="ml-3">Rapid response times and efficient resolution</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="ml-3">Nationwide coverage for consistent service quality</span>
                  </li>
                </ul>
                <a 
                  href="https://lifetimeservice.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-primary hover:text-secondary transition-colors"
                >
                  Learn more about Lifetime Service →
                </a>
              </div>
              <div className="bg-neutral-light p-8 rounded-xl animate-on-scroll">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold mb-2">Partnership Benefits</h4>
                  <p className="text-neutral">Our collaboration delivers enhanced value to clients through:</p>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-neutral">Integrated repair tracking within your ITAM system</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-neutral">Streamlined maintenance scheduling and reporting</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <p className="text-neutral">Cost-effective repair solutions that extend asset lifecycle</p>
                  </div>
                </div>
              </div>
            </div>
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
