import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Download, FileText, Video, Calendar, ExternalLink, Calculator } from 'lucide-react';

const ResourceLibraryPage = () => {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const resourceSections = [
    {
      title: "Marketing & General Information",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Cordflex™ Clip Flyer",
          description: "Single-page overview highlighting key features and benefits",
          type: "Marketing Material",
          downloadable: true,
          available: true,
          filePath: "/resources/Cordflex™ Clip Flyer.pdf"
        },
        {
          title: "Trifold Brochure",
          description: "Comprehensive trifold brochure for stakeholder presentations",
          type: "Marketing Material",
          downloadable: true,
          available: true,
          filePath: "/resources/Trifold-Cordflex.pdf"
        },
        {
          title: "Med One Partnership Overview",
          description: "Information about our partnership with Med One for equipment solutions",
          type: "Partnership Info",
          downloadable: true,
          available: true,
          filePath: "/resources/Cordflex-Med One.pdf"
        }
      ]
    },
    {
      title: "Implementation & Service Tools",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Instructions for Use",
          description: "Comprehensive guide for proper Cordflex installation and usage",
          type: "PDF Guide",
          downloadable: true,
          available: true,
          filePath: "/resources/Instructions For Use.pdf"
        },
        {
          title: "Post Trial Survey & Feedback Form",
          description: "Collect feedback from your team after Cordflex implementation",
          type: "Form Template",
          downloadable: true,
          available: false
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
      title: "Research & Evidence-Based Practice Support",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Cordflex Background Research Whitepaper",
          description: "In-depth analysis of clinical evidence and research supporting Cordflex",
          type: "Research Paper",
          downloadable: true,
          available: true,
          filePath: "/resources/Cordflex Background Research Whitepaper (2).pdf"
        },
        {
          title: "Cost of Cord Disorganization",
          description: "Research document analyzing the financial and clinical impact of poor line management",
          type: "Research Paper",
          downloadable: true,
          available: true,
          filePath: "/resources/1.7M Cost of Cord Disorganization.pdf"
        },
        {
          title: "Line Management for Reducing Trips and Falls",
          description: "Evidence-based strategies for preventing patient falls through better line management",
          type: "Clinical Guide",
          downloadable: true,
          available: true,
          filePath: "/resources/Line Management for Reducing Trips and Falls.pdf"
        },
        {
          title: "Versatility of Cordflex",
          description: "Documentation showcasing diverse applications across different care settings",
          type: "Use Case Guide",
          downloadable: true,
          available: true,
          filePath: "/resources/Versatility of Cordflex.pdf"
        },
        {
          title: "FAQ Document",
          description: "Common questions and answers about Cordflex implementation (File too large for web hosting - contact us for access)",
          type: "Reference Guide",
          downloadable: true,
          available: false
        },
        {
          title: "Top 10 Health Tech Hazards 2025",
          description: "ECRI report on health technology hazards and how Cordflex addresses key concerns",
          type: "Industry Report",
          downloadable: true,
          available: true,
          filePath: "/resources/Top10HealthTechHazards_2025_ExecutiveBrief.pdf"
        }
      ]
    },
    {
      title: "Financial Analysis & ROI Tools",
      icon: <Calculator className="h-6 w-6" />,
      resources: [
        {
          title: "ROI Calculator",
          description: "Interactive tool to calculate return on investment for Cordflex",
          type: "Online Tool",
          downloadable: false,
          interactive: true,
          available: true,
          link: "/roi-calculator.html"
        },
        {
          title: "Cost Benefit Analysis of Using Cordflex",
          description: "Detailed financial impact analysis with references and ROI data",
          type: "PDF Analysis",
          downloadable: true,
          available: true,
          filePath: "/resources/Cost Benefit Analysis of Using Cordflex.pdf"
        }
      ]
    },
    {
      title: "Committee Presentations",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Introducing Cordflex Presentation",
          description: "PowerPoint presentation for introducing Cordflex to committees and stakeholders",
          type: "PowerPoint",
          downloadable: true,
          available: false,
          externalLink: true
        },
        {
          title: "Value Analysis Committee Results",
          description: "Presentation template for sharing Cordflex trial results with value analysis committees",
          type: "PowerPoint",
          downloadable: true,
          available: false,
          externalLink: true
        }
      ]
    },
    {
      title: "Technical Reports",
      icon: <FileText className="h-6 w-6" />,
      resources: [
        {
          title: "Cordflex Technical Information",
          description: "Detailed specifications and engineering documentation",
          type: "Technical Document",
          downloadable: true,
          available: true,
          filePath: "/resources/Cordflex-Technical Info.pdf"
        },
        {
          title: "MSDS Data Sheet",
          description: "Material Safety Data Sheet for Cordflex components",
          type: "Safety Document",
          downloadable: true,
          available: false
        },
        {
          title: "Reporting Cordflex Issues",
          description: "Guidelines for reporting technical issues or adverse events",
          type: "Procedure Guide",
          downloadable: true,
          available: false
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
          available: true,
          link: "https://calendly.com/davidusevitch/meet-with-david-nursetech-medical",
          external: true
        },
        {
          title: "Request a Sample",
          description: "Get a free sample kit for your ICU",
          type: "Sample Request",
          downloadable: false,
          available: true,
          link: "/sample-request"
        },
        {
          title: "Request a Trial",
          description: "Request a comprehensive trial in your facility",
          type: "Trial Request",
          downloadable: false,
          available: true,
          link: "/trial-request"
        }
      ]
    }
  ];

  const handleResourceClick = (resource) => {
    // Don't allow clicking unavailable resources
    if (!resource.available) {
      return;
    }

    if (resource.downloadable && resource.filePath) {
      // Open PDF in new tab for download/viewing
      window.open(resource.filePath, '_blank');
    } else if (resource.interactive && resource.link) {
      // Open interactive tool in new tab
      window.open(resource.link, '_blank');
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
                        className={`bg-white shadow-lg transition-all duration-300 ${
                          resource.available
                            ? 'hover:shadow-xl cursor-pointer transform hover:-translate-y-1'
                            : 'opacity-50 cursor-not-allowed'
                        }`}
                        onClick={() => handleResourceClick(resource)}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant="secondary"
                              style={{
                                backgroundColor: resource.available ? '#DFEAF0' : '#e5e7eb',
                                color: resource.available ? '#214140' : '#9ca3af'
                              }}
                            >
                              {resource.type}
                            </Badge>
                            <div className="flex items-center space-x-2">
                              {getResourceIcon(resource.type)}
                              {resource.downloadable && <Download className={`h-4 w-4 ${resource.available ? 'text-gray-500' : 'text-gray-400'}`} />}
                              {resource.external && <ExternalLink className={`h-4 w-4 ${resource.available ? 'text-gray-500' : 'text-gray-400'}`} />}
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight" style={{ color: resource.available ? '#214140' : '#9ca3af' }}>
                            {resource.title}
                            {!resource.available && <span className="text-xs ml-2 font-normal text-gray-400">(Coming Soon)</span>}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className={`text-sm mb-4 ${resource.available ? 'text-gray-600' : 'text-gray-400'}`}>
                            {resource.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={!resource.available}
                              className={resource.available ? 'hover:bg-teal-50 transition-colors duration-200' : 'cursor-not-allowed'}
                              style={{
                                borderColor: resource.available ? '#214140' : '#d1d5db',
                                color: resource.available ? '#214140' : '#9ca3af'
                              }}
                            >
                              {resource.downloadable ? 'Download' :
                               resource.interactive ? 'Launch Tool' :
                               resource.external ? 'Open Link' : 'Access'}
                            </Button>
                            {resource.downloadable && resource.available && (
                              <span className="text-xs text-gray-500">Free Download</span>
                            )}
                            {!resource.available && (
                              <span className="text-xs text-gray-400 italic">Not Available</span>
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
              <div className="text-center max-w-4xl mx-auto mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Schedule a Consultation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Book a time to speak with our clinical team about implementing Cordflex in your facility
                </p>
              </div>

              {/* Calendly Embed */}
              <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 shadow-lg">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/davidusevitch/meet-with-david-nursetech-medical?hide_gdpr_banner=1&primary_color=214140"
                  style={{ minWidth: '320px', height: '700px' }}
                ></div>
              </div>

              {/* Alternative Contact Option */}
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Prefer another way to reach us?</p>
                <Button
                  variant="outline"
                  className="px-6 py-3 font-semibold border-2 hover:bg-teal-50 transition-colors duration-200"
                  style={{ borderColor: '#214140', color: '#214140' }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Support Team
                </Button>
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
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>Instructions for Use</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('/resources/Instructions For Use.pdf', '_blank')}
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calculator className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>ROI Calculator</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('/roi-calculator.html', '_blank')}
                  >
                    Launch Tool
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Video className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>Training Videos</h3>
                  <Button variant="outline" size="sm" onClick={() => window.location.href = '/videos'}>
                    View All
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 mx-auto mb-4" style={{ color: '#8BBAB8' }} />
                  <h3 className="font-semibold mb-2" style={{ color: '#214140' }}>Schedule Call</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open('https://calendly.com/davidusevitch/meet-with-david-nursetech-medical', '_blank')}
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