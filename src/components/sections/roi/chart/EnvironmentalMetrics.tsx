
import { useState, useEffect } from 'react';
import { DeviceCounts } from '@/utils/roi';
import { 
  Tooltip, 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { HelpCircle } from 'lucide-react';

interface EnvironmentalMetricsProps {
  deviceCounts: DeviceCounts;
  isEnterprise?: boolean;
}

export const EnvironmentalMetrics = ({ deviceCounts, isEnterprise = false }: EnvironmentalMetricsProps) => {
  const [animatedTreeCount, setAnimatedTreeCount] = useState(0);
  const [animatedCarbonOffset, setAnimatedCarbonOffset] = useState(0);

  useEffect(() => {
    // Calculate total devices
    const totalDevices = 
      deviceCounts.macbooks +
      deviceCounts.laptops +
      deviceCounts.desktops +
      deviceCounts.tablets +
      deviceCounts.monitors +
      deviceCounts.accessories * 0.1; // Count accessories as 1/10th of a full device for environmental calcs
    
    // Apply enterprise scaling factor if in enterprise mode
    const enterpriseFactor = isEnterprise ? 1.2 : 1;
    const targetTreeCount = Math.round(totalDevices * 0.4 * enterpriseFactor);
    const targetCarbonOffset = Math.round(totalDevices * 0.7 * enterpriseFactor);
    
    const startTime = performance.now();
    const duration = 1000;

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setAnimatedTreeCount(Math.round(targetTreeCount * progress));
      setAnimatedCarbonOffset(Math.round(targetCarbonOffset * progress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [deviceCounts, isEnterprise]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-green-50/50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800 relative">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Trees Saved</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <HelpCircle className="h-4 w-4 text-green-600/60 dark:text-green-500/60" />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                className="w-64 border-green-200 dark:border-green-800 dark:bg-neutral-800"
                side="top"
              >
                <p className="font-medium text-sm border-b border-green-100 dark:border-green-900 pb-1 text-green-700 dark:text-green-400">Tree Calculation Methodology</p>
                <div className="pt-2 space-y-1 text-xs">
                  <p>Based on average CO2 absorption of 25kg per tree annually.</p>
                  <ul className="list-disc pl-4 pt-1">
                    <li>Calculated using total CO2 reduction</li>
                    <li>Divided by annual tree absorption capacity</li>
                    <li>Adjusted for device lifecycle extension</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
          {animatedTreeCount.toLocaleString()} trees
        </p>
      </div>
      <div className="p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Device Lifecycle Extension</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <HelpCircle className="h-4 w-4 text-blue-600/60 dark:text-blue-500/60" />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                className="w-64 border-blue-200 dark:border-blue-800 dark:bg-neutral-800"
                side="top"
              >
                <p className="font-medium text-sm border-b border-blue-100 dark:border-blue-900 pb-1 text-blue-700 dark:text-blue-400">Lifecycle Extension Impact</p>
                <div className="pt-2 space-y-1 text-xs">
                  <p>Standard device lifecycle: 3 years</p>
                  <p>Extended lifecycle with HeliAM: 3.9 years</p>
                  <p className="pt-1">This 30% extension significantly reduces:</p>
                  <ul className="list-disc pl-4 pt-1">
                    <li>Manufacturing resource requirements</li>
                    <li>E-waste production</li>
                    <li>Overall environmental footprint</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          +30% longer
        </p>
      </div>
      <div className="p-4 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-purple-800 dark:text-purple-300">Carbon Offset</h4>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <HelpCircle className="h-4 w-4 text-purple-600/60 dark:text-purple-500/60" />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                className="w-64 border-purple-200 dark:border-purple-800 dark:bg-neutral-800"
                side="top"
              >
                <p className="font-medium text-sm border-b border-purple-100 dark:border-purple-900 pb-1 text-purple-700 dark:text-purple-400">Carbon Offset Calculation</p>
                <div className="pt-2 space-y-1 text-xs">
                  <p>Based on avoided carbon emissions from:</p>
                  <ul className="list-disc pl-4 pt-1">
                    <li>Reduced manufacturing (156-250kg per device)</li>
                    <li>Optimized power management (10-15% savings)</li>
                    <li>Efficient resource allocation</li>
                    <li>Extended device life (30% longer usage)</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          {animatedCarbonOffset.toLocaleString()} tons
        </p>
      </div>
    </div>
  );
};
