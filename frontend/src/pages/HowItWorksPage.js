import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Play, Download, CheckCircle, ArrowRight } from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: "1",
      title: "Attach to Surface",
      description: "Simply clip Cordflex to any smooth surface near the patient - bed rail, IV pole, or monitor stand.",
      details: "No adhesives or mounting hardware required. The clip design ensures secure attachment without damage."
    },
    {
      number: "2",
      title: "Organize Lines",
      description: "Thread medical lines through the Cordflex clip, keeping them organized and easily identifiable.",
      details: "Accommodates multiple lines of varying sizes. 2-degree freedom of movement allows natural patient positioning."
    },
    {
      number: "3",
      title: "Enable Safe Ambulation",
      description: "Lines remain organized during patient movement, reducing tangles and pullout risk.",
      details: "Staff can quickly identify and manage lines during transfers, ambulation, and procedures."
    },
    {
      number: "4",
      title: "Dispose After Use",
      description: "Single-use design ensures sterility. Dispose of Cordflex with standard medical waste after patient discharge.",
      details: "Environmentally conscious design with recyclable materials where possible."
    }
  ];

  const useCases = [
    {
      title: "Patient Ambulation",
      description: "Keep lines organized and tangle-free during walking exercises",
      benefits: ["Reduced fall risk", "Faster mobility", "Improved patient confidence"]
    },
    {
      title: "Bed Positioning",
      description: "Maintain line organization during repositioning and turns",
      benefits: ["Prevents disconnections", "Reduces pressure injuries", "Easier nursing care"]
    },
    {
      title: "Transfers to Imaging",
      description: "Organized lines simplify transport to radiology and other departments",
      benefits: ["Faster transfers", "Reduced delays", "Better patient experience"]
    },
    {
      title: "Procedural Support",
      description: "Clear line identification during procedures and interventions",
      benefits: ["Improved safety", "Reduced errors", "Better workflow"]
    }
  ];

  const compatibleLines = [
    "Central venous catheters",
    "Peripheral IV lines",
    "Arterial lines",
    "Feeding tubes",
    "Foley catheters",
    "Chest tubes",
    "Dialysis lines",
    "Medication infusion lines"
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
                  How Cordflex Works
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Understanding the simple yet effective mechanism behind Cordflex's line management solution. 
                  Four easy steps to transform your ICU workflow.
                </p>
                <Button
                  className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: '#214140', color: 'white' }}
                  onClick={() => window.location.href = '/videos'}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo Video
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Step-by-Step Process
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Simple installation and usage in four easy steps
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={200} className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{ backgroundColor: '#214140' }}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="bg-white shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-2xl" style={{ color: '#214140' }}>
                            {step.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg text-gray-700 mb-4">{step.description}</p>
                          <p className="text-gray-600">{step.details}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Common Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Cordflex adapts to various ICU scenarios and patient care situations
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl" style={{ color: '#214140' }}>
                      {useCase.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" style={{ color: '#1F8051' }} />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Compatibility */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Universal Compatibility
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Cordflex works with all standard medical lines and equipment
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={100} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {compatibleLines.map((line, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-white">{line}</span>
                  </div>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Safety Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Safety Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Designed with patient safety and infection control as top priorities
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={200} className="grid md:grid-cols-3 gap-8">
                <Card className="shadow-lg text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-2xl">1×</span>
                    </div>
                    <CardTitle style={{ color: '#214140' }}>Single-Use Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Eliminates cross-contamination risk with disposable, sterile packaging</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">FDA</span>
                    </div>
                    <CardTitle style={{ color: '#214140' }}>FDA Registered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Meets all regulatory requirements for medical device safety and efficacy</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">2°</span>
                    </div>
                    <CardTitle style={{ color: '#214140' }}>Freedom of Movement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Allows natural patient positioning without compromising line organization</p>
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
                  Ready to See How It Works?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Experience the simplicity and effectiveness of Cordflex in your own ICU environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/sample-request'}
                  >
                    Request a Sample
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-colors duration-200"
                    style={{ borderColor: '#214140', color: '#214140' }}
                    onClick={() => window.location.href = '/videos'}
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Watch Training Videos
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

export default HowItWorksPage;