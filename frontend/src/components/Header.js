import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, Search, Phone } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartDropdown from './CartDropdown';
import SearchModal from './SearchModal';
import { Badge } from './ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navigationItems = [
    {
      label: 'Product',
      items: [
        { label: 'Cordflex™ Overview', path: '/product-overview' },
        { label: 'Clinical Evidence', path: '/clinical-evidence' },
        { label: 'How It Works', path: '/how-it-works' },
        { label: 'Specifications', path: '/specifications' },
        { label: 'Order Now', path: '/order-now' }
      ]
    },
    {
      label: 'Resources',
      items: [
        { label: 'Resource Library', path: '/resource-library' },
        { label: 'Videos', path: '/videos' },
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Support', path: '/support' },
        { label: 'Blog', path: '/blog' },
        { label: 'News & Press', path: '/news' },
        { label: 'FAQs', path: '/faq' }
      ]
    },
    {
      label: 'About',
      items: [
        { label: 'Our Company', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Partners', path: '/partners' },
        { label: 'Find a Distributor', path: '/find-distributor' }
      ]
    },
    {
      label: 'Contact',
      items: [],
      path: '/contact'
    }
  ];

  const handleSampleRequest = () => {
    window.location.href = '/sample-request';
  };

  const handleTrialRequest = () => {
    window.location.href = '/trial-request';
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+18002673539';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#214140' }}>
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div className="text-2xl font-bold" style={{ color: '#214140' }}>
              Nursetech Medical
            </div>
          </Link>

          {/* Call Now Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={handleCallNow}
              variant="outline"
              size="sm"
              className="border-2 hover:bg-green-50 transition-colors duration-200"
              style={{ borderColor: '#1F8051', color: '#1F8051' }}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.path ? (
                  <Link 
                    to={item.path} 
                    className={`transition-colors duration-200 font-medium ${
                      location.pathname === item.path 
                        ? 'text-teal-600' 
                        : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium">
                    {item.label}
                  </button>
                )}
                {item.items && item.items.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={handleSampleRequest}
              className="border-2 hover:bg-teal-50 transition-colors duration-200"
              style={{ borderColor: '#214140', color: '#214140' }}
            >
              Request a Sample
            </Button>
            <Button
              onClick={handleTrialRequest}
              className="hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#214140', color: 'white' }}
            >
              Request a Trial
            </Button>
            
            {/* Cart Icon */}
            <div className="relative">
              <button
                onClick={() => setIsCartDropdownOpen(!isCartDropdownOpen)}
                className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors duration-200"
              >
                <ShoppingCart className="h-6 w-6" />
                {getTotalItems() > 0 && (
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0"
                    style={{ backgroundColor: '#214140' }}
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </button>
              {isCartDropdownOpen && (
                <CartDropdown onClose={() => setIsCartDropdownOpen(false)} />
              )}
            </div>

            <button 
              onClick={() => setIsSearchModalOpen(true)}
              className="p-2 text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              <Search className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {/* Call Now Button for Mobile */}
              <Button
                onClick={handleCallNow}
                variant="outline"
                className="border-2 hover:bg-green-50 transition-colors duration-200 mb-4"
                style={{ borderColor: '#1F8051', color: '#1F8051' }}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: 1-800-CORDFLEX
              </Button>

              {navigationItems.map((item, index) => (
                <div key={index}>
                  {item.path ? (
                    <Link 
                      to={item.path} 
                      className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium">
                      {item.label}
                    </button>
                  )}
                  {item.items && item.items.length > 0 && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    handleSampleRequest();
                    setIsMenuOpen(false);
                  }}
                  className="border-2 hover:bg-teal-50 transition-colors duration-200"
                  style={{ borderColor: '#214140', color: '#214140' }}
                >
                  Request a Sample
                </Button>
                <Button
                  onClick={() => {
                    handleTrialRequest();
                    setIsMenuOpen(false);
                  }}
                  className="hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: '#214140', color: 'white' }}
                >
                  Request a Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <div className="flex space-x-2">
          <Button
            onClick={handleCallNow}
            variant="outline"
            className="flex-1 border-2 hover:bg-green-50 transition-colors duration-200"
            style={{ borderColor: '#1F8051', color: '#1F8051' }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call
          </Button>
          <Button
            onClick={() => window.location.href = '/order-now'}
            className="flex-1 hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#214140', color: 'white' }}
          >
            Order Now
          </Button>
        </div>
      </div>
      
      {/* Search Modal */}
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
      />
    </header>
  );
};

export default Header;