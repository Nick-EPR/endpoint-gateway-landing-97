
import { useState, useEffect } from 'react';

export const useROIAnimation = (
  isVisible: boolean,
  handleEmployeeChange: (value: number) => void
) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimationStarted, setHasAnimationStarted] = useState(false);

  useEffect(() => {
    let animationFrame: number;

    if (isVisible && !hasAnimationStarted) {
      setHasAnimationStarted(true);
      setIsAnimating(true);
      
      const startTime = performance.now();
      const totalDuration = 2600;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        
        // Ensure animation stops and controls become interactive
        if (elapsed >= totalDuration) {
          setIsAnimating(false);
          return;
        }

        const phase1Duration = 800;
        const phase2Duration = 1000;
        const phase3Duration = 800;

        let newValue: number;

        if (elapsed < phase1Duration) {
          const progress = elapsed / phase1Duration;
          const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          newValue = 1000 - (900 * easeProgress);
        } else if (elapsed < phase1Duration + phase2Duration) {
          const progress = (elapsed - phase1Duration) / phase2Duration;
          const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          newValue = 100 + (2900 * easeProgress);
        } else {
          const progress = (elapsed - (phase1Duration + phase2Duration)) / phase3Duration;
          const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          newValue = 3000 - (2000 * easeProgress);
        }

        handleEmployeeChange(Math.round(newValue));
        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      // Force animation to end after duration
      setTimeout(() => {
        setIsAnimating(false);
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      }, totalDuration);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, handleEmployeeChange, hasAnimationStarted]);

  return { isAnimating };
};
