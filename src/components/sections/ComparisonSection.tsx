
import { Table2 } from "lucide-react";
import { ComparisonCard } from "./comparison/ComparisonCard";
import { ComparisonTableDesktop } from "./comparison/ComparisonTable";
import { comparisons } from "./comparison/comparisonData";

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 flex items-center justify-center gap-2 dark:text-white animate-fade-in">
          <Table2 className="h-8 w-8 dark:text-neutral-300" />
          ITAM Solution Comparison
        </h2>
        <p className="text-center text-base md:text-lg mb-10 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Compare traditional IT Asset Management approaches with Lifetime EPR's integrated solution
        </p>
        
        <div className="hidden md:block animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <ComparisonTableDesktop comparisons={comparisons} />
        </div>

        <div className="space-y-6 md:hidden">
          {comparisons.map((item, index) => (
            <ComparisonCard 
              key={index} 
              item={item} 
              index={index} 
              className="animate-fade-in opacity-0"
              style={{ 
                animationDelay: `${0.3 + (index * 0.1)}s`,
                animationFillMode: 'forwards'
              }}
            />
          ))}
        </div>

        <div className="mt-8 text-center animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg md:text-xl font-semibold text-primary dark:text-primary/90">
            Why pay more for fragmented solutions when you can save with Lifetime EPR's all-in-one platform?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
