
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    const nextWord = rotatingWords2[nextWordIndex];
    
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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="IT Asset Management Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white bg-gradient-to-r from-white to-white/80 bg-clip-text">
            <span className="text-white">Complete</span>
            &nbsp;ITAM Solutions for&nbsp;
            <span className="relative inline-block">
              <span className="absolute left-0 whitespace-nowrap text-primary">
                {displayText2}
                <span className="animate-pulse text-primary inline-block align-bottom w-[1px]">|</span>
              </span>
              <span className="invisible">{rotatingWords2[currentWord2]}</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up text-white/90" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <button 
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300" 
              onClick={handleGetStarted}
            >
              {buttonText}
            </button>
            <button 
              onClick={scrollToROI}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Calculate Your Savings
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
