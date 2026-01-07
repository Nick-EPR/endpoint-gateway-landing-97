import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./coreplatform/HeroSection";
import FeaturesSection from "./coreplatform/FeaturesSection";

import CTASection from "./coreplatform/CTASection";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import AdditionalCapabilities from "@/components/sections/features/AdditionalCapabilities";

const CorePlatform = () => {
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
    <div className="min-h-screen bg-white dark:bg-neutral-900 relative">
      {/* Dark blue tech pattern background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/10 via-blue-100/5 to-white dark:from-blue-950/40 dark:via-blue-900/30 dark:to-neutral-900 -z-10"></div>
      <div className="fixed inset-0 opacity-5 dark:opacity-10 -z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}
      ></div>
      
      <Navbar scrolled={isScrolled} onMouseEnter={handleMouseEnter} />
      <HeroSection />
      <section className="bg-slate-50 dark:bg-[#020817] parallelogram-section">
        <Products />
      </section>
      <section className="bg-slate-100 dark:bg-[#0F172A] parallelogram-section">
        <Features />
      </section>
      <section className="bg-slate-50 dark:bg-[#020817] parallelogram-section">
        <AdditionalCapabilities />
      </section>
      <section className="bg-slate-100 dark:bg-[#0F172A] parallelogram-section">
        <FeaturesSection />
      </section>
      <CTASection />
      <Footer />
    </div>
  );
};

export default CorePlatform;
