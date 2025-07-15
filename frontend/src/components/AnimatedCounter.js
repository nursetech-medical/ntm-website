import React from 'react';
import { useCounterAnimation } from '../hooks/useScrollAnimation';

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  className = '',
  prefix = '',
  suffix = '',
  formatter = null
}) => {
  // Parse numeric value from string (e.g., "37%" -> 37, "$40,000+" -> 40000)
  const numericValue = React.useMemo(() => {
    if (typeof value === 'number') return value;
    
    // Remove common prefixes and suffixes to get numeric value
    const cleaned = value.toString()
      .replace(/[$,%+]/g, '')
      .replace(/[^\d.]/g, '');
    
    return parseFloat(cleaned) || 0;
  }, [value]);

  const [ref, count] = useCounterAnimation(numericValue, duration);

  const formatValue = (num) => {
    if (formatter) return formatter(num);
    
    // Try to maintain original format
    const originalStr = value.toString();
    
    if (originalStr.includes('%')) {
      return `${prefix}${num}%${suffix}`;
    }
    if (originalStr.includes('$')) {
      return `${prefix}$${num.toLocaleString()}${suffix}`;
    }
    if (originalStr.includes('.')) {
      return `${prefix}${num.toFixed(1)}${suffix}`;
    }
    
    return `${prefix}${num}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formatValue(count)}
    </span>
  );
};

export default AnimatedCounter;