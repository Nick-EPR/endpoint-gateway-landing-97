import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import NavigationProgress from "@/components/NavigationProgress";
import { Calendar } from "lucide-react";

const LegalWeek2026 = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationProgress />
      <Navbar scrolled={true} onMouseEnter={() => {}} />

      <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-16 h-16 text-primary animate-fade-up" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
              Legal Week 2026
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
              Coming Soon
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalWeek2026;
