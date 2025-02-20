
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, FileCheck, Building2, Users, AlertTriangle, FileKey, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SecurityWhitepaper = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission and whitepaper download
    console.log("Form submitted:", formData);
  };

  const sections = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Data Encryption",
      description: "Enterprise-grade encryption for data in transit and at rest, ensuring your sensitive information remains protected throughout the asset lifecycle."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-primary" />,
      title: "Data Sanitization",
      description: "DoD-standard data wiping and certified hard drive destruction services, providing complete data security and peace of mind."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Compliance Standards",
      description: "ISO27001:2023 compliant processes and R2v3-certified partnerships, maintaining the highest standards in data security and environmental responsibility."
    },
    {
      icon: <Building2 className="w-6 h-6 text-primary" />,
      title: "Physical Security",
      description: "24/7 surveillance and monitored facilities ensuring the physical security of your IT assets throughout the management process."
    },
    {
      icon: <ScrollText className="w-6 h-6 text-primary" />,
      title: "Chain of Custody",
      description: "Complete documentation and tracking of all assets, reducing liability and ensuring accountability at every step."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Employee Training",
      description: "Comprehensive security training programs ensuring all staff follow strict security protocols and compliance requirements."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      title: "Incident Response",
      description: "Robust incident response procedures and regular security audits to quickly address and prevent security concerns."
    },
    {
      icon: <FileKey className="w-6 h-6 text-primary" />,
      title: "Data Privacy",
      description: "Full compliance with GDPR, CCPA, and other data privacy regulations, protecting your organization's sensitive information."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70 backdrop-blur-[2px] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Security Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Secure IT Asset Management: A Whitepaper on Data Protection
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ensuring Data Security and Compliance Across the IT Asset Lifecycle
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-700 leading-relaxed">
              In today's digital landscape, data security in IT asset management is more critical than ever. 
              At Lifetime EPR, we prioritize security and compliance throughout every step of the asset lifecycle, 
              ensuring your sensitive data remains protected while meeting all regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Sections Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-neutral-600">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-neutral-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-6">
              Download the Complete Whitepaper
            </h2>
            <p className="text-neutral-600 text-center mb-8">
              Get detailed insights into our security measures, compliance standards, and commitment to protecting your data.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Download Whitepaper
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Secure Your IT Assets?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Schedule a consultation with our security experts to discuss your specific requirements 
              and learn how we can protect your sensitive data throughout the IT asset lifecycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="w-full sm:w-auto">
                  Schedule a Consultation
                </Button>
              </Link>
              <Button variant="outline" className="w-full sm:w-auto">
                Request Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityWhitepaper;
