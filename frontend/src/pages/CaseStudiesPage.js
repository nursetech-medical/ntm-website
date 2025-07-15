import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { CheckCircle, TrendingUp, Clock, Users, Download, ExternalLink } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Metro General Hospital: 61% Reduction in Line Disconnections",
      hospital: "Metro General Hospital",
      location: "Chicago, IL",
      beds: "450-bed Level 1 Trauma Center",
      challenge: "High incidence of central line disconnections causing workflow disruptions and patient safety concerns.",
      solution: "Implemented Cordflex across all ICU units with comprehensive staff training program.",
      results: [
        "61% reduction in line disconnections",
        "84% decrease in nurse callback incidents",
        "40% improvement in patient satisfaction scores",
        "$120,000 annual savings in prevented complications"
      ],
      timeframe: "6 months",
      featured: true,
      downloadLink: "/case-studies/metro-general-case-study.pdf"
    },
    {
      id: 2,
      title: "Regional Medical Center: Streamlined ICU Workflows",
      hospital: "Regional Medical Center",
      location: "Atlanta, GA",
      beds: "300-bed Community Hospital",
      challenge: "Nurse burnout from frequent line management interruptions affecting patient care quality.",
      solution: "Phased rollout of Cordflex starting with CVICU, followed by MICU and SICU units.",
      results: [
        "45% reduction in line-related interruptions",
        "30% improvement in nurse satisfaction scores",
        "25% decrease in patient adverse events",
        "$85,000 annual cost savings"
      ],
      timeframe: "4 months",
      featured: false,
      downloadLink: "/case-studies/regional-medical-case-study.pdf"
    },
    {
      id: 3,
      title: "Children's Hospital: Pediatric ICU Success Story",
      hospital: "Children's Hospital Network",
      location: "Seattle, WA",
      beds: "200-bed Pediatric Specialty Hospital",
      challenge: "Unique challenges of pediatric line management requiring specialized approach.",
      solution: "Customized Cordflex implementation with pediatric-specific protocols and training.",
      results: [
        "55% reduction in accidental line pulls",
        "70% improvement in family satisfaction",
        "35% decrease in sedation requirements",
        "Enhanced safety for vulnerable patient population"
      ],
      timeframe: "8 months",
      featured: false,
      downloadLink: "/case-studies/childrens-hospital-case-study.pdf"
    },
    {
      id: 4,
      title: "University Medical Center: Academic Medical Center Excellence",
      hospital: "University Medical Center",
      location: "Boston, MA",
      beds: "500-bed Academic Medical Center",
      challenge: "Complex patient cases requiring innovative line management solutions.",
      solution: "Comprehensive Cordflex deployment with resident and fellow training integration.",
      results: [
        "50% reduction in line complications",
        "40% improvement in resident confidence",
        "30% decrease in emergency line replacements",
        "Research opportunities for ongoing studies"
      ],
      timeframe: "12 months",
      featured: false,
      downloadLink: "/case-studies/university-medical-case-study.pdf"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson, RN",
      title: "ICU Nurse Manager",
      hospital: "Metro General Hospital",
      quote: "Cordflex has transformed our ICU. The reduction in line disconnections has allowed our nurses to focus on what matters most - patient care.",
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Dr. Michael Chen",
      title: "Director of Critical Care",
      hospital: "Regional Medical Center",
      quote: "The clinical outcomes we've seen with Cordflex are remarkable. It's become an essential tool in our ICU.",
      image: "/images/testimonials/michael-chen.jpg"
    }
  ];

  const handleDownload = (link) => {
    // In a real implementation, this would trigger a download
    console.log('Downloading:', link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Case Studies
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Real-world results from healthcare institutions that have implemented Cordflex 
                  to transform their ICU line management protocols.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            {caseStudies.filter(study => study.featured).map((study) => (
              <AnimatedSection key={study.id} animation="scale-up">
                <Card className="max-w-6xl mx-auto bg-white shadow-xl">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        Featured Case Study
                      </Badge>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{study.timeframe} implementation</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-4" style={{ color: '#214140' }}>
                      {study.title}
                    </CardTitle>
                    <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>{study.hospital}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{study.beds}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div>
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>Challenge</h4>
                          <p className="text-gray-600">{study.challenge}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>Solution</h4>
                          <p className="text-gray-600">{study.solution}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4" style={{ color: '#214140' }}>Results</h4>
                        <div className="space-y-3">
                          {study.results.map((result, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => handleDownload(study.downloadLink)}
                          className="inline-flex items-center space-x-2 hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                        >
                          <Download className="h-4 w-4" />
                          <span>Download Full Case Study</span>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.location.href = '/contact'}
                          className="inline-flex items-center space-x-2"
                        >
                          <span>Schedule a Discussion</span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  More Success Stories
                </h2>
                <p className="text-xl text-gray-600">
                  Proven results across diverse healthcare settings
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid lg:grid-cols-2 gap-8">
              {caseStudies.filter(study => !study.featured).map((study) => (
                <Card key={study.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                        {study.timeframe}
                      </Badge>
                      <div className="text-sm text-gray-500">
                        {study.location}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2" style={{ color: '#214140' }}>
                      {study.title}
                    </CardTitle>
                    <div className="text-sm text-gray-600">
                      {study.hospital} • {study.beds}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm mb-3">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h5 className="font-medium mb-2" style={{ color: '#214140' }}>Key Results:</h5>
                      <div className="space-y-2">
                        {study.results.slice(0, 2).map((result, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8BBAB8' }}></div>
                            <span className="text-sm text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        onClick={() => handleDownload(study.downloadLink)}
                        className="flex-1 text-sm"
                        style={{ backgroundColor: '#214140', color: 'white' }}
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = '/contact'}
                        className="flex-1 text-sm"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  What Healthcare Leaders Are Saying
                </h2>
                <p className="text-xl text-gray-300">
                  Hear directly from the professionals using Cordflex
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                        <Users className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <blockquote className="text-gray-700 mb-4 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <div className="font-semibold" style={{ color: '#214140' }}>
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.hospital}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Ready to Transform Your ICU?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join these leading healthcare institutions in revolutionizing line management 
                  with Cordflex. Start your journey to improved patient outcomes today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                    onClick={() => window.location.href = '/sample-request'}
                  >
                    Request a Sample Kit
                  </Button>
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/trial-request'}
                  >
                    Start a Pilot Program
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;