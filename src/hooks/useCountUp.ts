
import { useState, useEffect } from 'react';

export const useCountUp = (end: number, duration: number = 1000, startOnMount: boolean = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const startValue = count;
    
    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (end - startValue) * easeOutQuart;
      setCount(Math.round(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};
