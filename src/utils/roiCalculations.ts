
export interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

// Function to calculate annual savings based on employee count
export const calculateAnnualSavings = (employeeCount: number): number => {
  return employeeCount * 90000 / 1000;
};

// Function to calculate compounded savings over 5 years
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

// Function to calculate percentage change
export const calculatePercentageChange = (oldValue: number, newValue: number): number => {
  if (oldValue === 0) {
    return newValue === 0 ? 0 : Infinity;
  }
  return ((newValue - oldValue) / oldValue) * 100;
};

// Function to format large numbers with commas and k/M suffix
const formatLargeNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}k`;
  }
  return num.toString();
};

// Function to calculate trends based on employee count
export const calculateTrends = (employeeCount: number): Trend[] => {
  // Base device lifespan is 2 years without our solution
  const baseLifespan = 2;
  const improvedLifespan = 2.8;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  // Calculate cost reduction based on employee count
  const annualSavings = calculateAnnualSavings(employeeCount);
  
  return [
    {
      label: "Device Lifespan",
      value: "2.8 years",
      trend: 40,
      tooltip: "Average increase in device lifespan based on our 2023 customer data"
    },
    {
      label: "Cost Reduction",
      value: formatCurrency(annualSavings * 1000, 'USD'),
      trend: -32,
      tooltip: "Average cost savings through repair and refurbishment programs"
    },
    {
      label: "Carbon Footprint",
      value: "312 tons",
      trend: -28,
      tooltip: "Average reduction in CO2 emissions based on 2023 environmental impact studies"
    },
    {
      label: "Repair Success",
      value: "92%",
      trend: 12,
      tooltip: "Current repair success rate across all supported device categories"
    }
  ];
};

// Format currency
export const formatCurrency = (amount: number, currencyCode: string = 'USD', locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// Format percentage
export const formatPercentage = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value / 100);
};

// Format number with commas
export const formatNumberWithCommas = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(value);
};

export const defaultTrends = calculateTrends(1000);
