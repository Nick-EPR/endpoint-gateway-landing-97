
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Hero = ({ title, subtitle, buttonText, onButtonClick }: HeroProps) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const rotatingWords = [
    "Comprehensive",
    "Secure",
    "Scalable",
    "Innovative",
    "Reliable"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentFullWord = rotatingWords[currentWord];
    
    const updateText = () => {
      if (isDeleting) {
        // Backspacing
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
        }
        timeout = setTimeout(updateText, 50); // Faster deletion
      } else {
        // Typing
        if (displayText.length < currentFullWord.length) {
          setDisplayText(currentFullWord.slice(0, displayText.length + 1));
          timeout = setTimeout(updateText, 100); // Slower typing
        } else {
          // Word is complete, wait before starting deletion
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord, rotatingWords]);

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
            <span className="relative inline-block">
              <span className="absolute left-0 text-primary">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
              <span className="invisible">{rotatingWords[currentWord]}</span>
            </span>
            &nbsp;ITAM Solutions for Your Enterprise
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
