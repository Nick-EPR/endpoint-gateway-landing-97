
import { useState, useEffect, useRef } from "react";

export function useIndexScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Optimize scroll handler with debouncing
  useEffect(() => {
    let timeoutId: number;
    
    const handleScroll = () => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      
      timeoutId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 0);
        
        // Check if ROI section is visible
        const roiSection = document.getElementById('roi-calculator');
        if (roiSection) {
          const rect = roiSection.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          setIsCalculatorVisible(isVisible);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial visibility
    
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

  return { scrolled, isCalculatorVisible };
}
