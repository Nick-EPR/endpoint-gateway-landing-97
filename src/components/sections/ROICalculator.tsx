
import { useState } from 'react';
import { Calculator } from 'lucide-react';

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
    <section className="section-padding bg-primary-light">
      <div className="container mx-auto px-4">
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
              <label className="block text-sm font-medium text-neutral mb-2">
                Number of Employees
              </label>
              <input
                type="number"
                min="1"
                value={employees}
                onChange={(e) => setEmployees(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full p-3 border border-neutral/20 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
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
    </section>
  );
};

export default ROICalculator;
