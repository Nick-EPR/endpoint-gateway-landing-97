
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = ({ 
  title = "Comprehensive ITAM Solutions for Your Enterprise",
  subtitle = "Transform your IT asset management with our end-to-end solution",
  buttonText = "Get Started"
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 to-transparent dark:from-primary/5 dark:to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-neutral-800 dark:text-white">
            The Lifetime EPR Platform
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 animate-fade-up delay-100">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                {buttonText}
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
