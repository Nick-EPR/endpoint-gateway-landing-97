import { Suspense, lazy, memo } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SectionKey, sections } from "@/pages/sections";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SectionLoading = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <LoadingSpinner />
  </div>
));

SectionLoading.displayName = "SectionLoading";

const Hero = lazy(() => import("@/components/sections/Hero"));
const OurSolutionsHeader = lazy(() => import("@/components/sections/OurSolutionsHeader"));

const IndexSections = () => {
  const renderSection = (Component: React.ComponentType) => (
    <Suspense fallback={<SectionLoading />}>
      <Component />
    </Suspense>
  );

  return (
    <>
      <AnimatedSection className="bg-slate-50 dark:bg-[#020817] parallelogram-section">
        <div 
          className="parallelogram-bg absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(147, 200, 81, 0.5) 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px'
          }}
        />
        <Suspense fallback={<SectionLoading />}>
          <OurSolutionsHeader />
        </Suspense>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <Suspense fallback={<SectionLoading />}>
          <Hero 
            title="Comprehensive ITAM Solutions for Your Enterprise" 
            subtitle="Transform your IT asset management with our end-to-end solution" 
            buttonText="Get Started" 
          />
        </Suspense>
      </AnimatedSection>

      <main>
        <AnimatedSection className="bg-slate-100 dark:bg-[#0F172A] parallelogram-section">
          {renderSection(sections.comparison)}
        </AnimatedSection>

        <AnimatedSection className="bg-slate-100 dark:bg-[#0F172A] parallelogram-section">
          {renderSection(sections.roi)}
        </AnimatedSection>

        <AnimatedSection className="bg-slate-50 dark:bg-[#020817] parallelogram-section">
          {renderSection(sections.tmobile)}
        </AnimatedSection>

        <AnimatedSection className="bg-slate-100 dark:bg-[#0F172A] parallelogram-section">
          {renderSection(sections.partners)}
        </AnimatedSection>

        <AnimatedSection className="bg-slate-50 dark:bg-[#020817] parallelogram-section">
          {renderSection(sections.partnership)}
        </AnimatedSection>

        <AnimatedSection className="bg-slate-100 dark:bg-[#0F172A]">
          {renderSection(sections.contact)}
        </AnimatedSection>
      </main>
    </>
  );
};

export default IndexSections;
