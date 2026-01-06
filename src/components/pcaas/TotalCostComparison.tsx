
import { Check, AlertCircle } from "lucide-react";

interface CostRow {
  category: string;
  laptopDescription: string;
  laptopCost: string;
  pcaasDescription: string;
  pcaasCost: string;
  isTotal?: boolean;
}

const costData: CostRow[] = [
  {
    category: "Hardware Cost",
    laptopDescription: "Laptop only",
    laptopCost: "$1,000",
    pcaasDescription: "Fully set up laptop + services",
    pcaasCost: "Included",
  },
  {
    category: "IT Setup Labor",
    laptopDescription: "Customer imaging/config",
    laptopCost: "$100–$320",
    pcaasDescription: "Pre-configured",
    pcaasCost: "$0",
  },
  {
    category: "Employee Downtime",
    laptopDescription: "Wait for setup",
    laptopCost: "$100–$250",
    pcaasDescription: "Ready out of box",
    pcaasCost: "$0",
  },
  {
    category: "Software/Security",
    laptopDescription: "Manual install",
    laptopCost: "$50–$160",
    pcaasDescription: "Pre-installed",
    pcaasCost: "$0",
  },
  {
    category: "Break/Fix Support",
    laptopDescription: "Customer troubleshoots",
    laptopCost: "$300–$800",
    pcaasDescription: "24/7 Helpdesk",
    pcaasCost: "Included",
  },
  {
    category: "Replacement",
    laptopDescription: "Buy + set up another",
    laptopCost: "$1,250–$1,730",
    pcaasDescription: "Overnight Exchange",
    pcaasCost: "Included",
  },
  {
    category: "Asset Tracking",
    laptopDescription: "None; high risk",
    laptopCost: "$100–$200",
    pcaasDescription: "Full lifecycle",
    pcaasCost: "Included",
  },
  {
    category: "Helpdesk Tickets",
    laptopDescription: "3–6 tickets/year",
    laptopCost: "$135–$450",
    pcaasDescription: "All included",
    pcaasCost: "Included",
  },
  {
    category: "Connectivity",
    laptopDescription: "Wi-Fi only",
    laptopCost: "$900–$1,350",
    pcaasDescription: "Built-in 5G",
    pcaasCost: "Included",
  },
];

const totalRow: CostRow = {
  category: "36-Month Total",
  laptopDescription: "",
  laptopCost: "$3,935–$6,170",
  pcaasDescription: "",
  pcaasCost: "$3,564",
  isTotal: true,
};

const TotalCostComparison = () => {
  const renderPCaaSCost = (cost: string, isTotal: boolean = false) => {
    if (isTotal) {
      return (
        <span className="text-lg font-bold text-primary">
          {cost}
        </span>
      );
    }
    
    if (cost === "$0" || cost === "Included in subscription") {
      return (
        <span className="inline-flex items-center gap-1.5 text-green-600 dark:text-green-500 font-medium">
          <Check className="w-4 h-4" />
          {cost}
        </span>
      );
    }
    
    return <span>{cost}</span>;
  };

  const renderLaptopCost = (cost: string, isTotal: boolean = false) => {
    if (isTotal) {
      return (
        <span className="text-lg font-bold text-red-500 dark:text-red-400">
          {cost}
        </span>
      );
    }
    
    // Parse and check if it's a high cost (> $500)
    const numMatch = cost.match(/\$([0-9,]+)/);
    const isHighCost = numMatch && parseInt(numMatch[1].replace(',', '')) >= 500;
    
    return (
      <span className={`font-medium ${isHighCost ? 'text-red-500 dark:text-red-400' : 'text-neutral-700 dark:text-neutral-300'}`}>
        {cost}
      </span>
    );
  };

  return (
    <div className="mb-12">
      {/* Desktop: Side-by-side layout */}
      <div className="hidden lg:flex gap-8 items-center">
        {/* Left Side - Header Section (vertically centered) */}
        <div className="w-1/5 flex-shrink-0">
          <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
            Total Cost Comparison
          </h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            36-month cost: $1,000 laptop vs. PCaaS
          </p>
          {/* Savings Callout */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
            <p className="text-green-700 dark:text-green-400 font-medium text-xs">
              Save up to <span className="text-base font-bold">$2,606</span> over 36 months
            </p>
          </div>
        </div>

        {/* Right Side - Table */}
        <div className="flex-1">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1.2fr_0.8fr_1.2fr_0.8fr] bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
              <div className="py-2 px-3 font-semibold text-sm text-neutral-900 dark:text-white">
                Category
              </div>
              <div className="py-2 px-3 font-semibold text-sm text-neutral-900 dark:text-white text-center">
                Laptop
              </div>
              <div className="py-2 px-3 font-semibold text-sm text-neutral-900 dark:text-white text-center">
                Cost
              </div>
              <div className="py-2 px-3 font-semibold text-sm text-neutral-900 dark:text-white text-center bg-primary/10 dark:bg-primary/20 border-l-2 border-primary">
                PCaaS
              </div>
              <div className="py-2 px-3 font-semibold text-sm text-neutral-900 dark:text-white text-center bg-primary/10 dark:bg-primary/20">
                Cost
              </div>
            </div>

            {/* Table Body */}
            {costData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[1.2fr_1.2fr_0.8fr_1.2fr_0.8fr] border-b border-neutral-100 dark:border-neutral-800"
              >
                <div className="py-1.5 px-3 flex items-center">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    {row.category}
                  </span>
                </div>
                <div className="py-1.5 px-3 text-center text-xs text-neutral-600 dark:text-neutral-400 flex items-center justify-center">
                  {row.laptopDescription}
                </div>
                <div className="py-1.5 px-3 text-center text-sm flex items-center justify-center">
                  {renderLaptopCost(row.laptopCost)}
                </div>
                <div className="py-1.5 px-3 text-center text-xs text-neutral-600 dark:text-neutral-400 flex items-center justify-center bg-primary/5 dark:bg-primary/10 border-l-2 border-primary">
                  {row.pcaasDescription}
                </div>
                <div className="py-1.5 px-3 text-center text-sm flex items-center justify-center bg-primary/5 dark:bg-primary/10">
                  {renderPCaaSCost(row.pcaasCost)}
                </div>
              </div>
            ))}

            {/* Total Row */}
            <div className="grid grid-cols-[1.2fr_1.2fr_0.8fr_1.2fr_0.8fr] bg-neutral-100 dark:bg-neutral-800">
              <div className="py-2.5 px-3 flex items-center">
                <span className="text-sm font-bold text-neutral-900 dark:text-white">
                  {totalRow.category}
                </span>
              </div>
              <div className="py-2.5 px-3"></div>
              <div className="py-2.5 px-3 flex items-center justify-center">
                {renderLaptopCost(totalRow.laptopCost, true)}
              </div>
              <div className="py-2.5 px-3 bg-primary/10 dark:bg-primary/20 border-l-2 border-primary"></div>
              <div className="py-2.5 px-3 flex items-center justify-center bg-primary/10 dark:bg-primary/20">
                {renderPCaaSCost(totalRow.pcaasCost, true)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Stacked layout */}
      <div className="lg:hidden">
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white text-center mb-3">
          Total Cost Comparison
        </h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
          See the true 36-month cost of ownership: a standard $1,000 laptop vs. our PCaaS program
        </p>

        <div className="space-y-4">
          {costData.map((row, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden"
            >
              <div className="bg-neutral-50 dark:bg-neutral-800 px-4 py-3 border-b border-neutral-200 dark:border-neutral-700">
                <h5 className="font-semibold text-neutral-900 dark:text-white">
                  {row.category}
                </h5>
              </div>
              <div className="grid grid-cols-2">
                {/* Laptop Column */}
                <div className="p-4 border-r border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center gap-1.5 mb-2">
                    <AlertCircle className="w-4 h-4 text-neutral-400" />
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                      Traditional
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {row.laptopDescription}
                  </p>
                  <div className="text-lg">
                    {renderLaptopCost(row.laptopCost)}
                  </div>
                </div>
                
                {/* PCaaS Column */}
                <div className="p-4 bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      PCaaS
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {row.pcaasDescription}
                  </p>
                  <div className="text-lg">
                    {renderPCaaSCost(row.pcaasCost)}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Total Card */}
          <div className="bg-primary/10 dark:bg-primary/20 border-2 border-primary rounded-lg overflow-hidden">
            <div className="bg-primary/20 dark:bg-primary/30 px-4 py-3">
              <h5 className="font-bold text-neutral-900 dark:text-white text-center">
                {totalRow.category}
              </h5>
            </div>
            <div className="grid grid-cols-2 p-4">
              <div className="text-center border-r border-primary/30">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide block mb-2">
                  Traditional Laptop
                </span>
                {renderLaptopCost(totalRow.laptopCost, true)}
              </div>
              <div className="text-center">
                <span className="text-xs font-medium text-primary uppercase tracking-wide block mb-1">
                  PCaaS Program
                </span>
                <span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 block mb-2">
                  (Essential @ $99/mo)
                </span>
                {renderPCaaSCost(totalRow.pcaasCost, true)}
              </div>
            </div>
          </div>

          {/* Savings Callout */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
            <p className="text-green-700 dark:text-green-400 font-medium">
              Save up to <span className="text-xl font-bold">$2,606</span> over 36 months with PCaaS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCostComparison;
