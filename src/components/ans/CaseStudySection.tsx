import { useRef } from "react";
import { CheckCircle, Quote, Building2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const CaseStudySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const features = [
    { label: "Not a pilot", description: "Production-grade deployment" },
    { label: "Long-term investment", description: "Built for real-world operations" },
    { label: "Clinical mobility", description: "Seamless staff connectivity" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-neutral-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div
                className={`inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Case Study</span>
              </div>

              <h2
                className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                A proven model at enterprise scale
              </h2>

              <p
                className={`text-lg text-muted-foreground mb-8 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Leading healthcare institutions are already moving beyond traditional network designs. Boston Children's Hospital partnered with T-Mobile to deploy a production-grade hybrid network supporting clinical mobility, security, and future innovation.
              </p>

              {/* Features List */}
              <div
                className={`space-y-4 mb-8 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {features.map((feature, index) => (
                  <div key={feature.label} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">{feature.label}</span>
                      <span className="text-muted-foreground"> - {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote Block */}
              <div
                className={`relative pl-6 border-l-4 border-primary transition-all duration-700 delay-400 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-primary bg-white dark:bg-neutral-950" />
                <p className="text-lg italic text-muted-foreground">
                  "This shift is now accelerating across the healthcare and enterprise landscape."
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">
                      Modern healthcare network infrastructure
                    </p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
                <div className="absolute bottom-8 left-8 w-32 h-32 border-2 border-primary/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
