
import { PuzzlePiece } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUsHero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 to-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80" 
          alt="IT Asset Management" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6 bg-primary/20 rounded-full px-4 py-2">
            <PuzzlePiece className="mr-2 h-5 w-5 text-primary" />
            <span className="text-white font-medium">Simplify Your IT Asset Management</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
            Why Choose Us for Your <span className="text-primary">IT Asset Management</span> Solution?
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{
            animationDelay: "0.2s"
          }}>
            Are you tired of juggling multiple disconnected tools to manage your IT assets? 
            Discover a better way to streamline your ITAM processes.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-300 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Schedule a Demo
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

export default WhyChooseUsHero;
