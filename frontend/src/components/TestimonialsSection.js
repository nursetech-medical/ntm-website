import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsApi, contactApi, handleApiError } from '../services/api';
import { useToast } from '../hooks/use-toast';
import AnimatedSection from './AnimatedSection';
import StaggeredList from './StaggeredList';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTrial, setIsLoadingTrial] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await testimonialsApi.getTestimonials();
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Fallback to mock data
      setTestimonials([
        {
          id: 1,
          name: "Sarah Johnson",
          title: "ICU Nurse Manager",
          hospital: "Large Urban Hospital",
          content: "The Cordflex Clip has saved our unit countless hours in line management. It's a small investment with massive returns."
        },
        {
          id: 2,
          name: "Michael Chen",
          title: "Staff Nurse",
          hospital: "Level 1 Trauma Center",
          content: "I used to dread patient transfers due to tangles and pullouts, but Cordflex makes it seamless."
        },
        {
          id: 3,
          name: "Lisa Rodriguez",
          title: "Quality Director",
          hospital: "Community Hospital",
          content: "We saw a 40% reduction in line pullouts within our first month of implementation."
        },
        {
          id: 4,
          name: "Jennifer Martinez",
          title: "Clinical Educator",
          hospital: "Regional Medical Center",
          content: "Training staff on Cordflex took less than 5 minutes. The design is so intuitive that nurses immediately understood how to use it."
        },
        {
          id: 5,
          name: "Dr. Robert Thompson",
          title: "ICU Director",
          hospital: "Academic Medical Center",
          content: "Since implementing Cordflex, we've seen a significant decrease in line-related complications and improved patient mobility."
        },
        {
          id: 6,
          name: "Amanda Williams",
          title: "Charge Nurse",
          hospital: "Children's Hospital",
          content: "Cordflex has been a game-changer in our PICU. The ability to safely manage multiple lines during patient care has improved our workflow tremendously."
        },
        {
          id: 7,
          name: "David Park",
          title: "Staff Nurse",
          hospital: "Trauma Center",
          content: "As someone who works in a fast-paced trauma ICU, Cordflex helps me stay organized and focused on what matters most - patient care."
        },
        {
          id: 8,
          name: "Emily Richardson",
          title: "Nurse Supervisor",
          hospital: "Community Hospital",
          content: "The reduction in callbacks and line management issues has been remarkable. Our nurses are happier and more efficient."
        },
        {
          id: 9,
          name: "James Sullivan",
          title: "Critical Care Nurse",
          hospital: "University Hospital",
          content: "I've been a critical care nurse for 15 years, and Cordflex is one of the most practical innovations I've seen for line management."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const nextTestimonial = () => {
    // Move forward by 3, or loop back if we're near the end
    setCurrentTestimonial((prev) => {
      const next = prev + 3;
      return next >= testimonials.length ? 0 : next;
    });
  };

  const prevTestimonial = () => {
    // Move backward by 3, or loop to end if we're at the start
    setCurrentTestimonial((prev) => {
      const previous = prev - 3;
      return previous < 0 ? Math.max(0, testimonials.length - 3) : previous;
    });
  };

  // Get the current set of 3 testimonials to display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTestimonial + i) % testimonials.length;
      if (testimonials[index]) {
        visible.push(testimonials[index]);
      }
    }
    return visible;
  };

  const handleStartTrial = () => {
    window.location.href = '/trial-request';
  };

  const handleReadCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  if (isLoading) {
    return (
      <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what ICU nurses and hospital staff are saying about Cordflex
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          {/* Testimonial Carousel - 3 at a time */}
          <AnimatedSection animation="scale-up" delay={200}>
            <div className="relative mb-12">
              {/* Navigation Buttons */}
              {testimonials.length > 3 && (
                <>
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 z-10"
                    style={{ border: '2px solid #8BBAB8' }}
                  >
                    <ChevronLeft className="h-6 w-6" style={{ color: '#214140' }} />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 z-10"
                    style={{ border: '2px solid #8BBAB8' }}
                  >
                    <ChevronRight className="h-6 w-6" style={{ color: '#214140' }} />
                  </button>
                </>
              )}

              {/* Three Testimonials Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote */}
                      <blockquote className="text-gray-700 italic mb-6 leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author Info - No Avatar */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="font-semibold text-gray-800" style={{ color: '#214140' }}>
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.hospital}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Hospital Logos - TEMPORARILY HIDDEN until Cordflex is deployed in hospitals */}
          {/* <AnimatedSection animation="fade-up" delay={300}>
            <div className="text-center mb-12">
              <p className="text-gray-600 mb-6">Trusted by leading healthcare institutions</p>
              <StaggeredList delay={100} className="flex justify-center items-center space-x-8 opacity-60">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-500">Hospital {i + 1}</span>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </AnimatedSection> */}

          {/* CTA Section */}
          <AnimatedSection animation="fade-up" delay={400}>
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
                  Request a Trial
                </Button>
                <Button
                  onClick={handleReadCaseStudies}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-all duration-200 transform hover:scale-105"
                  style={{ borderColor: '#214140', color: '#214140' }}
                >
                  Read Full Case Studies
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;