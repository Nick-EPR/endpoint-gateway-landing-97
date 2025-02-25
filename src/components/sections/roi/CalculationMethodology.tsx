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
    description: "Based on a 156kg CO2 reduction per device lifecycle extended. This includes manufacturing emissions saved, reduced transportation needs, and energy savings from refurbishment vs new production. Extended device lifecycles from 2 to 2.8 years significantly reduce the carbon footprint of your IT infrastructure."
  },
  ewaste: {
    title: "E-Waste Prevention Impact",
    description: "Each extended device lifecycle prevents approximately 1.8kg of e-waste. This includes avoided electronic components, packaging materials, and associated waste from manufacturing. Our repair-first approach keeps devices in use longer, reducing the strain on landfills and the need for raw material extraction."
  },
  water: {
    title: "Water Conservation Impact",
    description: "Manufacturing a single device requires approximately 1,200 liters of water. By extending device lifecycles through repair and refurbishment, we significantly reduce water consumption in the manufacturing process. This includes water saved from mining, component manufacturing, and assembly processes."
  },
  cost: {
    title: "Financial Impact",
    description: "Cost savings are calculated based on multiple factors: reduced new device purchases ($1,200 avg. cost), extended lifecycle value (2 to 2.8 years), repair vs replacement savings, and 25% end-of-life value recovery through our certified refurbishment program. Includes $180 annual service cost per device."
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
        <li>Device lifecycle extension from 2 to 2.8 years (40% of devices)</li>
        <li>CO2 reduction: 156kg per device lifecycle extended</li>
        <li>Water conservation: 1,200L saved per device lifecycle</li>
        <li>E-waste prevention: 1.8kg reduced per device</li>
        <li>Average device cost: $1,200 with 25% resale value</li>
        <li>Service cost: $180 per device annually</li>
        <li>Average of 1.2 devices per employee</li>
        <li>Time savings: 4.5 hours saved per device annually through proactive maintenance and reduced downtime</li>
      </ul>
      <p className="mt-2 italic dark:text-neutral-500">
        Note: Actual impact may vary based on device types, usage patterns, and market conditions.
        Calculations based on industry standards and 2023 sustainability reports.
      </p>
    </div>
  );
};
