
import { Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MetricTooltip {
  title: string;
  description: React.ReactNode;
}

interface MetricTooltips {
  [key: string]: MetricTooltip;
}

const metricTooltips: MetricTooltips = {
  carbon: {
    title: "Carbon Reduction Impact",
    description: (
      <div className="space-y-2">
        <p>CO₂ reduction per lifecycle extension:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>MacBooks: 220kg</li>
          <li>Laptops: 156kg</li>
          <li>Desktops: 250kg</li>
          <li>Tablets: 100kg</li>
          <li>Monitors: 120kg</li>
          <li>Accessories: 15kg</li>
        </ul>
        <p className="text-xs mt-1">Device lifecycles extended from 3 to 3.9 years significantly reduce overall carbon footprint.</p>
      </div>
    )
  },
  ewaste: {
    title: "E-Waste Prevention Impact",
    description: (
      <div className="space-y-2">
        <p>E-waste prevention per device:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>MacBooks: 2.5kg</li>
          <li>Laptops: 1.8kg</li>
          <li>Desktops: 3.2kg</li>
          <li>Tablets: 0.9kg</li>
          <li>Monitors: 1.6kg</li>
          <li>Accessories: 0.3kg</li>
        </ul>
        <p className="text-xs mt-1">Our repair-first approach keeps devices in use longer, reducing landfill impact.</p>
      </div>
    )
  },
  water: {
    title: "Water Conservation Impact",
    description: (
      <div className="space-y-2">
        <p>Water saved per lifecycle extension:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>MacBooks: 1,800L</li>
          <li>Laptops: 1,200L</li>
          <li>Desktops: 1,500L</li>
          <li>Tablets: 700L</li>
          <li>Monitors: 900L</li>
          <li>Accessories: 100L</li>
        </ul>
        <p className="text-xs mt-1">Manufacturing new devices requires significant water resources.</p>
      </div>
    )
  },
  cost: {
    title: "Financial Impact",
    description: (
      <div className="space-y-2">
        <p>Cost savings based on:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Per-incident costs by device type</li>
          <li>MacBook: $449</li>
          <li>Laptop: $265</li>
          <li>Desktop: $267</li>
          <li>Tablet: $212</li>
          <li>Monitor: $75</li>
          <li>Accessories: $35</li>
        </ul>
        <p className="text-xs mt-1">Additional value from lifecycle extension and 20% end-of-life recovery through certified refurbishment.</p>
      </div>
    )
  },
  laborSavings: {
    title: "Labor Savings Calculation",
    description: (
      <div className="space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li><span className="font-medium">IT asset manager:</span> 1 business day × $3k/wk = $600/hire</li>
          <li><span className="font-medium">Total:</span> $600 × (12% incident rate + 10% turnover rate)</li>
          <li><span className="font-medium">HR manager:</span> 1 hour × $3k/wk = $75/hire</li>
          <li><span className="font-medium">Total:</span> $75 × (12% incident rate + 10% turnover rate)</li>
        </ul>
      </div>
    )
  },
  downtime: {
    title: "Downtime Cost Savings",
    description: (
      <div className="space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li><span className="font-medium">Remote employee downtime:</span> $462/day</li>
          <li><span className="font-medium">Based on:</span> $100k salary + 20% benefits</li>
          <li><span className="font-medium">Applied to:</span> 12% incident rate</li>
        </ul>
        <p className="text-xs mt-1">Represents the cost of lost productivity when an asset is non-functional.</p>
      </div>
    )
  },
  repair: {
    title: "Repair vs Replacement Savings",
    description: (
      <div className="space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li>Average repair cost: $300</li>
          <li>Average replacement cost: $1,000</li>
          <li>Average savings: $700 per incident</li>
          <li>Applied to: 12% incident rate</li>
        </ul>
        <p className="text-xs mt-1">Our repair-first approach significantly reduces the need for costly new device purchases.</p>
      </div>
    )
  },
  residual: {
    title: "Residual Value Recovery",
    description: (
      <div className="space-y-2">
        <ul className="list-disc pl-4 space-y-1">
          <li>20% of retail value recovered during disposition</li>
          <li>Compared to $0 without our program</li>
          <li>Applies to computing devices at end-of-lifecycle</li>
        </ul>
        <p className="text-xs mt-1">Creates value where there was previously none through our specialized refurbishment process.</p>
      </div>
    )
  },
  onboarding: {
    title: "Onboarding Time Savings",
    description: (
      <div className="space-y-2">
        <p className="font-medium">Pre-onboarding: 10-15 hours</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>HR: 4-6 hours</li>
          <li>IT: 6-8 hours</li>
        </ul>
        <p className="font-medium mt-1">First week: 15-20 hours</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>HR: 3-5 hours</li>
          <li>IT: 5-8 hours</li>
          <li>Manager: 5-7 hours</li>
        </ul>
        <p className="font-medium mt-1">Ongoing support: 10-15 hours over first 90 days</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>IT: 4-6 hours</li>
          <li>Manager: 6-9 hours</li>
        </ul>
      </div>
    )
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
                  <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center cursor-help">
                    <Info className="h-3.5 w-3.5 text-blue-500" />
                  </div>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  align="center" 
                  className="max-w-xs w-max border-blue-200 dark:border-blue-800 dark:bg-neutral-800 dark:text-white"
                  sideOffset={5}
                >
                  <p className="font-semibold mb-1.5 text-sm border-b border-blue-100 dark:border-blue-900 pb-1 text-blue-600 dark:text-blue-300">{content.title}</p>
                  <div className="text-xs pt-1 dark:text-neutral-300">{content.description}</div>
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

