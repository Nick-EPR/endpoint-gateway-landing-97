import { Check, AlertCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { AnimatedPrice } from "@/components/ui/AnimatedPrice";
import { AnimatedPriceRange } from "@/components/ui/AnimatedPriceRange";

interface CostItem {
  category: string;
  laptopCost: string;
  pcaasCost: string;
}

const costData: CostItem[] = [
  { category: "Hardware", laptopCost: "$1,000", pcaasCost: "Included" },
  { category: "IT Setup Labor", laptopCost: "$100–$320", pcaasCost: "$0" },
  { category: "Employee Downtime", laptopCost: "$100–$250", pcaasCost: "$0" },
  { category: "Software/Security", laptopCost: "$50–$160", pcaasCost: "$0" },
  { category: "Break/Fix Support", laptopCost: "$300–$800", pcaasCost: "Included" },
  { category: "Replacement", laptopCost: "$1,250–$1,730", pcaasCost: "Included" },
  { category: "Asset Tracking", laptopCost: "$100–$200", pcaasCost: "Included" },
  { category: "Helpdesk Tickets", laptopCost: "$135–$450", pcaasCost: "Included" },
  { category: "Connectivity", laptopCost: "$900–$1,350", pcaasCost: "Included" },
];

const TotalCostComparison = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleRows, setVisibleRows] = useState<number[]>([]);
  const [showPCaaSCard, setShowPCaaSCard] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  // Staggered row animation + PCaaS card reveal
  useEffect(() => {
    if (hasAnimated) {
      // Stagger each row with 400ms delay
      costData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleRows(prev => [...prev, index]);
        }, 400 * (index + 1));
      });
      
      // After all rows are shown + a pause, reveal PCaaS card
      // 9 rows x 400ms = 3600ms + 800ms pause = 4400ms
      setTimeout(() => {
        setShowPCaaSCard(true);
      }, 4400);
    }
  }, [hasAnimated]);

  const allRowsVisible = visibleRows.length === costData.length;

  const renderPCaaSCost = (cost: string) => {
    if (cost === "$0" || cost === "Included") {
      return (
        <span className="inline-flex items-center gap-1 text-green-600 dark:text-green-500 font-medium">
          <Check className="w-3.5 h-3.5" />
          {cost}
        </span>
      );
    }
    return <span>{cost}</span>;
  };

  const renderLaptopCostAnimated = (cost: string, rowIndex: number) => {
    const isRowVisible = visibleRows.includes(rowIndex);
    const numMatch = cost.match(/\$([0-9,]+)/);
    const isHighCost = numMatch && parseInt(numMatch[1].replace(',', '')) >= 500;
    const colorClass = isHighCost ? 'text-red-500 dark:text-red-400' : 'text-neutral-700 dark:text-neutral-300';

    // Check if it's a range
    const rangeMatch = cost.match(/\$([0-9,]+)–\$([0-9,]+)/);
    if (rangeMatch) {
      const minValue = parseInt(rangeMatch[1].replace(',', ''));
      const maxValue = parseInt(rangeMatch[2].replace(',', ''));
      return (
        <span className={colorClass}>
          <AnimatedPriceRange 
            minValue={minValue} 
            maxValue={maxValue} 
            isActive={isRowVisible} 
          />
        </span>
      );
    }

    // Single value
    const singleMatch = cost.match(/\$([0-9,]+)/);
    if (singleMatch) {
      const value = parseInt(singleMatch[1].replace(',', ''));
      return (
        <span className={colorClass}>
          <AnimatedPrice value={value} isActive={isRowVisible} />
        </span>
      );
    }

    return <span className={colorClass}>{cost}</span>;
  };

  return (
    <div ref={sectionRef} className="mb-12">
      {/* Desktop: Side-by-side cards */}
      <div className="hidden lg:flex gap-6 items-stretch">
        {/* Left Side - Header Section */}
        <div className="w-1/5 flex-shrink-0 flex flex-col justify-center">
          <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Total Cost Comparison
          </h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            36-month cost: $1,000 laptop vs. PCaaS
          </p>
          <div className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 transition-all duration-500 ${showPCaaSCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-green-700 dark:text-green-400 font-medium text-xs">
              Save up to <span className="text-base font-bold"><AnimatedPrice value={2606} isActive={showPCaaSCard} /></span> over 36 months
            </p>
          </div>
        </div>

        {/* Right Side - Two Cards */}
        <div className="flex-1 flex gap-4">
          {/* Traditional Laptop Card */}
          <div className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden flex flex-col">
            <div className="bg-red-50 dark:bg-red-900/20 px-4 py-3 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <h5 className="font-semibold text-neutral-900 dark:text-white text-sm">Traditional Laptop</h5>
              </div>
            </div>
            <div className="p-4 flex-1">
              <div className="space-y-2">
                {costData.map((row, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between text-sm transition-all duration-500 ease-out ${
                      visibleRows.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="text-neutral-600 dark:text-neutral-400">{row.category}</span>
                    <span className="font-medium">{renderLaptopCostAnimated(row.laptopCost, index)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`bg-neutral-100 dark:bg-neutral-800 px-4 py-3 border-t border-neutral-200 dark:border-neutral-700 transition-all duration-500 ${allRowsVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-neutral-900 dark:text-white">36-Month Total</span>
                <span className="text-lg font-bold text-red-500 dark:text-red-400">
                  <AnimatedPriceRange minValue={3935} maxValue={6170} isActive={allRowsVisible} />
                </span>
              </div>
            </div>
          </div>

          {/* PCaaS Program Card */}
          <div className={`flex-1 bg-primary/5 dark:bg-primary/10 border-2 border-primary rounded-xl overflow-hidden flex flex-col transition-all duration-700 ease-out ${
            showPCaaSCard 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-primary/20 dark:bg-primary/30 px-4 py-3 border-b border-primary/30">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <h5 className="font-semibold text-neutral-900 dark:text-white text-sm">PCaaS Program</h5>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">(Essential @ $99/mo)</span>
              </div>
            </div>
            <div className="p-4 flex-1">
              <div className="space-y-2">
                {costData.map((row, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">{row.category}</span>
                    {renderPCaaSCost(row.pcaasCost)}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/20 dark:bg-primary/30 px-4 py-3 border-t border-primary/30">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-neutral-900 dark:text-white">36-Month Total</span>
                <span className="text-lg font-bold text-primary">
                  <AnimatedPrice value={3564} isActive={showPCaaSCard} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Stacked cards */}
      <div className="lg:hidden">
        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white text-center mb-2">
          Total Cost Comparison
        </h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center mb-6 max-w-md mx-auto">
          36-month cost: $1,000 laptop vs. PCaaS
        </p>

        <div className="space-y-4">
          {/* Traditional Laptop Card */}
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
            <div className="bg-red-50 dark:bg-red-900/20 px-4 py-3 border-b border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <h5 className="font-semibold text-neutral-900 dark:text-white text-sm">Traditional Laptop</h5>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {costData.map((row, index) => (
                  <div 
                    key={index} 
                    className={`flex justify-between text-sm transition-all duration-500 ease-out ${
                      visibleRows.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <span className="text-neutral-600 dark:text-neutral-400">{row.category}</span>
                    <span className="font-medium">{renderLaptopCostAnimated(row.laptopCost, index)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`bg-neutral-100 dark:bg-neutral-800 px-4 py-3 border-t border-neutral-200 dark:border-neutral-700 transition-all duration-500 ${allRowsVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-neutral-900 dark:text-white">36-Month Total</span>
                <span className="text-lg font-bold text-red-500 dark:text-red-400">
                  <AnimatedPriceRange minValue={3935} maxValue={6170} isActive={allRowsVisible} />
                </span>
              </div>
            </div>
          </div>

          {/* PCaaS Program Card */}
          <div className={`bg-primary/5 dark:bg-primary/10 border-2 border-primary rounded-xl overflow-hidden transition-all duration-700 ease-out ${
            showPCaaSCard 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-primary/20 dark:bg-primary/30 px-4 py-3 border-b border-primary/30">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <h5 className="font-semibold text-neutral-900 dark:text-white text-sm">PCaaS Program</h5>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">(Essential @ $99/mo)</span>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {costData.map((row, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">{row.category}</span>
                    {renderPCaaSCost(row.pcaasCost)}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/20 dark:bg-primary/30 px-4 py-3 border-t border-primary/30">
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm text-neutral-900 dark:text-white">36-Month Total</span>
                <span className="text-lg font-bold text-primary">
                  <AnimatedPrice value={3564} isActive={showPCaaSCard} />
                </span>
              </div>
            </div>
          </div>

          {/* Savings Callout */}
          <div className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center transition-all duration-500 ${showPCaaSCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-green-700 dark:text-green-400 font-medium">
              Save up to <span className="text-xl font-bold"><AnimatedPrice value={2606} isActive={showPCaaSCard} /></span> over 36 months with PCaaS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCostComparison;
