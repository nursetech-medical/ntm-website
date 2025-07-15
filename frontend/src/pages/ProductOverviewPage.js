import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { CheckCircle, Shield, Clock, Users, Star } from 'lucide-react';

const ProductOverviewPage = () => {
  const keyFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "30-Second Installation",
      description: "Quick and intuitive setup requires no tools or special training"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "FDA Registered",
      description: "Single-use, sterile device designed for ICU safety standards"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Universal Compatibility",
      description: "Works with all line types and attaches to any surface"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Proven Results",
      description: "37% reduction in line management time, 40% fewer pullouts"
    }
  ];

  const specifications = [
    { label: "Material", value: "Medical-grade plastic" },
    { label: "Sterilization", value: "Gamma radiation" },
    { label: "Packaging", value: "Individual sterile pouches" },
    { label: "Shelf Life", value: "3 years" },
    { label: "Size", value: "Adjustable to fit various line diameters" },
    { label: "Weight", value: "Less than 5 grams" }
  ];

  const clinicalOutcomes = [
    { metric: "37%", description: "Faster line identification" },
    { metric: "40%", description: "Reduction in line pullouts" },
    { metric: "25%", description: "Increase in patient ambulation" },
    { metric: "90%", description: "Nurse satisfaction rate" }
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
                  Cordflex™ Clip Overview
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  The innovative line management solution designed by ICU nurses for ICU nurses. 
                  Cordflex transforms patient care by eliminating line tangles and improving safety during ambulation.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    Single-Use
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    Sterile
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    FDA Registered
                  </Badge>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Product Image Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="scale-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📎</div>
                      <h3 className="text-2xl font-bold text-gray-700">Cordflex™ Clip</h3>
                      <p className="text-gray-600">Revolutionary line management solution</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg">
                    The Cordflex clip works like a simple hair clip but is engineered specifically for medical line management. 
                    Its innovative design provides secure line organization while allowing for natural patient movement.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Key Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Designed with input from frontline ICU nurses and biomedical engineers
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#214140' }}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Clinical Outcomes */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Clinical Outcomes
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Proven results from real-world ICU implementations
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clinicalOutcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1F8051' }}>
                    {outcome.metric}
                  </div>
                  <p className="text-gray-300 text-lg">{outcome.description}</p>
                </div>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Product Specifications
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="scale-up">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <div className="grid gap-6">
                      {specifications.map((spec, index) => (
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

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Ready to Transform Your ICU?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Experience the difference Cordflex can make in your patient care workflow. 
                  Request a sample or start a trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                    onClick={() => window.location.href = '/sample-request'}
                  >
                    Request a Sample
                  </Button>
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/trial-request'}
                  >
                    Request a Trial
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

export default ProductOverviewPage;