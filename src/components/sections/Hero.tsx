
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Hero = ({ title, subtitle, buttonText, onButtonClick }: HeroProps) => {
  const [currentWord1, setCurrentWord1] = useState(0);
  const [currentWord2, setCurrentWord2] = useState(0);
  const [displayText2, setDisplayText2] = useState("");
  const [isDeleting2, setIsDeleting2] = useState(false);
  
  const rotatingWords1 = [
    "Comprehensive",
    "Secure",
    "Scalable",
    "Innovative",
    "Reliable"
  ];

  const rotatingWords2 = [
    "Your VAR",
    "Your SMB",
    "Your MSP",
    "Healthcare",
    "Education"
  ];

  // First word rotation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentWord1((prev) => (prev + 1) % rotatingWords1.length);
    }, 3000); // Change word every 3 seconds

    return () => clearTimeout(timer);
  }, [currentWord1]);

  // Second word typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentFullWord = rotatingWords2[currentWord2];
    
    const updateText = () => {
      if (isDeleting2) {
        setDisplayText2(prev => prev.slice(0, -1));
        if (displayText2 === '') {
          setIsDeleting2(false);
          setCurrentWord2((prev) => (prev + 1) % rotatingWords2.length);
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
            <span className="relative inline-block min-w-[200px]">
              <span className="text-primary transition-all duration-500 opacity-0 animate-fade-in">
                {rotatingWords1[currentWord1]}
              </span>
            </span>
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
          <button 
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 animate-fade-up" 
            style={{ animationDelay: "0.4s" }}
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
