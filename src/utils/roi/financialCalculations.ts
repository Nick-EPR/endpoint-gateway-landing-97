
import { DeviceCounts } from './types';
import { 
  PER_INCIDENT_COSTS, 
  AVG_DEVICE_COST, 
  RESALE_VALUE_PERCENTAGE 
} from './constants';

// Function to calculate annual savings based on device counts
export const calculateAnnualSavings = (devices: DeviceCounts, isEnterprise: boolean = false): number => {
  // Calculate service costs
  const serviceCosts = 
    (devices.macbooks * PER_INCIDENT_COSTS.macbook) +
    (devices.laptops * PER_INCIDENT_COSTS.laptop) +
    (devices.desktops * PER_INCIDENT_COSTS.desktop) +
    (devices.tablets * PER_INCIDENT_COSTS.tablet) +
    (devices.monitors * PER_INCIDENT_COSTS.monitor) +
    (devices.accessories * PER_INCIDENT_COSTS.accessory);
  
  // Calculate resale value (assuming 1/10 of devices are replaced each year, changed from 1/4)
  const resaleValue = 
    ((devices.macbooks / 10) * (AVG_DEVICE_COST.macbook * RESALE_VALUE_PERCENTAGE)) +
    ((devices.laptops / 10) * (AVG_DEVICE_COST.laptop * RESALE_VALUE_PERCENTAGE)) +
    ((devices.desktops / 10) * (AVG_DEVICE_COST.desktop * RESALE_VALUE_PERCENTAGE)) +
    ((devices.tablets / 10) * (AVG_DEVICE_COST.tablet * RESALE_VALUE_PERCENTAGE)) +
    ((devices.monitors / 10) * (AVG_DEVICE_COST.monitor * RESALE_VALUE_PERCENTAGE)) +
    ((devices.accessories / 10) * (AVG_DEVICE_COST.accessory * RESALE_VALUE_PERCENTAGE));

  // Calculate cost savings from extended lifecycle
  // Adjust the savings factor for monitors to be more realistic based on $150 value
  const extendedLifecycleSavings = 
    (devices.macbooks * 0.3 * AVG_DEVICE_COST.macbook * 0.25) +
    (devices.laptops * 0.3 * AVG_DEVICE_COST.laptop * 0.25) +
    (devices.desktops * 0.3 * AVG_DEVICE_COST.desktop * 0.25) +
    (devices.tablets * 0.3 * AVG_DEVICE_COST.tablet * 0.25) +
    // Reduce the lifecycle extension factor for monitors from 0.3 to 0.15
    (devices.monitors * 0.15 * AVG_DEVICE_COST.monitor * 0.25) +
    (devices.accessories * 0.3 * AVG_DEVICE_COST.accessory * 0.25);

  // No enterprise scaling factor - calculations are consistent regardless of enterprise mode
  return Math.round(extendedLifecycleSavings + resaleValue - serviceCosts);
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

// Import this function from environmentalCalculations
import { calculateEnvironmentalImpact } from './environmentalCalculations';
