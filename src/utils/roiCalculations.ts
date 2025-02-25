
export interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

// Constants for calculations
const ANNUAL_SAVINGS_PER_EMPLOYEE = 900; // Base savings per employee
const SERVICE_COST_PER_DEVICE = 180; // Average service cost per device
const RESALE_VALUE_PERCENTAGE = 0.25; // 25% of original device cost
const AVG_DEVICE_COST = 1200; // Average device cost
const DEVICES_PER_EMPLOYEE = 1.2; // Average number of devices per employee
const CO2_PER_DEVICE = 156; // kg CO2 per device lifecycle
const WATER_SAVINGS_PER_DEVICE = 1200; // liters of water saved per device lifecycle extended
const EWASTE_REDUCTION_PER_DEVICE = 1.8; // kg of e-waste reduced per device lifecycle extended

// Function to calculate annual savings based on employee count
export const calculateAnnualSavings = (employeeCount: number): number => {
  const totalDevices = Math.ceil(employeeCount * DEVICES_PER_EMPLOYEE);
  const serviceCosts = totalDevices * SERVICE_COST_PER_DEVICE;
  const deviceSavings = employeeCount * ANNUAL_SAVINGS_PER_EMPLOYEE;
  const resaleValue = (totalDevices / 2.8) * (AVG_DEVICE_COST * RESALE_VALUE_PERCENTAGE);

  return Math.round(deviceSavings + resaleValue - serviceCosts);
};

// Function to calculate environmental impact
export const calculateEnvironmentalImpact = (employeeCount: number) => {
  const totalDevices = Math.ceil(employeeCount * DEVICES_PER_EMPLOYEE);
  const extendedDevices = Math.round(totalDevices * 0.4); // 40% of devices get extended lifecycle
  
  return {
    co2Reduction: Math.round((extendedDevices * CO2_PER_DEVICE) / 1000), // Convert to tons
    waterSaved: Math.round((extendedDevices * WATER_SAVINGS_PER_DEVICE) / 1000), // Convert to cubic meters
    ewasteReduced: Math.round(extendedDevices * EWASTE_REDUCTION_PER_DEVICE), // kg
  };
};

// Function to calculate compounded savings over 5 years
export const calculateCompoundedSavings = (employees: number) => {
  const years = 5;
  const data = [];
  let totalSavings = 0;
  let totalCO2Saved = 0;
  
  for (let i = 1; i <= years; i++) {
    totalSavings += calculateAnnualSavings(employees);
    totalCO2Saved += calculateEnvironmentalImpact(employees).co2Reduction;
    data.push({
      year: `Year ${i}`,
      savings: totalSavings,
      co2Saved: totalCO2Saved
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

// Function to calculate trends based on employee count
export const calculateTrends = (employeeCount: number): Trend[] => {
  const baseLifespan = 2;
  const improvedLifespan = 2.8;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  const annualSavings = calculateAnnualSavings(employeeCount);
  const environmentalImpact = calculateEnvironmentalImpact(employeeCount);
  const estimatedAnnualROI = annualSavings;
  
  return [
    {
      label: "Carbon Reduction",
      value: `${environmentalImpact.co2Reduction} tons`,
      trend: -40,
      tooltip: "Annual CO2 emissions reduction through extended device lifecycles"
    },
    {
      label: "E-Waste Prevention",
      value: `${environmentalImpact.ewasteReduced} kg`,
      trend: -35,
      tooltip: "Annual reduction in e-waste through device lifecycle extension and repair"
    },
    {
      label: "Estimated Annual ROI",
      value: `$${estimatedAnnualROI}`,
      trend: 30,
      tooltip: "Expected annual return on investment in dollars"
    },
    {
      label: "Cost Reduction",
      value: `$${annualSavings}`,
      trend: -25,
      tooltip: "Annual cost savings through repair, refurbishment, and resale programs"
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
