
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, Info, ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Hero = ({ title, subtitle, buttonText, onButtonClick }: HeroProps) => {
  const navigate = useNavigate();
  const [currentWord2, setCurrentWord2] = useState(0);
  const [displayText2, setDisplayText2] = useState("");
  const [isDeleting2, setIsDeleting2] = useState(false);
  
  const rotatingWords2 = [
    "Enterprise",
    "Legal",
    "SMBs",
    "VARs",
    "MSPs",
    "Healthcare",
    "Education",
    "Startups",
    "Hybrid Workers",
    "Remote Workers"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentFullWord = rotatingWords2[currentWord2];
    const nextWordIndex = (currentWord2 + 1) % rotatingWords2.length;
    
    const updateText = () => {
      if (isDeleting2) {
        const newText = displayText2.slice(0, -1);
        setDisplayText2(newText);
        
        if (newText === "") {
          setIsDeleting2(false);
          setCurrentWord2(nextWordIndex);
        }
        
        timeout = setTimeout(updateText, 50);
      } else {
        if (displayText2.length < currentFullWord.length) {
          setDisplayText2(currentFullWord.slice(0, displayText2.length + 1));
          timeout = setTimeout(updateText, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting2(true), 2000);
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText2, isDeleting2, currentWord2, rotatingWords2]);

  const scrollToROI = () => {
    const roiSection = document.getElementById('roi-calculator');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleWhyChooseUs = () => {
    navigate('/why-choose-us');
  };

  return (
    <section className="relative pt-[28rem] pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800"></div>

      {/* Tech pattern overlay - dotted grid */}
      <div 
        className="absolute inset-0 opacity-15 animate-emblem-grid-pulse"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2393C851' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px'
        }}
      />

      {/* Digital circuit lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 L100,20" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M0,40 L100,40" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M0,60 L100,60" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M0,80 L100,80" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M20,0 L20,100" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M40,0 L40,100" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M60,0 L60,100" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
          <path d="M80,0 L80,100" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="0.2" />
        </svg>
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float [animation-delay:1.5s]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-primary/8 blur-3xl animate-float [animation-delay:3s]" />
      </div>

      {/* Top gradient for navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-neutral-950/80 to-transparent z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up text-white">
            <span className="text-white">Complete</span>
            &nbsp;ITAM Solutions for&nbsp;
            <span className="relative inline-block min-w-[140px] md:min-w-[200px]">
              <span className="absolute left-0 whitespace-nowrap text-primary opacity-100 transition-opacity duration-300">
                {displayText2}
                <span className="animate-pulse text-primary inline-block align-bottom w-[1px]">|</span>
              </span>
              <span className="invisible">{rotatingWords2[currentWord2]}</span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button 
              onClick={handleWhyChooseUs}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Info className="w-5 h-5" />
              Why Choose Us?
            </button>
            
            <button 
              onClick={scrollToROI}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your Savings
            </button>
            
            <button 
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center gap-2" 
              onClick={handleGetStarted}
            >
              <ArrowRight className="w-5 h-5" />
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
