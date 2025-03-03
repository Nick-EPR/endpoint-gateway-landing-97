
import { DeviceCounts } from '@/utils/roi';
import { SavingsCard } from './SavingsCard';
import { calculateDisplaySavings } from './SavingsCalculator';

interface SavingsDisplayProps {
  deviceCounts: DeviceCounts;
}

export const SavingsDisplay = ({ deviceCounts }: SavingsDisplayProps) => {
  const { annual, fourYear } = calculateDisplaySavings(deviceCounts);

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <SavingsCard 
        title="Annual Savings" 
        value={annual} 
      />
      <SavingsCard 
        title="4-Year Savings" 
        value={fourYear} 
      />
    </div>
  );
};
