
import { Maximize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { calculateTrends } from '@/utils/roi';
import { formatCurrency, formatPercentage } from '@/utils/roi/formatters';

interface StatsCardsProps {
  trends: ReturnType<typeof calculateTrends>;
  compact?: boolean;
  onMaximize?: () => void;
}

const StatsCards = ({ trends, compact = false, onMaximize }: StatsCardsProps) => {
  if (compact) {
    return (
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center space-x-4">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            5-Year Savings:
          </p>
          <p className="text-lg font-bold text-primary">
            {formatCurrency(trends.fiveYearTotalSavings)}
          </p>
        </div>
        
        {onMaximize && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            onClick={onMaximize}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard
        title="Total 5-Year Savings"
        value={formatCurrency(trends.fiveYearTotalSavings)}
        description={`${formatPercentage(trends.savingsPercentage)} reduction in costs`}
        className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary-foreground/5 dark:to-primary-foreground/10"
      />
      
      <StatCard
        title="Annual Savings"
        value={formatCurrency(trends.averageAnnualSavings)}
        description="Average per year"
        className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20"
      />
      
      <StatCard
        title="ROI"
        value={`${trends.roi}x`}
        description={`Payback in ${trends.paybackPeriod} months`}
        className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
      />
      
      <StatCard
        title="Labor Savings"
        value={formatCurrency(trends.laborSavings)}
        description={`${trends.laborHoursSaved.toLocaleString()} hours saved`}
        className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
      />
      
      <StatCard
        title="Productivity Gains"
        value={formatCurrency(trends.productivityGains)}
        description={`${formatPercentage(trends.productivityBoost)} productivity increase`}
        className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
      />
      
      <StatCard
        title="Carbon Reduction"
        value={`${trends.carbonReduction.toLocaleString()} kg`}
        description={`${trends.treesEquivalent.toLocaleString()} trees worth of CO₂`}
        className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20"
      />
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  description, 
  className 
}: { 
  title: string; 
  value: string; 
  description: string; 
  className?: string;
}) => (
  <div className={cn(
    "p-4 rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm", 
    className
  )}>
    <h4 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
      {title}
    </h4>
    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
      {value}
    </p>
    <p className="text-xs mt-1 text-neutral-600 dark:text-neutral-400">
      {description}
    </p>
  </div>
);

export default StatsCards;
