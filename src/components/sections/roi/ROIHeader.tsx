
import { Calculator } from 'lucide-react';

export const ROIHeader = () => {
  return (
    <div className="text-center mb-12 relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up flex items-center justify-center gap-3">
        <Calculator className="w-10 h-10 md:w-12 md:h-12 text-primary" />
        Calculate Your Potential Savings
      </h2>
      <p className="text-lg text-neutral mb-8 animate-fade-up delay-100">
        See how much you can{' '}
        <span className="text-green-600 dark:text-green-400">save over 4 years</span>{' '}
        with our repair-first approach
      </p>
    </div>
  );
};
