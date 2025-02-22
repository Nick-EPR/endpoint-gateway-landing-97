import { useState, useEffect, useRef } from 'react';
import { Calculator, Building2, LineChart } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { StatsCards } from './roi/StatsCards';
import { EmployeeInput } from './roi/EmployeeInput';
import { SavingsDisplay } from './roi/SavingsDisplay';
import { SavingsChart } from './roi/SavingsChart';
import { calculateTrends, defaultTrends } from '@/utils/roiCalculations';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(1000);
  const [isEnterprise, setIsEnterprise] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTrends, setCurrentTrends] = useState(defaultTrends);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleEmployeeChange = (value: number) => {
    if (!isAnimating) {
      setEmployees(value);
      setCurrentTrends(calculateTrends(value));
      
      // Auto-switch mode based on employee count
      if (value >= 280 && !isEnterprise) {
        setIsEnterprise(true);
      } else if (value <= 320 && isEnterprise) {
        setIsEnterprise(false);
      }
    }
  };

  const handleEnterpriseChange = (checked: boolean) => {
    if (!isAnimating) {
      setIsEnterprise(checked);
      // The actual employee count adjustment will be handled by the EmployeeInput component
      // for smoother transitions
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.5
    });
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }
    return () => observer.disconnect();
  }, []);

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
        await new Promise(resolve => setTimeout(resolve, 560)); // Reduced from 800ms
        await animate(1000, 100, 1050); // Reduced from 1500ms
        await animate(100, 5000, 1400); // Reduced from 2000ms
        await animate(5000, 1000, 1050); // Reduced from 1500ms
        setIsAnimating(false);
      };
      animateSlider();
    }
  }, [isVisible]);

  return (
    <section id="roi-calculator" className="relative py-20 bg-primary-light overflow-hidden border-t border-neutral-100">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-1/2 -translate -y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              Calculate Your Potential Savings
            </h2>
            <p className="text-lg text-neutral mb-8 animate-fade-up delay-100">
              See how much you can save with our repair-first approach
            </p>
          </div>

          <StatsCards trends={currentTrends} />

          <div className={`glass-card rounded-2xl p-4 sm:p-8 animate-fade-up delay-400 transform hover:shadow-xl transition-all duration-300 ${isAnimating ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ROI Calculator</h3>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 p-2 rounded-lg">
                <Building2 className={`w-5 h-5 ${!isEnterprise ? 'text-primary' : 'text-neutral'}`} />
                <Switch id="enterprise-toggle" checked={isEnterprise} onCheckedChange={handleEnterpriseChange} disabled={isAnimating} className="data-[state=checked]:bg-primary" />
                <Label htmlFor="enterprise-toggle" className="text-sm font-medium ml-2">
                  Enterprise
                </Label>
              </div>
            </div>

            <EmployeeInput employees={employees} isEnterprise={isEnterprise} sliderRef={sliderRef} onEmployeeChange={handleEmployeeChange} disabled={isAnimating} />

            <SavingsDisplay employees={employees} />

            <div className="text-center mb-4">
              <Button variant="outline" onClick={() => setShowMoreDetails(true)} className="gap-2" disabled={isAnimating}>
                <LineChart className="w-4 h-4" />
                View 5-Year Projection
              </Button>
            </div>

            <div className="text-xs text-neutral mt-4 p-4 bg-white/50 rounded-lg">
              <p className="font-semibold mb-2">Calculation Methodology:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Device lifecycle extension from 2 to 2.8 years (based on 2023 customer data)</li>
                <li>Average device cost: $1200 with 25% resale value</li>
                <li>Service cost: $180 per device annually</li>
                <li>Average of 1.2 devices per employee</li>
                <li>Carbon footprint: 156kg CO2 per device (industry standard)</li>
              </ul>
              <p className="mt-2 italic">
                Note: Actual savings may vary based on device types, usage patterns, and market conditions.
                Calculations based on industry averages and customer data from 2023.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SavingsChart employees={employees} showMoreDetails={showMoreDetails} setShowMoreDetails={setShowMoreDetails} />
    </section>
  );
};

export default ROICalculator;
