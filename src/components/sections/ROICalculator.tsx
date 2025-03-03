
import { useState, useRef, useEffect } from 'react';
import { Calculator, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { SavingsDisplay } from './roi/savings/SavingsDisplay';
import { SavingsChart } from './roi/SavingsChart';
import { ROIHeader } from './roi/ROIHeader';
import { CalculationMethodology } from './roi/CalculationMethodology';
import { calculateTrends, defaultTrends, DeviceCounts, getDefaultDeviceCounts } from '@/utils/roi';
import { useROIAnimation } from '@/hooks/useROIAnimation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { DeviceInput } from './roi/device/DeviceInput';
import { EnterpriseToggle } from './roi/EnterpriseToggle';
import { StatsSidePanel } from './roi/StatsSidePanel';

const ROICalculator = () => {
  const [deviceCounts, setDeviceCounts] = useState<DeviceCounts>(getDefaultDeviceCounts());
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [currentTrends, setCurrentTrends] = useState(calculateTrends(getDefaultDeviceCounts()));
  const [isEnterprise, setIsEnterprise] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sliderRef, { threshold: 0.5 });
  const { isVisible: isSectionVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  // Toggle stats panel visibility
  const toggleStatsPanel = () => {
    setStatsVisible(prev => !prev);
  };

  // Auto-open stats panel on desktop only when section is visible
  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop && isSectionVisible) {
      setStatsVisible(true);
    }
    
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;
      if (isDesktop && isSectionVisible && !statsVisible) {
        setStatsVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [statsVisible, isSectionVisible]);

  // Calculate total devices for enterprise mode
  useEffect(() => {
    const totalDevices = Object.values(deviceCounts).reduce((sum, count) => sum + count, 0);
    setIsEnterprise(totalDevices >= 1200);
  }, [deviceCounts]);

  const handleDeviceCountChange = (type: keyof DeviceCounts, value: number) => {
    setDeviceCounts(prev => {
      const newCounts = { ...prev, [type]: value };
      setCurrentTrends(calculateTrends(newCounts));
      return newCounts;
    });
  };

  // Remove animation delay by passing false for animation
  const { isAnimating } = useROIAnimation(false, () => {});

  return (
    <section 
      id="roi-calculator" 
      className="relative py-20 bg-neutral-light dark:bg-neutral-800 overflow-hidden border-t border-neutral-100 dark:border-neutral-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ROIHeader />
          
          {/* Stats Side Panel - only show when calculator section is visible */}
          <StatsSidePanel 
            trends={currentTrends} 
            isOpen={statsVisible} 
            togglePanel={toggleStatsPanel}
            isCalculatorVisible={isSectionVisible}
          />

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
                onEnterpriseChange={() => {}} // Controlled automatically based on device count
                disabled={true} // Disabled as it's auto-determined
              />
            </div>

            <DeviceInput 
              deviceCounts={deviceCounts}
              sliderRef={sliderRef}
              onDeviceCountChange={handleDeviceCountChange}
              disabled={false}
              isEnterprise={isEnterprise}
            />

            <SavingsDisplay deviceCounts={deviceCounts} />

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
        deviceCounts={deviceCounts}
        onDeviceCountChange={handleDeviceCountChange}
        isEnterprise={isEnterprise}
      />
    </section>
  );
};

export default ROICalculator;
