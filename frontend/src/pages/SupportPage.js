import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Download, 
  Video, 
  BookOpen, 
  Users,
  HelpCircle,
  Search,
  FileText,
  PlayCircle,
  Headphones,
  Shield,
  CheckCircle
} from 'lucide-react';

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      title: "Technical Support",
      description: "Get help with device setup, troubleshooting, and technical issues",
      icon: <Phone className="h-8 w-8" />,
      contact: "(410) 835-4089",
      hours: "24/7 Available",
      urgency: "Emergency",
      color: "#214140"
    },
    {
      title: "Customer Service",
      description: "General inquiries, orders, and billing questions",
      icon: <Headphones className="h-8 w-8" />,
      contact: "support@nursetechmedical.com",
      hours: "Mon-Fri, 8AM-6PM EST",
      urgency: "Standard",
      color: "#8BBAB8"
    },
    {
      title: "Training & Education",
      description: "Implementation support, training materials, and best practices",
      icon: <BookOpen className="h-8 w-8" />,
      contact: "training@nursetechmedical.com",
      hours: "Mon-Fri, 9AM-5PM EST",
      urgency: "Scheduled",
      color: "#1F8051"
    },
    {
      title: "Clinical Support",
      description: "Clinical questions, protocol guidance, and safety information",
      icon: <Shield className="h-8 w-8" />,
      contact: "clinical@nursetechmedical.com",
      hours: "Mon-Fri, 7AM-7PM EST",
      urgency: "Priority",
      color: "#214140"
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Topics', count: 24 },
    { id: 'setup', name: 'Setup & Installation', count: 8 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 6 },
    { id: 'maintenance', name: 'Maintenance', count: 4 },
    { id: 'training', name: 'Training', count: 3 },
    { id: 'ordering', name: 'Ordering & Billing', count: 3 }
  ];

  const faqs = [
    {
      category: 'setup',
      question: 'How long does it take to set up Cordflex?',
      answer: 'Cordflex setup typically takes less than 30 seconds per connection. Our design prioritizes quick implementation to minimize workflow disruption.'
    },
    {
      category: 'setup',
      question: 'What training is required for nursing staff?',
      answer: 'We provide comprehensive training including hands-on demonstrations, video tutorials, and ongoing support. Most staff become proficient within one shift.'
    },
    {
      category: 'troubleshooting',
      question: 'What should I do if Cordflex becomes loose?',
      answer: 'Check the connection points and ensure proper alignment. If issues persist, contact our 24/7 technical support team for immediate assistance.'
    },
    {
      category: 'maintenance',
      question: 'How often should Cordflex be replaced?',
      answer: 'Cordflex is designed for single-use per patient admission. Replace when the patient is discharged or per your facility\'s infection control protocols.'
    },
    {
      category: 'training',
      question: 'Do you offer on-site training?',
      answer: 'Yes, we provide on-site training sessions, virtual training, and ongoing support to ensure successful implementation across your facility.'
    },
    {
      category: 'ordering',
      question: 'How do I place an order?',
      answer: 'Orders can be placed through our website, by calling our customer service team, or through your medical supply distributor.'
    }
  ];

  const resources = [
    {
      title: "Quick Start Guide",
      description: "Essential setup and usage instructions",
      type: "PDF",
      icon: <FileText className="h-6 w-6" />,
      downloadLink: "/resources/cordflex-quick-start.pdf"
    },
    {
      title: "Training Videos",
      description: "Step-by-step implementation tutorials",
      type: "Video",
      icon: <PlayCircle className="h-6 w-6" />,
      downloadLink: "/resources/training-videos"
    },
    {
      title: "Clinical Guidelines",
      description: "Best practices and clinical protocols",
      type: "PDF",
      icon: <BookOpen className="h-6 w-6" />,
      downloadLink: "/resources/clinical-guidelines.pdf"
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and solutions",
      type: "PDF",
      icon: <HelpCircle className="h-6 w-6" />,
      downloadLink: "/resources/troubleshooting-guide.pdf"
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

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
                  Support Center
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Get the help you need to successfully implement and use Cordflex. 
                  Our dedicated support team is here to ensure your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Support: (410) 835-4089
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Support
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  How Can We Help?
                </h2>
                <p className="text-xl text-gray-600">
                  Choose the best support channel for your needs
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: channel.color, color: 'white' }}
                      >
                        {channel.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                        {channel.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 text-center">
                        {channel.description}
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span className="font-medium">{channel.contact}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span className="text-gray-600">{channel.hours}</span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                          style={{ backgroundColor: '#DFEAF0', color: '#214140' }}
                        >
                          {channel.urgency}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Find quick answers to common questions
                </p>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                  <div className="relative">
                    <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                    <Input
                      placeholder="Search FAQs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {faqCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                      className="text-sm"
                      style={selectedCategory === category.id ? { backgroundColor: '#214140', color: 'white' } : {}}
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <StaggeredList delay={100} className="space-y-4">
                {searchedFaqs.map((faq, index) => (
                  <Card key={index} className="bg-white shadow-lg">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-start space-x-3">
                        <HelpCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span style={{ color: '#214140' }}>{faq.question}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  Support Resources
                </h2>
                <p className="text-xl text-gray-600">
                  Download guides, watch tutorials, and access training materials
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                      >
                        {resource.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {resource.description}
                      </p>
                      <Badge 
                        variant="secondary" 
                        className="mb-4"
                        style={{ backgroundColor: '#DFEAF0', color: '#214140' }}
                      >
                        {resource.type}
                      </Badge>
                      <Button
                        size="sm"
                        className="w-full"
                        style={{ backgroundColor: '#214140', color: 'white' }}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* Contact Support Form */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  Still Need Help?
                </h2>
                <p className="text-xl text-gray-300">
                  Contact our support team directly
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" type="text" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" />
                      </div>
                      <div>
                        <Label htmlFor="hospital">Hospital/Organization</Label>
                        <Input id="hospital" type="text" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <select 
                        id="subject" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="technical">Technical Support</option>
                        <option value="training">Training & Education</option>
                        <option value="clinical">Clinical Questions</option>
                        <option value="billing">Billing & Orders</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        rows={4} 
                        placeholder="Please describe your question or issue in detail..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full py-3 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                      style={{ backgroundColor: '#214140', color: 'white' }}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;