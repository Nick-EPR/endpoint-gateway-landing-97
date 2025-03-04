
import { Trend, DeviceCounts, TrendResults } from './types';
import { calculateAnnualSavings } from './financialCalculations';
import { calculateEnvironmentalImpact, calculateHoursSaved } from './environmentalCalculations';

// Function to calculate trends based on device counts
export const calculateTrends = (devices: DeviceCounts, isEnterprise: boolean = false): TrendResults => {
  const baseLifespan = 3;
  const improvedLifespan = 3.9;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  const annualSavings = calculateAnnualSavings(devices, isEnterprise);
  const environmentalImpact = calculateEnvironmentalImpact(devices);
  const hoursSaved = calculateHoursSaved(devices);
  
  // Calculate derived values
  const fiveYearTotalSavings = annualSavings * 5;
  const savingsPercentage = 0.25; // 25% reduction in costs (placeholder)
  const averageAnnualSavings = annualSavings;
  const roi = 3.5; // 3.5x ROI (placeholder)
  const paybackPeriod = 8; // 8 months (placeholder)
  const laborSavings = annualSavings * 0.4; // 40% of savings from labor
  const laborHoursSaved = hoursSaved;
  const productivityGains = annualSavings * 0.3; // 30% of savings from productivity
  const productivityBoost = 0.15; // 15% productivity increase (placeholder)
  const carbonReduction = environmentalImpact.co2Reduction * 1000; // Convert to kg
  const treesEquivalent = carbonReduction / 25; // Each tree absorbs ~25kg CO2 per year (placeholder)
  
  return {
    fiveYearTotalSavings,
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
