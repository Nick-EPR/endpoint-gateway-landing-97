
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { DeviceCounts } from "@/utils/roiCalculations";
import { RefObject, useState, useEffect } from "react";
import { Laptop, Monitor, Cpu, Tablet, Smartphone, MousePointer } from "lucide-react";

interface DeviceInputProps {
  deviceCounts: DeviceCounts;
  sliderRef: RefObject<HTMLDivElement>;
  onDeviceCountChange: (type: keyof DeviceCounts, value: number) => void;
  disabled?: boolean;
}

interface DeviceSliderConfig {
  key: keyof DeviceCounts;
  label: string;
  icon: React.ReactNode;
  min: number;
  max: number;
  step: number;
}

export const DeviceInput = ({ deviceCounts, sliderRef, onDeviceCountChange, disabled }: DeviceInputProps) => {
  // Create a state object to track input values for each device
  const [inputValues, setInputValues] = useState<Record<keyof DeviceCounts, string>>({
    macbooks: deviceCounts.macbooks.toString(),
    laptops: deviceCounts.laptops.toString(),
    desktops: deviceCounts.desktops.toString(),
    tablets: deviceCounts.tablets.toString(),
    monitors: deviceCounts.monitors.toString(),
    accessories: deviceCounts.accessories.toString(),
  });

  // Update input values when device counts prop changes
  useEffect(() => {
    setInputValues({
      macbooks: deviceCounts.macbooks.toString(),
      laptops: deviceCounts.laptops.toString(),
      desktops: deviceCounts.desktops.toString(),
      tablets: deviceCounts.tablets.toString(),
      monitors: deviceCounts.monitors.toString(),
      accessories: deviceCounts.accessories.toString(),
    });
  }, [deviceCounts]);

  const deviceConfigs: DeviceSliderConfig[] = [
    {
      key: 'macbooks',
      label: 'MacBooks',
      icon: <Laptop className="w-4 h-4 text-primary" />,
      min: 0,
      max: 500,
      step: 1
    },
    {
      key: 'laptops',
      label: 'Laptops (non-MacBook)',
      icon: <Laptop className="w-4 h-4 text-primary" />,
      min: 0,
      max: 1000,
      step: 1
    },
    {
      key: 'desktops',
      label: 'Desktops',
      icon: <Cpu className="w-4 h-4 text-primary" />,
      min: 0,
      max: 500,
      step: 1
    },
    {
      key: 'tablets',
      label: 'Tablets/iPads',
      icon: <Tablet className="w-4 h-4 text-primary" />,
      min: 0,
      max: 300,
      step: 1
    },
    {
      key: 'monitors',
      label: 'Monitors',
      icon: <Monitor className="w-4 h-4 text-primary" />,
      min: 0,
      max: 1000,
      step: 1
    },
    {
      key: 'accessories',
      label: 'Accessories (mouse, keyboard, webcam, etc.)',
      icon: <MousePointer className="w-4 h-4 text-primary" />,
      min: 0,
      max: 2000,
      step: 1
    }
  ];

  const handleInputChange = (device: keyof DeviceCounts, e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValues(prev => ({ ...prev, [device]: newValue }));
    
    const parsedValue = parseInt(newValue) || 0;
    const config = deviceConfigs.find(c => c.key === device);
    
    if (config && parsedValue >= config.min && parsedValue <= config.max) {
      onDeviceCountChange(device, parsedValue);
    }
  };

  const handleInputBlur = (device: keyof DeviceCounts) => {
    const parsedValue = parseInt(inputValues[device]) || 0;
    const config = deviceConfigs.find(c => c.key === device);
    
    if (!config) return;
    
    let validValue = parsedValue;
    if (parsedValue < config.min) validValue = config.min;
    if (parsedValue > config.max) validValue = config.max;
    
    setInputValues(prev => ({ ...prev, [device]: validValue.toString() }));
    onDeviceCountChange(device, validValue);
  };

  const handleSliderChange = (device: keyof DeviceCounts, values: number[]) => {
    const value = values[0];
    setInputValues(prev => ({ ...prev, [device]: value.toString() }));
    onDeviceCountChange(device, value);
  };

  return (
    <div className="mb-8 px-2 sm:px-0" ref={sliderRef}>
      <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-white">Device Inventory</h3>
      
      {deviceConfigs.map((config) => (
        <div key={config.key} className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-2">
            <div className="flex items-center text-sm font-medium text-neutral">
              {config.icon}
              <label className="ml-2">
                {config.label}
              </label>
            </div>
            <Input
              type="number"
              value={inputValues[config.key]}
              onChange={(e) => handleInputChange(config.key, e)}
              onBlur={() => handleInputBlur(config.key)}
              className="w-full sm:w-32 text-right"
              min={config.min}
              max={config.max}
              disabled={disabled}
            />
          </div>
          <Slider 
            min={config.min} 
            max={config.max} 
            step={config.step} 
            value={[deviceCounts[config.key]]} 
            onValueChange={(values) => handleSliderChange(config.key, values)}
            className="my-4 transition-opacity duration-300"
            disabled={disabled}
          />
          <div className="flex justify-between text-xs text-neutral">
            <span>{config.min}</span>
            <span>{config.max}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
