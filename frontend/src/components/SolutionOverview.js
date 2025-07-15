import React from 'react';
import { Button } from './ui/button';
import { Clock, TrendingUp, Link } from 'lucide-react';
import { mockData } from '../mockData';

const SolutionOverview = () => {
  const { solutions } = mockData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="h-8 w-8" />;
      case 'trending-up':
        return <TrendingUp className="h-8 w-8" />;
      case 'link':
        return <Link className="h-8 w-8" />;
      default:
        return <Clock className="h-8 w-8" />;
    }
  };

  const handleSampleRequest = () => {
    console.log('Sample request initiated');
  };

  const handleTrialRequest = () => {
    console.log('Trial request initiated');
  };

  const handleContactTeam = () => {
    console.log('Contact team clicked');
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
            The Cordflex Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three key benefits that transform your ICU line management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#8BBAB8' }}>
                  <div className="text-white">
                    {getIcon(solution.icon)}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#214140' }}>
                {solution.title}
              </h3>
              
              <ul className="space-y-3">
                {solution.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#1F8051' }}></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#214140' }}>
              See the difference for yourself
            </h3>
            <p className="text-gray-600">
              Experience the proven benefits of Cordflex in your ICU
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleSampleRequest}
              size="lg"
              className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: '#8BBAB8', color: 'white' }}
            >
              Request a Sample
            </Button>
            <Button
              onClick={handleTrialRequest}
              size="lg"
              className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              style={{ backgroundColor: '#214140', color: 'white' }}
            >
              Start Your Trial
            </Button>
            <Button
              onClick={handleContactTeam}
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
              style={{ borderColor: '#214140', color: '#214140' }}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;