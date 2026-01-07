import { useRef } from "react";
import { Handshake } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const PartnershipSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-medium">Why partner with Lifetime EPR and T-Mobile for Business?</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold text-foreground mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            More than technology — execution
          </h2>

          {/* Featured Bubble */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 md:p-10 shadow-lg border border-border">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                "We help organizations move forward without overpromising, overspending, or overcomplicating the path."
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary rounded-full opacity-60" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-primary/30 rounded-full" />
          </div>

          {/* Partner logos placeholder */}
          <div
            className={`mt-10 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/Lifetime_EPR_Emblem.png"
                alt="Lifetime EPR"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-2xl text-muted-foreground/30">+</div>
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/tmo-premiere-light.png"
                alt="T-Mobile for Business"
                className="h-10 w-auto dark:hidden"
              />
              <img
                src="/lovable-uploads/tmo-premiere-dark.png"
                alt="T-Mobile for Business"
                className="h-10 w-auto hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
