
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const Hero = ({ 
  title = "Comprehensive ITAM Solutions for Your Enterprise",
  subtitle = "Transform your IT asset management with our end-to-end solution",
  buttonText = "Get Started"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1557682250-33bd709cbe85"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-a-businessman-working-on-laptop-5371/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
            Enterprise ITAM & Legal Solutions for Modern Business
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-lg text-lg font-semibold transition-colors"
              >
                {buttonText}
              </Button>
            </Link>
            <Link
              to="/what-is-itam"
              className="text-white hover:text-primary transition-colors text-lg font-medium"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[100px]">
          <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white dark:fill-neutral-900"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
