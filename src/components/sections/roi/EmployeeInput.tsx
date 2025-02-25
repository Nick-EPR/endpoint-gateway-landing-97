
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { RefObject, useState, useEffect } from "react";

interface EmployeeInputProps {
  employees: number;
  isEnterprise: boolean;
  sliderRef: RefObject<HTMLDivElement>;
  onEmployeeChange: (value: number) => void;
  onEnterpriseChange: (value: boolean) => void;
  disabled?: boolean;
}

export const EmployeeInput = ({ employees, isEnterprise, sliderRef, onEmployeeChange, onEnterpriseChange, disabled }: EmployeeInputProps) => {
  const [inputValue, setInputValue] = useState<string>(employees.toString());
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Update input value when employees prop changes
    setInputValue(employees.toString());
  }, [employees]);

  const roundToHundred = (value: number): number => {
    return Math.round(value / 100) * 100;
  };

  const handleModeSwitch = (value: number) => {
    if (value > 300 && !isEnterprise) {
      onEnterpriseChange(true);
    } else if (value <= 300 && isEnterprise) {
      onEnterpriseChange(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const parsedValue = parseInt(newValue) || 0;
    const maxValue = isEnterprise ? 10000 : 301;
    
    if (parsedValue >= 1 && parsedValue <= maxValue) {
      const finalValue = isEnterprise ? roundToHundred(parsedValue) : parsedValue;
      onEmployeeChange(finalValue);
      handleModeSwitch(finalValue);
    }
  };

  const handleInputBlur = () => {
    const parsedValue = parseInt(inputValue) || 0;
    const maxValue = isEnterprise ? 10000 : 301;
    
    let validValue = parsedValue;
    if (parsedValue < 1) validValue = 1;
    if (parsedValue > maxValue) validValue = maxValue;
    
    if (isEnterprise) {
      validValue = roundToHundred(validValue);
    }
    
    setInputValue(validValue.toString());
    onEmployeeChange(validValue);
    handleModeSwitch(validValue);
  };

  const handleSliderChange = (values: number[]) => {
    if (!isTransitioning) {
      const value = values[0];
      const finalValue = isEnterprise ? roundToHundred(value) : value;
      setInputValue(finalValue.toString());
      onEmployeeChange(finalValue);
      handleModeSwitch(finalValue);
    }
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
          min={1}
          max={isEnterprise ? 10000 : 301}
          disabled={disabled || isTransitioning}
        />
      </div>
      <Slider 
        min={1} 
        max={isEnterprise ? 10000 : 301} 
        step={isEnterprise ? 100 : 1} 
        value={[employees]} 
        onValueChange={handleSliderChange}
        className={`my-4 transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : ''}`}
        disabled={disabled || isTransitioning}
        isEnterprise={isEnterprise}
      />
      <div className="flex justify-between text-xs text-neutral">
        <span>1</span>
        <span>{isEnterprise ? '10,000' : '301'}</span>
      </div>
    </div>
  );
};
