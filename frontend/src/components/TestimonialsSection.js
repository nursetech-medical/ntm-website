import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';
import { mockData } from '../mockData';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { testimonials } = mockData;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleStartTrial = () => {
    console.log('Start trial clicked');
  };

  const handleReadCaseStudies = () => {
    console.log('Read case studies clicked');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what ICU nurses and hospital staff are saying about Cordflex
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative mb-12">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>
                  
                  <div className="flex-1 text-center">
                    <div className="mb-4">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <blockquote className="text-lg lg:text-xl text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-gray-800">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentTestimonial].title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[currentTestimonial].hospital}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                {/* Video Testimonial Option */}
                <div className="text-center">
                  <button className="inline-flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition-colors duration-200">
                    <Play className="h-4 w-4" />
                    <span className="text-sm">Watch Video Testimonial</span>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hospital Logos */}
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-6">Trusted by leading healthcare institutions</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Hospital {i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
              Experience the Same Results
            </h3>
            <p className="text-gray-600 mb-8">
              Join hundreds of healthcare professionals who trust Cordflex
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleStartTrial}
                size="lg"
                className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
                style={{ backgroundColor: '#214140', color: 'white' }}
              >
                Start Your Trial
              </Button>
              <Button
                onClick={handleReadCaseStudies}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
                style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
              >
                Read Full Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;