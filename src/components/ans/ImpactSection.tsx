import { useRef } from "react";
import { Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ImpactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">Why this matters</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Outcomes that impact care delivery
          </h2>

          <p
            className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            This is about giving IT teams confidence that the network will support care, not limit it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
