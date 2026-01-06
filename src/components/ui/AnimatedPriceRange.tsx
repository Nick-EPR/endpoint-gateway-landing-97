import { AnimatedPrice } from './AnimatedPrice';

interface AnimatedPriceRangeProps {
  minValue: number;
  maxValue: number;
  prefix?: string;
  isActive: boolean;
  className?: string;
}

export const AnimatedPriceRange = ({ 
  minValue, 
  maxValue, 
  prefix = '$', 
  isActive, 
  className = '' 
}: AnimatedPriceRangeProps) => {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <AnimatedPrice value={minValue} prefix={prefix} isActive={isActive} />
      <span>–</span>
      <AnimatedPrice value={maxValue} prefix={prefix} isActive={isActive} />
    </span>
  );
};

export default AnimatedPriceRange;
