
import { Trend, DeviceCounts } from './types';
import { calculateAnnualSavings } from './financialCalculations';
import { calculateEnvironmentalImpact, calculateHoursSaved } from './environmentalCalculations';

// Function to calculate trends based on device counts
export const calculateTrends = (devices: DeviceCounts, isEnterprise: boolean = false): Trend[] => {
  const baseLifespan = 3;
  const improvedLifespan = 3.9;
  const lifespanIncrease = ((improvedLifespan - baseLifespan) / baseLifespan) * 100;
  
  const annualSavings = calculateAnnualSavings(devices, isEnterprise);
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

// Calculate default trends
import { getDefaultDeviceCounts } from './types';
export const defaultTrends = calculateTrends(getDefaultDeviceCounts());
