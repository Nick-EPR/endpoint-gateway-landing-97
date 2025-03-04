
import { DeviceCounts } from '@/utils/roi';
import { SavingsCard } from './SavingsCard';
import { calculateDisplaySavings } from './SavingsCalculator';

interface SavingsDisplayProps {
  deviceCounts: DeviceCounts;
  isEnterprise?: boolean;
}

export const SavingsDisplay = ({ deviceCounts, isEnterprise = false }: SavingsDisplayProps) => {
  const { annual, fourYear } = calculateDisplaySavings(deviceCounts, isEnterprise);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
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
