
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
          <DialogTitle>5-Year Savings Projection</DialogTitle>
        </DialogHeader>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={calculateCompoundedSavings(employees)} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis 
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Cumulative Savings"]}
              />
              <Line 
                type="monotone" 
                dataKey="savings" 
                stroke="#93C851" 
                strokeWidth={2}
                dot={{ fill: '#93C851' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
};
