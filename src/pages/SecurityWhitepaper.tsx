
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/security/whitepaper/Hero";
import Introduction from "@/components/security/whitepaper/Introduction";
import SecurityFeatures from "@/components/security/whitepaper/SecurityFeatures";
import DownloadForm from "@/components/security/whitepaper/DownloadForm";
import CallToAction from "@/components/security/whitepaper/CallToAction";

const SecurityWhitepaper = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      <Hero />
      <Introduction />
      <SecurityFeatures />
      <DownloadForm />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default SecurityWhitepaper;
