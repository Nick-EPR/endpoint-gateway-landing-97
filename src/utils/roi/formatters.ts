
// Function to calculate percentage change
export const calculatePercentageChange = (oldValue: number, newValue: number): number => {
  if (oldValue === 0) {
    return newValue === 0 ? 0 : Infinity;
  }
  return ((newValue - oldValue) / oldValue) * 100;
};

// Format currency
export const formatCurrency = (amount: number, currencyCode: string = 'USD', locale: string = 'en-US'): string => {
  // Ensure we're formatting a positive number
  const positiveAmount = Math.abs(amount);
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(positiveAmount);
};

// Format percentage
export const formatPercentage = (value: number, locale: string = 'en-US'): string => {
  // Ensure we're formatting a positive percentage
  const positiveValue = Math.abs(value);
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(positiveValue / 100);
};

// Format number with commas
export const formatNumberWithCommas = (value: number, locale: string = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(value);
};
