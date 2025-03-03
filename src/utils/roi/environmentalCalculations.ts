
import { DeviceCounts } from './types';
import { 
  CO2_PER_DEVICE, 
  WATER_SAVINGS_PER_DEVICE, 
  EWASTE_REDUCTION_PER_DEVICE,
  HOURS_SAVED_PER_DEVICE
} from './constants';

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
