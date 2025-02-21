
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/heliam/HeroSection";
import FeaturesSection from "@/components/heliam/FeaturesSection";
import LifecycleSection from "@/components/heliam/LifecycleSection";
import IntegrationSection from "@/components/heliam/IntegrationSection";
import CTASection from "@/components/heliam/CTASection";

const HeliAM = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLight, setShowLight] = useState(false);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLight(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = () => {
    setIsScrolled(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      <HeroSection />
      <FeaturesSection />
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="HeliAM Dashboard"
              className="w-full rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>
      <LifecycleSection />
      <IntegrationSection />
      <CTASection />
    </div>
  );
};

export default HeliAM;
