import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqApi } from '../services/api';
import AnimatedSection from './AnimatedSection';
import StaggeredList from './StaggeredList';

const FAQSection = () => {
  const [faq, setFaq] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFAQ();
  }, []);

  const fetchFAQ = async () => {
    try {
      const response = await faqApi.getFAQ();
      setFaq(response.data);
    } catch (error) {
      console.error('Error fetching FAQ:', error);
      // Fallback to mock data
      setFaq([
        {
          id: 1,
          question: "How long does it take to install the Cordflex Clip?",
          answer: "Installation takes less than 30 seconds. The intuitive design works like a hair clip, making it easy for staff to use immediately."
        },
        {
          id: 2,
          question: "Is training required for staff?",
          answer: "Minimal training is required - just 5 minutes of staff training is sufficient for full implementation."
        },
        {
          id: 3,
          question: "What types of medical lines does it support?",
          answer: "Cordflex accommodates all line types and attaches to any surface with 2-degree freedom of movement."
        },
        {
          id: 4,
          question: "Is the Cordflex Clip sterile?",
          answer: "Yes, Cordflex is single-use, sterile, and FDA registered for safe use in ICU environments."
        },
        {
          id: 5,
          question: "What kind of results can we expect?",
          answer: "Clinical studies show 37% faster line identification, 40% reduction in line pullouts, and 25% increase in patient ambulation."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading FAQ...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Cordflex implementation and usage
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200}>
            <Accordion type="single" collapsible className="space-y-4">
              <StaggeredList delay={100}>
                {faq.map((item, index) => (
                  <AccordionItem 
                    key={item.id || index} 
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6" style={{ color: '#214140' }}>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </StaggeredList>
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;