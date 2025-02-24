
import { useEffect, useRef, useState, Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import NavigationProgress from "../components/NavigationProgress";
import ChatButton from "../components/ChatButton";
import StatusBanner from "../components/StatusBanner";
import { fetchMonitors } from "@/utils/monitorUtils";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";

// Move lazily loaded sections to a separate file
import { 
  Features,
  Products,
  TMobileBusiness,
  Partners,
  Partnership,
  ROICalculator,
  Contact,
  ComparisonTable 
} from "./sections";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  const { data: monitors } = useQuery({
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

      <Suspense fallback={<LoadingSpinner />}>
        <main>
          <HomeSections />
        </main>
      </Suspense>

      <Footer />
      <ChatButton />
    </div>
  );
};

const HomeSections = () => (
  <>
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

    <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
      <ROICalculator />
    </section>

    <section className="bg-white dark:bg-neutral-900 parallelogram-section">
      <Partnership />
    </section>

    <section className="bg-neutral-light dark:bg-neutral-800">
      <Contact />
    </section>
  </>
);

export default Index;
