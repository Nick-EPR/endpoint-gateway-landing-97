import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Radio, ShieldCheck, TrendingUp, Wifi, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const solutions = [
    {
      icon: Radio,
      headline: "Hybrid & Private 5G",
      body: "Enterprise-grade 5G architectures tailored for environments with dedicated spectrum and coverage.",
    },
    {
      icon: ShieldCheck,
      headline: "Secure Segmentation",
      body: "Intelligent traffic separation for clinical, IoT, and administrative networks with zero-trust principles.",
    },
    {
      icon: TrendingUp,
      headline: "Scalable Designs",
      body: "Future-proof architectures that grow with your organization without costly overhauls.",
    },
    {
      icon: Wifi,
      headline: "Always-on Connectivity",
      body: "Seamless connectivity across campuses and locations with automatic failover and redundancy.",
    },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">The Solution</span>
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[#FF4E3C]">Advanced Network Solutions</span> (ANS)
            </h2>

            <p
              className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Multiple technologies combined into a single, resilient network strategy. Not about replacing everything overnight—it's about building a foundation that supports today's demands and tomorrow's growth.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={solution.headline}
                className={`group hover:shadow-lg transition-all duration-500 bg-white dark:bg-neutral-800 border-border ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {solution.headline}
                      </h3>
                      <p className="text-muted-foreground">
                        {solution.body}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
