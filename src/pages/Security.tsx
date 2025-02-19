import { Shield, Lock, CheckCircle2, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Security = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  const handleMouseEnter = () => {
    setShowNavbar(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar showNavbar={showNavbar} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
              Security First
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
              Protecting your assets with enterprise-grade security measures
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
            Our Security Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Data Encryption",
                description: "All data is encrypted in transit and at rest."
              },
              {
                icon: <Lock className="w-8 h-8 text-primary" />,
                title: "Access Control",
                description: "Role-based access control to ensure data integrity."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
                title: "Compliance",
                description: "Adhering to industry standards and regulations."
              },
              {
                icon: <FileCheck className="w-8 h-8 text-primary" />,
                title: "Audit Trails",
                description: "Comprehensive logging of all user activities."
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

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Get in Touch
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Contact us to learn more about our security solutions.
            </p>
            <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover-lift animate-on-scroll">
              Contact Us
            </Link>
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

export default Security;
