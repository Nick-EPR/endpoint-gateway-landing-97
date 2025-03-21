import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import WhyChooseUsHero from "../components/whychooseus/WhyChooseUsHero";
import DisconnectedSystems from "../components/whychooseus/DisconnectedSystems";
import PhysicalReality from "../components/whychooseus/PhysicalReality";
import UnifiedSolution from "../components/whychooseus/UnifiedSolution";
import RealWorldChallenges from "../components/whychooseus/RealWorldChallenges";
import WhyChooseUsConclusion from "../components/whychooseus/WhyChooseUsConclusion";

const WhyChooseUs = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      <WhyChooseUsHero />
      <DisconnectedSystems />
      <PhysicalReality />
      <UnifiedSolution />
      <RealWorldChallenges />
      <WhyChooseUsConclusion />
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
