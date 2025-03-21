import { Shield, Lock, CheckCircle2, FileCheck, Building2, FileWarning, KeyRound } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import { SecurityHero } from "../components/security/SecurityHero";
import { PrimaryFeatures } from "../components/security/PrimaryFeatures";
import { AdditionalFeatures } from "../components/security/AdditionalFeatures";
import { SecurityContact } from "../components/security/SecurityContact";
import { SecurityFeature } from "../components/security/types";

const Security = () => {
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

  const securityFeatures: SecurityFeature[] = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "DoD-Standard Data Wiping",
      description: "Secure data erasure following Department of Defense standards, with certified hard drive destruction services for complete data security.",
      certification: {
        name: "DoD 5220.22-M",
        logo: "/certification-logos/dod-logo.svg",
        alt: "Department of Defense Logo"
      }
    }, 
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "R2V3-Certified Partnership",
      description: "On-site data drive shredding performed by R2V3-certified partners, ensuring the highest standards of data destruction and environmental responsibility.",
      certification: {
        name: "R2v3 Certified",
        logo: "/certification-logos/r2v3-logo.png",
        alt: "R2v3 Certification Logo"
      }
    }, 
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "ISO27001:2023 Compliance",
      description: "Adherence to ISO27001:2023 standards across all operations, maintaining strict confidentiality and security protocols for client data.",
      certification: {
        name: "ISO/IEC 27001:2017",
        logo: "/lovable-uploads/5771aed6-61b2-492e-953a-49f8f45d74a6.png",
        alt: "ISO Certification Logo"
      }
    }
  ];

  const additionalFeatures: SecurityFeature[] = [
    {
      icon: <KeyRound className="w-8 h-8 text-primary" />,
      title: "Complete Chain of Custody",
      description: "In-house ITAD services with comprehensive tracking and documentation, reducing liability and ensuring accountability."
    }, 
    {
      icon: <FileWarning className="w-8 h-8 text-primary" />,
      title: "Certified Data Protection",
      description: "Full documentation including certificates of destruction and detailed audit trails for every asset processed."
    }, 
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Secure Facilities",
      description: "24/7 surveillance and monitored facilities for secure storage and processing of IT assets."
    }, 
    {
      icon: <FileCheck className="w-8 h-8 text-primary" />,
      title: "Partner Compliance",
      description: "Strict security requirements for all partners and subcontractors through comprehensive Master Service Agreements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      <SecurityHero scrolled={scrolled} />
      <PrimaryFeatures features={securityFeatures} />
      <AdditionalFeatures features={additionalFeatures} />
      <SecurityContact />
      <Footer />
    </div>
  );
};

export default Security;
