import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Mail, 
  Phone, 
  FileText,
  CheckCircle,
  AlertCircle,
  Globe
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="h-5 w-5" />,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, and phone number",
            "Hospital or organization name and address",
            "Job title and department information",
            "Professional credentials and qualifications"
          ]
        },
        {
          subtitle: "Usage Information",
          items: [
            "Website browsing patterns and preferences",
            "Device information and IP addresses",
            "Pages visited and time spent on site",
            "Search queries and interaction data"
          ]
        },
        {
          subtitle: "Technical Information",
          items: [
            "Browser type and version",
            "Operating system information",
            "Cookies and similar tracking technologies",
            "Log files and server data"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="h-5 w-5" />,
      content: [
        {
          subtitle: "Service Delivery",
          items: [
            "Process sample and trial requests",
            "Provide customer support and technical assistance",
            "Fulfill orders and manage accounts",
            "Deliver training and educational materials"
          ]
        },
        {
          subtitle: "Communication",
          items: [
            "Send product updates and important notices",
            "Respond to inquiries and support requests",
            "Provide newsletters and educational content",
            "Notify about new products and services"
          ]
        },
        {
          subtitle: "Improvement",
          items: [
            "Analyze website usage and performance",
            "Improve our products and services",
            "Personalize user experience",
            "Conduct research and development"
          ]
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: <Users className="h-5 w-5" />,
      content: [
        {
          subtitle: "We DO NOT sell your personal information",
          items: [
            "Your data is never sold to third parties",
            "We do not share information for marketing purposes",
            "Strict access controls are in place",
            "Employee training on data protection"
          ]
        },
        {
          subtitle: "Limited Sharing Circumstances",
          items: [
            "With authorized distributors for order fulfillment",
            "With service providers under strict agreements",
            "When required by law or legal process",
            "To protect our rights and prevent fraud"
          ]
        }
      ]
    },
    {
      title: "Data Security",
      icon: <Lock className="h-5 w-5" />,
      content: [
        {
          subtitle: "Technical Safeguards",
          items: [
            "SSL encryption for all data transmission",
            "Secure cloud storage with encryption at rest",
            "Regular security audits and penetration testing",
            "Multi-factor authentication for system access"
          ]
        },
        {
          subtitle: "Administrative Safeguards",
          items: [
            "Access controls and user authentication",
            "Regular employee training on data protection",
            "Incident response and breach notification procedures",
            "Third-party vendor security assessments"
          ]
        }
      ]
    },
    {
      title: "Your Rights",
      icon: <Shield className="h-5 w-5" />,
      content: [
        {
          subtitle: "Access and Control",
          items: [
            "Request access to your personal information",
            "Correct inaccurate or incomplete data",
            "Delete your personal information",
            "Opt-out of marketing communications"
          ]
        },
        {
          subtitle: "Data Portability",
          items: [
            "Export your data in common formats",
            "Transfer data to other service providers",
            "Receive copies of your information",
            "Understand how your data is processed"
          ]
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: <Globe className="h-5 w-5" />,
      content: [
        {
          subtitle: "Cookie Types",
          items: [
            "Essential cookies for website functionality",
            "Analytics cookies for usage insights",
            "Preference cookies for personalization",
            "Marketing cookies for relevant content"
          ]
        },
        {
          subtitle: "Your Cookie Choices",
          items: [
            "Manage cookie preferences in your browser",
            "Opt-out of non-essential cookies",
            "Control third-party tracking",
            "Clear cookies at any time"
          ]
        }
      ]
    }
  ];

  const complianceStandards = [
    {
      name: "HIPAA Compliance",
      description: "Healthcare data protection standards",
      icon: <Shield className="h-6 w-6" />,
      color: "#214140"
    },
    {
      name: "GDPR Compliance",
      description: "European data protection regulation",
      icon: <Lock className="h-6 w-6" />,
      color: "#8BBAB8"
    },
    {
      name: "CCPA Compliance",
      description: "California Consumer Privacy Act",
      icon: <Eye className="h-6 w-6" />,
      color: "#1F8051"
    },
    {
      name: "SOC 2 Certified",
      description: "Security and availability controls",
      icon: <CheckCircle className="h-6 w-6" />,
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
                    <Shield className="h-8 w-8" />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Privacy Policy
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Your privacy is important to us. This policy explains how we collect, use, 
                  and protect your personal information when you use our website and services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Privacy Questions
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/terms-of-service'}
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Terms of Service
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
                <strong>Last Updated:</strong> January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Our Commitment to Privacy
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We adhere to the highest standards of data protection and privacy compliance, 
                  ensuring your information is secure and handled responsibly.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: standard.color, color: 'white' }}
                    >
                      {standard.icon}
                    </div>
                    <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>
                      {standard.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {standard.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Sections */}
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
                      <div className="space-y-6">
                        {section.content.map((subsection, subIndex) => (
                          <div key={subIndex}>
                            <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                              {subsection.subtitle}
                            </h4>
                            <ul className="space-y-2">
                              {subsection.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-3">
                                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
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

        {/* Data Retention */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-lg">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-2xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <Database className="h-5 w-5" />
                      </div>
                      <span>Data Retention</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Retention Periods
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong>Account Information:</strong> Retained for the duration of your account plus 7 years for regulatory compliance
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong>Transaction Records:</strong> Maintained for 10 years as required by healthcare regulations
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong>Website Analytics:</strong> Anonymized data retained for 2 years for performance optimization
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">
                              <strong>Marketing Data:</strong> Retained until you opt-out or for 3 years from last interaction
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Secure Deletion
                        </h4>
                        <p className="text-gray-700">
                          When data reaches the end of its retention period, it is securely deleted using industry-standard 
                          data destruction methods. Backups are also purged according to our data lifecycle policies.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Privacy Questions?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  If you have questions about this privacy policy or how we handle your personal information, 
                  please contact our privacy team.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                        Privacy Officer
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-gray-600">privacy@nursetechmedical.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140', color: 'white' }}>
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Phone</div>
                          <div className="text-gray-600">1-800-CORDFLEX</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        For general inquiries or to exercise your privacy rights
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          className="px-6 py-3 font-semibold hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                          onClick={() => window.location.href = '/contact'}
                        >
                          Contact Us
                        </Button>
                        <Button
                          variant="outline"
                          className="px-6 py-3 font-semibold"
                          onClick={() => window.location.href = '/'}
                        >
                          Back to Home
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                    <AlertCircle className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                  Policy Updates
                </h3>
                <p className="text-gray-600 mb-6">
                  We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website and, where required, 
                  by sending you a direct notification.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Effective Date:</strong> January 15, 2024 | <strong>Version:</strong> 2.1
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

export default PrivacyPolicyPage;