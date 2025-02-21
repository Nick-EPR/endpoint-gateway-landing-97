import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Slider } from "@/components/ui/slider";

const ROICalculator = () => {
  const [employees, setEmployees] = useState(1000);
  
  // Calculate annual savings based on $90K per 1000 employees
  const calculateAnnualSavings = () => {
    return (employees * 90000) / 1000;
  };

  // Calculate 2-year savings
  const calculateTwoYearSavings = () => {
    return calculateAnnualSavings() * 2;
  };

  return (
    <section className="relative py-24 bg-primary-light">
      {/* Top slanted divider */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-3 -translate-y-12 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Calculate Your Potential Savings
            </h2>
            <p className="text-lg text-neutral mb-8 animate-on-scroll">
              See how much you can save with our repair-first approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="text-primary text-xl font-bold mb-2">60%</div>
              <p className="text-neutral">Average savings repair vs. replacement</p>
            </div>
            <div className="glass-card p-6 text-center animate-on-scroll">
              <div className="text-primary text-xl font-bold mb-2">2 Years</div>
              <p className="text-neutral">Average life extension of devices</p>
            </div>
          </div>

          <div className="glass-card p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold">ROI Calculator</h3>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-neutral">
                  Number of Employees
                </label>
                <span className="text-sm text-neutral font-medium">
                  {employees.toLocaleString()}
                </span>
              </div>
              <Slider
                min={100}
                max={10000}
                step={100}
                value={[employees]}
                onValueChange={(values) => setEmployees(values[0])}
                className="my-4"
              />
              <div className="flex justify-between text-xs text-neutral">
                <span>100</span>
                <span>10,000</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg border border-neutral/20">
                <div className="text-sm text-neutral mb-1">Annual Savings</div>
                <div className="text-2xl font-bold text-primary">
                  ${calculateAnnualSavings().toLocaleString()}
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-neutral/20">
                <div className="text-sm text-neutral mb-1">2-Year Savings</div>
                <div className="text-2xl font-bold text-primary">
                  ${calculateTwoYearSavings().toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom slanted divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform skew-y-3 translate-y-12 z-0"></div>
    </section>
  );
};

export default ROICalculator;
