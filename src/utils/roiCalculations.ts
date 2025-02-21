export interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

// Function to calculate the percentage change between two numbers
export const calculatePercentageChange = (oldValue: number, newValue: number): number => {
  if (oldValue === 0) {
    return newValue === 0 ? 0 : Infinity; // Avoid division by zero
  }
  return ((newValue - oldValue) / oldValue) * 100;
};

// Function to format a number as currency
export const formatCurrency = (amount: number, currencyCode: string = 'USD', locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
};

// Function to format a number as a percentage
export const formatPercentage = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value / 100);
};

// Function to format a number with commas
export const formatNumberWithCommas = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(value);
};

export const defaultTrends: Trend[] = [
  {
    label: "Device Lifespan",
    value: "2.8 years",
    trend: 40,
    tooltip: "Average increase in device lifespan compared to industry standard"
  },
  {
    label: "Cost Reduction",
    value: "$840k",
    trend: -32,
    tooltip: "Projected annual cost savings through repair and refurbishment"
  },
  {
    label: "Carbon Footprint",
    value: "486 tons",
    trend: -28,
    tooltip: "Reduction in CO2 emissions from device manufacturing"
  },
  {
    label: "Repair Success",
    value: "94%",
    trend: 12,
    tooltip: "Successful repair rate across all device categories"
  }
];

// Example function to simulate calculating new trends based on some input data
export const calculateNewTrends = (/* some input data */): Trend[] => {
  // In a real application, this function would perform calculations
  // based on the input data and return an array of Trend objects.

  // For now, let's just return the default trends as an example.
  return defaultTrends;
};
