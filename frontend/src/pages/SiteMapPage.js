import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Home, 
  Info, 
  Phone, 
  ShoppingCart, 
  FileText, 
  Users, 
  Award, 
  Building, 
  Globe,
  Video,
  BookOpen,
  HelpCircle,
  Newspaper,
  Search,
  Settings,
  Shield,
  ExternalLink
} from 'lucide-react';

const SiteMapPage = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      icon: <Home className="h-5 w-5" />,
      pages: [
        { name: "Home", path: "/", description: "Main landing page with product overview and key features" },
        { name: "About Us", path: "/about", description: "Company information, mission, and team details" },
        { name: "Contact", path: "/contact", description: "Contact information and inquiry form" }
      ]
    },
    {
      title: "Product Information",
      icon: <Info className="h-5 w-5" />,
      pages: [
        { name: "Product Overview", path: "/product-overview", description: "Comprehensive overview of Cordflex features and benefits" },
        { name: "How It Works", path: "/how-it-works", description: "Step-by-step guide to using Cordflex" },
        { name: "Specifications", path: "/specifications", description: "Technical specifications and compatibility information" },
        { name: "Clinical Evidence", path: "/clinical-evidence", description: "Research, studies, and clinical validation data" }
      ]
    },
    {
      title: "Ordering & Purchasing",
      icon: <ShoppingCart className="h-5 w-5" />,
      pages: [
        { name: "Order Now", path: "/order-now", description: "Product ordering and purchasing options" },
        { name: "Sample Request", path: "/sample-request", description: "Request a free sample kit" },
        { name: "Trial Request", path: "/trial-request", description: "Start a pilot program at your facility" },
        { name: "Find a Distributor", path: "/find-distributor", description: "Locate authorized distributors in your area" }
      ]
    },
    {
      title: "Resources & Support",
      icon: <BookOpen className="h-5 w-5" />,
      pages: [
        { name: "Resource Library", path: "/resource-library", description: "Training materials, guides, and documentation" },
        { name: "Videos", path: "/videos", description: "Product demonstrations and training videos" },
        { name: "Support Center", path: "/support", description: "Technical support and customer service" },
        { name: "FAQ", path: "/faq", description: "Frequently asked questions and answers" }
      ]
    },
    {
      title: "Company & News",
      icon: <Building className="h-5 w-5" />,
      pages: [
        { name: "News & Press", path: "/news", description: "Latest company news and press releases" },
        { name: "Case Studies", path: "/case-studies", description: "Real-world implementation success stories" },
        { name: "Careers", path: "/careers", description: "Job opportunities and company culture" },
        { name: "Partners", path: "/partners", description: "Partnership opportunities and distributor network" }
      ]
    },
    {
      title: "Legal & Policies",
      icon: <Shield className="h-5 w-5" />,
      pages: [
        { name: "Privacy Policy", path: "/privacy-policy", description: "Data privacy and protection policies" },
        { name: "Terms of Service", path: "/terms-of-service", description: "Terms and conditions for using our services" },
        { name: "Refund Policy", path: "/refund-policy", description: "Return and refund procedures" },
        { name: "Intellectual Property", path: "/intellectual-property", description: "Patent and trademark information" }
      ]
    }
  ];

  const quickLinks = [
    { name: "Request Sample", path: "/sample-request", icon: <FileText className="h-4 w-4" /> },
    { name: "Start Trial", path: "/trial-request", icon: <Users className="h-4 w-4" /> },
    { name: "Get Support", path: "/support", icon: <HelpCircle className="h-4 w-4" /> },
    { name: "Contact Sales", path: "/contact", icon: <Phone className="h-4 w-4" /> }
  ];

  const handlePageClick = (path) => {
    window.location.href = path;
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
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#214140', color: 'white' }}>
                    <Search className="h-8 w-8" />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#214140' }}>
                  Site Map
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Navigate through all pages and sections of the Cordflex website. 
                  Find exactly what you're looking for with our complete site structure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/'}
                  >
                    <Home className="h-5 w-5 mr-2" />
                    Back to Home
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: '#214140' }}>
                  Quick Links
                </h2>
                <p className="text-lg text-gray-600">
                  Fast access to our most popular pages
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={100} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Card 
                  key={index} 
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => handlePageClick(link.path)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                      {link.icon}
                    </div>
                    <h3 className="font-semibold" style={{ color: '#214140' }}>
                      {link.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Site Structure */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Complete Site Structure
                </h2>
                <p className="text-xl text-gray-600">
                  Explore all sections and pages of our website
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="space-y-8">
              {siteStructure.map((section, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3 text-xl" style={{ color: '#214140' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                        {section.icon}
                      </div>
                      <span>{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <div 
                          key={pageIndex} 
                          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                          onClick={() => handlePageClick(page.path)}
                        >
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#214140' }}></div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 hover:text-teal-600 transition-colors duration-200" style={{ color: '#214140' }}>
                              {page.name}
                            </h4>
                            <p className="text-sm text-gray-600">{page.description}</p>
                            <div className="text-xs text-gray-500 mt-1">
                              {page.path}
                            </div>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 mt-1" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Website Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Website Overview
                </h2>
                <p className="text-xl text-gray-600">
                  Quick facts about our website structure
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={200} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#214140', color: 'white' }}>
                    <FileText className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#214140' }}>
                    {siteStructure.reduce((total, section) => total + section.pages.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Pages</div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                    <Settings className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#214140' }}>
                    {siteStructure.length}
                  </div>
                  <div className="text-sm text-gray-600">Main Sections</div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#1F8051', color: 'white' }}>
                    <ShoppingCart className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#214140' }}>
                    4
                  </div>
                  <div className="text-sm text-gray-600">Purchase Options</div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{ backgroundColor: '#214140', color: 'white' }}>
                    <HelpCircle className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: '#214140' }}>
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </CardContent>
              </Card>
            </StaggeredList>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Need Help Finding Something?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  If you can't find what you're looking for, our support team is here to help. 
                  Contact us for assistance navigating our website or finding specific information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Support
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold bg-white text-gray-800 border-white hover:bg-gray-100"
                    onClick={() => window.location.href = '/faq'}
                  >
                    <HelpCircle className="h-5 w-5 mr-2" />
                    View FAQ
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

export default SiteMapPage;