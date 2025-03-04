
// Constants for calculations
export const PER_INCIDENT_COSTS = {
  macbook: 449,
  laptop: 265,
  desktop: 267,
  tablet: 212,
  // Adjust monitor service cost to be more proportional to its $150 value
  monitor: 75, // Reduced from 200 to 75 (approximately half of the $150 MSRP)
  accessory: 35
};

// Constants for environmental impact
export const CO2_PER_DEVICE = {
  macbook: 220,
  laptop: 156,
  desktop: 250,
  tablet: 100,
  monitor: 120,
  accessory: 15
};

export const WATER_SAVINGS_PER_DEVICE = {
  macbook: 1800,
  laptop: 1200,
  desktop: 1500,
  tablet: 700,
  monitor: 900,
  accessory: 100
};

export const EWASTE_REDUCTION_PER_DEVICE = {
  macbook: 2.5,
  laptop: 1.8,
  desktop: 3.2,
  tablet: 0.9,
  monitor: 1.6,
  accessory: 0.3
};

export const HOURS_SAVED_PER_DEVICE = {
  macbook: 6.5,
  laptop: 4.5,
  desktop: 4.0,
  tablet: 3.0,
  monitor: 2.0,
  accessory: 0.5
};

// Average device costs for resale calculations
export const AVG_DEVICE_COST = {
  macbook: 1800,
  laptop: 1000,
  desktop: 1200,
  tablet: 500,
  monitor: 150,  // Updated from 300 to 150
  accessory: 50
};

export const RESALE_VALUE_PERCENTAGE = 0.20; // 20% resale value
