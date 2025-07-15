import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  const handleSampleRequest = () => {
    console.log('Sample request from footer');
  };

  const handleTrialStart = () => {
    console.log('Trial start from footer');
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
              Product
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Cordflex™ Overview</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Clinical Evidence</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Specifications</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Order Now</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
              Resources
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Resource Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">News & Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">FAQs</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
              Company
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">About Nursetech</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-200">Partners</a></li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#214140' }}>
              Get Started
            </h3>
            <div className="space-y-3">
              <Button
                onClick={handleSampleRequest}
                className="w-full justify-start hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#8BBAB8', color: 'white' }}
              >
                Request a Sample
              </Button>
              <Button
                onClick={handleTrialStart}
                className="w-full justify-start hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#214140', color: 'white' }}
              >
                Start Your Trial
              </Button>
              <div className="space-y-2 pt-2">
                <a href="#" className="block text-gray-600 hover:text-teal-600 transition-colors duration-200">Schedule a Demo</a>
                <a href="#" className="block text-gray-600 hover:text-teal-600 transition-colors duration-200">Contact Sales</a>
                <a href="#" className="block text-gray-600 hover:text-teal-600 transition-colors duration-200">Find a Distributor</a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-md mx-auto text-center">
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
                className="flex-1"
                required
              />
              <Button 
                type="submit"
                className="hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#214140', color: 'white' }}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 py-6" style={{ backgroundColor: '#273139' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 Nursetech Medical. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Terms of Use</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">Accessibility</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
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