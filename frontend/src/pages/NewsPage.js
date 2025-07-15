import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, ExternalLink, Award, Newspaper } from 'lucide-react';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Cordflex Receives FDA 510(k) Clearance",
      excerpt: "Nursetech Medical announces FDA clearance for Cordflex, marking a major milestone in ICU line management innovation.",
      date: "2024-01-20",
      category: "FDA Approval",
      type: "press-release",
      external: false
    },
    {
      id: 2,
      title: "Study Shows 40% Reduction in Line Pullouts",
      excerpt: "New clinical study demonstrates significant improvements in patient safety with Cordflex implementation.",
      date: "2024-01-18",
      category: "Research",
      type: "study",
      external: false
    },
    {
      id: 3,
      title: "Nursetech Medical Wins Healthcare Innovation Award",
      excerpt: "Cordflex recognized as 'Best New Medical Device' at the 2024 Healthcare Innovation Summit.",
      date: "2024-01-15",
      category: "Awards",
      type: "award",
      external: false
    },
    {
      id: 4,
      title: "Partnership with Leading Hospital Systems",
      excerpt: "Major hospital networks adopt Cordflex for system-wide ICU implementation following successful pilot programs.",
      date: "2024-01-12",
      category: "Partnerships",
      type: "announcement",
      external: false
    },
    {
      id: 5,
      title: "Featured in Modern Healthcare Magazine",
      excerpt: "Cordflex highlighted as game-changing technology in patient safety and nurse workflow optimization.",
      date: "2024-01-10",
      category: "Media Coverage",
      type: "media",
      external: true,
      link: "https://example.com/modern-healthcare-feature"
    },
    {
      id: 6,
      title: "Clinical Evidence Published in Critical Care Medicine",
      excerpt: "Peer-reviewed research on Cordflex effectiveness published in leading critical care journal.",
      date: "2024-01-08",
      category: "Publications",
      type: "publication",
      external: true,
      link: "https://example.com/critical-care-publication"
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: "Nursetech Medical Announces Series A Funding",
      date: "2024-01-25",
      excerpt: "Company raises $10M to expand Cordflex production and accelerate market penetration."
    },
    {
      id: 2,
      title: "New Manufacturing Facility Opens",
      date: "2024-01-22",
      excerpt: "State-of-the-art facility increases production capacity to meet growing demand."
    },
    {
      id: 3,
      title: "International Expansion Announced",
      date: "2024-01-20",
      excerpt: "Cordflex to be available in Canadian and European markets by Q3 2024."
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'press-release':
        return <Newspaper className="h-5 w-5" />;
      case 'award':
        return <Award className="h-5 w-5" />;
      case 'study':
      case 'publication':
        return <ExternalLink className="h-5 w-5" />;
      default:
        return <Newspaper className="h-5 w-5" />;
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
                  News & Press
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Stay informed about the latest developments, research findings, and industry recognition 
                  for Cordflex and Nursetech Medical.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Latest News
                </h2>
                <p className="text-xl text-gray-600">
                  Recent updates and announcements
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-gray-500">
                        {getIcon(item.type)}
                        <span className="text-sm">{item.type.replace('-', ' ')}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-teal-600 transition-colors duration-200">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </div>
                      <button className="text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200">
                        {item.external ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <span>Read More</span>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Press Releases
                </h2>
                <p className="text-xl text-gray-600">
                  Official company announcements
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={100} className="space-y-6">
                {pressReleases.map((release) => (
                  <AnimatedSection key={release.id} animation="fade-left">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 hover:text-teal-600 transition-colors duration-200 cursor-pointer" style={{ color: '#214140' }}>
                              {release.title}
                            </h3>
                            <p className="text-gray-600 mb-3">
                              {release.excerpt}
                            </p>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(release.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <button className="ml-4 text-teal-600 hover:text-teal-800 transition-colors duration-200">
                            <ExternalLink className="h-5 w-5" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Media Kit
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Access high-resolution images, company logos, press releases, and executive bios for media coverage.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-lg p-6 text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">Brand Assets</h3>
                    <p className="text-gray-300 text-sm mb-4">Logos, product images, and brand guidelines</p>
                    <button className="text-teal-400 hover:text-teal-300 font-medium">
                      Download →
                    </button>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">Executive Bios</h3>
                    <p className="text-gray-300 text-sm mb-4">Leadership team profiles and headshots</p>
                    <button className="text-teal-400 hover:text-teal-300 font-medium">
                      Download →
                    </button>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                  >
                    Request Interview
                  </button>
                  <button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#1F8051', color: 'white' }}
                  >
                    Contact Media Relations
                  </button>
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

export default NewsPage;