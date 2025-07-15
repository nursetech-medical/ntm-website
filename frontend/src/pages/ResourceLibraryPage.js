import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Download, FileText, Video, Calendar, ExternalLink, Calculator } from 'lucide-react';

const ResourceLibraryPage = () => {
  const resourceSections = [
    {
      title: "Implementation & In-Service Tools",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Instructions for Use",
          description: "Comprehensive guide for proper Cordflex installation and usage",
          type: "PDF Guide",
          downloadable: true
        },
        {
          title: "Post Trial Survey & Feedback Form",
          description: "Collect feedback from your team after Cordflex implementation",
          type: "Form Template",
          downloadable: true
        },
        {
          title: "Cost Benefit Analysis",
          description: "Template for analyzing the financial impact of Cordflex in your ICU",
          type: "Excel Template",
          downloadable: true
        },
        {
          title: "ROI Calculator",
          description: "Interactive tool to calculate return on investment for Cordflex",
          type: "Online Tool",
          downloadable: false,
          interactive: true
        },
        {
          title: "Cordflex Floor Trial Flyer",
          description: "Informational flyer for staff during trial periods",
          type: "Marketing Material",
          downloadable: true
        }
      ]
    },
    {
      title: "Research & Evidence-Based Practice Support",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Whitepaper - Cordflex and the Nursing Crisis",
          description: "In-depth analysis of how Cordflex addresses current nursing challenges",
          type: "Research Paper",
          downloadable: true
        },
        {
          title: "FAQ Sheet",
          description: "Common questions and answers about Cordflex implementation",
          type: "Reference Guide",
          downloadable: true
        },
        {
          title: "Cordflex Flyer",
          description: "Overview brochure highlighting key benefits and features",
          type: "Marketing Material",
          downloadable: true
        }
      ]
    },
    {
      title: "Technical Reports",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Technical Details",
          description: "Detailed specifications and engineering documentation",
          type: "Technical Document",
          downloadable: true
        },
        {
          title: "MSDS Data Sheet",
          description: "Material Safety Data Sheet for Cordflex components",
          type: "Safety Document",
          downloadable: true
        },
        {
          title: "Reporting Cordflex Issues",
          description: "Guidelines for reporting technical issues or adverse events",
          type: "Procedure Guide",
          downloadable: true
        }
      ]
    },
    {
      title: "Training & Explainer Videos",
      icon: <Video className="h-6 w-6" />,
      resources: [
        {
          title: "Cordflex Overview",
          description: "Complete introduction to the Cordflex system",
          type: "Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "In-service Training Video - How to use Cordflex",
          description: "Step-by-step training for nursing staff",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "Cordflex for Ambulation",
          description: "Specialized training for patient mobility applications",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "Cordflex for Rotating a Patient in Bed",
          description: "Bed positioning and patient turning procedures",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "Cordflex for Transfers to Imaging",
          description: "Optimizing patient transfers with line management",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "Cordflex for the NICU",
          description: "Specialized applications in neonatal intensive care",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "Cordflex for the PICU",
          description: "Pediatric ICU implementation guidelines",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        },
        {
          title: "Cordflex for Specialty Lines",
          description: "Managing complex and specialty medical lines",
          type: "Training Video",
          downloadable: false,
          link: "/videos"
        }
      ]
    },
    {
      title: "Connect & Learn More",
      icon: <Calendar className="h-6 w-6" />,
      resources: [
        {
          title: "Schedule a Call",
          description: "Book a consultation with our clinical team",
          type: "Consultation",
          downloadable: false,
          link: "https://calendly.com/davidusevitch/cordflex-consultation",
          external: true
        },
        {
          title: "Request a Sample",
          description: "Get a free sample kit for your ICU",
          type: "Sample Request",
          downloadable: false,
          link: "/sample-request"
        },
        {
          title: "Request a Trial",
          description: "Request a comprehensive trial in your facility",
          type: "Trial Request",
          downloadable: false,
          link: "/trial-request"
        }
      ]
    }
  ];

  const handleResourceClick = (resource) => {
    if (resource.downloadable) {
      // Handle download
      console.log('Download:', resource.title);
    } else if (resource.interactive) {
      // Handle interactive tools
      console.log('Interactive tool:', resource.title);
    } else if (resource.external) {
      window.open(resource.link, '_blank');
    } else if (resource.link) {
      window.location.href = resource.link;
    }
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'Video':
      case 'Training Video':
        return <Video className="h-5 w-5" />;
      case 'Online Tool':
        return <Calculator className="h-5 w-5" />;
      case 'Consultation':
        return <Calendar className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
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
                  Resource Library
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Comprehensive collection of implementation tools, training materials, research documents, 
                  and technical resources to support your Cordflex implementation journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Resource Sections */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {resourceSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-16">
                  <AnimatedSection animation="fade-up">
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {section.icon}
                      </div>
                      <h2 className="text-3xl font-bold" style={{ color: '#214140' }}>
                        {section.title}
                      </h2>
                    </div>
                  </AnimatedSection>
                  
                  <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.resources.map((resource, resourceIndex) => (
                      <Card 
                        key={resourceIndex} 
                        className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                        onClick={() => handleResourceClick(resource)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge 
                              variant="secondary" 
                              style={{ backgroundColor: '#DFEAF0', color: '#214140' }}
                            >
                              {resource.type}
                            </Badge>
                            <div className="flex items-center space-x-2">
                              {getResourceIcon(resource.type)}
                              {resource.downloadable && <Download className="h-4 w-4 text-gray-500" />}
                              {resource.external && <ExternalLink className="h-4 w-4 text-gray-500" />}
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight" style={{ color: '#214140' }}>
                            {resource.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                          <div className="flex items-center justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="hover:bg-teal-50 transition-colors duration-200"
                              style={{ borderColor: '#214140', color: '#214140' }}
                            >
                              {resource.downloadable ? 'Download' : 
                               resource.interactive ? 'Launch Tool' :
                               resource.external ? 'Open Link' : 'Access'}
                            </Button>
                            {resource.downloadable && (
                              <span className="text-xs text-gray-500">Free Download</span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </StaggeredList>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Need Additional Support?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our clinical team is available to provide personalized guidance and support throughout your implementation process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.open('https://calendly.com/davidusevitch/cordflex-consultation', '_blank')}
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-colors duration-200"
                    style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Support Team
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Quick Access
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Frequently accessed resources and tools
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>Instructions for Use</h3>
                  <Button variant="outline" size="sm">Download</Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Calculator className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>ROI Calculator</h3>
                  <Button variant="outline" size="sm">Launch Tool</Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Video className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>Training Videos</h3>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/videos'}>
                    View All
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>Schedule Call</h3>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://calendly.com/davidusevitch/cordflex-consultation', '_blank')}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </StaggeredList>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceLibraryPage;