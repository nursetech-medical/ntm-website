import React from 'react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

const StaggeredList = ({ 
  children, 
  delay = 100,
  className = '',
  itemClassName = ''
}) => {
  const childArray = React.Children.toArray(children);
  const [ref, visibleItems] = useStaggeredAnimation(childArray.length, delay);

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-out ${itemClassName} ${
            visibleItems.has(index) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{ 
            transitionDelay: visibleItems.has(index) ? '0ms' : `${index * delay}ms`,
            willChange: 'transform, opacity'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredList;