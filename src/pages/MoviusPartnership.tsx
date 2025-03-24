
import React from "react";
import { Helmet } from "react-helmet";
import PartnershipHero from "@/components/partnerships/movius/PartnershipHero";
import BenefitsSection from "@/components/partnerships/movius/BenefitsSection";
import LEPRAdvantageSection from "@/components/partnerships/movius/LEPRAdvantageSection";
import CallToActionSection from "@/components/partnerships/movius/CallToActionSection";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import { useScrollTop } from "@/hooks/useScrollTop";
import Navbar from "@/components/navbar/Navbar";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const MoviusPartnership = () => {
  const scrolled = useScrollTop();
  const { setTheme } = useTheme();
  
  // Ensure dark theme is set for this page
  useEffect(() => {
    // Save the current theme
    const currentTheme = localStorage.getItem('theme') || 'system';
    
    // Set to dark theme for this page
    setTheme('dark');
    
    // Cleanup: restore the previous theme when unmounting
    return () => {
      setTheme(currentTheme as 'light' | 'dark' | 'system');
    };
  }, [setTheme]);

  return (
    <>
      <Helmet>
        <title>Movius Communications Solution | Lifetime EPR</title>
        <meta name="description" content="Transform your communications infrastructure with the strategic partnership between Movius Secure Communications and Lifetime EndPoint Resources." />
      </Helmet>
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      <main className="pt-16">
        <PartnershipHero />
        <BenefitsSection />
        <LEPRAdvantageSection />
        <CallToActionSection />
      </main>
      
      <Footer />
    </>
  );
};

export default MoviusPartnership;
