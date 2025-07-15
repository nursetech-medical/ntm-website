import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, CheckCircle } from 'lucide-react';
import { mockData } from '../mockData';

const HeroSection = () => {
  const { product, statistics } = mockData;

  const handleTrialRequest = () => {
    console.log('Trial request initiated');
  };

  const handleSampleRequest = () => {
    console.log('Sample request initiated');
  };

  const handleWatchDemo = () => {
    console.log('Watch demo clicked');
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="medical-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#214140" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm font-medium"
                  style={{ backgroundColor: '#DFEAF0', color: '#214140' }}
                >
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: '#214140' }}>
                {product.tagline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 font-medium">Developed by ICU Nurses & Biomedical Engineers</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 font-medium">90% of surveyed nurses would use Cordflex if stocked</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleTrialRequest}
                size="lg"
                className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                style={{ backgroundColor: '#214140', color: 'white' }}
              >
                Request a Trial
              </Button>
              <Button
                onClick={handleSampleRequest}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
                style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
              >
                Request a Sample
              </Button>
              <Button
                onClick={handleWatchDemo}
                variant="ghost"
                size="lg"
                className="px-8 py-4 text-lg font-semibold hover:bg-gray-50 transition-all duration-200 group"
                style={{ color: '#214140' }}
              >
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </Button>
            </div>

            {/* Contact Link */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-teal-600 transition-colors duration-200 underline"
              >
                Questions? Contact Us
              </a>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIxNDE0MCIgcng9IjEwIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRkZGRkZGIiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPkNvcmRmbGV4IERldmljZTwvdGV4dD4KPC9zdmc+"
                alt="Cordflex Device"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600 font-medium">Usage Rate</div>
                <div className="text-2xl font-bold" style={{ color: '#1F8051' }}>90%</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-600 font-medium">Time Saved</div>
                <div className="text-2xl font-bold" style={{ color: '#1F8051' }}>37%</div>
              </div>
            </div>

            {/* Animated Elements */}
            <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;