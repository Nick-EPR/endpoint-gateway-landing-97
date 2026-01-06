import { useState, useEffect } from 'react';

interface RollingDigitProps {
  targetDigit: number;
  startDigit?: number;
  delay?: number;
  isActive: boolean;
}

const RollingDigit = ({ targetDigit, startDigit, delay = 0, isActive }: RollingDigitProps) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setHasAnimated(true), 50 + delay);
      return () => clearTimeout(timer);
    } else {
      setHasAnimated(false);
    }
  }, [isActive, delay]);
  
  const rollCount = 10;
  const digitStrip: number[] = [];
  
  const start = startDigit ?? Math.floor(Math.random() * 10);
  
  digitStrip.push(start);
  for (let i = 1; i < rollCount; i++) {
    digitStrip.push((start + i) % 10);
  }
  digitStrip.push(targetDigit);
  
  const steps = rollCount;
  const showFinal = !isActive || hasAnimated;
  const finalTranslate = `translateY(-${steps}em)`;
  
  return (
    <div 
      className="relative overflow-hidden inline-block"
      style={{ 
        height: '1em',
        lineHeight: '1em',
        width: '0.6em',
      }}
    >
      <div
        className="flex flex-col"
        style={{
          transform: showFinal ? finalTranslate : 'translateY(0)',
          transition: isActive && hasAnimated 
            ? `transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)`
            : 'none',
        }}
      >
        {digitStrip.map((d, i) => (
          <span
            key={i}
            className="block text-center"
            style={{ height: '1em', lineHeight: '1em' }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

interface AnimatedPriceProps {
  value: number;
  prefix?: string;
  suffix?: string;
  isActive: boolean;
  className?: string;
}

export const AnimatedPrice = ({ value, prefix = '$', suffix, isActive, className = '' }: AnimatedPriceProps) => {
  const formattedValue = value.toLocaleString();
  const chars = formattedValue.split('');
  
  let digitIndex = 0;
  
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      {prefix && <span>{prefix}</span>}
      {chars.map((char, index) => {
        if (char === ',') {
          return <span key={index}>,</span>;
        }
        const digit = parseInt(char);
        const currentDigitIndex = digitIndex;
        digitIndex++;
        return (
          <RollingDigit
            key={index}
            targetDigit={digit}
            delay={currentDigitIndex * 100}
            isActive={isActive}
          />
        );
      })}
      {suffix && <span>{suffix}</span>}
    </span>
  );
};

export default AnimatedPrice;
