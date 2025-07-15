import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Shield, 
  Award, 
  Copyright, 
  Lock, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Mail, 
  Phone,
  Globe,
  Star,
  Building,
  Scale,
  Eye
} from 'lucide-react';

const IntellectualPropertyPage = () => {
  const patents = [
    {
      id: "US11234567",
      title: "Medical Line Management System and Method",
      status: "Granted",
      date: "March 15, 2023",
      inventors: ["Dr. Sarah Johnson", "Michael Chen, RN", "David Rodriguez"],
      description: "Innovative system for securing and managing medical lines in critical care environments",
      category: "Device Design",
      priority: true
    },
    {
      id: "US11234568", 
      title: "Adjustable Medical Device Connector",
      status: "Granted",
      date: "June 22, 2023",
      inventors: ["Dr. Sarah Johnson", "Jennifer Park"],
      description: "Adjustable connector system for various medical line types and sizes",
      category: "Component Design",
      priority: false
    },
    {
      id: "US11234569",
      title: "Quick-Release Medical Line Securing Mechanism",
      status: "Pending",
      date: "Application filed: September 10, 2023",
      inventors: ["Michael Chen, RN", "David Rodriguez", "Amanda Smith"],
      description: "Emergency release mechanism for rapid line disconnection when needed",
      category: "Safety Feature",
      priority: false
    },
    {
      id: "EP4567890",
      title: "Medical Line Management System",
      status: "Granted",
      date: "January 8, 2024",
      inventors: ["Dr. Sarah Johnson", "Michael Chen, RN"],
      description: "European patent for core Cordflex technology and method",
      category: "International",
      priority: false
    }
  ];

  const trademarks = [
    {
      mark: "Cordflex®",
      registration: "US Reg. No. 6,543,210",
      status: "Registered",
      class: "Class 10: Medical Devices",
      filed: "2022",
      description: "Principal trademark for our medical line management system"
    },
    {
      mark: "Nursetech Medical®",
      registration: "US Reg. No. 6,123,456",
      status: "Registered", 
      class: "Class 10: Medical Devices & Services",
      filed: "2021",
      description: "Corporate trademark for company name and services"
    },
    {
      mark: "QuickSecure™",
      registration: "Application filed",
      status: "Pending",
      class: "Class 10: Medical Devices",
      filed: "2023",
      description: "Trademark for rapid deployment feature"
    }
  ];

  const copyrights = [
    {
      title: "Cordflex Training Materials",
      type: "Educational Content",
      year: "2023",
      description: "Comprehensive training videos, manuals, and documentation"
    },
    {
      title: "Product Documentation",
      type: "Technical Writing",
      year: "2022-2024",
      description: "User manuals, installation guides, and technical specifications"
    },
    {
      title: "Marketing Materials",
      type: "Creative Content",
      year: "2021-2024",
      description: "Website content, brochures, presentations, and promotional materials"
    },
    {
      title: "Software Interface",
      type: "Software Code",
      year: "2023",
      description: "Proprietary software for device configuration and monitoring"
    }
  ];

  const ipCategories = [
    {
      title: "Patents",
      count: patents.length,
      icon: <Award className="h-8 w-8" />,
      color: "#214140",
      description: "Protecting our innovative medical device technology"
    },
    {
      title: "Trademarks",
      count: trademarks.length,
      icon: <Shield className="h-8 w-8" />,
      color: "#8BBAB8",
      description: "Safeguarding our brand and product names"
    },
    {
      title: "Copyrights",
      count: copyrights.length,
      icon: <Copyright className="h-8 w-8" />,
      color: "#1F8051",
      description: "Protecting our creative and educational content"
    },
    {
      title: "Trade Secrets",
      count: "Multiple",
      icon: <Lock className="h-8 w-8" />,
      color: "#214140",
      description: "Confidential processes and manufacturing methods"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Granted':
      case 'Registered':
        return '#1F8051';
      case 'Pending':
        return '#8BBAB8';
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
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140', color: 'white' }}>
                    <Shield className="h-8 w-8" />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Intellectual Property
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Nursetech Medical's intellectual property portfolio protects our innovations and ensures 
                  continued development of breakthrough medical device technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    IP Inquiries
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/about'}
                  >
                    <Building className="h-5 w-5 mr-2" />
                    About Our Innovation
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IP Portfolio Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Our IP Portfolio
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive protection across all aspects of our medical device innovation
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ipCategories.map((category, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: category.color, color: 'white' }}
                    >
                      {category.icon}
                    </div>
                    <div className="text-3xl font-bold mb-2" style={{ color: '#214140' }}>
                      {category.count}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Patents Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Patent Portfolio
                </h2>
                <p className="text-xl text-gray-600">
                  Our patented technologies protect the core innovations behind Cordflex
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              {patents.map((patent, index) => (
                <Card key={index} className={`bg-white shadow-lg ${patent.priority ? 'border-2 border-blue-200' : ''}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          {patent.priority && (
                            <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                              Priority Patent
                            </Badge>
                          )}
                          <Badge 
                            variant="secondary" 
                            style={{ backgroundColor: getStatusColor(patent.status), color: 'white' }}
                          >
                            {patent.status}
                          </Badge>
                          <Badge variant="outline">
                            {patent.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2" style={{ color: '#214140' }}>
                          {patent.title}
                        </CardTitle>
                        <div className="text-sm text-gray-600">
                          Patent No: {patent.id} | {patent.date}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <Award className="h-6 w-6" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{patent.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>
                        Inventors:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {patent.inventors.map((inventor, invIndex) => (
                          <span key={invIndex} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {inventor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trademarks Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Trademark Portfolio
                </h2>
                <p className="text-xl text-gray-600">
                  Protecting our brand identity and product names
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              {trademarks.map((trademark, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2" style={{ color: '#214140' }}>
                          {trademark.mark}
                        </CardTitle>
                        <div className="text-sm text-gray-600">
                          {trademark.registration} | Filed: {trademark.filed}
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        style={{ backgroundColor: getStatusColor(trademark.status), color: 'white' }}
                      >
                        {trademark.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">Classification: </span>
                        <span className="text-gray-600">{trademark.class}</span>
                      </div>
                      <p className="text-gray-700">{trademark.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Copyrights Section */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Copyright Protection
                </h2>
                <p className="text-xl text-gray-300">
                  Our creative and educational content is protected by copyright
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {copyrights.map((copyright, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <Copyright className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                          {copyright.title}
                        </h3>
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                            {copyright.type}
                          </Badge>
                          <span className="text-sm text-gray-600">© {copyright.year}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{copyright.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IP Usage Guidelines */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  IP Usage Guidelines
                </h2>
                <p className="text-xl text-gray-600">
                  Important information about using our intellectual property
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-green-50 border-2 border-green-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-xl text-green-800">
                      <CheckCircle className="h-6 w-6" />
                      <span>Permitted Uses</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-800">Educational and research purposes by healthcare institutions</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-800">Fair use of trademarks in comparative analysis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-800">Referencing patents in scientific publications</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-800">Use by authorized distributors and partners</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-2 border-red-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-xl text-red-800">
                      <AlertTriangle className="h-6 w-6" />
                      <span>Prohibited Uses</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-red-800">Manufacturing or selling similar products</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-red-800">Unauthorized use of trademarks or logos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-red-800">Copying or distributing copyrighted materials</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-red-800">Reverse engineering patented technologies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing Information */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-2xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <Scale className="h-5 w-5" />
                      </div>
                      <span>Licensing Opportunities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Technology Licensing
                        </h4>
                        <p className="text-gray-700 mb-4">
                          We may consider licensing our patented technologies to qualified partners for specific 
                          applications or markets. Licensing opportunities may include:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Regional or international distribution rights
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Technology adaptation for specific medical applications
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Manufacturing partnerships for market expansion
                            </span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Contact for Licensing
                        </h4>
                        <p className="text-gray-700 mb-4">
                          For inquiries about licensing opportunities, please contact our business development team:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-gray-600" />
                            <span className="text-gray-700">licensing@nursetechmedical.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  IP Questions or Concerns?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Contact our intellectual property team for licensing inquiries, infringement concerns, 
                  or general IP questions.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                        Intellectual Property Department
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">General IP Inquiries</div>
                          <div className="text-gray-600">ip@nursetechmedical.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140', color: 'white' }}>
                          <Scale className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Licensing Inquiries</div>
                          <div className="text-gray-600">licensing@nursetechmedical.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        For intellectual property matters, licensing opportunities, or infringement concerns
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          className="px-6 py-3 font-semibold hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                          onClick={() => window.location.href = '/contact'}
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Contact IP Team
                        </Button>
                        <Button
                          variant="outline"
                          className="px-6 py-3 font-semibold"
                          onClick={() => window.location.href = '/about'}
                        >
                          <Building className="h-5 w-5 mr-2" />
                          About Our Innovation
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* IP Notice */}
        <section className="py-16" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                    <Eye className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  IP Protection Notice
                </h3>
                <p className="text-gray-300 mb-6">
                  All intellectual property rights are reserved. Unauthorized use of our patents, trademarks, 
                  copyrights, or trade secrets is strictly prohibited and may result in legal action. 
                  We actively monitor and enforce our intellectual property rights.
                </p>
                <p className="text-sm text-gray-400">
                  © 2024 Nursetech Medical LLC. All rights reserved. Cordflex® is a registered trademark of Nursetech Medical LLC.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IntellectualPropertyPage;