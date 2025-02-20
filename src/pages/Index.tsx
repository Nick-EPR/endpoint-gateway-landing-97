import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Solutions from "../components/sections/Solutions";
import TMobileBusiness from "../components/sections/TMobileBusiness";
import Partners from "../components/sections/Partners";
import Partnership from "../components/sections/Partnership";
import ROICalculator from "../components/sections/ROICalculator";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import NavigationProgress from "../components/NavigationProgress";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const handleMouseEnter = () => {
    // Keep this for potential future use
  };

  return (
    <div className="min-h-screen">
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      <Hero 
        title="Comprehensive ITAM Solutions for Your Enterprise"
        subtitle="Transform your IT asset management with our end-to-end solution"
        buttonText="Get Started"
      />
      <Features />
      <Solutions />
      <TMobileBusiness />
      <Partners />
      <ROICalculator />
      <Partnership />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
