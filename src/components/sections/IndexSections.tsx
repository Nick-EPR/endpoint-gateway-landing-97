
import { Suspense, lazy, memo, useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SectionKey, sections } from "@/pages/sections";

// Create a memoized section wrapper component
const SectionWrapper = memo(({ className, children, id }: { className: string; children: React.ReactNode; id?: string }) => (
  <section className={className} id={id}>
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

// Lazily load the Hero component since it's above the fold
const Hero = lazy(() => import("@/components/sections/Hero"));

const IndexSections = () => {
  // State to track which sections are visible or about to be visible
  const [visibleSectionKeys, setVisibleSectionKeys] = useState<SectionKey[]>([]);
  
  // Set up intersection observer to load sections as they approach viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '200px', // Start loading when section is 200px from viewport
      threshold: 0.01
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionKey = entry.target.id as SectionKey;
          if (sectionKey && !visibleSectionKeys.includes(sectionKey)) {
            setVisibleSectionKeys(prev => [...prev, sectionKey]);
          }
        }
      });
    }, observerOptions);
    
    // Observe all section placeholders
    document.querySelectorAll('[data-section-key]').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [visibleSectionKeys]);

  // Memoize the renderSection function
  const renderSection = (Component: React.ComponentType, key: SectionKey) => {
    // Only render sections that are visible or about to be visible
    if (!visibleSectionKeys.includes(key) && key !== 'products') {
      return <div data-section-key={key} id={key} />;
    }
    
    return (
      <Suspense fallback={<SectionLoading />}>
        <Component />
      </Suspense>
    );
  };

  return (
    <>
      <Suspense fallback={<SectionLoading />}>
        <Hero 
          title="Comprehensive ITAM Solutions for Your Enterprise" 
          subtitle="Transform your IT asset management with our end-to-end solution" 
          buttonText="Get Started" 
        />
      </Suspense>

      <main>
        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.products, 'products')}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.features, 'features')}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.comparison, 'comparison')}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section" id="roi-calculator">
          {renderSection(sections.roi, 'roi')}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.tmobile, 'tmobile')}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.partners, 'partners')}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.partnership, 'partnership')}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800">
          {renderSection(sections.contact, 'contact')}
        </SectionWrapper>
      </main>
    </>
  );
};

export default IndexSections;
