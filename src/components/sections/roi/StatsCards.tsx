
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

  const getTrendColor = (trend: Trend) => {
    // Carbon footprint reduction (negative number) is actually a positive trend
    if (trend.label === "Carbon Reduction") {
      return trend.trend < 0 ? 'text-green-600' : 'text-red-600';
    }
    // Cost reduction (negative number) is a positive trend
    if (trend.label === "Cost Reduction") {
      return trend.trend < 0 ? 'text-red-600' : 'text-green-600';
    }
    // For all other metrics, positive numbers are good
    return trend.trend > 0 ? 'text-green-600' : 'text-red-600';
  };

  const shouldShowUpArrow = (trend: Trend) => {
    if (trend.label === "Carbon Reduction" || trend.label === "Cost Reduction") {
      return trend.trend > 0;
    }
    return trend.trend > 0;
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {trends.map((trend, index) => (
          <div key={index} className="bg-white/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-medium text-neutral">{trend.label}</h4>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button type="button" className="cursor-help p-1 hover:bg-neutral-100 rounded-full transition-colors">
                    <Info className="w-4 h-4 text-neutral-600 hover:text-primary transition-colors" />
                  </button>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  align="end"
                  className="bg-white p-3 rounded-lg shadow-lg border border-neutral-200 max-w-[250px] z-50"
                >
                  <p className="text-sm text-neutral-700">{trend.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{trend.value}</span>
              <div className={`flex items-center ${getTrendColor(trend)}`}>
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
