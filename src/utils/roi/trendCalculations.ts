
import { Trend, DeviceCounts, TrendResults } from './types';
import { calculateAnnualSavings } from './financialCalculations';
import { calculateEnvironmentalImpact, calculateHoursSaved } from './environmentalCalculations';
import { RATES } from './constants';

// Function to calculate trends based on device counts
export const calculateTrends = (devices: DeviceCounts, isEnterprise: boolean = false): TrendResults => {
  // Calculate total number of devices
  const totalDevices = 
    devices.macbooks + 
    devices.laptops + 
    devices.desktops + 
    devices.tablets + 
    devices.monitors + 
    devices.accessories;
  
  const annualSavings = calculateAnnualSavings(devices, isEnterprise);
  const environmentalImpact = calculateEnvironmentalImpact(devices);
  const hoursSaved = calculateHoursSaved(devices);
  
  // Calculate derived values
  const fiveYearTotalSavings = annualSavings * 5;
  const fourYearTotalSavings = annualSavings * 4; // Added 4-year calculation
  
  // Calculate rough approximation of current IT costs before savings
  const estimatedCurrentITCosts = totalDevices * 1000 * (RATES.incidentRate + RATES.turnoverRate);
  // Savings as percentage of current costs
  const savingsPercentage = estimatedCurrentITCosts > 0 ? annualSavings / estimatedCurrentITCosts : 0.25;
  
  const averageAnnualSavings = annualSavings;
  
  // ROI calculation: estimate initial investment at 30% of annual savings
  const estimatedInitialInvestment = annualSavings * 0.3;
  const roi = estimatedInitialInvestment > 0 ? annualSavings / estimatedInitialInvestment : 3.5;
  
  // Payback period in months: initial investment / (annual savings / 12)
  const paybackPeriod = estimatedInitialInvestment > 0 ? 
    Math.round((estimatedInitialInvestment / (annualSavings / 12))) : 
    8;
  
  // Estimate labor savings component (IT + HR labor)
  const laborSavings = annualSavings * 0.4;
  const laborHoursSaved = hoursSaved;
  
  // Productivity gains from reduced downtime
  const productivityGains = annualSavings * 0.3;
  const productivityBoost = 0.15; // 15% productivity increase for affected devices
  
  // Environmental impact
  const carbonReduction = environmentalImpact.co2Reduction * 1000; // Convert to kg
  const treesEquivalent = carbonReduction / 25; // Each tree absorbs ~25kg CO2 per year
  
  return {
    fiveYearTotalSavings,
    fourYearTotalSavings,
    savingsPercentage,
    averageAnnualSavings,
    roi,
    paybackPeriod,
    laborSavings,
    laborHoursSaved,
    productivityGains,
    productivityBoost,
    carbonReduction,
    treesEquivalent
  };
};

// Calculate default trends
import { getDefaultDeviceCounts } from './types';
export const defaultTrends = calculateTrends(getDefaultDeviceCounts());
