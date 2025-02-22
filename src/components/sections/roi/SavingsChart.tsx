
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { calculateCompoundedSavings } from '@/utils/roiCalculations';

interface SavingsChartProps {
  employees: number;
  showMoreDetails: boolean;
  setShowMoreDetails: (show: boolean) => void;
}

export const SavingsChart = ({ employees, showMoreDetails, setShowMoreDetails }: SavingsChartProps) => {
  return (
    <Dialog open={showMoreDetails} onOpenChange={setShowMoreDetails}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>5-Year Environmental & Financial Impact</DialogTitle>
        </DialogHeader>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={calculateCompoundedSavings(employees)} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                yAxisId="savings"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <YAxis 
                yAxisId="co2"
                orientation="right"
                tickFormatter={(value) => `${value} tons`}
              />
              <Tooltip 
                formatter={(value: number, name: string) => {
                  if (name === "Cumulative Savings") {
                    return [`$${value.toLocaleString()}`, name];
                  }
                  return [`${value} tons`, name];
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
              />
              <Line 
                yAxisId="co2"
                type="monotone" 
                dataKey="co2Saved" 
                name="CO2 Reduction"
                stroke="#2563eb" 
                strokeWidth={2}
                dot={{ fill: '#2563eb' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-neutral-600 mt-4">
          This projection shows both the cumulative financial savings and environmental impact (CO2 reduction) over a 5-year period based on your current employee count.
        </p>
      </DialogContent>
    </Dialog>
  );
};
