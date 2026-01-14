import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Search, HelpCircle, Clock, Shield, Users, DollarSign } from 'lucide-react';
import { faqApi } from '../services/api';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  // Extended FAQ data with categories
  const extendedFaqs = [
    {
      id: 1,
      question: "How long does it take to install the Cordflex Clip?",
      answer: "Installation takes less than 30 seconds. The intuitive design works like a hair clip, making it easy for staff to use immediately.",
      category: "Installation"
    },
    {
      id: 2,
      question: "Is training required for staff?",
      answer: "Minimal training is required - just 5 minutes of staff training is sufficient for full implementation.",
      category: "Training"
    },
    {
      id: 3,
      question: "What types of medical lines does it support?",
      answer: "Cordflex accommodates all line types and attaches to any surface with 2-degree freedom of movement, including IV lines, central lines, arterial lines, and specialty lines.",
      category: "Compatibility"
    },
    {
      id: 4,
      question: "Is the Cordflex Clip sterile?",
      answer: "Yes, Cordflex is single-use, sterile, and FDA registered for safe use in ICU environments.",
      category: "Safety"
    },
    {
      id: 5,
      question: "What kind of results can we expect?",
      answer: "Clinical studies show 37% faster line identification, 40% reduction in line pullouts, 25% increase in patient ambulation, 61% reduction in line disconnections, and 84% decrease in nurse callback incidents.",
      category: "Results"
    },
    {
      id: 6,
      question: "How much does Cordflex cost?",
      answer: "Pricing varies based on quantity and package type. Contact us for detailed pricing information and bulk discounts. Most facilities see ROI within the first year of implementation.",
      category: "Pricing"
    },
    {
      id: 7,
      question: "What is the warranty policy?",
      answer: "Cordflex comes with a satisfaction guarantee. If you're not completely satisfied, we'll work with you to resolve any issues.",
      category: "Warranty"
    },
    {
      id: 8,
      question: "Can Cordflex be used in other hospital units besides the ICU?",
      answer: "Yes! While designed for ICU use, Cordflex can be effective in any unit where line management is crucial, including emergency departments, step-down units, NICU, PICU, and during patient transfers.",
      category: "Compatibility"
    },
    {
      id: 9,
      question: "How do I request a sample or trial?",
      answer: "You can request a sample through our website form or contact our sales team directly at (410) 835-4089. Trial programs are available for qualified institutions.",
      category: "Ordering"
    },
    {
      id: 10,
      question: "What support is available during implementation?",
      answer: "We provide comprehensive implementation support including staff training, workflow optimization, ongoing technical assistance, and access to our clinical team.",
      category: "Support"
    },
    {
      id: 11,
      question: "Is Cordflex reusable or single-use?",
      answer: "Cordflex is designed as a single-use device to ensure sterility and optimal performance for each patient.",
      category: "Safety"
    },
    {
      id: 12,
      question: "What materials is Cordflex made from?",
      answer: "Cordflex is manufactured from medical-grade materials that are safe for patient contact and compatible with standard hospital cleaning protocols. Full technical specifications are available in our technical documentation.",
      category: "Safety"
    },
    {
      id: 13,
      question: "Can Cordflex help reduce falls in the ICU?",
      answer: "Yes, by preventing line entanglement and reducing trip hazards, Cordflex has been shown to contribute to fall prevention efforts in the ICU.",
      category: "Results"
    },
    {
      id: 14,
      question: "How does Cordflex improve nurse workflow?",
      answer: "Cordflex reduces time spent managing tangled lines, decreases callbacks for line issues, and allows nurses to focus more on direct patient care. Studies show significant improvements in nurse satisfaction scores.",
      category: "Results"
    },
    {
      id: 15,
      question: "Is there clinical evidence supporting Cordflex?",
      answer: "Yes, Cordflex is supported by clinical evidence including peer-reviewed studies, hospital case studies, and real-world data from multiple healthcare facilities. Visit our Clinical Evidence page for detailed information.",
      category: "Results"
    },
    {
      id: 16,
      question: "What is the shelf life of Cordflex?",
      answer: "Cordflex has an extended shelf life when stored properly. Specific expiration information is printed on each package. Contact us for detailed storage requirements.",
      category: "Safety"
    },
    {
      id: 17,
      question: "Can I purchase Cordflex through a GPO or distributor?",
      answer: "Yes, Cordflex is available through various purchasing channels including GPOs and authorized distributors. We also have a partnership with Med One for equipment solutions.",
      category: "Ordering"
    },
    {
      id: 18,
      question: "What is the return policy?",
      answer: "Please see our Refund Policy page for detailed information about returns, or contact our customer service team for specific questions about your order.",
      category: "Warranty"
    },
    {
      id: 19,
      question: "How do I report a product issue or adverse event?",
      answer: "Product issues or adverse events should be reported immediately to our support team at (410) 835-4089 or info@nursetechmedical.com. We take all product safety concerns seriously.",
      category: "Support"
    },
    {
      id: 20,
      question: "Can Cordflex be used during patient transport or imaging?",
      answer: "Yes, Cordflex is specifically designed to help manage lines during patient transfers, including transport to imaging, ambulation, and bed repositioning.",
      category: "Compatibility"
    },
    {
      id: 21,
      question: "Does Cordflex work with specialty lines like dialysis catheters?",
      answer: "Yes, Cordflex accommodates specialty lines including dialysis catheters, Swan-Ganz catheters, and other complex line systems.",
      category: "Compatibility"
    },
    {
      id: 22,
      question: "What training materials are available?",
      answer: "We provide comprehensive training materials including instructional videos, step-by-step guides, and in-service training programs. All materials are available in our Resource Library.",
      category: "Training"
    },
    {
      id: 23,
      question: "How quickly can we get started with Cordflex?",
      answer: "Implementation is quick - most facilities can begin using Cordflex within days of receiving their order. The intuitive design and minimal training requirements allow for rapid adoption.",
      category: "Installation"
    },
    {
      id: 24,
      question: "Is Cordflex latex-free?",
      answer: "Yes, Cordflex is latex-free to accommodate patients and staff with latex sensitivities.",
      category: "Safety"
    },
    {
      id: 25,
      question: "Can I see presentations or case studies from other hospitals?",
      answer: "Yes, we have case studies, hospital testimonials, and presentation materials available in our Resource Library. These include results from facilities that have successfully implemented Cordflex.",
      category: "Results"
    }
  ];

  const categories = ['All', 'Installation', 'Training', 'Compatibility', 'Safety', 'Results', 'Pricing', 'Warranty', 'Ordering', 'Support'];

  const categoryIcons = {
    Installation: <Clock className="h-4 w-4" />,
    Training: <Users className="h-4 w-4" />,
    Compatibility: <HelpCircle className="h-4 w-4" />,
    Safety: <Shield className="h-4 w-4" />,
    Results: <HelpCircle className="h-4 w-4" />,
    Pricing: <DollarSign className="h-4 w-4" />,
    Warranty: <Shield className="h-4 w-4" />,
    Ordering: <HelpCircle className="h-4 w-4" />,
    Support: <Users className="h-4 w-4" />
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  useEffect(() => {
    filterFAQs();
  }, [searchTerm, selectedCategory, faqs]);

  const fetchFAQs = async () => {
    try {
      const response = await faqApi.getFAQ();
      const combinedFaqs = [...response.data, ...extendedFaqs];
      setFaqs(combinedFaqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      setFaqs(extendedFaqs);
    } finally {
      setIsLoading(false);
    }
  };

  const filterFAQs = () => {
    let filtered = faqs;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFaqs(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading FAQs...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Find answers to common questions about Cordflex, implementation, pricing, and support. 
                  Can't find what you're looking for? Contact our team for personalized assistance.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-10 pr-4 py-3 w-full text-lg"
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "secondary"}
                      className="px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: selectedCategory === category ? '#214140' : '#8BBAB8',
                        color: 'white'
                      }}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category !== 'All' && categoryIcons[category]}
                      <span className={category !== 'All' ? 'ml-2' : ''}>{category}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <AnimatedSection animation="fade-up">
                  <div className="text-center py-12">
                    <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No FAQs Found</h3>
                    <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                  </div>
                </AnimatedSection>
              ) : (
                <AnimatedSection animation="fade-up">
                  <Accordion type="single" collapsible className="space-y-4">
                    <StaggeredList delay={100}>
                      {filteredFaqs.map((faq, index) => (
                        <AccordionItem 
                          key={faq.id || index} 
                          value={`item-${index}`}
                          className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow duration-200"
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6" style={{ color: '#214140' }}>
                            <div className="flex items-center space-x-3">
                              {faq.category && categoryIcons[faq.category]}
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </StaggeredList>
                  </Accordion>
                </AnimatedSection>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our team of healthcare professionals is here to help. Contact us for personalized support and answers to your specific questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200 rounded-lg"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Support
                  </button>
                  <button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200 rounded-lg"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.open('https://calendly.com/davidusevitch/meet-with-david-nursetech-medical', '_blank')}
                  >
                    Schedule a Call
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

export default FAQPage;