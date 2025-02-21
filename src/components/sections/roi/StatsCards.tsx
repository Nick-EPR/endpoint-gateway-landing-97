
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
    if (trend.label === "Carbon Footprint") {
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
    if (trend.label === "Carbon Footprint" || trend.label === "Cost Reduction") {
      return trend.trend > 0;
    }
    return trend.trend > 0;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {trends.map((trend, index) => (
        <div key={index} className="bg-white/80 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-sm font-medium text-neutral">{trend.label}</h4>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-neutral/60" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm">{trend.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
  );
};

export default StatsCards;
