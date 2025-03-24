
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./toolbox/HeroSection";
import FeaturesSection from "./toolbox/FeaturesSection";
import StatsSection from "./toolbox/StatsSection";
import IntegrationSection from "./toolbox/IntegrationSection";
import ClientsSection from "./toolbox/ClientsSection";
import CTASection from "./toolbox/CTASection";
import DemoSection from "./toolbox/DemoSection";

const Toolbox = () => {
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

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <StatsSection />
      <DemoSection />
      <IntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Toolbox;
