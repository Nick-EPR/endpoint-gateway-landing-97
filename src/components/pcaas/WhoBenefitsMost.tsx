
import { Card, CardContent } from "@/components/ui/card";
import { Users, Shield, Wifi, Settings, TrendingUp, CheckCircle, Target } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const WhoBenefitsMost = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const scenarios = [
    {
      icon: Users,
      title: "You run a remote or hybrid team",
      description: "Your people are everywhere, and so are their devices.",
      solution: "PCaaS keeps everyone connected, secure, and supported."
    },
    {
      icon: Shield,
      title: "You're in a compliance-heavy industry",
      description: "Legal, healthcare, financial services need strict security.",
      solution: "PCaaS helps ensure devices are secure and compliant, without the IT overhead."
    },
    {
      icon: Wifi,
      title: "Your field teams lack reliable Wi-Fi",
      description: "Technicians, reps, or contractors often work without dependable internet.",
      solution: "PCaaS powered by T-Mobile means built-in 5G connectivity for maximum uptime."
    },
    {
      icon: Settings,
      title: "You're tired of tracking and patching devices",
      description: "Small IT teams, aging hardware, constant headaches?",
      solution: "PCaaS delivers preconfigured devices with ongoing support and updates."
    },
    {
      icon: TrendingUp,
      title: "Your business is scaling fast",
      description: "Startups or project-based orgs can't afford delays.",
      solution: "PCaaS grows with you so you don't have to build an IT department overnight."
    },
    {
      icon: CheckCircle,
      title: "You want to standardize your team's devices",
      description: "Consistent hardware makes support, updates, and scaling easier.",
      solution: "PCaaS provides standardized, enterprise-grade devices for your entire team."
    },
    {
      icon: Target,
      title: "You're in Real Estate",
      description: "Agents need reliable devices for client meetings, property showings, and mobile work.",
      solution: "PCaaS ensures agents have dependable, 5G-connected devices for seamless property management and client interactions."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Who Benefits Most from PCaaS?
              </h2>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              PCaaS is designed for the unique challenges facing small and medium-sized businesses today.
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-xl transition-all duration-500 border-l-4 border-l-primary group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <scenario.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white text-lg mb-2 group-hover:text-primary transition-colors">
                        {scenario.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                  <div className="pl-16">
                    <div className="flex items-start gap-2 bg-primary/5 rounded-lg p-3 group-hover:bg-primary/10 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-primary font-medium">
                        {scenario.solution}
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

export default WhoBenefitsMost;
