import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Products from "../components/sections/Products";
import TMobileBusiness from "../components/sections/TMobileBusiness";
import Partners from "../components/sections/Partners";
import Partnership from "../components/sections/Partnership";
import ROICalculator from "../components/sections/ROICalculator";
import Contact from "../components/sections/Contact";
import NavigationProgress from "../components/NavigationProgress";
import ChatButton from "../components/ChatButton";
import StatusBanner from "../components/StatusBanner";
import ComparisonTable from "../components/sections/ComparisonTable";
import { fetchMonitors } from "@/utils/monitorUtils";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { data: monitors } = useQuery({
    queryKey: ['monitors'],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
  });

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

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

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      {hasOutage && (
        <div className="fixed top-[72px] w-full z-40">
          <StatusBanner message="We're currently experiencing some technical issues and are working to resolve them." />
        </div>
      )}
      
      <Hero 
        title="Comprehensive ITAM Solutions for Your Enterprise"
        subtitle="Transform your IT asset management with our end-to-end solution"
        buttonText="Get Started"
      />

      <section className="angled-section bg-white">
        <Products />
      </section>

      <section className="angled-section-reverse bg-neutral-light">
        <Features />
      </section>

      <section className="angled-section bg-white">
        <ComparisonTable />
      </section>

      <section className="angled-section-reverse bg-white">
        <TMobileBusiness />
      </section>

      <section className="angled-section bg-neutral-light">
        <Partners />
      </section>

      <section className="angled-section-reverse bg-primary-light">
        <ROICalculator />
      </section>

      <section className="angled-section bg-neutral-light">
        <Partnership />
      </section>

      <Contact />

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
