
import { Newspaper } from "lucide-react";

export const NewsHero = () => {
  return (
    <section className="relative pt-32 pb-32 md:pt-40 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80" 
          alt="News Background" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-up">
            <Newspaper className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Latest <span className="text-primary">News</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-up" 
             style={{ animationDelay: "0.2s" }}>
            Stay updated with the latest announcements, partnerships, and insights from Lifetime EPR
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
