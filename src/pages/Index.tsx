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
import { sections } from "./sections";
import { Skeleton } from "@/components/ui/skeleton";

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
          const target = entry.target as HTMLElement;
          target.classList.add("animate-fade-up");
          observerRef.current?.unobserve(target);

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

  const renderSection = (SectionComponent: any, index: number) => (
    <Suspense 
      fallback={
        <div className="w-full space-y-4 p-8">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      }
      key={index}
    >
      <div 
        className="animate-on-scroll opacity-0 relative w-full"
        data-index={index}
        style={{ transform: 'translateY(20px)' }}
      >
        <SectionComponent />
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

      <main className="relative">
        {Object.entries(sections).map(([key, Component], index) => (
          <section 
            key={key}
            className={`
              relative z-10 w-full py-16
              ${index % 2 === 0 
                ? 'bg-white dark:bg-neutral-900' 
                : 'bg-neutral-light dark:bg-neutral-800'
              } 
            `}
          >
            <div className="container mx-auto px-4">
              {renderSection(Component, index)}
            </div>
          </section>
        ))}
      </main>

      <Footer />
      <ChatButton />
    </div>
  );
};

export default Index;
