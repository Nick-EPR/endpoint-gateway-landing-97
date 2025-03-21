
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./heliam/HeroSection";
import StatsSection from "./heliam/StatsSection";
import FeaturesSection from "./heliam/FeaturesSection";
import ToolboxIntegrationSection from "./heliam/ToolboxIntegrationSection";
import CTASection from "./heliam/CTASection";

const HeliAM = () => {
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
      <StatsSection />
      <FeaturesSection />
      <ToolboxIntegrationSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HeliAM;
