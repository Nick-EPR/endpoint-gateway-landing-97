import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "From Procurement to Retirement";
  useEffect(() => {
    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }, 2000);
    return () => clearTimeout(startDelay);
  }, []);
  return <section className="relative pt-24 pb-16 overflow-hidden min-h-[80vh] flex items-center">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-125 blur-sm">
        <source src="https://enqatyvjcztoicadviix.supabase.co/storage/v1/object/public/assets/clips/Screen%20Recording%202026-01-07%20at%201.17.39%20PM.mov" type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '30px'
    }}></div>
      
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-12">
          <div className="lg:w-1/2 space-y-6">
            
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Complete IT Asset Management{" "}
            <span className="text-primary">
                {displayText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
                {isTypingComplete && (
                  <img 
                    src="/lovable-uploads/Lifetime_EPR_Emblem.png" 
                    alt="" 
                    className="inline-block w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-1 align-text-bottom animate-fade-in"
                  />
                )}
              </span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg">
              The Core Platform is the central hub of the Lifetime EPR ecosystem, providing complete visibility and control over your entire IT asset lifecycle with enterprise-grade security and compliance.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2 rounded-full bg-primary hover:bg-primary/90 text-white">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/30 text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>;
};
export default HeroSection;