
// Constants for calculations

// Labor costs
export const LABOR_COSTS = {
  itManager: 600, // $600/hire (1 business day at $3k/week)
  hrManager: 75,  // $75/hire (1 hour at $3k/week)
  remoteEmployeeDowntime: 462 // $462/day for remote executive with $100k salary + 20% benefits
};

// Rates for calculations
export const RATES = {
  incidentRate: 0.12, // 12% incident rate
  turnoverRate: 0.10, // 10% turnover rate
};

// Repair vs replacement savings
export const REPAIR_VS_REPLACEMENT = {
  repairCost: 300,    // $300 average repair cost
  replacementCost: 1000, // $1000 average replacement cost
  savings: 700        // $700 average savings
};

// Average device costs for resale calculations
export const AVG_DEVICE_COST = {
  macbook: 1800,
  laptop: 1000,
  desktop: 1200,
  tablet: 500,
  monitor: 150,
  accessory: 50
};

export const RESALE_VALUE_PERCENTAGE = 0.20; // 20% resale value

// Constants for environmental impact (kept for compatibility)
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
