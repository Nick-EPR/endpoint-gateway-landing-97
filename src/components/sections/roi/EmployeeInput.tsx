
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { RefObject } from "react";

interface EmployeeInputProps {
  employees: number;
  isEnterprise: boolean;
  sliderRef: RefObject<HTMLDivElement>;
  onEmployeeChange: (value: number) => void;
}

export const EmployeeInput = ({ employees, isEnterprise, sliderRef, onEmployeeChange }: EmployeeInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    const maxValue = isEnterprise ? 10000 : 1000;
    if (value >= 100 && value <= maxValue) {
      onEmployeeChange(value);
    }
  };

  return (
    <div className="mb-8" ref={sliderRef}>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-neutral">
          Number of Employees
        </label>
        <Input
          type="number"
          value={employees}
          onChange={handleInputChange}
          className="w-32 text-right"
          min={100}
          max={isEnterprise ? 10000 : 1000}
        />
      </div>
      <Slider 
        min={100} 
        max={isEnterprise ? 10000 : 1000} 
        step={isEnterprise ? 1000 : 100} 
        value={[employees]} 
        onValueChange={values => onEmployeeChange(values[0])} 
        className="my-4"
      />
      <div className="flex justify-between text-xs text-neutral">
        <span>100</span>
        <span>{isEnterprise ? '10,000' : '1,000'}</span>
      </div>
    </div>
  );
};
