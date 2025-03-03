
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export interface DeviceSliderConfig {
  key: string;
  label: string;
  icon: React.ReactNode;
  min: number;
  max: number;
  step: number;
}

interface DeviceSliderProps {
  config: DeviceSliderConfig;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
  isEnterprise?: boolean;
}

export const DeviceSlider = ({ 
  config, 
  value, 
  onChange, 
  disabled, 
  isEnterprise = false 
}: DeviceSliderProps) => {
  const [inputValue, setInputValue] = useState<string>(value.toString());

  // Update input value when the device count prop changes
  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const parsedValue = parseInt(newValue) || 0;
    
    if (parsedValue >= config.min && parsedValue <= config.max) {
      onChange(parsedValue);
    }
  };

  const handleInputBlur = () => {
    const parsedValue = parseInt(inputValue) || 0;
    
    let validValue = parsedValue;
    if (parsedValue < config.min) validValue = config.min;
    if (parsedValue > config.max) validValue = config.max;
    
    setInputValue(validValue.toString());
    onChange(validValue);
  };

  const handleSliderChange = (values: number[]) => {
    const value = values[0];
    setInputValue(value.toString());
    onChange(value);
  };

  // Calculate midpoint for slider display
  const getMidpoint = (min: number, max: number) => Math.round(max * 0.5);

  return (
    <div className="bg-white/50 dark:bg-neutral-800/40 p-5 rounded-xl shadow-sm border border-neutral-100 dark:border-neutral-700">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className={`p-2 rounded-lg mr-3 ${isEnterprise ? "bg-indigo-100 dark:bg-indigo-900/20" : "bg-primary/10"}`}>
            {config.icon}
          </div>
          <label className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            {config.label}
          </label>
        </div>
        <Input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-24 text-right text-sm bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700"
          min={config.min}
          max={config.max}
          disabled={disabled}
        />
      </div>
      <Slider 
        min={config.min} 
        max={config.max} 
        step={config.step} 
        value={[value]} 
        onValueChange={handleSliderChange}
        className="my-3 transition-opacity duration-300"
        disabled={disabled}
        isEnterprise={isEnterprise || config.key === 'macbooks' || config.key === 'tablets'}
      />
      <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1 px-1">
        <span>{config.min}</span>
        <span className="text-xs text-neutral-400 dark:text-neutral-500">
          {getMidpoint(config.min, config.max)}
        </span>
        <span>{config.max}</span>
      </div>
    </div>
  );
};
