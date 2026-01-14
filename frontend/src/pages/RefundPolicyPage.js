import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  RotateCcw, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Package, 
  Mail, 
  Phone,
  CreditCard,
  Truck,
  FileText,
  DollarSign
} from 'lucide-react';

const RefundPolicyPage = () => {
  const refundCategories = [
    {
      title: "Product Returns",
      icon: <Package className="h-6 w-6" />,
      timeframe: "30 days",
      conditions: [
        "Original packaging and documentation required",
        "Product must be unused and in original condition",
        "Return authorization number required",
        "Customer responsible for return shipping costs"
      ],
      eligibility: "Standard products purchased directly from Nursetech Medical",
      refundAmount: "Full purchase price minus restocking fee (if applicable)"
    },
    {
      title: "Sample Kits",
      icon: <FileText className="h-6 w-6" />,
      timeframe: "N/A",
      conditions: [
        "Sample kits are provided free of charge",
        "No returns accepted for sample products",
        "Limited to one sample kit per facility",
        "Educational use only"
      ],
      eligibility: "Healthcare professionals and facilities",
      refundAmount: "No refund applicable - samples are complimentary"
    },
    {
      title: "Training Services",
      icon: <Shield className="h-6 w-6" />,
      timeframe: "48 hours",
      conditions: [
        "Cancellation required 48 hours before scheduled training",
        "Rescheduling available within 90 days",
        "Materials provided are non-returnable",
        "Travel expenses non-refundable if training is cancelled"
      ],
      eligibility: "Paid training programs and educational services",
      refundAmount: "Full refund if cancelled within timeframe"
    },
    {
      title: "Bulk Orders",
      icon: <Truck className="h-6 w-6" />,
      timeframe: "14 days",
      conditions: [
        "Minimum order quantity restrictions apply",
        "Custom or modified products non-returnable",
        "Unopened packaging required",
        "Prior approval required for returns over $5,000"
      ],
      eligibility: "Hospitals and healthcare systems with bulk purchase agreements",
      refundAmount: "Prorated refund based on returned quantity"
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: "Contact Customer Service",
      description: "Reach out to our customer service team to initiate the return process",
      icon: <Phone className="h-5 w-5" />,
      details: "Call (410) 835-4089 or email returns@nursetechmedical.com"
    },
    {
      step: 2,
      title: "Receive Return Authorization",
      description: "Our team will provide you with a Return Authorization (RA) number",
      icon: <FileText className="h-5 w-5" />,
      details: "RA number must be included with all returned items"
    },
    {
      step: 3,
      title: "Package and Ship",
      description: "Package the items securely and ship to our returns center",
      icon: <Package className="h-5 w-5" />,
      details: "Use original packaging when possible and include all documentation"
    },
    {
      step: 4,
      title: "Processing and Refund",
      description: "Once received, we'll process your return and issue the refund",
      icon: <CreditCard className="h-5 w-5" />,
      details: "Refunds processed within 5-7 business days after receipt"
    }
  ];

  const nonRefundableItems = [
    {
      category: "Custom Products",
      description: "Items manufactured to customer specifications",
      icon: <AlertTriangle className="h-5 w-5" />,
      examples: ["Custom-sized devices", "Personalized training materials", "Modified products"]
    },
    {
      category: "Opened Medical Devices",
      description: "Products that have been opened or used for safety reasons",
      icon: <Shield className="h-5 w-5" />,
      examples: ["Used sterile products", "Opened single-use devices", "Contaminated items"]
    },
    {
      category: "Digital Products",
      description: "Electronic materials and software licenses",
      icon: <FileText className="h-5 w-5" />,
      examples: ["Training videos", "Digital manuals", "Software licenses"]
    },
    {
      category: "Expired Products",
      description: "Items past their expiration date or shelf life",
      icon: <Clock className="h-5 w-5" />,
      examples: ["Expired medical devices", "Outdated training materials", "Time-sensitive products"]
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
                    <RotateCcw className="h-8 w-8" />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Refund Policy
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We stand behind our products and services. This policy outlines our refund and return 
                  procedures to ensure customer satisfaction while maintaining product safety standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Returns Team
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    General Inquiries
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

        {/* Refund Categories */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Refund Categories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Different products and services have specific refund terms and conditions
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-8">
              {refundCategories.map((category, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {category.icon}
                      </div>
                      <div>
                        <div>{category.title}</div>
                        <div className="text-sm font-normal text-gray-600">
                          Return window: {category.timeframe}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>
                          Conditions:
                        </h4>
                        <ul className="space-y-1">
                          {category.conditions.map((condition, condIndex) => (
                            <li key={condIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>
                          Eligibility:
                        </h4>
                        <p className="text-sm text-gray-600">{category.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>
                          Refund Amount:
                        </h4>
                        <p className="text-sm text-gray-600">{category.refundAmount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Refund Process */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  How to Request a Refund
                </h2>
                <p className="text-xl text-gray-600">
                  Simple steps to process your return and refund request
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {refundProcess.map((step, index) => (
                  <Card key={index} className="bg-white shadow-lg text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#214140', color: 'white' }}>
                        <span className="text-2xl font-bold">{step.step}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {step.details}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Non-Refundable Items */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Non-Refundable Items
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Certain products and services cannot be returned for safety, regulatory, or practical reasons
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              {nonRefundableItems.map((item, index) => (
                <Card key={index} className="bg-white shadow-lg border-2 border-orange-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-xl">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-500 text-white">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-orange-800">{item.category}</div>
                        <div className="text-sm font-normal text-gray-600">
                          {item.description}
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-orange-800">
                        Examples:
                      </h4>
                      <ul className="space-y-1">
                        {item.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start space-x-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-orange-700">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Defective Products */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-white shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center space-x-3 text-2xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        <Shield className="h-5 w-5" />
                      </div>
                      <span>Defective Products and Warranties</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="font-semibold mb-3 text-lg text-blue-800">
                          Product Defects and Malfunctions
                        </h4>
                        <p className="text-blue-700 mb-4">
                          If you receive a defective product or experience a malfunction, we will provide 
                          a full refund or replacement at no additional cost.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-700">
                              <strong>Immediate Replacement:</strong> Defective items replaced within 24-48 hours
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-700">
                              <strong>No Return Fees:</strong> No restocking or shipping fees for defective products
                            </span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-700">
                              <strong>Extended Support:</strong> Technical support to verify defect and arrange replacement
                            </span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg" style={{ color: '#214140' }}>
                          Warranty Coverage
                        </h4>
                        <p className="text-gray-700 mb-4">
                          All Cordflex products come with a comprehensive warranty against manufacturing defects and material failures.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2" style={{ color: '#214140' }}>
                              Standard Warranty
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 2 years from date of purchase</li>
                              <li>• Manufacturing defects covered</li>
                              <li>• Material failure protection</li>
                              <li>• Normal wear and tear excluded</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-semibold mb-2" style={{ color: '#214140' }}>
                              Extended Warranty
                            </h5>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Available for purchase</li>
                              <li>• Up to 5 years coverage</li>
                              <li>• Includes accident protection</li>
                              <li>• Priority support included</li>
                            </ul>
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
                  Need Help with Returns?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our customer service team is here to help with your return and refund requests
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                        Returns Department
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">Email</div>
                          <div className="text-gray-600">returns@nursetechmedical.com</div>
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
                    <div className="text-center">
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>
                          Returns Center Address
                        </h4>
                        <p className="text-sm text-gray-600">
                          Nursetech Medical Returns Center<br />
                          ATTN: Returns Department<br />
                          123 Medical Plaza, Suite 400<br />
                          Boston, MA 02101
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        For return requests, warranty claims, and refund inquiries
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          className="px-6 py-3 font-semibold hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                        >
                          <RotateCcw className="h-5 w-5 mr-2" />
                          Start Return Process
                        </Button>
                        <Button
                          variant="outline"
                          className="px-6 py-3 font-semibold"
                          onClick={() => window.location.href = '/contact'}
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          Contact Support
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
        <section className="py-16" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                    <FileText className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#214140' }}>
                  Policy Updates
                </h3>
                <p className="text-gray-600 mb-6">
                  This refund policy may be updated from time to time to reflect changes in our business practices 
                  or regulatory requirements. We will notify customers of any material changes through our website 
                  and direct communication where appropriate.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Current Version:</strong> 1.2 | <strong>Last Updated:</strong> January 15, 2024
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

export default RefundPolicyPage;