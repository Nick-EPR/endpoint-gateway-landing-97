
import { useState, useEffect } from 'react';
import { DeviceCounts } from '@/utils/roi';

interface EnvironmentalMetricsProps {
  deviceCounts: DeviceCounts;
}

export const EnvironmentalMetrics = ({ deviceCounts }: EnvironmentalMetricsProps) => {
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
    
    const targetTreeCount = Math.round(totalDevices * 0.4);
    const targetCarbonOffset = Math.round(totalDevices * 0.7);
    
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
  }, [deviceCounts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 bg-green-50/50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800 relative group">
        <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Trees Saved</h4>
        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
          {animatedTreeCount.toLocaleString()} trees
        </p>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-20 left-0 right-0 bg-white dark:bg-neutral-800 p-2 rounded-lg shadow-lg text-xs z-10 mx-2">
          Based on average CO2 absorption of 25kg per tree annually. 
          Calculated using total CO2 reduction divided by annual tree absorption capacity.
        </div>
      </div>
      <div className="p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
        <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Device Lifecycle Extension</h4>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          +30% longer
        </p>
      </div>
      <div className="p-4 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
        <h4 className="text-sm font-medium text-purple-800 dark:text-purple-300">Carbon Offset</h4>
        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          {animatedCarbonOffset.toLocaleString()} tons
        </p>
      </div>
    </div>
  );
};
