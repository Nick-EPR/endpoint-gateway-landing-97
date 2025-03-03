
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
  const [employees, setEmployees] = useState(150);
  const [isEnterprise, setIsEnterprise] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTrends, setCurrentTrends] = useState(calculateTrends(150));
  const sliderRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sliderRef, { threshold: 0.5 });

  const handleEmployeeChange = (value: number) => {
    setEmployees(value);
    setCurrentTrends(calculateTrends(value));
  };

  const handleEnterpriseChange = (checked: boolean) => {
    setIsEnterprise(checked);
    // Adjust employee count when switching modes to ensure it's within valid range
    if (checked && employees < 1000) {
      setEmployees(1000);
      setCurrentTrends(calculateTrends(1000));
    } else if (!checked && employees > 300) {
      setEmployees(300);
      setCurrentTrends(calculateTrends(300));
    }
  };

  // Remove animation delay by passing false for animation
  const { isAnimating } = useROIAnimation(false, handleEmployeeChange);

  return (
    <section id="roi-calculator" className="relative py-20 bg-neutral-light dark:bg-neutral-800 overflow-hidden border-t border-neutral-100 dark:border-neutral-800">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ROIHeader />
          <StatsCards trends={currentTrends} />

          <div className="glass-card dark:bg-neutral-800/50 rounded-2xl p-4 sm:p-8 animate-fade-up transform hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center">
                <div className="bg-primary/10 dark:bg-primary/5 p-2 rounded-lg mr-3">
                  <Calculator className="w-6 h-6 text-primary dark:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold dark:text-white">ROI Calculator</h3>
              </div>
              <EnterpriseToggle 
                isEnterprise={isEnterprise}
                onEnterpriseChange={handleEnterpriseChange}
                disabled={false}
              />
            </div>

            <EmployeeInput 
              employees={employees}
              isEnterprise={isEnterprise}
              sliderRef={sliderRef}
              onEmployeeChange={handleEmployeeChange}
              onEnterpriseChange={handleEnterpriseChange}
              disabled={false}
            />

            <SavingsDisplay employees={employees} />

            <div className="text-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => setShowMoreDetails(true)} 
                className="gap-2 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
              >
                <LineChart className="w-4 h-4" />
                View 4-Year Projection
              </Button>
            </div>

            <CalculationMethodology />
          </div>
        </div>
      </div>

      <SavingsChart 
        showMoreDetails={showMoreDetails}
        setShowMoreDetails={setShowMoreDetails}
        employees={employees}
        onEmployeeChange={handleEmployeeChange}
        isEnterprise={isEnterprise}
      />
    </section>
  );
};

export default ROICalculator;
