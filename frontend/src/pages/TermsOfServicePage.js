import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  Shield, 
  Scale, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Mail, 
  Phone,
  Gavel,
  Lock,
  Globe,
  Settings
} from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <CheckCircle className="h-5 w-5" />,
      content: [
        "By accessing or using our website, products, or services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any part of these terms, you may not use our services.",
        "These terms apply to all users of our website, including without limitation browsers, vendors, customers, merchants, and contributors of content.",
        "We reserve the right to update these terms at any time without prior notice."
      ]
    },
    {
      title: "Use of Our Services",
      icon: <Users className="h-5 w-5" />,
      content: [
        "You may use our services only for lawful purposes and in accordance with these terms.",
        "You agree not to use our services for any fraudulent or unlawful purpose or to violate any applicable laws.",
        "You must not transmit any malicious code, viruses, or interfere with the security of our systems.",
        "Commercial use of our website content requires prior written permission from Nursetech Medical."
      ]
    },
    {
      title: "Product Information and Orders",
      icon: <FileText className="h-5 w-5" />,
      content: [
        "All product descriptions, pricing, and availability are subject to change without notice.",
        "We reserve the right to refuse or cancel orders for any reason, including pricing errors.",
        "Orders are subject to acceptance and inventory availability.",
        "Medical devices require appropriate licensing and may be restricted to qualified healthcare professionals only."
      ]
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="h-5 w-5" />,
      content: [
        "All content on this website, including text, graphics, logos, and software, is the property of Nursetech Medical or its licensors.",
        "You may not reproduce, distribute, or create derivative works without written permission.",
        "Our trademarks and trade names may not be used without our prior written consent.",
        "User-generated content remains your property but you grant us a license to use it for our business purposes."
      ]
    },
    {
      title: "Privacy and Data Protection",
      icon: <Lock className="h-5 w-5" />,
      content: [
        "Your privacy is important to us. Please review our Privacy Policy for information on how we collect and use your data.",
        "We comply with applicable data protection laws including HIPAA, GDPR, and CCPA.",
        "You consent to our collection and use of your information as described in our Privacy Policy.",
        "We implement appropriate security measures to protect your personal information."
      ]
    },
    {
      title: "Disclaimers and Limitations",
      icon: <AlertTriangle className="h-5 w-5" />,
      content: [
        "Our services are provided 'as is' without warranties of any kind, either express or implied.",
        "We do not warrant that our services will be uninterrupted, secure, or error-free.",
        "Medical devices should only be used by qualified healthcare professionals following proper training.",
        "We are not liable for any indirect, incidental, or consequential damages arising from your use of our services."
      ]
    }
  ];

  const keyTerms = [
    {
      title: "Service Availability",
      description: "We strive for 99.9% uptime but cannot guarantee uninterrupted service",
      icon: <Globe className="h-6 w-6" />,
      color: "#214140"
    },
    {
      title: "User Responsibilities",
      description: "Users must comply with all applicable laws and regulations",
      icon: <Users className="h-6 w-6" />,
      color: "#8BBAB8"
    },
    {
      title: "Content Guidelines",
      description: "All content must be lawful, accurate, and appropriate",
      icon: <FileText className="h-6 w-6" />,
      color: "#1F8051"
    },
    {
      title: "Modification Rights",
      description: "We reserve the right to modify these terms at any time",
      icon: <Settings className="h-6 w-6" />,
      color: "#214140"
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
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140', color: 'white' }}>
                    <Scale className="h-8 w-8" />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Terms of Service
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  These terms govern your use of our website, products, and services. 
                  Please read them carefully before using our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Legal Questions
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/privacy-policy'}
                  >
                    <Shield className="h-5 w-5 mr-2" />
                    Privacy Policy
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-gray-600">
                <strong>Last Updated:</strong> January 15, 2024 | <strong>Effective Date:</strong> January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Key Terms Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Key Terms Overview
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Important highlights of our terms of service for your reference
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyTerms.map((term, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: term.color, color: 'white' }}
                    >
                      {term.icon}
                    </div>
                    <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>
                      {term.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {term.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => (
                <AnimatedSection key={index} animation="fade-up">
                  <Card className="bg-white shadow-lg">
                    <CardHeader className="pb-6">
                      <CardTitle className="flex items-center space-x-3 text-2xl" style={{ color: '#214140' }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                          {section.icon}
                        </div>
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {section.content.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Device Terms */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-lg border-2 border-orange-200">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-2xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500 text-white">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
                      <span>Medical Device Specific Terms</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 text-lg text-orange-800">
                          Important Medical Device Notice
                        </h4>
                        <p className="text-orange-700 mb-4">
                          Cordflex is a medical device intended for use by trained healthcare professionals. 
                          Proper training and certification may be required for use.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-orange-700">
                              <strong>Professional Use Only:</strong> This device is intended for use by qualified healthcare professionals only
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-orange-700">
                              <strong>Training Required:</strong> Proper training and certification may be required before use
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-orange-700">
                              <strong>Follow Instructions:</strong> Always follow the instructions for use and safety guidelines
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-orange-700">
                              <strong>Regulatory Compliance:</strong> Use must comply with all applicable healthcare regulations
                            </span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Liability and Risk
                        </h4>
                        <p className="text-gray-700 mb-4">
                          While we stand behind the quality and safety of our products, the use of medical devices 
                          involves inherent risks. Users assume responsibility for proper use and patient safety.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Users must follow all applicable clinical protocols and safety procedures
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Report any adverse events or device malfunctions immediately
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              Maintain proper documentation and records as required by regulation
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-2xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <Gavel className="h-5 w-5" />
                      </div>
                      <span>Governing Law and Dispute Resolution</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Governing Law
                        </h4>
                        <p className="text-gray-700 mb-4">
                          These terms shall be governed by and construed in accordance with the laws of the 
                          Commonwealth of Massachusetts, without regard to its conflict of law principles.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Dispute Resolution
                        </h4>
                        <p className="text-gray-700 mb-4">
                          Any disputes arising from these terms will be resolved through binding arbitration 
                          in accordance with the rules of the American Arbitration Association.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Jurisdiction
                        </h4>
                        <p className="text-gray-700">
                          You agree to submit to the exclusive jurisdiction of the courts located in Boston, 
                          Massachusetts for any matters not subject to arbitration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact for Legal Questions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Questions About These Terms?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  If you have questions about these terms of service, please contact our legal team.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                        Legal Department
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-gray-600">legal@nursetechmedical.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140', color: 'white' }}>
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-gray-600">(410) 835-4089</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        For legal questions, compliance issues, or terms clarification
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          className="px-6 py-3 font-semibold hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                          onClick={() => window.location.href = '/contact'}
                        >
                          Contact Legal Team
                        </Button>
                        <Button
                          variant="outline"
                          className="px-6 py-3 font-semibold"
                          onClick={() => window.location.href = '/privacy-policy'}
                        >
                          Privacy Policy
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Terms Updates */}
        <section className="py-16" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                    <Settings className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                  Terms Updates
                </h3>
                <p className="text-gray-600 mb-6">
                  We reserve the right to update these terms of service at any time. Material changes will be 
                  communicated through our website and, where required, through direct notification to users. 
                  Continued use of our services after changes constitutes acceptance of the updated terms.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Current Version:</strong> 2.1 | <strong>Effective:</strong> January 15, 2024
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

export default TermsOfServicePage;