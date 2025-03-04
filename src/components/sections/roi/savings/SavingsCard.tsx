
import { TrendingUp } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

interface SavingsCardProps {
  title: string;
  value: number;
  icon?: React.ReactNode;
}

export const SavingsCard = ({ title, value, icon = <TrendingUp className="w-5 h-5 text-primary mr-2" /> }: SavingsCardProps) => {
  const animatedValue = useCountUp(value, 1000);

  return (
    <div className="p-4 sm:p-6 bg-white/80 dark:bg-neutral-800/50 rounded-lg border border-neutral/10 dark:border-neutral-700/50 hover:border-primary/30 dark:hover:border-primary/30 transition-colors duration-300">
      <div className="flex items-center mb-2 sm:mb-3">
        {icon}
        <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">{title}</div>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-primary">
        ${animatedValue.toLocaleString()}
      </div>
    </div>
  );
};
