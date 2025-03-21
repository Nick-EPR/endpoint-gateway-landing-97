
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { calculateCompoundedSavings, DeviceCounts } from '@/utils/roi';
import { DeviceInput } from './device/DeviceInput';
import { useEffect, useState, useRef } from 'react';
import { EnvironmentalMetrics } from './chart/EnvironmentalMetrics';
import { SavingsLineChart } from './chart/SavingsLineChart';
import { EnterpriseToggle } from './EnterpriseToggle';

interface SavingsChartProps {
  deviceCounts: DeviceCounts;
  showMoreDetails: boolean;
  setShowMoreDetails: (show: boolean) => void;
  onDeviceCountChange: (type: keyof DeviceCounts, value: number) => void;
  isEnterprise?: boolean;
  onEnterpriseChange?: (checked: boolean) => void;
}

export const SavingsChart = ({ 
  deviceCounts, 
  showMoreDetails, 
  setShowMoreDetails, 
  onDeviceCountChange,
  isEnterprise = false,
  onEnterpriseChange
}: SavingsChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear any existing timeouts
    animationTimeoutRef.current.forEach(timeout => clearTimeout(timeout));
    animationTimeoutRef.current = [];

    setChartData([]);

    const data = calculateCompoundedSavings(deviceCounts, isEnterprise);
    
    // Animate data appearing on the chart
    data.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setChartData(prev => {
          const exists = prev.some(p => p.year === item.year);
          if (exists) return prev;
          return [...prev, item];
        });
      }, index * 300);
      
      animationTimeoutRef.current.push(timeout);
    });

    return () => {
      animationTimeoutRef.current.forEach(timeout => clearTimeout(timeout));
      animationTimeoutRef.current = [];
    };
  }, [showMoreDetails, deviceCounts, isEnterprise]);

  // Handle individual device count changes
  const handleDeviceChange = (type: keyof DeviceCounts, value: number) => {
    onDeviceCountChange(type, value);
  };

  // Handle enterprise mode toggle
  const handleEnterpriseChange = (checked: boolean) => {
    if (onEnterpriseChange) {
      onEnterpriseChange(checked);
    }
  };

  return (
    <Dialog open={showMoreDetails} onOpenChange={setShowMoreDetails}>
      <DialogContent className="max-w-4xl w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">4-Year Environmental & Financial Impact</DialogTitle>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 italic mb-4">
            Driving sustainable cost savings and environmental impact
          </p>
          
          {/* Enterprise toggle in the dialog */}
          {onEnterpriseChange && (
            <div className="mt-2 mb-4">
              <EnterpriseToggle 
                isEnterprise={isEnterprise} 
                onEnterpriseChange={handleEnterpriseChange}
                disabled={false}
              />
            </div>
          )}
        </DialogHeader>

        <div className="mb-6">
          <DeviceInput
            deviceCounts={deviceCounts}
            sliderRef={sliderRef}
            onDeviceCountChange={handleDeviceChange}
            disabled={false}
            isEnterprise={isEnterprise}
          />
        </div>
        
        <EnvironmentalMetrics deviceCounts={deviceCounts} isEnterprise={isEnterprise} />

        <SavingsLineChart chartData={chartData} />
        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
          This projection illustrates the potential financial savings and environmental benefits over a 4-year period, based on your organization's device inventory.
          {isEnterprise && " Enterprise mode is active, applying enterprise-scale efficiency factors."}
        </p>
      </DialogContent>
    </Dialog>
  );
};
