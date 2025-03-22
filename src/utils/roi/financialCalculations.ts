
import { DeviceCounts } from './types';
import { 
  AVG_DEVICE_COST, 
  RESALE_VALUE_PERCENTAGE,
  LABOR_COSTS,
  RATES,
  REPAIR_VS_REPLACEMENT
} from './constants';

// Function to calculate annual savings based on device counts
export const calculateAnnualSavings = (devices: DeviceCounts, isEnterprise: boolean = false): number => {
  // Calculate total number of devices
  const totalDevices = 
    devices.macbooks + 
    devices.laptops + 
    devices.desktops + 
    devices.tablets + 
    devices.monitors + 
    devices.accessories;
  
  // 1. IT asset manager labor savings
  // 1 business day × $3k/wk = $600/hire × (12% incident rate + 10% turnover rate)
  const itLaborSavings = LABOR_COSTS.itManager * totalDevices * (RATES.incidentRate + RATES.turnoverRate);
  
  // 2. HR manager labor savings
  // 1 hour × $3k/wk = $75/hire × (12% incident rate + 10% turnover rate)
  const hrLaborSavings = LABOR_COSTS.hrManager * totalDevices * (RATES.incidentRate + RATES.turnoverRate);
  
  // 3. Remote employee downtime from non-working asset
  // $462/day × 12% incident rate
  const downtimeSavings = LABOR_COSTS.remoteEmployeeDowntime * totalDevices * RATES.incidentRate;
  
  // 4. Repair vs Replacement savings
  // $700 savings × 12% incident rate
  const repairSavings = REPAIR_VS_REPLACEMENT.savings * totalDevices * RATES.incidentRate;
  
  // 5. Residual value during disposition - use 20% of retail value
  // Calculate average retail value across all devices
  const totalRetailValue = 
    (devices.macbooks * AVG_DEVICE_COST.macbook) +
    (devices.laptops * AVG_DEVICE_COST.laptop) +
    (devices.desktops * AVG_DEVICE_COST.desktop) +
    (devices.tablets * AVG_DEVICE_COST.tablet) +
    (devices.monitors * AVG_DEVICE_COST.monitor) +
    (devices.accessories * AVG_DEVICE_COST.accessory);
  
  // Assume 20% of devices are disposed of annually
  const disposalRate = 0.20;
  const residualValue = totalRetailValue * disposalRate * RESALE_VALUE_PERCENTAGE;
  
  // Sum up all savings
  const totalAnnualSavings = itLaborSavings + hrLaborSavings + downtimeSavings + repairSavings + residualValue;
  
  // Round to nearest whole number
  return Math.round(totalAnnualSavings);
};

// Function to calculate compounded savings over 4 years
export const calculateCompoundedSavings = (devices: DeviceCounts, isEnterprise: boolean = false) => {
  const years = 4;
  const data = [];
  let totalSavings = 0;
  let totalCO2Saved = 0;
  
  for (let i = 1; i <= years; i++) {
    totalSavings += calculateAnnualSavings(devices, isEnterprise);
    totalCO2Saved += calculateEnvironmentalImpact(devices).co2Reduction;
    data.push({
      year: `Year ${i}`,
      savings: totalSavings,
      co2Saved: totalCO2Saved
    });
  }
  
  return data;
};

// Function to generate chart data for the SavingsLineChart component
export const generateChartData = (devices: DeviceCounts, isEnterprise: boolean = false) => {
  return calculateCompoundedSavings(devices, isEnterprise);
};

// Import this function from environmentalCalculations
import { calculateEnvironmentalImpact } from './environmentalCalculations';
