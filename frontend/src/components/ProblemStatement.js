import React from 'react';
import { Activity, Clock, AlertTriangle, DollarSign } from 'lucide-react';
import { mockData } from '../mockData';

const ProblemStatement = () => {
  const { problemStats } = mockData.statistics;

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {stat.value}
              </div>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;