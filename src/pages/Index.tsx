
import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import NavigationProgress from "../components/NavigationProgress";
import ChatButton from "../components/ChatButton";
import StatusBanner from "../components/StatusBanner";
import { fetchMonitors } from "@/utils/monitorUtils";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { sections } from "./sections";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout>();
  
  const { data: monitors } = useQuery({
    queryKey: ['monitors'],
    queryFn: fetchMonitors,
    refetchInterval: 60000,
    staleTime: 55000,
  });

  const hasOutage = monitors?.some(monitor => monitor.status === "down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY > 0;
      if (scrolled !== currentScroll) {
        requestAnimationFrame(() => {
          setScrolled(currentScroll);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    loadingTimeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add("animate-fade-up");
          observerRef.current?.unobserve(target);

          // Add stagger effect based on data-index
          const index = target.getAttribute('data-index');
          if (index) {
            target.style.animationDelay = `${parseInt(index) * 100}ms`;
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element, index) => {
      element.setAttribute('data-index', index.toString());
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const renderSection = (Component: React.ComponentType, index: number) => (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[200px]">
        <LoadingSpinner />
      </div>
    }>
      <div 
        className="animate-on-scroll opacity-0" 
        data-index={index}
        style={{ transform: 'translateY(20px)' }}
      >
        <Component />
      </div>
    </Suspense>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

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

      <main className="relative z-10">
        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.products, 0)}
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.features, 1)}
        </section>

        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.comparison, 2)}
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.tmobile, 3)}
        </section>

        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.partners, 4)}
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.roi, 5)}
        </section>

        <section className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.partnership, 6)}
        </section>

        <section className="bg-neutral-light dark:bg-neutral-800">
          {renderSection(sections.contact, 7)}
        </section>
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
