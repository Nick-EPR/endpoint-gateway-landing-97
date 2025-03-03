
export interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

export interface DeviceCounts {
  macbooks: number;
  laptops: number;
  desktops: number;
  tablets: number;
  monitors: number;
  accessories: number;
}

// Constants for calculations
const PER_INCIDENT_COSTS = {
  macbook: 449,
  laptop: 265,
  desktop: 267,
  tablet: 212,
  monitor: 200,
  accessory: 35
};

// Constants for environmental impact
const CO2_PER_DEVICE = {
  macbook: 220,
  laptop: 156,
  desktop: 250,
  tablet: 100,
  monitor: 120,
  accessory: 15
};

const WATER_SAVINGS_PER_DEVICE = {
  macbook: 1800,
  laptop: 1200,
  desktop: 1500,
  tablet: 700,
  monitor: 900,
  accessory: 100
};

const EWASTE_REDUCTION_PER_DEVICE = {
  macbook: 2.5,
  laptop: 1.8,
  desktop: 3.2,
  tablet: 0.9,
  monitor: 1.6,
  accessory: 0.3
};

const HOURS_SAVED_PER_DEVICE = {
  macbook: 6.5,
  laptop: 4.5,
  desktop: 4.0,
  tablet: 3.0,
  monitor: 2.0,
  accessory: 0.5
};

// Average device costs for resale calculations
const AVG_DEVICE_COST = {
  macbook: 1800,
  laptop: 1000,
  desktop: 1200,
  tablet: 500,
  monitor: 300,
  accessory: 50
};

const RESALE_VALUE_PERCENTAGE = 0.20; // 20% resale value

// Function to calculate annual savings based on device counts
export const calculateAnnualSavings = (devices: DeviceCounts): number => {
  // Calculate service costs
  const serviceCosts = 
    (devices.macbooks * PER_INCIDENT_COSTS.macbook) +
    (devices.laptops * PER_INCIDENT_COSTS.laptop) +
    (devices.desktops * PER_INCIDENT_COSTS.desktop) +
    (devices.tablets * PER_INCIDENT_COSTS.tablet) +
    (devices.monitors * PER_INCIDENT_COSTS.monitor) +
    (devices.accessories * PER_INCIDENT_COSTS.accessory);
  
  // Calculate resale value (assuming 1/4 of devices are replaced each year)
  const resaleValue = 
    ((devices.macbooks / 4) * (AVG_DEVICE_COST.macbook * RESALE_VALUE_PERCENTAGE)) +
    ((devices.laptops / 4) * (AVG_DEVICE_COST.laptop * RESALE_VALUE_PERCENTAGE)) +
    ((devices.desktops / 4) * (AVG_DEVICE_COST.desktop * RESALE_VALUE_PERCENTAGE)) +
    ((devices.tablets / 4) * (AVG_DEVICE_COST.tablet * RESALE_VALUE_PERCENTAGE)) +
    ((devices.monitors / 4) * (AVG_DEVICE_COST.monitor * RESALE_VALUE_PERCENTAGE)) +
    ((devices.accessories / 4) * (AVG_DEVICE_COST.accessory * RESALE_VALUE_PERCENTAGE));

  // Calculate cost savings from extended lifecycle
  const extendedLifecycleSavings = 
    (devices.macbooks * 0.3 * AVG_DEVICE_COST.macbook * 0.25) +
    (devices.laptops * 0.3 * AVG_DEVICE_COST.laptop * 0.25) +
    (devices.desktops * 0.3 * AVG_DEVICE_COST.desktop * 0.25) +
    (devices.tablets * 0.3 * AVG_DEVICE_COST.tablet * 0.25) +
    (devices.monitors * 0.3 * AVG_DEVICE_COST.monitor * 0.25) +
    (devices.accessories * 0.3 * AVG_DEVICE_COST.accessory * 0.25);

  return Math.round(extendedLifecycleSavings + resaleValue - serviceCosts);
};

// Function to calculate hours saved
export const calculateHoursSaved = (devices: DeviceCounts): number => {
  return Math.round(
    (devices.macbooks * HOURS_SAVED_PER_DEVICE.macbook) +
    (devices.laptops * HOURS_SAVED_PER_DEVICE.laptop) +
    (devices.desktops * HOURS_SAVED_PER_DEVICE.desktop) +
    (devices.tablets * HOURS_SAVED_PER_DEVICE.tablet) +
    (devices.monitors * HOURS_SAVED_PER_DEVICE.monitor) +
    (devices.accessories * HOURS_SAVED_PER_DEVICE.accessory)
  );
};

// Function to calculate environmental impact
export const calculateEnvironmentalImpact = (devices: DeviceCounts) => {
  // Calculate extended devices (30% of each category)
  const extendedMacbooks = Math.round(devices.macbooks * 0.3);
  const extendedLaptops = Math.round(devices.laptops * 0.3);
  const extendedDesktops = Math.round(devices.desktops * 0.3);
  const extendedTablets = Math.round(devices.tablets * 0.3);
  const extendedMonitors = Math.round(devices.monitors * 0.3);
  const extendedAccessories = Math.round(devices.accessories * 0.3);
  
  const co2Reduction = Math.round(
    (extendedMacbooks * CO2_PER_DEVICE.macbook +
    extendedLaptops * CO2_PER_DEVICE.laptop +
    extendedDesktops * CO2_PER_DEVICE.desktop +
    extendedTablets * CO2_PER_DEVICE.tablet +
    extendedMonitors * CO2_PER_DEVICE.monitor +
    extendedAccessories * CO2_PER_DEVICE.accessory) / 1000
  ); // Convert to tons

  const waterSaved = Math.round(
    (extendedMacbooks * WATER_SAVINGS_PER_DEVICE.macbook +
    extendedLaptops * WATER_SAVINGS_PER_DEVICE.laptop +
    extendedDesktops * WATER_SAVINGS_PER_DEVICE.desktop +
    extendedTablets * WATER_SAVINGS_PER_DEVICE.tablet +
    extendedMonitors * WATER_SAVINGS_PER_DEVICE.monitor +
    extendedAccessories * WATER_SAVINGS_PER_DEVICE.accessory) / 1000
  ); // Convert to cubic meters

  const ewasteReduced = Math.round(
    extendedMacbooks * EWASTE_REDUCTION_PER_DEVICE.macbook +
    extendedLaptops * EWASTE_REDUCTION_PER_DEVICE.laptop +
    extendedDesktops * EWASTE_REDUCTION_PER_DEVICE.desktop +
    extendedTablets * EWASTE_REDUCTION_PER_DEVICE.tablet +
    extendedMonitors * EWASTE_REDUCTION_PER_DEVICE.monitor +
    extendedAccessories * EWASTE_REDUCTION_PER_DEVICE.accessory
  ); // In kg

  return {
    co2Reduction,
    waterSaved,
    ewasteReduced,
  };
};

// Function to calculate compounded savings over 4 years
export const calculateCompoundedSavings = (devices: DeviceCounts) => {
  const years = 4;
  const data = [];
  let totalSavings = 0;
  let totalCO2Saved = 0;
  
  for (let i = 1; i <= years; i++) {
    totalSavings += calculateAnnualSavings(devices);
    totalCO2Saved += calculateEnvironmentalImpact(devices).co2Reduction;
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

// Get default device counts based on industry averages
export const getDefaultDeviceCounts = (): DeviceCounts => {
  return {
    macbooks: 20,
    laptops: 80,
    desktops: 30,
    tablets: 15,
    monitors: 130,
    accessories: 180
  };
};

// Function to calculate trends based on device counts
export const calculateTrends = (devices: DeviceCounts): Trend[] => {
  const baseLifespan = 3;
  const improvedLifespan = 3.9;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  const annualSavings = calculateAnnualSavings(devices);
  const environmentalImpact = calculateEnvironmentalImpact(devices);
  const hoursSaved = calculateHoursSaved(devices);
  
  return [
    {
      label: "Carbon Reduction",
      value: `${environmentalImpact.co2Reduction} tons`,
      trend: -40,
      tooltip: "4-year CO2 emissions reduction through extended device lifecycles"
    },
    {
      label: "E-Waste Prevention",
      value: `${environmentalImpact.ewasteReduced} kg`,
      trend: 35,
      tooltip: "4-year reduction in e-waste through device lifecycle extension and repair"
    },
    {
      label: "Estimated ROI",
      value: `$${Math.abs(annualSavings)}`,  // Use absolute value for ROI display
      trend: 30,
      tooltip: "Expected 4-year return on investment in dollars"
    },
    {
      label: "Hours Saved",
      value: `${hoursSaved} hrs`,
      trend: 25,
      tooltip: "4-year time savings through reduced device downtime, faster repairs, and proactive maintenance"
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

export const defaultTrends = calculateTrends(getDefaultDeviceCounts());
