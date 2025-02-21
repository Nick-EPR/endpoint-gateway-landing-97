
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

interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

export const trends: Trend[] = [
  {
    label: "Average Device Lifespan",
    value: "5.2 years",
    trend: 30,
    tooltip: "Increased device lifespan through our repair-first approach"
  },
  {
    label: "Cost Reduction",
    value: "47%",
    trend: 47,
    tooltip: "Reduction in total cost of ownership compared to traditional replacement"
  },
  {
    label: "Carbon Footprint",
    value: "-68%",
    trend: -68,
    tooltip: "Reduction in carbon emissions through device lifecycle extension"
  },
  {
    label: "Employee Satisfaction",
    value: "92%",
    trend: 15,
    tooltip: "Satisfaction rate with device repair and maintenance services"
  }
];
