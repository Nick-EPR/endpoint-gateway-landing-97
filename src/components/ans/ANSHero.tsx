import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TowerControl, ArrowRight, Shield, Radio, Wifi } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ANSHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const scrollToSolutions = () => {
    const element = document.getElementById("solutions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustBadges = [
    { icon: Shield, label: "Enterprise Security" },
    { icon: Radio, label: "Private 5G Network" },
    { icon: Wifi, label: "Seamless Connectivity" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <TowerControl className="w-4 h-4" />
            <span className="text-sm font-medium">Secure 5G Network Services</span>
          </div>

          {/* H1 */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Advanced Networking Services for Healthcare & Enterprise
          </h1>

          {/* Subtext */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Built for environments where uptime, security, and mobility matter most. We support the design, deployment, and operation of purpose-built 5G private and hybrid networks that support modern enterprises.
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Schedule Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToSolutions}>
              Explore Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading enterprises
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground shadow-sm"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ANSHero;
