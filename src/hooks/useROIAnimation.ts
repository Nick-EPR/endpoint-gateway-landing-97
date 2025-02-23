
import { useState, useEffect } from 'react';

export const useROIAnimation = (
  isVisible: boolean,
  handleEmployeeChange: (value: number) => void
) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const animateSlider = async () => {
        setIsAnimating(true);
        const animate = (start: number, end: number, duration: number) => {
          const steps = 60;
          const stepDuration = duration / steps;
          let currentStep = 0;
          const interval = setInterval(() => {
            if (currentStep >= steps) {
              clearInterval(interval);
              return;
            }
            const progress = currentStep / steps;
            const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            const newValue = start + (end - start) * easeProgress;
            handleEmployeeChange(Math.round(newValue));
            currentStep++;
          }, stepDuration);
          return new Promise(resolve => setTimeout(resolve, duration));
        };
        
        await new Promise(resolve => setTimeout(resolve, 400)); // Shorter initial delay
        await animate(1000, 100, 800); // Quicker first animation
        await animate(100, 3000, 1000); // Shorter range, faster animation
        await animate(3000, 1000, 800); // Quick return to default
        setIsAnimating(false);
      };
      animateSlider();
    }
  }, [isVisible, handleEmployeeChange]);

  return { isAnimating };
};
