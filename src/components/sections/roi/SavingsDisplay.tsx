
import { TrendingUp } from 'lucide-react';
import { calculateAnnualSavings, DeviceCounts } from '@/utils/roi';
import { useCountUp } from '@/hooks/useCountUp';

interface SavingsDisplayProps {
  deviceCounts: DeviceCounts;
}

export const SavingsDisplay = ({ deviceCounts }: SavingsDisplayProps) => {
  const annualSavings = calculateAnnualSavings(deviceCounts);
  const displayAnnualSavings = Math.abs(annualSavings); // Use absolute value to ensure positive display
  const displayFourYearSavings = Math.abs(annualSavings * 4); // Use absolute value for 4-year savings as well
  
  const animatedAnnualSavings = useCountUp(displayAnnualSavings, 1000);
  const animatedFourYearSavings = useCountUp(displayFourYearSavings, 1000);

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="p-6 bg-white/80 dark:bg-neutral-800/50 rounded-lg border border-neutral/10 dark:border-neutral-700/50 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-primary mr-2" />
          <div className="text-sm text-neutral-600 dark:text-neutral-300">Annual Savings</div>
        </div>
        <div className="text-2xl font-bold text-primary">
          ${animatedAnnualSavings.toLocaleString()}
        </div>
      </div>
      <div className="p-6 bg-white/80 dark:bg-neutral-800/50 rounded-lg border border-neutral/10 dark:border-neutral-700/50 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300">
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-primary mr-2" />
          <div className="text-sm text-neutral-600 dark:text-neutral-300">4-Year Savings</div>
        </div>
        <div className="text-2xl font-bold text-primary">
          ${animatedFourYearSavings.toLocaleString()}
        </div>
      </div>
    </div>
  );
};
