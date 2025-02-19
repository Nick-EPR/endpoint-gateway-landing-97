import { Shield, Lock, CheckCircle2, FileCheck, Database, KeyRound, Building2, FileWarning, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Security = () => {
  const [scrolled, setScrolled] = useState(false);
  const {
    pathname
  } = useLocation();

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

  const securityFeatures = [{
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "DoD-Standard Data Wiping",
    description: "Secure data erasure following Department of Defense standards, with certified hard drive destruction services for complete data security."
  }, {
    icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    title: "R2V3-Certified Partnership",
    description: "On-site data drive shredding performed by R2V3-certified partners, ensuring the highest standards of data destruction and environmental responsibility."
  }, {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "ISO27001:2023 Compliance",
    description: "Adherence to ISO27001:2023 standards across all operations, maintaining strict confidentiality and security protocols for client data."
  }, {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Lifetime Data Detect",
    description: "Advanced data lifecycle management service ensuring robust oversight, compliance, and protection of your valuable assets."
  }];

  const additionalFeatures = [{
    icon: <KeyRound className="w-8 h-8 text-primary" />,
    title: "Complete Chain of Custody",
    description: "In-house ITAD services with comprehensive tracking and documentation, reducing liability and ensuring accountability."
  }, {
    icon: <FileWarning className="w-8 h-8 text-primary" />,
    title: "Certified Data Protection",
    description: "Full documentation including certificates of destruction and detailed audit trails for every asset processed."
  }, {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Secure Facilities",
    description: "24/7 surveillance and monitored facilities for secure storage and processing of IT assets."
  }, {
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    title: "Partner Compliance",
    description: "Strict security requirements for all partners and subcontractors through comprehensive Master Service Agreements."
  }];

  return <div className="min-h-screen">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10"></div>
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80" alt="Security Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
              <span className="text-primary">Security</span> First, Always
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{
            animationDelay: "0.2s"
          }}>
              At Lifetime EPR, we understand that data security is paramount. We implement rigorous measures to protect your sensitive information throughout the entire IT asset lifecycle.
            </p>
            
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Primary Security Features Section */}
      <section className="relative py-32 md:py-48 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Enterprise-Grade Security Features
          </h2>
          <p className="text-lg text-neutral text-center max-w-3xl mx-auto mb-16">
            Our comprehensive security measures and certifications ensure your data remains protected at every stage of the IT asset lifecycle.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </div>)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-neutral-light"></path>
          </svg>
        </div>
      </section>

      {/* Additional Security Features */}
      <section className="relative py-32 md:py-48 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="mb-6 relative">
              <Lock className="w-12 h-12 text-primary absolute top-0 left-0 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }} />
              <KeyRound 
                className="w-12 h-12 text-primary animate-[spin_1s_ease-in-out_forwards]" 
                style={{ 
                  transformOrigin: 'center',
                  animationDelay: '0.2s',
                  animationFillMode: 'forwards'
                }} 
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-neutral text-center max-w-3xl mx-auto mb-16">
              From secure facilities to certified processes, we maintain the highest standards of security throughout our operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </div>)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 md:py-48 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your IT Assets?
            </h2>
            <p className="text-lg text-neutral mb-8">
              Schedule a consultation with our security experts to discuss your specific requirements and learn how we can protect your sensitive data throughout the IT asset lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                Schedule a Consultation
              </Link>
              <a href="#" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors">
                Download Security Whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default Security;
