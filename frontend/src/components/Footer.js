import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { newsletterApi, contactApi, handleApiError } from '../services/api';
import { useToast } from '../hooks/use-toast';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoadingNewsletter, setIsLoadingNewsletter] = useState(false);
  const [isLoadingSample, setIsLoadingSample] = useState(false);
  const [isLoadingTrial, setIsLoadingTrial] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoadingNewsletter(true);
    try {
      const response = await newsletterApi.subscribe(email);
      
      toast({
        title: "Newsletter Subscription",
        description: response.data.message,
        duration: 5000,
      });
      
      setEmail('');
    } catch (error) {
      const apiError = handleApiError(error);
      toast({
        title: "Error",
        description: apiError.message,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoadingNewsletter(false);
    }
  };

  const handleSampleRequest = async () => {
    setIsLoadingSample(true);
    try {
      const response = await contactApi.sampleRequest({
        name: 'Sample Request',
        email: 'sample@example.com',
        phone: '',
        hospital: 'Sample Hospital',
        department: 'ICU',
        beds: 30,
        source: 'Footer',
        comments: 'Interested in trying Cordflex from footer'
      });
      
      toast({
        title: "Sample Request Submitted",
        description: response.data.message,
        duration: 5000,
      });
    } catch (error) {
      const apiError = handleApiError(error);
      toast({
        title: "Error",
        description: apiError.message,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoadingSample(false);
    }
  };

  const handleTrialStart = async () => {
    setIsLoadingTrial(true);
    try {
      const response = await contactApi.trialRequest({
        name: 'Trial Request',
        title: 'Healthcare Professional',
        email: 'trial@example.com',
        phone: '',
        hospital: 'Sample Hospital',
        department: 'ICU',
        beds: 30,
        current_solution: 'Manual management',
        challenges: ['Line tangles', 'Patient safety'],
        start_date: new Date().toISOString(),
        timeline: '3 months',
        stakeholders: 'Nursing staff'
      });
      
      toast({
        title: "Trial Request Submitted",
        description: response.data.message,
        duration: 5000,
      });
    } catch (error) {
      const apiError = handleApiError(error);
      toast({
        title: "Error",
        description: apiError.message,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoadingTrial(false);
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
                Nursetech Medical Corp
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" style={{ color: '#8BBAB8' }} />
                  <a href="tel:+18002673539" className="hover:text-teal-600 transition-colors duration-200">
                    1-800-CORDFLEX (1-800-267-3539)
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" style={{ color: '#8BBAB8' }} />
                  <a href="mailto:info@nursetechmedical.com" className="hover:text-teal-600 transition-colors duration-200">
                    info@nursetechmedical.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1" style={{ color: '#8BBAB8' }} />
                  <div>
                    <p>Nursetech Medical LLC</p>
                    <p>123 Medical Plaza, Suite 400</p>
                    <p>Boston, MA 02101</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
                Product
              </h3>
              <ul className="space-y-2">
                <li><a href="/product-overview" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Cordflex™ Overview</a></li>
                <li><a href="/clinical-evidence" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Clinical Evidence</a></li>
                <li><a href="/how-it-works" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">How It Works</a></li>
                <li><a href="/specifications" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Specifications</a></li>
                <li><a href="/order-now" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Order Now</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
                Resources
              </h3>
              <ul className="space-y-2">
                <li><a href="/resource-library" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Resource Library</a></li>
                <li><a href="/videos" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Videos</a></li>
                <li><a href="/case-studies" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Case Studies</a></li>
                <li><a href="/support" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Support</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Blog</a></li>
                <li><a href="/news" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">News & Press</a></li>
                <li><a href="/faq" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">FAQs</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
                Company
              </h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">About Nursetech</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Contact Us</a></li>
                <li><a href="/support" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Support</a></li>
                <li><a href="/careers" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Careers</a></li>
                <li><a href="/partners" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Partners</a></li>
              </ul>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
                  Get Started
                </h3>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button
                    onClick={handleSampleRequest}
                    disabled={isLoadingSample}
                    className="hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#8BBAB8', color: 'white' }}
                  >
                    {isLoadingSample ? 'Processing...' : 'Request a Sample'}
                  </Button>
                  <Button
                    onClick={handleTrialStart}
                    disabled={isLoadingTrial}
                    className="hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    {isLoadingTrial ? 'Processing...' : 'Start Your Trial'}
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <a href="/contact" className="block text-gray-600 hover:text-teal-600 transition-colors duration-200">Contact Sales</a>
                  <a href="/distributors" className="block text-gray-600 hover:text-teal-600 transition-colors duration-200">Find a Distributor</a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#214140' }}>
                  Stay updated on ICU innovations
                </h4>
                <p className="text-gray-600 mb-4">
                  Get the latest updates on Cordflex and other medical device innovations
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={isLoadingNewsletter}
                    className="hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    {isLoadingNewsletter ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-6" style={{ backgroundColor: '#273139' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 Nursetech Medical Corp. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
                <span className="text-gray-400">|</span>
                <a href="/refund" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Refund Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/ip" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Intellectual Property</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/nursetech-medical" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/people/Nursetech-Medical/61565932484590/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/nursetech_medical/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCETfI7tJK6JbHgVr6_7kR3Q" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm italic">
                "Proudly designed by nurses, for nurses"
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;