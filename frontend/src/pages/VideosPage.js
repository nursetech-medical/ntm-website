import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Play, Clock, Users, ExternalLink } from 'lucide-react';

const VideosPage = () => {
  const videoSections = [
    {
      title: "Cordflex Overview",
      videos: [
        {
          title: "Cordflex Introduction and Benefits",
          duration: "3:24",
          description: "Complete overview of the Cordflex system and its impact on ICU line management",
          url: "https://youtu.be/uxTUu8HbrEg",
          thumbnail: "overview-thumb.jpg",
          available: true
        }
      ]
    },
    {
      title: "In-service Training Video - How to use Cordflex",
      videos: [
        {
          title: "Step-by-Step Installation Guide",
          duration: "2:45",
          description: "Detailed instructions for proper Cordflex installation and setup",
          url: null,
          thumbnail: "installation-thumb.jpg",
          available: false
        },
        {
          title: "Best Practices for Line Management",
          duration: "4:12",
          description: "Expert tips for optimal line organization and patient safety",
          url: null,
          thumbnail: "best-practices-thumb.jpg",
          available: false
        }
      ]
    },
    {
      title: "Cordflex for Ambulation",
      videos: [
        {
          title: "Safe Patient Ambulation with Cordflex",
          duration: "5:18",
          description: "How Cordflex enables safer and more efficient patient mobility",
          url: null,
          thumbnail: "ambulation-thumb.jpg",
          available: false
        },
        {
          title: "Ambulation Protocols and Procedures",
          duration: "3:56",
          description: "Standardized protocols for using Cordflex during patient walks",
          url: null,
          thumbnail: "protocols-thumb.jpg",
          available: false
        }
      ]
    },
    {
      title: "Cordflex for Rotating a Patient in Bed",
      videos: [
        {
          title: "Bed Positioning with Line Management",
          duration: "4:32",
          description: "Maintaining line organization during patient repositioning",
          url: null,
          thumbnail: "bed-positioning-thumb.jpg",
          available: false
        }
      ]
    },
    {
      title: "Cordflex for Transfers to Imaging",
      videos: [
        {
          title: "Imaging Department Transfers",
          duration: "3:47",
          description: "Streamlined patient transfers with organized line management",
          url: null,
          thumbnail: "imaging-thumb.jpg",
          available: false
        }
      ]
    },
    {
      title: "Cordflex for the NICU",
      videos: [
        {
          title: "NICU Implementation Guidelines",
          duration: "6:23",
          description: "Specialized considerations for neonatal intensive care applications",
          url: null,
          thumbnail: "nicu-thumb.jpg",
          available: false
        }
      ]
    },
    {
      title: "Cordflex for the PICU",
      videos: [
        {
          title: "Pediatric ICU Best Practices",
          duration: "5:41",
          description: "Adapting Cordflex for pediatric patient care scenarios",
          url: null,
          thumbnail: "picu-thumb.jpg",
          available: false
        }
      ]
    },
    {
      title: "Cordflex for Specialty Lines",
      videos: [
        {
          title: "Complex Line Management",
          duration: "7:15",
          description: "Managing specialty lines including dialysis, ECMO, and VAD systems",
          url: null,
          thumbnail: "specialty-thumb.jpg",
          available: false
        }
      ]
    }
  ];

  const handleVideoClick = (video) => {
    if (video.available && video.url) {
      window.open(video.url, '_blank');
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
                  Training & Explainer Videos
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Comprehensive video library covering all aspects of Cordflex implementation, 
                  training, and specialized use cases across different ICU environments.
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    <Users className="h-4 w-4 mr-2" />
                    Training Materials
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                    <Play className="h-4 w-4 mr-2" />
                    Video Library
                  </Badge>
                </div>
                <p className="text-gray-600">
                  <em>Additional videos coming soon. Contact us for specific training needs.</em>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Video Sections */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {videoSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-16">
                  <AnimatedSection animation="fade-up">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: '#214140' }}>
                      {section.title}
                    </h2>
                  </AnimatedSection>
                  
                  <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.videos.map((video, videoIndex) => (
                      <Card 
                        key={videoIndex} 
                        className={`bg-white shadow-lg transition-all duration-300 ${
                          video.available 
                            ? 'hover:shadow-xl cursor-pointer transform hover:-translate-y-1' 
                            : 'opacity-60'
                        }`}
                        onClick={() => handleVideoClick(video)}
                      >
                        <CardHeader className="pb-3">
                          <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                            {video.available ? (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                  <Play className="h-8 w-8 ml-1" style={{ color: '#214140' }} />
                                </div>
                              </div>
                            ) : (
                              <div className="text-center">
                                <div className="text-4xl mb-2">🎬</div>
                                <p className="text-sm text-gray-600">Coming Soon</p>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <Badge 
                              variant={video.available ? "default" : "secondary"}
                              style={{ 
                                backgroundColor: video.available ? '#1F8051' : '#gray-400',
                                color: 'white' 
                              }}
                            >
                              {video.available ? 'Available' : 'Coming Soon'}
                            </Badge>
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                              <Clock className="h-3 w-3" />
                              <span>{video.duration}</span>
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight" style={{ color: '#214140' }}>
                            {video.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm">{video.description}</p>
                          {video.available && (
                            <div className="mt-4 flex items-center text-teal-600">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              <span className="text-sm">Watch on YouTube</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </StaggeredList>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Custom Training */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Need Custom Training?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our team can create customized training materials tailored to your specific ICU environment and protocols.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.open('https://calendly.com/davidusevitch/cordflex-consultation', '_blank')}
                  >
                    Schedule a Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-teal-50 transition-colors duration-200"
                    style={{ borderColor: '#214140', color: '#214140' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Training Team
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Additional Resources
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Complement your video training with these additional materials
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center" style={{ color: '#214140' }}>
                    Written Guides
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Comprehensive PDF guides and quick reference cards
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/resource-library'}
                  >
                    Access Library
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center" style={{ color: '#214140' }}>
                    Live Training
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    On-site training sessions with our clinical team
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Request Training
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center" style={{ color: '#214140' }}>
                    Technical Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    24/7 support for implementation questions
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.location.href = '/support'}
                  >
                    Get Support
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

export default VideosPage;