
import { Link } from "react-router-dom";

interface SecurityHeroProps {
  scrolled: boolean;
}

export const SecurityHero = ({ scrolled }: SecurityHeroProps) => {
  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80" alt="Security Background" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
            <span className="text-primary">Security</span> First, Always
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{
            animationDelay: "0.2s"
          }}>
            At Lifetime EPR, we understand that data security is paramount. We implement rigorous measures to protect your sensitive information throughout the entire IT asset lifecycle.
          </p>
          <Link 
            to="/security/whitepaper"
            className="inline-block bg-white text-neutral-800 dark:bg-primary dark:text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white dark:hover:bg-primary/90 transition-colors duration-300 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Download Security Whitepaper
          </Link>
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
