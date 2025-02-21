import { useState, useEffect, useRef } from 'react';
import { Calculator, TrendingUp, Clock, Wrench, Building2, Buildings } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ROICalculator = () => {
  const [employees, setEmployees] = useState(1000);
  const [isMSP, setIsMSP] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const calculateAnnualSavings = () => {
    return employees * 90000 / 1000;
  };

  const calculateTwoYearSavings = () => {
    return calculateAnnualSavings() * 2;
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
          const stepValue = (end - start) / steps;
          
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
            setEmployees(Math.round(newValue));
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

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-6 text-center animate-fade-up delay-200 hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div className="text-primary text-xl font-bold mb-2">60%</div>
              <p className="text-neutral">Average savings repair vs. replacement</p>
            </div>
            <div className="glass-card p-6 text-center animate-fade-up delay-300 hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-primary text-xl font-bold mb-2">2 Years</div>
              <p className="text-neutral">Average life extension of devices</p>
            </div>
          </div>

          <div className="glass-card p-8 animate-fade-up delay-400 transform hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-lg mr-3">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">ROI Calculator</h3>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 p-2 rounded-lg">
                <Buildings className={`w-5 h-5 ${isMSP ? 'text-primary' : 'text-neutral'}`} />
                <Switch
                  id="company-type"
                  checked={isMSP}
                  onCheckedChange={setIsMSP}
                  className="data-[state=checked]:bg-primary"
                />
                <Building2 className={`w-5 h-5 ${!isMSP ? 'text-primary' : 'text-neutral'}`} />
                <Label htmlFor="company-type" className="text-sm font-medium ml-2">
                  {isMSP ? "MSP" : "SMB"}
                </Label>
              </div>
            </div>

            <div className="mb-8" ref={sliderRef}>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-neutral">
                  Number of Employees
                </label>
                <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full text-primary">
                  {employees.toLocaleString()}
                </span>
              </div>
              <Slider 
                min={100} 
                max={10000} 
                step={100} 
                value={[employees]} 
                onValueChange={values => setEmployees(values[0])} 
                className="my-4"
              />
              <div className="flex justify-between text-xs text-neutral">
                <span>100</span>
                <span>10,000</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border border-neutral/20 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <div className="text-sm text-neutral">Annual Savings</div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${calculateAnnualSavings().toLocaleString()}
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg border border-neutral/20 hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <div className="text-sm text-neutral">2-Year Savings</div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${calculateTwoYearSavings().toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-3 translate-y-8 z-0"></div>
    </section>
  );
};

export default ROICalculator;
