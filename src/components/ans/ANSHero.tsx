import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TowerControl, ArrowRight, Shield, Radio, Wifi } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import hospitalVideo from "@/assets/hospital-hero-video.mp4";

const ANSHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder gradient - always visible as fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Video with fade-in transition */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover blur-sm scale-105 transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={hospitalVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <div
            className={`inline-flex items-center gap-3 bg-white/20 text-white px-6 py-3 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <TowerControl className="w-8 h-8" />
            <span className="text-xl font-medium">Secure 5G Network Services</span>
          </div>

          {/* H1 */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Advanced Networking Services for Healthcare & Enterprise
          </h1>

          {/* Subtext */}
          <p
            className={`text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
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
            <p className="text-sm text-white/70 mb-4">
              Trusted by leading enterprises
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white shadow-sm"
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
