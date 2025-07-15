import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px'
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold, rootMargin });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-down':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'fade-left':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'fade-right':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'scale-up':
          return `${baseClasses} opacity-0 scale-95`;
        case 'scale-down':
          return `${baseClasses} opacity-0 scale-105`;
        case 'fade':
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;