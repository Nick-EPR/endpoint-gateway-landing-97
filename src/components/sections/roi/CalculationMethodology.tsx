
import { Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricTooltip {
  title: string;
  description: string;
}

interface MetricTooltips {
  [key: string]: MetricTooltip;
}

const metricTooltips: MetricTooltips = {
  carbon: {
    title: "Carbon Reduction Impact",
    description: "Based on device-specific CO2 reductions per lifecycle extended. MacBooks: 220kg, Laptops: 156kg, Desktops: 250kg, Tablets: 100kg, Monitors: 120kg, Accessories: 15kg. Extended device lifecycles from 3 to 3.9 years significantly reduce the carbon footprint of your IT infrastructure."
  },
  ewaste: {
    title: "E-Waste Prevention Impact",
    description: "Each extended device lifecycle prevents e-waste: MacBooks: 2.5kg, Laptops: 1.8kg, Desktops: 3.2kg, Tablets: 0.9kg, Monitors: 1.6kg, Accessories: 0.3kg. Our repair-first approach keeps devices in use longer, reducing the strain on landfills and the need for raw material extraction."
  },
  water: {
    title: "Water Conservation Impact",
    description: "Manufacturing devices requires significant water. By extending device lifecycles, we save: MacBooks: 1800L, Laptops: 1200L, Desktops: 1500L, Tablets: 700L, Monitors: 900L, Accessories: 100L per device lifecycle."
  },
  cost: {
    title: "Financial Impact",
    description: "Cost savings based on per-incident costs (MacBook: $449, Laptop: $265, Desktop: $267, Tablet: $212, Monitor: $75, Accessories: $35) plus extended lifecycle value and 20% end-of-life value recovery through our certified refurbishment program."
  }
};

export const CalculationMethodology = () => {
  return (
    <div className="text-xs text-neutral dark:text-neutral-400 mt-4 p-4 bg-white/50 dark:bg-neutral-800/50 rounded-lg">
      <div className="flex items-center gap-2 font-semibold mb-2">
        <span className="dark:text-neutral-300">Calculation Methodology:</span>
        <div className="flex items-center gap-2">
          {Object.entries(metricTooltips).map(([key, content]) => (
            <TooltipProvider key={key}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-primary cursor-help" />
                </TooltipTrigger>
                <TooltipContent side="top" align="center" className="max-w-xs dark:bg-neutral-800 dark:border-neutral-700">
                  <p className="font-semibold mb-1 dark:text-white">{content.title}</p>
                  <p className="text-xs dark:text-neutral-300">{content.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      
      <ul className="list-disc pl-4 space-y-1 dark:text-neutral-400">
        <li>Device lifecycle extension from 3 to 3.9 years (30% of devices)</li>
        <li>Per-incident costs: MacBook $449, Laptop $265, Desktop $267, Tablet $212, Monitor $75, Accessories $35</li>
        <li>Water conservation varies by device type (700-1800L per device)</li>
        <li>E-waste prevention varies by device type (0.3-3.2kg per device)</li>
        <li>Average resale value: 20% of original device cost</li>
        <li>Device replacement rate: 10% of devices annually</li>
        <li>Time savings: 3-6.5 hours saved per device annually through proactive maintenance and reduced downtime</li>
      </ul>
      <p className="mt-2 italic dark:text-neutral-500">
        Note: Actual impact may vary based on device types, usage patterns, and market conditions.
        Calculations based on industry standards and 2023 sustainability reports.
      </p>
    </div>
  );
};
