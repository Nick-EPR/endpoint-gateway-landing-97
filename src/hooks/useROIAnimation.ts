
import { useState, useEffect } from 'react';

export const useROIAnimation = (
  isVisible: boolean,
  handleEmployeeChange: (value: number) => void
) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let animationFrame: number;
      const startTime = performance.now();
      const totalDuration = 2600; // Total animation duration in ms
      
      setIsAnimating(true);

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        
        if (elapsed >= totalDuration) {
          setIsAnimating(false);
          return;
        }

        // Calculate which phase of the animation we're in
        const phase1Duration = 800;  // 1000 -> 100
        const phase2Duration = 1000; // 100 -> 3000
        const phase3Duration = 800;  // 3000 -> 1000

        let newValue: number;

        if (elapsed < phase1Duration) {
          // Phase 1: 1000 -> 100
          const progress = elapsed / phase1Duration;
          const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          newValue = 1000 - (900 * easeProgress);
        } else if (elapsed < phase1Duration + phase2Duration) {
          // Phase 2: 100 -> 3000
          const progress = (elapsed - phase1Duration) / phase2Duration;
          const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          newValue = 100 + (2900 * easeProgress);
        } else {
          // Phase 3: 3000 -> 1000
          const progress = (elapsed - (phase1Duration + phase2Duration)) / phase3Duration;
          const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          newValue = 3000 - (2000 * easeProgress);
        }

        handleEmployeeChange(Math.round(newValue));
        animationFrame = requestAnimationFrame(animate);
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isVisible, handleEmployeeChange]);

  return { isAnimating };
};
