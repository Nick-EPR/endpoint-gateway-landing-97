
export interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

export const calculateAnnualSavings = (employeeCount: number) => {
  return employeeCount * 90000 / 1000;
};

export const calculateCompoundedSavings = (employees: number) => {
  const years = 5;
  const data = [];
  let totalSavings = 0;
  
  for (let i = 1; i <= years; i++) {
    totalSavings += calculateAnnualSavings(employees);
    data.push({
      year: `Year ${i}`,
      savings: totalSavings
    });
  }
  
  return data;
};

// Calculate dynamic trends based on employee count
export const calculateTrends = (employeeCount: number): Trend[] => {
  // Base device lifespan is 3 years without our solution
  const baseLifespan = 3;
  const improvedLifespan = 5.5;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  // Base cost is $1200 per device per year
  const baseCost = 1200;
  const ourCost = 650; // Our solution cost per device per year
  const costReduction = ((baseCost - ourCost) / baseCost) * 100;
  
  // Carbon footprint calculation
  // Average laptop produces 300kg CO2 in production
  // Extended lifespan reduces new device needs
  const carbonReduction = -((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  // Employee satisfaction based on device performance and support
  // Industry average is 76% satisfaction
  const baseEmployeeSatisfaction = 76;
  const ourEmployeeSatisfaction = 94;
  const satisfactionImprovement = ourEmployeeSatisfaction - baseEmployeeSatisfaction;

  return [
    {
      label: "Average Device Lifespan",
      value: `${improvedLifespan} years`,
      trend: Math.round(lifespanIncrease),
      tooltip: "Extended device lifespan through proactive maintenance and repairs"
    },
    {
      label: "Cost Reduction",
      value: `${Math.round(costReduction)}%`,
      trend: Math.round(costReduction),
      tooltip: "Reduction in total cost of ownership through optimized lifecycle management"
    },
    {
      label: "Carbon Footprint",
      value: `${Math.abs(Math.round(carbonReduction))}% Less`,
      trend: Math.round(carbonReduction),
      tooltip: "Reduced environmental impact through extended device lifecycles"
    },
    {
      label: "Employee Satisfaction",
      value: `${ourEmployeeSatisfaction}%`,
      trend: satisfactionImprovement,
      tooltip: "Improved satisfaction through better device performance and support"
    }
  ];
};

// Default trends for initial render
export const defaultTrends = calculateTrends(1000);
