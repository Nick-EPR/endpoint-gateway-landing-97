
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Solutions from "../components/sections/Solutions";
import TMobileBusiness from "../components/sections/TMobileBusiness";
import Partners from "../components/sections/Partners";
import Partnership from "../components/sections/Partnership";
import ROICalculator from "../components/sections/ROICalculator";

const Index = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section after navigation
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY === 0) {
          setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

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
    setShowNavbar(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar showNavbar={showNavbar} onMouseEnter={handleMouseEnter} />
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
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Contact us today to learn how we can help transform your IT asset management
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover-lift animate-on-scroll">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-light py-8">
        <div className="container mx-auto px-4 text-center text-neutral">
          <p>© 2024 LifetimeEPR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
