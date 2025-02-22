
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { RefObject, useState, useEffect } from "react";

interface EmployeeInputProps {
  employees: number;
  isEnterprise: boolean;
  sliderRef: RefObject<HTMLDivElement>;
  onEmployeeChange: (value: number) => void;
  disabled?: boolean;
}

export const EmployeeInput = ({ employees, isEnterprise, sliderRef, onEmployeeChange, disabled }: EmployeeInputProps) => {
  const [inputValue, setInputValue] = useState<string>(employees.toString());
  
  // Threshold for auto-switching modes (slightly before the actual limit)
  const ENTERPRISE_THRESHOLD = 280;
  const SMB_THRESHOLD = 320;

  useEffect(() => {
    // Update input value when employees prop changes
    setInputValue(employees.toString());
  }, [employees]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const parsedValue = parseInt(newValue) || 0;
    const maxValue = isEnterprise ? 10000 : 300;
    
    if (parsedValue >= 100 && parsedValue <= maxValue) {
      onEmployeeChange(parsedValue);
    }
  };

  const handleInputBlur = () => {
    const parsedValue = parseInt(inputValue) || 0;
    const maxValue = isEnterprise ? 10000 : 300;
    
    let validValue = parsedValue;
    if (parsedValue < 100) validValue = 100;
    if (parsedValue > maxValue) validValue = maxValue;
    
    setInputValue(validValue.toString());
    onEmployeeChange(validValue);
  };

  const handleSliderChange = (values: number[]) => {
    const value = values[0];
    setInputValue(value.toString());
    onEmployeeChange(value);
  };

  return (
    <div className="mb-8 px-2 sm:px-0" ref={sliderRef}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 mb-2">
        <label className="text-sm font-medium text-neutral">
          Number of Employees
        </label>
        <Input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full sm:w-32 text-right"
          min={100}
          max={isEnterprise ? 10000 : 300}
          disabled={disabled}
        />
      </div>
      <Slider 
        min={100} 
        max={isEnterprise ? 10000 : 300} 
        step={isEnterprise ? 1000 : 50} 
        value={[employees]} 
        onValueChange={handleSliderChange}
        className="my-4"
        disabled={disabled}
      />
      <div className="flex justify-between text-xs text-neutral">
        <span>100</span>
        <span>{isEnterprise ? '10,000' : '300'}</span>
      </div>
    </div>
  );
};
