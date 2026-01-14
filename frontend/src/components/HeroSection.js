import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Play, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';
import StaggeredList from './StaggeredList';

const HeroSection = () => {

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

  const features = ['Single-Use', 'FDA Registered'];
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
        <div className="max-w-4xl mx-auto">
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
                  Transform ICU Line Management in &lt;30 seconds
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
                  style={{ borderColor: '#214140', color: '#214140' }}
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

        </div>
      </div>
    </section>
  );
};

export default HeroSection;