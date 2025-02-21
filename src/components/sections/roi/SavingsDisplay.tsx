
import { TrendingUp } from 'lucide-react';
import { calculateAnnualSavings } from '@/utils/roiCalculations';

interface SavingsDisplayProps {
  employees: number;
}

export const SavingsDisplay = ({ employees }: SavingsDisplayProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="p-6 bg-white rounded-lg border border-neutral/20 hover:border-primary/30 transition-colors duration-300">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-primary mr-2" />
          <div className="text-sm text-neutral">Annual Savings</div>
        </div>
        <div className="text-2xl font-bold text-primary">
          ${calculateAnnualSavings(employees).toLocaleString()}
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg border border-neutral/20 hover:border-primary/30 transition-colors duration-300">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-primary mr-2" />
          <div className="text-sm text-neutral">2-Year Savings</div>
        </div>
        <div className="text-2xl font-bold text-primary">
          ${(calculateAnnualSavings(employees) * 2).toLocaleString()}
        </div>
      </div>
    </div>
  );
};
