
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const NavigationProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavigating(true);
    setProgress(0);

    const animateProgress = () => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsNavigating(false);
          return 100;
        }
        return prev + 2;
      });
    };

    const progressInterval = setInterval(animateProgress, 10);

    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    return () => clearInterval(progressInterval);
  }, [location]);

  if (!isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Progress value={progress} className="h-1 bg-transparent" />
    </div>
  );
};

export default NavigationProgress;
