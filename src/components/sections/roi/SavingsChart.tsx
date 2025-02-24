
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { calculateCompoundedSavings } from '@/utils/roiCalculations';
import { useEffect, useState } from 'react';

interface SavingsChartProps {
  employees: number;
  showMoreDetails: boolean;
  setShowMoreDetails: (show: boolean) => void;
}

export const SavingsChart = ({ employees, showMoreDetails, setShowMoreDetails }: SavingsChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (showMoreDetails) {
      const data = calculateCompoundedSavings(employees);
      setChartData([]);
      // Animate data points one by one
      data.forEach((item, index) => {
        setTimeout(() => {
          setChartData(prev => [...prev, item]);
        }, index * 300);
      });
    }
  }, [showMoreDetails, employees]);

  return (
    <Dialog open={showMoreDetails} onOpenChange={setShowMoreDetails}>
      <DialogContent className="max-w-4xl w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">5-Year Environmental & Financial Impact</DialogTitle>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 italic mb-4">
            Finance loves you, global warming fears you 🌍
          </p>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-green-50/50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
            <h4 className="text-sm font-medium text-green-800 dark:text-green-300">Trees Saved</h4>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {Math.round(employees * 0.7)} trees
            </p>
          </div>
          <div className="p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">Total ROI</h4>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {Math.round(employees * 0.15 * 100)}%
            </p>
          </div>
          <div className="p-4 bg-purple-50/50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
            <h4 className="text-sm font-medium text-purple-800 dark:text-purple-300">Carbon Offset</h4>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {Math.round(employees * 1.2)} tons
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
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                stroke="currentColor"
              />
              <YAxis 
                yAxisId="co2"
                orientation="right"
                tickFormatter={(value) => `${value} tons`}
                stroke="currentColor"
              />
              <Tooltip 
                formatter={(value: number, name: string) => {
                  if (name === "Cumulative Savings") {
                    return [`$${value.toLocaleString()}`, name];
                  }
                  return [`${value} tons`, name];
                }}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  padding: '12px',
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
          You could be a hero to your boss with these projected savings! This projection shows both the cumulative financial savings and environmental impact over a 5-year period based on your current employee count.
        </p>
      </DialogContent>
    </Dialog>
  );
};
