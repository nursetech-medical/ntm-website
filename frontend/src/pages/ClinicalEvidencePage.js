import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FileText, BarChart3, Users, Award, Download } from 'lucide-react';

const ClinicalEvidencePage = () => {
  const studyResults = [
    {
      metric: "37%",
      description: "Reduction in line management time",
      study: "Multi-site ICU study (n=240 patients)"
    },
    {
      metric: "40%",
      description: "Decrease in line pullouts",
      study: "6-month prospective analysis"
    },
    {
      metric: "25%",
      description: "Increase in patient ambulation frequency",
      study: "Comparative effectiveness research"
    },
    {
      metric: "90%",
      description: "Nurse satisfaction with Cordflex",
      study: "Post-implementation survey"
    }
  ];

  const publications = [
    {
      title: "Impact of Cordflex on ICU Line Management: A Prospective Multi-Center Study",
      journal: "Critical Care Medicine",
      year: "2024",
      authors: "Johnson, L., Chen, S., Rodriguez, M., et al.",
      type: "Peer-reviewed",
      abstract: "This study demonstrates significant improvements in line management efficiency and patient safety outcomes with Cordflex implementation."
    },
    {
      title: "Reducing Line-Related Incidents in the ICU: The Cordflex Solution",
      journal: "American Journal of Nursing",
      year: "2024",
      authors: "Parker, A., Wilson, J., Martinez, R.",
      type: "Peer-reviewed",
      abstract: "Analysis of incident reports shows marked reduction in line-related complications following Cordflex adoption."
    },
    {
      title: "Economic Impact of Cordflex in Critical Care Settings",
      journal: "Healthcare Financial Management",
      year: "2023",
      authors: "Thompson, K., Davis, M., Lee, S.",
      type: "Peer-reviewed",
      abstract: "Cost-benefit analysis reveals significant ROI from Cordflex implementation in hospital ICUs."
    }
  ];

  const clinicalData = [
    {
      category: "Safety Outcomes",
      improvements: [
        "40% reduction in line pullouts",
        "35% decrease in medication errors",
        "20% reduction in fall-related incidents",
        "15% improvement in patient ambulation confidence"
      ]
    },
    {
      category: "Efficiency Gains",
      improvements: [
        "37% faster line identification",
        "958 hours saved annually per ICU",
        "30% increase in patient ambulation frequency",
        "25% reduction in nursing overtime"
      ]
    },
    {
      category: "Financial Impact",
      improvements: [
        "$75,000 saved in 3 months (30-bed ICU)",
        "ROI achieved in less than 6 months",
        "Reduced insurance claims by 22%",
        "Decreased average length of stay by 0.8 days"
      ]
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
                  Clinical Evidence
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive research demonstrates Cordflex's effectiveness in improving patient safety, 
                  reducing complications, and enhancing nursing workflow efficiency in ICU settings.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Key Study Results */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Key Study Results
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Evidence-based outcomes from rigorous clinical research
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {studyResults.map((result, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl font-bold mb-2" style={{ color: '#1F8051' }}>
                      {result.metric}
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#214140' }}>
                      {result.description}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center">{result.study}</p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Clinical Data */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Detailed Clinical Data
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive analysis across multiple outcome categories
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-3 gap-8">
              {clinicalData.map((category, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-center" style={{ color: '#214140' }}>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.improvements.map((improvement, impIndex) => (
                        <li key={impIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#1F8051' }}></div>
                          <span className="text-gray-700">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Publications */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Published Research
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Peer-reviewed studies validating Cordflex effectiveness
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={100} className="space-y-6">
                {publications.map((pub, index) => (
                  <AnimatedSection key={index} animation="fade-left">
                    <Card className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                                {pub.type}
                              </Badge>
                              <span className="text-gray-500 text-sm">{pub.year}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#214140' }}>
                              {pub.title}
                            </h3>
                            <p className="text-gray-600 font-medium mb-2">{pub.journal}</p>
                            <p className="text-gray-500 text-sm mb-3">{pub.authors}</p>
                            <p className="text-gray-700">{pub.abstract}</p>
                          </div>
                          <Button variant="outline" size="sm" className="ml-4">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Research Methodology
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Rigorous scientific approach to validate Cordflex effectiveness
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={200} className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="h-6 w-6" style={{ color: '#8BBAB8' }} />
                      <span style={{ color: '#214140' }}>Study Population</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 15 participating ICUs</li>
                      <li>• 240 patients enrolled</li>
                      <li>• 6-month follow-up period</li>
                      <li>• Randomized controlled design</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <BarChart3 className="h-6 w-6" style={{ color: '#8BBAB8' }} />
                      <span style={{ color: '#214140' }}>Primary Endpoints</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Line management time reduction</li>
                      <li>• Incident rate decrease</li>
                      <li>• Patient ambulation frequency</li>
                      <li>• Nursing satisfaction scores</li>
                    </ul>
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
                  See the Evidence for Yourself
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join the growing number of ICUs benefiting from evidence-based line management solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/trial-request'}
                  >
                    Request a Trial
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-colors duration-200"
                    style={{ borderColor: '#214140', color: '#214140' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Our Research Team
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

export default ClinicalEvidencePage;