
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, LineChart, PanelRight } from 'lucide-react';
import { SavingsLineChart } from './chart/SavingsLineChart';
import { generateChartData } from '@/utils/roi/financialCalculations';
import { DeviceCounts, TrendResults, calculateTrends } from '@/utils/roi';
import { EnvironmentalMetrics } from './chart/EnvironmentalMetrics';
import { DeviceInput } from './device/DeviceInput';
import { EnterpriseToggle } from './EnterpriseToggle';

interface SavingsChartProps {
  showMoreDetails: boolean;
  setShowMoreDetails: (show: boolean) => void;
  deviceCounts: DeviceCounts;
  onDeviceCountChange: (type: keyof DeviceCounts, value: number) => void;
  isEnterprise: boolean;
  onEnterpriseChange: (enabled: boolean) => void;
  onMinimizeStats?: () => void;
  onMaximizeStats?: () => void;
  isStatsMinimized?: boolean;
}

export const SavingsChart = ({ 
  showMoreDetails, 
  setShowMoreDetails,
  deviceCounts,
  onDeviceCountChange,
  isEnterprise,
  onEnterpriseChange,
  onMinimizeStats,
  onMaximizeStats,
  isStatsMinimized = true
}: SavingsChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [currentTrends, setCurrentTrends] = useState<TrendResults>(calculateTrends(deviceCounts, isEnterprise));

  // Generate chart data when device counts or enterprise status changes
  useEffect(() => {
    setCurrentTrends(calculateTrends(deviceCounts, isEnterprise));
    setChartData(generateChartData(deviceCounts, isEnterprise));
  }, [deviceCounts, isEnterprise]);

  const toggleStatsPanel = () => {
    if (isStatsMinimized && onMaximizeStats) {
      onMaximizeStats();
    } else if (!isStatsMinimized && onMinimizeStats) {
      onMinimizeStats();
    }
  };

  return (
    <Dialog open={showMoreDetails} onOpenChange={setShowMoreDetails}>
      <DialogContent className="max-w-4xl w-full h-[90vh] overflow-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="flex items-center gap-2">
            <LineChart className="w-5 h-5" />
            <span>4-Year Savings Projection</span>
          </DialogTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={toggleStatsPanel}
              className="rounded-full"
            >
              <PanelRight className="h-4 w-4" />
            </Button>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="md:col-span-2">
            <EnterpriseToggle 
              isEnterprise={isEnterprise} 
              onEnterpriseChange={onEnterpriseChange} 
              disabled={false}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <SavingsLineChart chartData={chartData} />
            <EnvironmentalMetrics trends={currentTrends} />
          </div>
          
          <div className="bg-neutral-50 dark:bg-neutral-850 p-4 rounded-lg">
            <h3 className="font-semibold mb-4 dark:text-white">Adjust Device Count</h3>
            <DeviceInput 
              deviceCounts={deviceCounts}
              onDeviceCountChange={onDeviceCountChange}
              disabled={false}
              compact={true}
              isEnterprise={isEnterprise}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
