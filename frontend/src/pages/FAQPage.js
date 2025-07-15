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
      answer: "Installation takes just 30 seconds. The intuitive design works like a hair clip, making it easy for staff to use immediately.",
      category: "Installation"
    },
    {
      id: 2,
      question: "Is training required for staff?",
      answer: "Minimal training is required - just 15 minutes of staff training is sufficient for full implementation.",
      category: "Training"
    },
    {
      id: 3,
      question: "What types of medical lines does it support?",
      answer: "Cordflex accommodates all line types and attaches to any surface with 2-degree freedom of movement.",
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
      answer: "Clinical studies show 37% faster line identification, 40% reduction in line pullouts, and 25% increase in patient ambulation.",
      category: "Results"
    },
    {
      id: 6,
      question: "How much does Cordflex cost?",
      answer: "Pricing varies based on quantity and package type. Contact us for detailed pricing information and bulk discounts.",
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
      question: "Can Cordflex be used in other hospital units?",
      answer: "While designed for ICU use, Cordflex can be effective in any unit where line management is crucial, such as emergency departments and step-down units.",
      category: "Compatibility"
    },
    {
      id: 9,
      question: "How do I request a sample or trial?",
      answer: "You can request a sample through our website form or contact our sales team directly. Trial programs are available for qualified institutions.",
      category: "Ordering"
    },
    {
      id: 10,
      question: "What support is available during implementation?",
      answer: "We provide comprehensive implementation support including staff training, workflow optimization, and ongoing technical assistance.",
      category: "Support"
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
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                  >
                    Contact Support
                  </button>
                  <button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#1F8051', color: 'white' }}
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