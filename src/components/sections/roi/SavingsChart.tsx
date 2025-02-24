
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { calculateCompoundedSavings } from '@/utils/roiCalculations';
import { EmployeeInput } from './EmployeeInput';
import { useEffect, useState, useRef } from 'react';

interface SavingsChartProps {
  employees: number;
  showMoreDetails: boolean;
  setShowMoreDetails: (show: boolean) => void;
  onEmployeeChange: (value: number) => void;
  isEnterprise?: boolean;
}

const formatLargeNumber = (value: number): string => {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(1)}B`;
  } else if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
};

export const SavingsChart = ({ 
  employees, 
  showMoreDetails, 
  setShowMoreDetails, 
  onEmployeeChange,
  isEnterprise = true 
}: SavingsChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [animatedTreeCount, setAnimatedTreeCount] = useState(0);
  const [animatedCarbonOffset, setAnimatedCarbonOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear any existing animation timeouts
    animationTimeoutRef.current.forEach(timeout => clearTimeout(timeout));
    animationTimeoutRef.current = [];

    // Reset chart data immediately
    setChartData([]);

    const data = calculateCompoundedSavings(employees);
    
    // Create new animations
    data.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setChartData(prev => {
          // Ensure we don't add duplicate entries
          const exists = prev.some(p => p.year === item.year);
          if (exists) return prev;
          return [...prev, item];
        });
      }, index * 300);
      
      animationTimeoutRef.current.push(timeout);
    });

    // Animate tree count and carbon offset
    const targetTreeCount = Math.round(employees * 0.7);
    const targetCarbonOffset = Math.round(employees * 1.2);
    
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

    // Cleanup function
    return () => {
      animationTimeoutRef.current.forEach(timeout => clearTimeout(timeout));
      animationTimeoutRef.current = [];
    };
  }, [showMoreDetails, employees]);

  return (
    <Dialog open={showMoreDetails} onOpenChange={setShowMoreDetails}>
      <DialogContent className="max-w-4xl w-[95vw] bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">5-Year Environmental & Financial Impact</DialogTitle>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 italic mb-4">
            Driving sustainable cost savings and environmental impact
          </p>
        </DialogHeader>

        <div className="mb-6">
          <EmployeeInput
            employees={employees}
            isEnterprise={isEnterprise}
            sliderRef={sliderRef}
            onEmployeeChange={onEmployeeChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-green-50/50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
            <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Trees Saved</h4>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {animatedTreeCount.toLocaleString()} trees
            </p>
          </div>
          <div className="p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Device Lifecycle Extension</h4>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              +40% longer
            </p>
          </div>
          <div className="p-4 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
            <h4 className="text-sm font-medium text-purple-800 dark:text-purple-300">Carbon Offset</h4>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {animatedCarbonOffset.toLocaleString()} tons
            </p>
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={chartData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              className="text-neutral-600 dark:text-neutral-400"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.2} />
              <XAxis 
                dataKey="year" 
                stroke="currentColor"
              />
              <YAxis 
                yAxisId="savings"
                tickFormatter={(value) => formatLargeNumber(value)}
                stroke="currentColor"
              />
              <YAxis 
                yAxisId="co2"
                orientation="right"
                tickFormatter={(value) => `${value.toLocaleString()} tons`}
                stroke="currentColor"
              />
              <Tooltip 
                formatter={(value: number, name: string) => {
                  if (name === "Cumulative Savings") {
                    return [`$${value.toLocaleString()}`, name];
                  }
                  return [`${value.toLocaleString()} tons`, name];
                }}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
                }}
                labelClassName="text-neutral-900 dark:text-white"
                itemStyle={{
                  color: 'currentColor',
                }}
              />
              <Legend />
              <Line 
                yAxisId="savings"
                type="monotone" 
                dataKey="savings" 
                name="Cumulative Savings"
                stroke="#93C851" 
                strokeWidth={2}
                dot={{ fill: '#93C851' }}
                animationDuration={1000}
              />
              <Line 
                yAxisId="co2"
                type="monotone" 
                dataKey="co2Saved" 
                name="CO2 Reduction"
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb' }}
                animationDuration={1000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
          This projection illustrates the potential financial savings and environmental benefits over a 5-year period, based on your organization's employee count.
        </p>
      </DialogContent>
    </Dialog>
  );
};
