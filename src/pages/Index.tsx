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
      
      {/* About Us Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              About Lifetime EPR
            </h2>
            <p className="text-lg text-neutral mb-12 animate-on-scroll">
              Transforming IT asset management with a focus on security, sustainability, and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-6 flex justify-center">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Security First</h3>
              <p className="text-neutral text-center">
                ISO 27001 certified with comprehensive security measures to protect your IT assets
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-6 flex justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Certifications</h3>
              <p className="text-neutral text-center">
                SOC 2 Type II compliant and ITAD certified for secure asset disposition
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="mb-6 flex justify-center">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Leadership</h3>
              <p className="text-neutral text-center">
                Experienced team with decades of expertise in IT asset management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
                Get in Touch
              </h2>
              <p className="text-lg text-neutral mb-8 animate-on-scroll">
                Let's discuss how we can help transform your IT asset management
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary"
                    placeholder="Tell us about your needs"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                    Schedule a Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
