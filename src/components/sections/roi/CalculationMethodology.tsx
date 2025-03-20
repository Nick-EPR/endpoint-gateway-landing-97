
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
  },
  laborSavings: {
    title: "Labor Savings Calculation",
    description: "IT asset manager: 1 business day × $3k/wk = $600/hire × (12% incident rate + 10% turnover rate). HR manager: 1 hour × $3k/wk = $75/hire × (12% incident rate + 10% turnover rate)."
  },
  downtime: {
    title: "Downtime Cost Savings",
    description: "Remote employee downtime: $462/day (based on $100k salary + 20% benefits) × 12% incident rate. This represents the cost of lost productivity when an asset is non-functional."
  },
  repair: {
    title: "Repair vs Replacement Savings",
    description: "Average repair cost: $300. Average replacement cost: $1,000. Average savings: $700 × 12% incident rate. Our repair-first approach significantly reduces the need for costly new device purchases."
  },
  residual: {
    title: "Residual Value Recovery",
    description: "20% of retail value recovered during disposition compared to $0 without our program. This applies to computing devices at end-of-lifecycle, creating value where there was previously none."
  },
  onboarding: {
    title: "Onboarding Time Savings",
    description: "Pre-onboarding: 10-15 hours (HR: 4-6h, IT: 6-8h). First week: 15-20 hours (HR: 3-5h, IT: 5-8h, Manager: 5-7h). Ongoing support: 10-15 hours over first 90 days (IT: 4-6h, Manager: 6-9h)."
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="font-medium text-sm mb-1 dark:text-neutral-300">Financial Savings:</h4>
          <ul className="list-disc pl-4 space-y-1 dark:text-neutral-400">
            <li>IT asset manager labor: $600/hire × (12% incident + 10% turnover)</li>
            <li>HR manager labor: $75/hire × (12% incident + 10% turnover)</li>
            <li>Employee downtime: $462/day × 12% incident rate</li>
            <li>Repair vs Replacement: $700 savings × 12% incident rate</li>
            <li>Residual value: 20% of retail value at disposition</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-sm mb-1 dark:text-neutral-300">Environmental Impact:</h4>
          <ul className="list-disc pl-4 space-y-1 dark:text-neutral-400">
            <li>Device lifecycle extension from 3 to 3.9 years (30% increase)</li>
            <li>Water conservation: 700-1800L per device saved</li>
            <li>E-waste prevention: 0.3-3.2kg per device</li>
            <li>CO₂ reduction: 15-250kg per device based on type</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-sm mb-1 dark:text-neutral-300">Time Savings:</h4>
        <ul className="list-disc pl-4 space-y-1 dark:text-neutral-400">
          <li>Pre-onboarding: 10-15 hours (HR: 4-6h, IT: 6-8h)</li>
          <li>First week: 15-20 hours total across teams</li>
          <li>Ongoing support: 10-15 hours over first 90 days</li>
          <li>Average time saved: 3-6.5 hours per device annually</li>
        </ul>
      </div>
      
      <p className="mt-3 italic dark:text-neutral-500">
        Note: Actual impact may vary based on device types, usage patterns, and market conditions.
        Calculations based on industry standards and 2023 sustainability reports.
      </p>
    </div>
  );
};
