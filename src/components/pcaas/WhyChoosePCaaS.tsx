
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Wifi, Zap, Shield, Settings, Users, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const WhyChoosePCaaS = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const benefits = [
    {
      icon: DollarSign,
      title: "No Upfront Hardware Costs / Predictable Monthly Pricing",
      description: "Skip the big CapEx hit. Pay one predictable monthly fee that includes the device, software, support, and 5G connectivity. No CapEx."
    },
    {
      icon: Wifi,
      title: "Always-On 5G Connectivity, Anywhere",
      description: "Eliminate patchy Wi-Fi or unreliable hotspots. Get always-on connectivity, stronger security, and seamless access to cloud tools, ideal for hybrid teams, remote employees, and field workers. T-Mobile's 5G network covers 99% of the U.S."
    },
    {
      icon: Zap,
      title: "Fast, Scalable Deployment",
      description: "Devices ship pre-configured and ready to use within days. Onboard new users fast, refresh old devices, and standardize your IT experience without IT bottlenecks. Built to scale quickly."
    },
    {
      icon: Shield,
      title: "Enterprise-Level Support and Security",
      description: "Receive helpdesk support for the PCaaS laptop, patching, remote wipe, and secure data connectivity – keeping your devices compliant."
    },
    {
      icon: Settings,
      title: "End-to-End Device Management",
      description: "We handle everything from kitting to break-fix, to offboarding and secure retirement, taking repetitive device logistics off your plate so your internal team can focus on strategy."
    },
    {
      icon: Users,
      title: "Built for SMBs",
      description: "Ideal for SMBs with 10–300 employees, remote/hybrid teams, fast-scaling startups, and those without dedicated IT staff or overwhelmed internal IT. Great for retail, professional services, real estate, construction/field teams, healthcare, education, and compliance-sensitive sectors."
    },
    {
      icon: TrendingUp,
      title: "Future-Proof",
      description: "5G-ready, cloud-enabled for tomorrow's workloads."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                Why SMBs Are Switching to PCaaS
              </h2>
            </div>
            <p className="text-xl text-primary font-semibold">
              Simplify Your IT. Mobilize Your Workforce. Cut CapEx.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`h-full hover:shadow-xl transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-primary ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-white mb-3 text-lg group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {benefit.description}
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

export default WhyChoosePCaaS;
