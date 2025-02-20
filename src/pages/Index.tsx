import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Shield, Award, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Solutions from "../components/sections/Solutions";
import TMobileBusiness from "../components/sections/TMobileBusiness";
import Partners from "../components/sections/Partners";
import Partnership from "../components/sections/Partnership";
import ROICalculator from "../components/sections/ROICalculator";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [state]);

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
    const observerRef = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.observe(element);
    });

    return () => observerRef.disconnect();
  }, []);

  const handleMouseEnter = () => {
  };

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} onMouseEnter={handleMouseEnter} />
      <Hero 
        title="Comprehensive ITAM Solutions for Your Enterprise"
        subtitle="Transform your IT asset management with our end-to-end solution"
        buttonText="Get Started"
      />

      {/* Features Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform skew-y-2 -translate-y-1/2 z-10"></div>
        <Features />
      </section>

      {/* Solutions Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-neutral-light transform -skew-y-2 -translate-y-1/2 z-10"></div>
        <Solutions />
      </section>

      {/* T-Mobile Business Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform skew-y-2 -translate-y-1/2 z-10"></div>
        <TMobileBusiness />
      </section>

      {/* Partners Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-neutral-light transform -skew-y-2 -translate-y-1/2 z-10"></div>
        <Partners />
      </section>

      {/* ROI Calculator Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform skew-y-2 -translate-y-1/2 z-10"></div>
        <ROICalculator />
      </section>

      {/* Partnership Section */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-primary-light transform -skew-y-2 -translate-y-1/2 z-10"></div>
        <Partnership />
      </section>

      {/* About Us Section */}
      <section className="relative section-padding bg-white" ref={aboutRef}>
        <div className="absolute top-0 left-0 w-full h-24 bg-white transform skew-y-2 -translate-y-1/2 z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-on-scroll">
              Why Choose Lifetime EPR?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security First</h3>
                <p className="text-neutral">
                  Industry-leading security measures and compliance standards to protect your assets
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
                <p className="text-neutral">
                  Comprehensive IT asset management tailored to your needs
                </p>
              </div>
              <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Dedicated Support</h3>
                <p className="text-neutral">
                  24/7 expert support and guidance for all your IT asset needs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-neutral-light transform -skew-y-2 translate-y-1/2 z-10"></div>
      </section>

      {/* Contact Section */}
      <section className="relative section-padding bg-neutral-light">
        <div className="absolute top-0 left-0 w-full h-24 bg-neutral-light transform skew-y-2 -translate-y-1/2 z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              Transform your IT asset management today with our comprehensive solutions.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors animate-on-scroll"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform -skew-y-2 translate-y-1/2 z-10"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
