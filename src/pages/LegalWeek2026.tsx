import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import { Calendar, MapPin, Clock, DollarSign, RefreshCw, Lock, ShieldCheck, Trash2, Mail, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance for your team" },
  { icon: RefreshCw, title: "Advanced Exchange", description: "Next-business-day device replacement" },
  { icon: DollarSign, title: "Predictable Monthly Cost", description: "Simple, transparent per-device pricing" },
  { icon: Lock, title: "Remote Lock/Data Wipe", description: "Instant security response for lost or stolen devices" },
  { icon: Wifi, title: "Secure Connectivity", description: "Always-on 5G connectivity via T-Mobile's network" },
  { icon: Trash2, title: "Certified Data Destruction", description: "DoD-standard end-of-life data wiping" },
];

const LegalWeek2026 = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationProgress />
      <Navbar scrolled={true} onMouseEnter={() => {}} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
          <img
            src="/images/refinery-rooftop.jpg"
            alt="Refinery Hotel Rooftop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4 animate-fade-up">
              LegalWeek 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-up text-white">
              Lifetime EPR Happy Hour
            </h1>
            <p className="text-xl md:text-2xl mb-10 animate-fade-up text-white/80 italic" style={{ animationDelay: "0.1s" }}>
              Serving Up the Always Connected Solution
            </p>

            <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-8 py-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Tuesday, March 10th</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-primary" />
                <span>5:30 PM – 8:30 PM</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Refinery Hotel, NYC</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Description & Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The 5G Connected Laptop for Legal
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover how Lifetime EPR's PCaaS delivers the always-connected laptop solution
              purpose-built for the mobile-first legal workforce. One predictable monthly cost
              covers the device, 5G connectivity, support, and security — so your team can
              work from anywhere without missing a beat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:-translate-y-1 transition-transform duration-300 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <feature.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-black/95 to-black/85 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cocktails, Conversations, &amp; Cost Savings
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join us for an evening of networking and learn how PCaaS can transform
            your firm's endpoint strategy.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:sales@lifetimeepr.com">
              <Mail className="w-5 h-5" />
              RSVP Now
            </a>
          </Button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <img
              src="/lovable-uploads/Lifetime_EPR_Emblem.png"
              alt="Lifetime EPR"
              className="h-12 opacity-80"
            />
            <img
              src="/lovable-uploads/tmo-premiere-dark.png"
              alt="T-Mobile for Business Premiere Partner"
              className="h-10 opacity-80"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalWeek2026;
