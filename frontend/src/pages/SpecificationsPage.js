import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Download, Shield, CheckCircle, Ruler, Weight, Package } from 'lucide-react';

const SpecificationsPage = () => {
  const technicalSpecs = [
    {
      category: "Physical Dimensions",
      icon: <Ruler className="h-6 w-6" />,
      specs: [
        { label: "Length", value: "85mm (3.35 inches)" },
        { label: "Width", value: "12mm (0.47 inches)" },
        { label: "Height", value: "8mm (0.31 inches)" },
        { label: "Weight", value: "< 5 grams" },
        { label: "Clip Opening", value: "2-15mm diameter accommodation" }
      ]
    },
    {
      category: "Material Properties",
      icon: <Shield className="h-6 w-6" />,
      specs: [
        { label: "Primary Material", value: "Medical-grade polycarbonate" },
        { label: "Colorant", value: "USP Class VI approved" },
        { label: "Biocompatibility", value: "ISO 10993 compliant" },
        { label: "Sterilization", value: "Gamma radiation" },
        { label: "Latex Content", value: "Latex-free" }
      ]
    },
    {
      category: "Performance Characteristics",
      icon: <CheckCircle className="h-6 w-6" />,
      specs: [
        { label: "Operating Temperature", value: "15°C to 40°C (59°F to 104°F)" },
        { label: "Storage Temperature", value: "-20°C to 60°C (-4°F to 140°F)" },
        { label: "Humidity Range", value: "10% to 95% RH, non-condensing" },
        { label: "Attachment Force", value: "5-8 lbs pull strength" },
        { label: "Movement Range", value: "±2 degrees freedom" }
      ]
    },
    {
      category: "Packaging & Shelf Life",
      icon: <Package className="h-6 w-6" />,
      specs: [
        { label: "Packaging", value: "Individual sterile pouches" },
        { label: "Shelf Life", value: "36 months" },
        { label: "Storage Conditions", value: "Room temperature, dry environment" },
        { label: "Expiration Dating", value: "Lot-specific expiration dates" },
        { label: "Packaging Size", value: "10cm x 15cm sterile pouch" }
      ]
    }
  ];

  const regulatoryInfo = [
    {
      title: "FDA Registration",
      description: "510(k) cleared medical device",
      number: "K240XXX",
      status: "Active"
    },
    {
      title: "ISO 13485",
      description: "Quality management system certification",
      number: "ISO 13485:2016",
      status: "Current"
    },
    {
      title: "Biocompatibility",
      description: "Tested per ISO 10993 standards",
      number: "ISO 10993-1, -5, -10",
      status: "Compliant"
    },
    {
      title: "CE Marking",
      description: "European Conformity (pending)",
      number: "CE-XXXX",
      status: "In Progress"
    }
  ];

  const compatibilityInfo = [
    {
      category: "Central Lines",
      items: [
        "Central venous catheters (CVCs)",
        "Peripherally inserted central catheters (PICCs)",
        "Hemodialysis catheters",
        "Apheresis catheters"
      ]
    },
    {
      category: "Peripheral Lines",
      items: [
        "Peripheral IV catheters",
        "Arterial lines",
        "Pressure monitoring lines",
        "Blood sampling lines"
      ]
    },
    {
      category: "Specialty Lines",
      items: [
        "Feeding tubes (NG, NJ, PEG)",
        "Foley catheters",
        "Chest tubes",
        "Medication infusion lines"
      ]
    },
    {
      category: "Equipment Lines",
      items: [
        "Ventilator circuits",
        "Oxygen delivery systems",
        "Suction tubing",
        "Monitoring cables"
      ]
    }
  ];

  const environmentalSpecs = [
    { label: "Recyclable Materials", value: "90% recyclable content" },
    { label: "Carbon Footprint", value: "Minimal manufacturing impact" },
    { label: "Waste Classification", value: "Standard medical waste" },
    { label: "Environmental Impact", value: "Reduced compared to reusable alternatives" }
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
                  Technical Specifications
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Comprehensive technical documentation for the Cordflex™ medical line management system. 
                  Designed and manufactured to meet the highest medical device standards.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    FDA Registered
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    ISO 13485
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    Biocompatible
                  </Badge>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Technical Specifications
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Detailed technical parameters and performance characteristics
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 gap-8">
              {technicalSpecs.map((category, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {category.icon}
                      </div>
                      <span style={{ color: '#214140' }}>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="text-gray-700 font-medium">{spec.label}:</span>
                          <span className="text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Regulatory Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Regulatory Information
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Compliance with international medical device regulations
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regulatoryInfo.map((item, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#214140' }}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-sm text-gray-500 mb-2">{item.number}</p>
                    <Badge 
                      variant={item.status === 'Active' || item.status === 'Current' || item.status === 'Compliant' ? 'default' : 'secondary'}
                      style={{ backgroundColor: item.status === 'Active' || item.status === 'Current' || item.status === 'Compliant' ? '#1F8051' : '#gray-400' }}
                    >
                      {item.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Compatibility Information */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Line Compatibility
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Cordflex works with all standard medical lines and equipment
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compatibilityInfo.map((category, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-center" style={{ color: '#214140' }}>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Environmental Specifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Environmental Specifications
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Environmental considerations and sustainability features
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="scale-up">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid gap-6">
                      {environmentalSpecs.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                          <span className="font-medium text-gray-700">{spec.label}:</span>
                          <span className="text-gray-600">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Technical Documentation
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Download detailed technical documents and specifications
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                    Technical Specifications
                  </h3>
                  <p className="text-gray-600 mb-4">Complete technical specification document</p>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                    Safety Data Sheet
                  </h3>
                  <p className="text-gray-600 mb-4">Material Safety Data Sheet (MSDS)</p>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                    Regulatory Certificates
                  </h3>
                  <p className="text-gray-600 mb-4">FDA 510(k) and ISO certificates</p>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download ZIP
                  </Button>
                </CardContent>
              </Card>
            </StaggeredList>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Have Technical Questions?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our engineering team is available to answer detailed technical questions and provide additional documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Technical Team
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-colors duration-200"
                    style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
                    onClick={() => window.location.href = '/sample-request'}
                  >
                    Request Sample & Testing
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

export default SpecificationsPage;