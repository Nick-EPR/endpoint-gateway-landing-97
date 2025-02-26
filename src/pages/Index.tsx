
import { useEffect, useRef, useState, Suspense, lazy, memo } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import NavigationProgress from "../components/NavigationProgress";
import StatusBanner from "../components/StatusBanner";
import { fetchMonitors } from "@/utils/monitorUtils";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { sections } from "./sections";

// Lazily load the Hero component since it's above the fold
const Hero = lazy(() => import("@/components/sections/Hero"));

// Create a memoized section wrapper component
const SectionWrapper = memo(({ className, children }: { className: string; children: React.ReactNode }) => (
  <section className={className}>
    {children}
  </section>
));

SectionWrapper.displayName = "SectionWrapper";

// Create a memoized loading component
const SectionLoading = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <LoadingSpinner />
  </div>
));

SectionLoading.displayName = "SectionLoading";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Optimize the monitor query with better caching
  const { data: monitors } = useQuery({
    queryKey: ['monitors'],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
    staleTime: 55000,
    gcTime: 120000, // Changed from cacheTime to gcTime for v5 compatibility
  });

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

  // Optimize scroll handler with debouncing
  useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      
      timeoutId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 0);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, []);

  // Optimize intersection observer
  useEffect(() => {
    const options = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observerRef.current?.unobserve(entry.target);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Memoize the renderSection function
  const renderSection = (Component: React.ComponentType) => (
    <Suspense fallback={<SectionLoading />}>
      <Component />
    </Suspense>
  );

  return (
    <div className="min-h-screen dark:bg-neutral-900">
      <NavigationProgress />
      <Navbar scrolled={scrolled} onMouseEnter={() => {}} />
      
      {hasOutage && (
        <div className="fixed top-[72px] w-full z-40">
          <StatusBanner message="We're currently experiencing some technical issues and are working to resolve them." />
        </div>
      )}
      
      <Suspense fallback={<SectionLoading />}>
        <Hero 
          title="Comprehensive ITAM Solutions for Your Enterprise" 
          subtitle="Transform your IT asset management with our end-to-end solution" 
          buttonText="Get Started" 
        />
      </Suspense>

      <main>
        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.products)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.features)}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.comparison)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.tmobile)}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.partners)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.roi)}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.partnership)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800">
          {renderSection(sections.contact)}
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
