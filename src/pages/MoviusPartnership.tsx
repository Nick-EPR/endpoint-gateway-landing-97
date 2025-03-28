
import React from "react";
import { Helmet } from "react-helmet";
import PartnershipHero from "@/components/partnerships/movius/PartnershipHero";
import BenefitsSection from "@/components/partnerships/movius/BenefitsSection";
import LEPRAdvantageSection from "@/components/partnerships/movius/LEPRAdvantageSection";
import CallToActionSection from "@/components/partnerships/movius/CallToActionSection";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import Navbar from "@/components/navbar/Navbar";

const MoviusPartnership = () => {
  return (
    <>
      <Helmet>
        <title>Movius Communications Solution | Lifetime EPR</title>
        <meta name="description" content="Transform your communications infrastructure with the strategic partnership between Movius Secure Communications and Lifetime EndPoint Resources." />
      </Helmet>
      <NavigationProgress />
      <Navbar scrolled={true} onMouseEnter={() => {}} />
      
      <main>
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
