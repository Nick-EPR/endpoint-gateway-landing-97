import { useEffect, useState } from "react";
import { useScrollTop } from "@/hooks/useScrollTop";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import ANSHero from "@/components/ans/ANSHero";
import ChallengeSection from "@/components/ans/ChallengeSection";
import SolutionSection from "@/components/ans/SolutionSection";
import CaseStudySection from "@/components/ans/CaseStudySection";
import ImpactSection from "@/components/ans/ImpactSection";
import PartnershipSection from "@/components/ans/PartnershipSection";
import CTASection from "@/components/ans/CTASection";
import LearnMoreSection from "@/components/ans/LearnMoreSection";

const ANS = () => {
  useScrollTop();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      <main>
        <ANSHero />
        <ChallengeSection />
        <SolutionSection />
        <CaseStudySection />
        <LearnMoreSection />
        <ImpactSection />
        <PartnershipSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default ANS;
