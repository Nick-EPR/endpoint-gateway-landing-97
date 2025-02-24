
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import NavigationProgress from "../components/NavigationProgress";
import ChatButton from "../components/ChatButton";
import StatusBanner from "../components/StatusBanner";
import { fetchMonitors } from "@/utils/monitorUtils";

// Lazy load non-critical components
const Features = lazy(() => import("../components/sections/Features"));
const Products = lazy(() => import("../components/sections/Products"));
const TMobileBusiness = lazy(() => import("../components/sections/TMobileBusiness"));
const Partners = lazy(() => import("../components/sections/Partners"));
const Partnership = lazy(() => import("../components/sections/Partnership"));
const ROICalculator = lazy(() => import("../components/sections/ROICalculator"));
const Contact = lazy(() => import("../components/sections/Contact"));
const ComparisonTable = lazy(() => import("../components/sections/ComparisonTable"));

// Loading fallback component
const LoadingSection = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const {
    data: monitors,
    isLoading: isMonitorsLoading
  } = useQuery({
    queryKey: ['monitors'],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
    staleTime: 55000,
  });

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 0);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll(".animate-on-scroll").forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen dark:bg-neutral-900">
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

      <Suspense fallback={<LoadingSection />}>
        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          <Products />
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          <Features />
        </section>

        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          <ComparisonTable />
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          <TMobileBusiness />
        </section>

        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          <Partners />
        </section>

        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          <ROICalculator />
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          <Partnership />
        </section>

        <section className="bg-white dark:bg-neutral-900">
          <Contact />
        </section>
      </Suspense>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
