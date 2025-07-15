import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartDropdown from './CartDropdown';
import { Badge } from './ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Product',
      items: [
        'Cordflex™ Clip Overview',
        'Clinical Evidence',
        'How It Works'
      ]
    },
    {
      label: 'Resources',
      items: [
        'Resource Center',
        'Blog',
        'News & Press'
      ]
    },
    {
      label: 'About',
      items: []
    },
    {
      label: 'Contact',
      items: []
    }
  ];

  const handleSampleRequest = () => {
    // Mock sample request
    console.log('Sample request initiated');
  };

  const handleTrialRequest = () => {
    // Mock trial request
    console.log('Trial request initiated');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold" style={{ color: '#214140' }}>
              Nursetech Medical
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium">
                  {item.label}
                </button>
                {item.items.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.items.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-teal-600 transition-colors duration-200"
                        >
                          {subItem}
                        </button>
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
              style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
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

            <button className="p-2 text-gray-700 hover:text-teal-600 transition-colors duration-200">
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
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <button className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium">
                    {item.label}
                  </button>
                  {item.items.length > 0 && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="block text-sm text-gray-600 hover:text-teal-600 transition-colors duration-200"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  onClick={handleSampleRequest}
                  className="border-2 hover:bg-teal-50 transition-colors duration-200"
                  style={{ borderColor: '#8BBAB8', color: '#8BBAB8' }}
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
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <Button
          onClick={handleTrialRequest}
          className="w-full hover:opacity-90 transition-opacity duration-200"
          style={{ backgroundColor: '#214140', color: 'white' }}
        >
          Request a Trial
        </Button>
      </div>
    </header>
  );
};

export default Header;