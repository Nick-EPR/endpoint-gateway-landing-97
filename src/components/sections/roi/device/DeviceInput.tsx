
import { RefObject, useState, useEffect } from "react";
import { DeviceCounts } from "@/utils/roi";
import { DeviceSlider } from "./DeviceSlider";
import { createDeviceConfigs } from "./DeviceSliderConfigs";

interface DeviceInputProps {
  deviceCounts: DeviceCounts;
  sliderRef?: RefObject<HTMLDivElement>;
  onDeviceCountChange: (type: keyof DeviceCounts, value: number) => void;
  disabled?: boolean;
  isEnterprise?: boolean;
  compact?: boolean;
}

export const DeviceInput = ({ 
  deviceCounts, 
  sliderRef, 
  onDeviceCountChange, 
  disabled, 
  isEnterprise = false,
  compact = false
}: DeviceInputProps) => {
  const [deviceConfigs, setDeviceConfigs] = useState(createDeviceConfigs(isEnterprise));
  
  // Update device configs when enterprise mode changes
  useEffect(() => {
    setDeviceConfigs(createDeviceConfigs(isEnterprise));
  }, [isEnterprise]);

  const handleDeviceChange = (device: keyof DeviceCounts, value: number) => {
    onDeviceCountChange(device, value);
  };

  return (
    <div className={`mb-8 px-2 sm:px-0 ${compact ? 'space-y-4' : ''}`} ref={sliderRef}>
      <h3 className="text-lg font-semibold mb-6 text-neutral-800 dark:text-white">
        Device Inventory
        {isEnterprise && (
          <span className="ml-2 text-sm font-normal text-indigo-600 dark:text-indigo-400">
            Enterprise Mode Active
          </span>
        )}
      </h3>
      
      <div className={`grid grid-cols-1 ${compact ? '' : 'md:grid-cols-2'} gap-x-8 gap-y-6`}>
        {deviceConfigs.map((config) => (
          <DeviceSlider
            key={config.key}
            config={config}
            value={deviceCounts[config.key as keyof DeviceCounts]}
            onChange={(value) => handleDeviceChange(config.key as keyof DeviceCounts, value)}
            disabled={disabled}
            isEnterprise={isEnterprise}
          />
        ))}
      </div>
    </div>
  );
};
