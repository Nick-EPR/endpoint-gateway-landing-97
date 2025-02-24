
import { Trend } from "@/utils/roiCalculations";
import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatsCardsProps {
  trends?: Trend[];
}

export const StatsCards = ({ trends = [] }: StatsCardsProps) => {
  if (!trends || trends.length === 0) {
    return null;
  }

  const getTrendColor = () => {
    return 'text-green-600 dark:text-green-400';
  };

  const shouldShowUpArrow = (trend: Trend) => {
    // Carbon footprint reduction and Cost reduction show down arrow when negative (good)
    if (trend.label === "Carbon Reduction" || trend.label === "Cost Reduction") {
      return trend.trend > 0 ? false : true;
    }
    // For all other metrics, positive numbers show up arrow
    return trend.trend > 0;
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {trends.map((trend, index) => (
          <div key={index} className="bg-white/80 dark:bg-neutral-800/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-neutral-100/10 dark:border-neutral-700/50">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{trend.label}</h4>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button type="button" className="cursor-help p-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors">
                    <Info className="w-4 h-4 text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors" />
                  </button>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  align="end"
                  className="bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 max-w-[250px] z-50"
                >
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{trend.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-neutral-900 dark:text-white">{trend.value}</span>
              <div className={`flex items-center ${getTrendColor()}`}>
                {shouldShowUpArrow(trend) ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span className="text-sm font-medium">{Math.abs(trend.trend)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default StatsCards;
