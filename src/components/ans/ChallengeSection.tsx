import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Users, Server, ShieldAlert, Activity, AlertTriangle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ChallengeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const challenges = [
    {
      icon: Smartphone,
      headline: "Thousands of connected devices",
      body: "Exploding device density across campuses overwhelms traditional networks",
    },
    {
      icon: Users,
      headline: "Mobile employees",
      body: "In airports, conference rooms, and customer offices, you need seamless connectivity",
    },
    {
      icon: Server,
      headline: "Mission-critical applications",
      body: "Enterprise apps cannot tolerate instability or downtime",
    },
    {
      icon: ShieldAlert,
      headline: "Cybersecurity threats",
      body: "Increasing attacks targeting endpoints and network infrastructure",
    },
    {
      icon: Activity,
      headline: "IoT & real-time data",
      body: "Growing reliance on real-time data transmission",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-neutral-950"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div
              className={`inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">The Challenge</span>
            </div>

            <h2
              className={`text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Enterprise networks weren't designed for today's reality
            </h2>

            <p
              className={`text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Wi-Fi congestion, coverage gaps, and operational complexity are becoming real risks to care delivery and business continuity.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={challenge.headline}
                className={`border-l-4 border-l-amber-500 dark:border-l-amber-400 bg-neutral-50 dark:bg-neutral-900 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg shrink-0">
                      <challenge.icon className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {challenge.headline}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {challenge.body}
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

export default ChallengeSection;
