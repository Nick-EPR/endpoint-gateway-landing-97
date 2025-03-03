
import { DeviceCounts } from '@/utils/roi';

/**
 * Calculate the annual and 4-year savings for the given device counts
 */
export const calculateDisplaySavings = (deviceCounts: DeviceCounts, isEnterprise: boolean = false) => {
  const annualSavings = calculateAnnualSavings(deviceCounts, isEnterprise);
  const displayAnnualSavings = Math.abs(annualSavings);
  const displayFourYearSavings = Math.abs(annualSavings * 4);
  
  return {
    annual: displayAnnualSavings,
    fourYear: displayFourYearSavings
  };
};

// Import from utils to avoid circular dependency
import { calculateAnnualSavings } from '@/utils/roi';
