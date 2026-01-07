
import { Suspense, lazy, memo } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SectionKey, sections } from "@/pages/sections";

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

// Lazily load the Hero component since it's above the fold
const Hero = lazy(() => import("@/components/sections/Hero"));

const IndexSections = () => {
  // Memoize the renderSection function
  const renderSection = (Component: React.ComponentType) => (
    <Suspense fallback={<SectionLoading />}>
      <Component />
    </Suspense>
  );

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
          {renderSection(sections.products)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.features)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.itamSolution)}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.comparison)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.roi)}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.tmobile)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800 parallelogram-section">
          {renderSection(sections.partners)}
        </SectionWrapper>

        <SectionWrapper className="bg-white dark:bg-neutral-900 parallelogram-section">
          {renderSection(sections.partnership)}
        </SectionWrapper>

        <SectionWrapper className="bg-neutral-light dark:bg-neutral-800">
          {renderSection(sections.contact)}
        </SectionWrapper>
      </main>
    </>
  );
};

export default IndexSections;
