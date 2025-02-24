import { useState, useRef } from 'react';
import { Calculator, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { StatsCards } from './roi/StatsCards';
import { EmployeeInput } from './roi/EmployeeInput';
import { SavingsDisplay } from './roi/SavingsDisplay';
import { SavingsChart } from './roi/SavingsChart';
import { ROIHeader } from './roi/ROIHeader';
import { EnterpriseToggle } from './roi/EnterpriseToggle';
import { CalculationMethodology } from './roi/CalculationMethodology';
import { calculateTrends, defaultTrends } from '@/utils/roiCalculations';
import { useROIAnimation } from '@/hooks/useROIAnimation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(1000);
  const [isEnterprise, setIsEnterprise] = useState(true);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTrends, setCurrentTrends] = useState(defaultTrends);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sliderRef, { threshold: 0.5 });

  const handleEmployeeChange = (value: number) => {
    setEmployees(value);
    setCurrentTrends(calculateTrends(value));
    
    if (value >= 280 && !isEnterprise) {
      setIsEnterprise(true);
    } else if (value <= 320 && isEnterprise) {
      setIsEnterprise(false);
    }
  };

  const handleEnterpriseChange = (checked: boolean) => {
    setIsEnterprise(checked);
  };

  const { isAnimating } = useROIAnimation(isVisible, handleEmployeeChange);

  return (
    <section id="roi-calculator" className="relative py-20 bg-white dark:bg-neutral-900 overflow-hidden border-t border-neutral-100 dark:border-neutral-800">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ROIHeader />
          <StatsCards trends={currentTrends} />

          <div className="glass-card dark:bg-neutral-800/50 rounded-2xl p-4 sm:p-8 animate-fade-up delay-400 transform hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-primary/10 dark:bg-primary/5 p-2 rounded-lg mr-3">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">ROI Calculator</h3>
              </div>
              <EnterpriseToggle 
                isEnterprise={isEnterprise}
                onEnterpriseChange={handleEnterpriseChange}
                disabled={isAnimating}
              />
            </div>

            <EmployeeInput 
              employees={employees}
              isEnterprise={isEnterprise}
              sliderRef={sliderRef}
              onEmployeeChange={handleEmployeeChange}
              disabled={isAnimating}
            />

            <SavingsDisplay employees={employees} />

            <div className="text-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => setShowMoreDetails(true)} 
                className="gap-2 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
              >
                <LineChart className="w-4 h-4" />
                View 5-Year Projection
              </Button>
            </div>

            <CalculationMethodology />
          </div>
        </div>
      </div>

      <SavingsChart 
        employees={employees}
        showMoreDetails={showMoreDetails}
        setShowMoreDetails={setShowMoreDetails}
      />
    </section>
  );
};

export default ROICalculator;
