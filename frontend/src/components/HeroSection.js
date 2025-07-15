import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, CheckCircle } from 'lucide-react';
import { contactApi, handleApiError } from '../services/api';
import { useToast } from '../hooks/use-toast';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';
import StaggeredList from './StaggeredList';

const HeroSection = () => {
  const [isLoadingTrial, setIsLoadingTrial] = useState(false);
  const [isLoadingSample, setIsLoadingSample] = useState(false);
  const { toast } = useToast();

  const handleTrialRequest = () => {
    window.location.href = '/trial-request';
  };

  const handleSampleRequest = () => {
    window.location.href = '/sample-request';
  };

  const handleWatchDemo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = ['Single-Use', 'Sterile', 'FDA Registered'];
  const trustIndicators = [
    'Developed by ICU Nurses & Biomedical Engineers',
    '90% of surveyed nurses would use Cordflex if stocked'
  ];

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
            <AnimatedSection animation="fade-up" delay={100}>
              <StaggeredList delay={50} className="flex flex-wrap gap-2">
                {features.map((feature, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm font-medium"
                    style={{ backgroundColor: '#DFEAF0', color: '#214140' }}
                  >
                    {feature}
                  </Badge>
                ))}
              </StaggeredList>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: '#214140' }}>
                  Transform ICU Line Management in 30 seconds
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The Cordflex Clip reduces nurse time by 37% and makes 78% of nurses feel safer during patient ambulation
                </p>
              </div>
            </AnimatedSection>

            {/* Trust Indicators */}
            <AnimatedSection animation="fade-up" delay={300}>
              <StaggeredList delay={100} className="space-y-3">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 font-medium">{indicator}</span>
                  </div>
                ))}
              </StaggeredList>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleTrialRequest}
                  disabled={isLoadingTrial}
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                  style={{ backgroundColor: '#214140', color: 'white' }}
                >
                  {isLoadingTrial ? 'Submitting...' : 'Request a Trial'}
                </Button>
                <Button
                  onClick={handleSampleRequest}
                  disabled={isLoadingSample}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
                  style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
                >
                  {isLoadingSample ? 'Submitting...' : 'Request a Sample'}
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
            </AnimatedSection>

            {/* Contact Link */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-200 underline"
                >
                  Questions? Contact Us
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Product Visual */}
          <AnimatedSection animation="fade-left" delay={300}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDUwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIxNDE0MCIgcng9IjEwIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRkZGRkZGIiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPkNvcmRmbGV4IERldmljZTwvdGV4dD4KPC9zdmc+"
                  alt="Cordflex Device"
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Floating Stats */}
                <AnimatedSection animation="fade-down" delay={800}>
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Usage Rate</div>
                    <div className="text-2xl font-bold" style={{ color: '#1F8051' }}>
                      <AnimatedCounter value="90%" duration={1500} />
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fade-up" delay={900}>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-600 font-medium">Time Saved</div>
                    <div className="text-2xl font-bold" style={{ color: '#1F8051' }}>
                      <AnimatedCounter value="37%" duration={1500} />
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Animated Elements */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;