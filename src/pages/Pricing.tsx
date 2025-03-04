
import React from "react";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingPlans from "@/components/sections/pricing/PricingPlans";
import PricingFAQ from "@/components/sections/pricing/PricingFAQ";
import PricingFeatures from "@/components/sections/pricing/PricingFeatures";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useIndexScroll } from "@/hooks/useIndexScroll";

const Pricing = () => {
  const { scrolled } = useIndexScroll();

  return (
    <div className="min-h-screen dark:bg-neutral-900">
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      <main>
        <PricingHero />
        
        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          <PricingPlans />
        </section>
        
        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          <PricingFeatures />
        </section>
        
        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          <PricingFAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
