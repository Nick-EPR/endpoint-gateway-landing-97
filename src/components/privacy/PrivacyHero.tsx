import { Shield } from "lucide-react";

interface PrivacyHeroProps {
  scrolled: boolean;
}

export const PrivacyHero = ({ scrolled }: PrivacyHeroProps) => {
  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1506377295352-e3154d43ea9e"
          alt="Privacy Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-primary animate-fade-up" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{
            animationDelay: "0.2s"
          }}>
            We take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our services.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
};
