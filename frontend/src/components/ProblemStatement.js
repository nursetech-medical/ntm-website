import React from 'react';
import { Activity, Clock, AlertTriangle, DollarSign } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';
import StaggeredList from './StaggeredList';

const ProblemStatement = () => {
  const problemStats = [
    { value: "9.6", label: "average lines per ICU patient", icon: "activity" },
    { value: "61%", label: "of ambulation time spent on line management", icon: "clock" },
    { value: "84%", label: "of nurses witnessed patient harm from poor cord management", icon: "alert-triangle" },
    { value: "$40,000+", label: "annual cost per ICU from line-related incidents", icon: "dollar-sign" }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'activity':
        return <Activity className="h-8 w-8" />;
      case 'clock':
        return <Clock className="h-8 w-8" />;
      case 'alert-triangle':
        return <AlertTriangle className="h-8 w-8" />;
      case 'dollar-sign':
        return <DollarSign className="h-8 w-8" />;
      default:
        return <Activity className="h-8 w-8" />;
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#273139' }}>
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <StaggeredList delay={150} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {getIcon(stat.icon)}
                    </div>
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter 
                    value={stat.value} 
                    duration={2000}
                    className="inline-block"
                  />
                </div>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </StaggeredList>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemStatement;