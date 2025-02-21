
import { useState, useEffect, useRef } from 'react';
import { Calculator, Building2, LineChart } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { StatsCards } from './roi/StatsCards';
import { EmployeeInput } from './roi/EmployeeInput';
import { SavingsDisplay } from './roi/SavingsDisplay';
import { SavingsChart } from './roi/SavingsChart';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(1000);
  const [isEnterprise, setIsEnterprise] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleEmployeeChange = (value: number) => {
    setEmployees(value);
    setIsEnterprise(value >= 1000);
  };

  const handleEnterpriseChange = (checked: boolean) => {
    setIsEnterprise(checked);
    if (checked && employees < 1000) {
      setEmployees(1000);
    } else if (!checked && employees >= 1000) {
      setEmployees(999);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateSlider = async () => {
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
            const easeProgress = progress < 0.5
              ? 4 * progress * progress * progress
              : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            const newValue = start + ((end - start) * easeProgress);
            handleEmployeeChange(Math.round(newValue));
            currentStep++;
          }, stepDuration);

          return new Promise(resolve => setTimeout(resolve, duration));
        };

        await new Promise(resolve => setTimeout(resolve, 800));

        await animate(1000, 100, 1500);
        await animate(100, 5000, 2000);
        await animate(5000, 1000, 1500);
      };

      animateSlider();
    }
  }, [isVisible]);

  return (
    <section className="relative py-20 bg-primary-light overflow-hidden">
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

          <StatsCards />

          <div className="glass-card p-8 animate-fade-up delay-400 transform hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ROI Calculator</h3>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 p-2 rounded-lg">
                <Building2 className={`w-5 h-5 ${!isEnterprise ? 'text-primary' : 'text-neutral'}`} />
                <Switch
                  id="enterprise-toggle"
                  checked={isEnterprise}
                  onCheckedChange={handleEnterpriseChange}
                  className="data-[state=checked]:bg-primary"
                />
                <Label htmlFor="enterprise-toggle" className="text-sm font-medium ml-2">
                  Enterprise
                </Label>
              </div>
            </div>

            <EmployeeInput
              employees={employees}
              isEnterprise={isEnterprise}
              sliderRef={sliderRef}
              onEmployeeChange={handleEmployeeChange}
            />

            <SavingsDisplay employees={employees} />

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowMoreDetails(true)}
                className="gap-2"
              >
                <LineChart className="w-4 h-4" />
                View 5-Year Projection
              </Button>
            </div>
          </div>
        </div>
      </div>

      <SavingsChart 
        employees={employees}
        showMoreDetails={showMoreDetails}
        setShowMoreDetails={setShowMoreDetails}
      />

      <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-3 translate-y-8 z-0"></div>
    </section>
  );
};

export default ROICalculator;
