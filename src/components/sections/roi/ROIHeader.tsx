
import { Calculator } from 'lucide-react';

export const ROIHeader = () => {
  return (
    <div className="text-center mb-12 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up flex items-center justify-center gap-3">
        <Calculator className="w-8 h-8 text-primary" />
        Calculate Your Potential Savings
      </h2>
      <p className="text-lg text-neutral mb-8 animate-fade-up delay-100">
        See how much you can save with our repair-first approach
      </p>
    </div>
  );
};
