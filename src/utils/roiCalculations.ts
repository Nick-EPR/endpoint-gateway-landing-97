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
const HOURS_SAVED_PER_DEVICE = 4.5; // Annual hours saved per device through proactive maintenance and reduced downtime

// Function to calculate annual savings based on employee count
export const calculateAnnualSavings = (employeeCount: number): number => {
  const totalDevices = Math.ceil(employeeCount * DEVICES_PER_EMPLOYEE);
  const serviceCosts = totalDevices * SERVICE_COST_PER_DEVICE;
  const deviceSavings = employeeCount * ANNUAL_SAVINGS_PER_EMPLOYEE;
  const resaleValue = (totalDevices / 2.8) * (AVG_DEVICE_COST * RESALE_VALUE_PERCENTAGE);

  return Math.round(deviceSavings + resaleValue - serviceCosts);
};

// Function to calculate hours saved
export const calculateHoursSaved = (employeeCount: number): number => {
  const totalDevices = Math.ceil(employeeCount * DEVICES_PER_EMPLOYEE);
  return Math.round(totalDevices * HOURS_SAVED_PER_DEVICE);
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

// Format large numbers to shortened version (e.g., 1M, 2.5K)
const formatLargeNumber = (value: number): string => {
  if (value >= 1000000000000) {
    return `${(value / 1000000000000).toFixed(value % 1000000000000 === 0 ? 0 : 1)}T`;
  }
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(value % 1000000000000 === 0 ? 0 : 1)}B`;
  }
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (value >= 1000) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return value.toString();
};

// Function to calculate trends based on employee count
export const calculateTrends = (employeeCount: number): Trend[] => {
  const baseLifespan = 2;
  const improvedLifespan = 2.8;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  const annualSavings = calculateAnnualSavings(employeeCount);
  const environmentalImpact = calculateEnvironmentalImpact(employeeCount);
  const hoursSaved = calculateHoursSaved(employeeCount);
  
  return [
    {
      label: "Carbon Reduction",
      value: `${formatLargeNumber(environmentalImpact.co2Reduction)} tons`,
      trend: -40,
      tooltip: "Annual CO2 emissions reduction through extended device lifecycles"
    },
    {
      label: "E-Waste Prevention",
      value: `${environmentalImpact.ewasteReduced.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kg`,
      trend: 35,
      tooltip: "Annual reduction in e-waste through device lifecycle extension and repair"
    },
    {
      label: "Estimated ROI",
      value: `$${formatLargeNumber(annualSavings)}`,
      trend: 30,
      tooltip: "Expected annual return on investment in dollars"
    },
    {
      label: "Hours Saved",
      value: `${formatLargeNumber(hoursSaved)} hrs`,
      trend: 25,
      tooltip: "Annual time savings through reduced device downtime, faster repairs, and proactive maintenance"
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
