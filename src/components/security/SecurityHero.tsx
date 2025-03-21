
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import { Button } from "../ui/button";

interface SecurityHeroProps {
  scrolled: boolean;
}

export const SecurityHero = ({ scrolled }: SecurityHeroProps) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Security Background" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
            <span className="text-primary">Enterprise-Grade</span> Security Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{
            animationDelay: "0.2s"
          }}>
            Protecting your sensitive data throughout the IT asset management lifecycle with industry-leading security protocols and compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/security/whitepaper">
              <Button className="w-full sm:w-auto bg-white text-neutral-800 hover:bg-primary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-primary/90">
                <FileText className="mr-2 h-5 w-5" />
                View Security Whitepaper
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 dark:border-white dark:text-white dark:hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px] fill-white dark:fill-neutral-900">
          <path d="M1200 120L0 16.48V0h1200v120z"></path>
        </svg>
      </div>
    </section>
  );
};
