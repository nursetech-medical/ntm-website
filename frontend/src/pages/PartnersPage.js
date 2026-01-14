import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Building, 
  Users, 
  Award, 
  Globe, 
  Handshake, 
  TrendingUp, 
  CheckCircle,
  Star,
  Mail,
  Phone,
  ExternalLink,
  MapPin,
  Target,
  Shield,
  Zap
} from 'lucide-react';

const PartnersPage = () => {
  const partnerTypes = [
    {
      title: "Healthcare Systems",
      description: "Large hospital networks and integrated health systems implementing Cordflex across multiple facilities",
      icon: <Building className="h-8 w-8" />,
      count: "25+ Partners",
      color: "#214140",
      benefits: [
        "Volume pricing and custom contracts",
        "Dedicated implementation support",
        "Clinical outcomes tracking",
        "Priority customer service"
      ]
    },
    {
      title: "Medical Device Distributors",
      description: "Authorized distributors bringing Cordflex to healthcare providers in their regions",
      icon: <Globe className="h-8 w-8" />,
      count: "50+ Distributors",
      color: "#8BBAB8",
      benefits: [
        "Exclusive territory rights",
        "Marketing support and materials",
        "Training programs",
        "Competitive margins"
      ]
    },
    {
      title: "Clinical Research Organizations",
      description: "Research partners helping validate Cordflex effectiveness and develop new applications",
      icon: <Award className="h-8 w-8" />,
      count: "15+ Research Partners",
      color: "#1F8051",
      benefits: [
        "Access to clinical data",
        "Research collaboration opportunities",
        "Publication support",
        "Early access to new products"
      ]
    },
    {
      title: "Technology Integration Partners",
      description: "Technology companies integrating Cordflex with existing hospital systems and workflows",
      icon: <Zap className="h-8 w-8" />,
      count: "10+ Tech Partners",
      color: "#214140",
      benefits: [
        "Technical integration support",
        "API access and documentation",
        "Joint development opportunities",
        "Co-marketing programs"
      ]
    }
  ];

  const featuredPartners = [
    {
      name: "Metro Health System",
      type: "Healthcare System",
      location: "Cleveland, OH",
      description: "Leading healthcare system with 450+ beds implementing Cordflex across all ICU units",
      achievement: "61% reduction in line disconnections",
      logo: "/images/partners/metro-health.png",
      testimonial: "Cordflex has transformed our approach to line management. The results speak for themselves.",
      contact: "Sarah Johnson, Chief Nursing Officer"
    },
    {
      name: "Regional Medical Supply Co.",
      type: "Distributor",
      location: "Southeast Region",
      description: "Premier medical device distributor serving 200+ healthcare facilities",
      achievement: "Top performer in Cordflex sales",
      logo: "/images/partners/regional-medical.png",
      testimonial: "Our customers love Cordflex. It's become one of our most requested products.",
      contact: "Mike Chen, VP of Sales"
    },
    {
      name: "Clinical Research Institute",
      type: "Research Partner",
      location: "Boston, MA",
      description: "Leading clinical research organization specializing in medical device validation",
      achievement: "Published 3 peer-reviewed studies",
      logo: "/images/partners/clinical-research.png",
      testimonial: "The clinical evidence for Cordflex is compelling. We're proud to be part of this research.",
      contact: "Dr. Amanda Rodriguez, Research Director"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Market Leadership",
      description: "Partner with the leader in ICU line management innovation",
      icon: <Target className="h-6 w-6" />,
      color: "#214140"
    },
    {
      title: "Proven Results",
      description: "Backed by clinical evidence and real-world outcomes",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "#1F8051"
    },
    {
      title: "Comprehensive Support",
      description: "Full training, marketing, and technical support",
      icon: <Shield className="h-6 w-6" />,
      color: "#8BBAB8"
    },
    {
      title: "Growth Opportunity",
      description: "Expanding market with significant growth potential",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "#214140"
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: "Initial Discussion",
      description: "Contact our partnership team to discuss opportunities and alignment"
    },
    {
      step: 2,
      title: "Evaluation",
      description: "We review your organization's capabilities and market fit"
    },
    {
      step: 3,
      title: "Agreement",
      description: "Negotiate terms and finalize partnership agreement"
    },
    {
      step: 4,
      title: "Onboarding",
      description: "Training, setup, and launch support to ensure success"
    }
  ];

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
                  Partner with Us
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Join our network of healthcare leaders, distributors, and technology partners 
                  who are transforming critical care with innovative line management solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    <Handshake className="h-5 w-5 mr-2" />
                    Become a Partner
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Partner Inquiry
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Partnership Opportunities
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We work with diverse organizations to expand access to Cordflex and improve 
                  patient outcomes across the healthcare continuum.
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: type.color, color: 'white' }}
                      >
                        {type.icon}
                      </div>
                      <Badge style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                        {type.count}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2" style={{ color: '#214140' }}>
                      {type.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: '#214140' }}>
                        Partnership Benefits:
                      </h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Featured Partners */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Featured Partners
                </h2>
                <p className="text-xl text-gray-600">
                  Success stories from our key partnership relationships
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="space-y-8">
              {featuredPartners.map((partner, index) => (
                <Card key={index} className="max-w-5xl mx-auto bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2" style={{ color: '#214140' }}>
                              {partner.name}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                                {partner.type}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{partner.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold" style={{ color: '#1F8051' }}>
                              {partner.achievement}
                            </div>
                            <div className="text-sm text-gray-600">Key Achievement</div>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{partner.description}</p>
                        <blockquote className="border-l-4 border-teal-500 pl-4 italic text-gray-700 mb-4">
                          "{partner.testimonial}"
                        </blockquote>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <strong>{partner.contact}</strong>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => window.location.href = '/contact'}
                            >
                              Learn More
                            </Button>
                            <Button 
                              size="sm"
                              style={{ backgroundColor: '#214140', color: 'white' }}
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              View Case Study
                            </Button>
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

        {/* Partnership Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Why Partner with Nursetech Medical?
                </h2>
                <p className="text-xl text-gray-600">
                  Strong partnerships built on mutual success and shared values
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: benefit.color, color: 'white' }}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Partnership Process
                </h2>
                <p className="text-xl text-gray-300">
                  Simple steps to start our partnership journey
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipProcess.map((step, index) => (
                  <Card key={index} className="bg-white shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Partner Resources */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Partner Resources
                </h2>
                <p className="text-xl text-gray-600">
                  Tools and support to help our partners succeed
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StaggeredList delay={150} className="contents">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                      <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                      Training Programs
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Comprehensive training for your team on Cordflex products and implementation
                    </p>
                    <Button size="sm" variant="outline">
                      Access Training
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#214140', color: 'white' }}>
                      <Star className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                      Marketing Support
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Marketing materials, case studies, and co-marketing opportunities
                    </p>
                    <Button size="sm" variant="outline">
                      View Materials
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#1F8051', color: 'white' }}>
                      <Shield className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                      Technical Support
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Dedicated technical support and implementation assistance
                    </p>
                    <Button size="sm" variant="outline">
                      Get Support
                    </Button>
                  </CardContent>
                </Card>
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
                  Ready to Partner with Us?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join our growing network of partners who are transforming healthcare outcomes 
                  with innovative line management solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Start Partnership Discussion
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: (410) 835-4089
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

export default PartnersPage;