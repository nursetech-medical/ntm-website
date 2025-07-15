import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Building,
  Briefcase,
  GraduationCap,
  Target
} from 'lucide-react';

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Clinical Engineer",
      department: "Clinical Affairs",
      location: "Boston, MA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead clinical testing and validation of medical devices. Work directly with healthcare professionals to ensure product safety and efficacy.",
      requirements: [
        "Bachelor's degree in Biomedical Engineering or related field",
        "5+ years experience in medical device development",
        "Experience with FDA regulations and clinical trials",
        "Strong analytical and problem-solving skills"
      ],
      benefits: ["Competitive salary", "Comprehensive health insurance", "401(k) with matching", "Flexible work arrangements"],
      featured: true
    },
    {
      id: 2,
      title: "Quality Assurance Specialist",
      department: "Quality",
      location: "Boston, MA",
      type: "Full-time",
      experience: "3+ years",
      description: "Ensure product quality and compliance with regulatory standards. Develop and implement quality control processes.",
      requirements: [
        "Bachelor's degree in Engineering or Life Sciences",
        "3+ years experience in medical device quality assurance",
        "Knowledge of ISO 13485 and FDA regulations",
        "Attention to detail and analytical mindset"
      ],
      benefits: ["Competitive salary", "Health insurance", "Professional development", "Stock options"],
      featured: false
    },
    {
      id: 3,
      title: "Clinical Education Manager",
      department: "Clinical Education",
      location: "Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "Develop and deliver training programs for healthcare professionals. Create educational materials and support product implementation.",
      requirements: [
        "RN with ICU experience preferred",
        "7+ years in clinical education or training",
        "Experience with medical device training",
        "Excellent communication and presentation skills"
      ],
      benefits: ["Competitive salary", "Remote work", "Travel opportunities", "Professional development"],
      featured: false
    },
    {
      id: 4,
      title: "Sales Representative - East Coast",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive sales of Cordflex products in assigned territory. Build relationships with healthcare decision-makers and support product adoption.",
      requirements: [
        "Bachelor's degree",
        "3+ years medical device sales experience",
        "Proven track record of meeting sales targets",
        "Strong relationship building skills"
      ],
      benefits: ["Base salary plus commission", "Car allowance", "Health insurance", "Performance bonuses"],
      featured: false
    },
    {
      id: 5,
      title: "Manufacturing Technician",
      department: "Manufacturing",
      location: "Boston, MA",
      type: "Full-time",
      experience: "2+ years",
      description: "Support manufacturing operations for medical devices. Ensure production quality and efficiency while maintaining regulatory compliance.",
      requirements: [
        "High school diploma or equivalent",
        "2+ years manufacturing experience",
        "Experience with clean room environments preferred",
        "Strong attention to detail"
      ],
      benefits: ["Competitive hourly wage", "Health insurance", "401(k)", "Skills training"],
      featured: false
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "Boston, MA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product development and lifecycle management. Work with cross-functional teams to bring innovative medical devices to market.",
      requirements: [
        "Bachelor's degree in Engineering or Business",
        "5+ years product management experience",
        "Medical device industry experience preferred",
        "Strong analytical and communication skills"
      ],
      benefits: ["Competitive salary", "Equity participation", "Health insurance", "Professional development"],
      featured: false
    }
  ];

  const benefits = [
    {
      title: "Comprehensive Health Benefits",
      description: "Medical, dental, and vision insurance with company contribution",
      icon: <Heart className="h-8 w-8" />,
      color: "#1F8051"
    },
    {
      title: "Retirement Planning",
      description: "401(k) plan with company matching up to 6%",
      icon: <DollarSign className="h-8 w-8" />,
      color: "#214140"
    },
    {
      title: "Professional Development",
      description: "Continuing education support and conference attendance",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "#8BBAB8"
    },
    {
      title: "Flexible Work Environment",
      description: "Remote work options and flexible scheduling",
      icon: <Clock className="h-8 w-8" />,
      color: "#214140"
    },
    {
      title: "Stock Options",
      description: "Equity participation in company growth",
      icon: <Target className="h-8 w-8" />,
      color: "#1F8051"
    },
    {
      title: "Wellness Programs",
      description: "Gym membership reimbursement and wellness initiatives",
      icon: <Star className="h-8 w-8" />,
      color: "#8BBAB8"
    }
  ];

  const companyValues = [
    {
      title: "Patient-Centered Innovation",
      description: "Every decision we make is guided by how it will improve patient outcomes and safety."
    },
    {
      title: "Clinical Excellence",
      description: "We maintain the highest standards of quality and safety in everything we do."
    },
    {
      title: "Collaborative Spirit",
      description: "We work together as a team, valuing diverse perspectives and expertise."
    },
    {
      title: "Continuous Learning",
      description: "We embrace learning opportunities and encourage professional growth."
    }
  ];

  const getJobTypeColor = (type) => {
    switch (type) {
      case 'Full-time':
        return '#1F8051';
      case 'Part-time':
        return '#8BBAB8';
      case 'Contract':
        return '#214140';
      default:
        return '#214140';
    }
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
                  Join Our Mission
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Help us transform healthcare by developing innovative solutions that improve patient outcomes 
                  and support healthcare professionals. Join a team that's making a real difference in critical care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    <Briefcase className="h-5 w-5 mr-2" />
                    View Open Positions
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/about'}
                  >
                    Learn About Our Company
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Work Here */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Why Choose Nursetech Medical?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We're not just developing medical devices – we're building a culture that values innovation, 
                  collaboration, and making a meaningful impact in healthcare.
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3" style={{ color: '#214140' }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Comprehensive Benefits Package
                </h2>
                <p className="text-xl text-gray-600">
                  We invest in our team members' success and well-being
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: benefit.color, color: 'white' }}
                      >
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Featured Job */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {jobOpenings.filter(job => job.featured).map((job) => (
              <AnimatedSection key={job.id} animation="scale-up">
                <Card className="max-w-4xl mx-auto bg-white shadow-xl">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        Featured Position
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="h-4 w-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-2" style={{ color: '#214140' }}>
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Building className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#214140' }}>Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: '#214140' }}>Benefits:</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          className="flex-1 hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                        >
                          Apply Now
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Ask Questions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* All Job Openings */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Current Openings
                </h2>
                <p className="text-xl text-gray-300">
                  Find your next opportunity to make a difference
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={100} className="space-y-6">
              {jobOpenings.filter(job => !job.featured).map((job) => (
                <Card key={job.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge style={{ backgroundColor: getJobTypeColor(job.type), color: 'white' }}>
                            {job.type}
                          </Badge>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Building className="h-3 w-3" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="h-3 w-3" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition-colors duration-200" style={{ color: '#214140' }}>
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {job.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.slice(0, 2).map((req, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {req}
                            </span>
                          ))}
                          {job.requirements.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{job.requirements.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="ml-6 flex flex-col space-y-2">
                        <Button
                          className="px-6 py-2 hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                        >
                          Apply Now
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-sm"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Application Process
                </h2>
                <p className="text-xl text-gray-600">
                  Simple steps to join our team
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={200} className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                    Submit Application
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Apply online with your resume and cover letter
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#214140', color: 'white' }}>
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                    Initial Interview
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Phone or video interview with our HR team
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#1F8051', color: 'white' }}>
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                    Final Interview
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Meet with the hiring manager and team members
                  </p>
                </div>
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Ready to Make an Impact?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join our team and help shape the future of critical care. Your expertise and passion 
                  can help us save lives and improve healthcare outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Browse All Positions
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Questions? Contact HR
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

export default CareersPage;