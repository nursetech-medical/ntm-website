import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, X, FileText, ExternalLink } from 'lucide-react';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Search data - contains all pages and their content
  const searchData = [
    {
      id: 1,
      title: "Cordflex™ Overview",
      description: "Comprehensive overview of Cordflex features, benefits, and clinical applications for ICU line management.",
      url: "/product-overview",
      category: "Product"
    },
    {
      id: 2,
      title: "Clinical Evidence",
      description: "Research studies, clinical trials, and evidence supporting Cordflex effectiveness in reducing line disconnections.",
      url: "/clinical-evidence",
      category: "Product"
    },
    {
      id: 3,
      title: "How It Works",
      description: "Step-by-step guide to using Cordflex in clinical settings with implementation instructions.",
      url: "/how-it-works",
      category: "Product"
    },
    {
      id: 4,
      title: "Specifications",
      description: "Technical specifications, compatibility information, and device requirements for Cordflex.",
      url: "/specifications",
      category: "Product"
    },
    {
      id: 5,
      title: "Order Now",
      description: "Purchase Cordflex products, view pricing, and access ordering information for healthcare facilities.",
      url: "/order-now",
      category: "Ordering"
    },
    {
      id: 6,
      title: "Request a Sample",
      description: "Get a free sample kit to evaluate Cordflex at your healthcare facility.",
      url: "/sample-request",
      category: "Ordering"
    },
    {
      id: 7,
      title: "Request a Trial",
      description: "Start a pilot program to test Cordflex in your ICU with full support and training.",
      url: "/trial-request",
      category: "Ordering"
    },
    {
      id: 8,
      title: "Case Studies",
      description: "Real-world success stories and outcomes from healthcare facilities using Cordflex.",
      url: "/case-studies",
      category: "Resources"
    },
    {
      id: 9,
      title: "Support Center",
      description: "Technical support, customer service, FAQ, and troubleshooting resources.",
      url: "/support",
      category: "Resources"
    },
    {
      id: 10,
      title: "Resource Library",
      description: "Training materials, documentation, guides, and educational resources for Cordflex.",
      url: "/resource-library",
      category: "Resources"
    },
    {
      id: 11,
      title: "Videos",
      description: "Product demonstrations, training videos, and educational content about Cordflex.",
      url: "/videos",
      category: "Resources"
    },
    {
      id: 12,
      title: "FAQ",
      description: "Frequently asked questions about Cordflex products, implementation, and support.",
      url: "/faq",
      category: "Resources"
    },
    {
      id: 13,
      title: "About Us",
      description: "Company information, mission, team, and history of Nursetech Medical.",
      url: "/about",
      category: "Company"
    },
    {
      id: 14,
      title: "Careers",
      description: "Job opportunities, company culture, and career development at Nursetech Medical.",
      url: "/careers",
      category: "Company"
    },
    {
      id: 15,
      title: "Partners",
      description: "Partnership opportunities, distributor network, and collaboration with Nursetech Medical.",
      url: "/partners",
      category: "Company"
    },
    {
      id: 16,
      title: "Find a Distributor",
      description: "Locate authorized Cordflex distributors in your area for local support and service.",
      url: "/find-distributor",
      category: "Company"
    },
    {
      id: 17,
      title: "Contact Us",
      description: "Get in touch with our team for questions, support, or more information about Cordflex.",
      url: "/contact",
      category: "Contact"
    },
    {
      id: 18,
      title: "News & Press",
      description: "Latest company news, press releases, and media coverage about Cordflex and Nursetech Medical.",
      url: "/news",
      category: "Resources"
    },
    {
      id: 19,
      title: "Blog",
      description: "Educational articles, industry insights, and best practices for ICU line management.",
      url: "/blog",
      category: "Resources"
    },
    {
      id: 20,
      title: "Privacy Policy",
      description: "Data protection policies, privacy practices, and information handling procedures.",
      url: "/privacy-policy",
      category: "Legal"
    },
    {
      id: 21,
      title: "Terms of Service",
      description: "Terms and conditions for using Cordflex products and services.",
      url: "/terms-of-service",
      category: "Legal"
    },
    {
      id: 22,
      title: "Refund Policy",
      description: "Return and refund procedures for Cordflex products and services.",
      url: "/refund-policy",
      category: "Legal"
    },
    {
      id: 23,
      title: "Intellectual Property",
      description: "Patent information, trademarks, and intellectual property details for Cordflex.",
      url: "/ip",
      category: "Legal"
    },
    {
      id: 24,
      title: "Site Map",
      description: "Complete navigation structure and overview of all pages on the Cordflex website.",
      url: "/site-map",
      category: "Navigation"
    }
  ];

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsLoading(false);
    }, 200);
  };

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery]);

  const handleResultClick = (url) => {
    window.location.href = url;
    onClose();
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Product':
        return '#214140';
      case 'Ordering':
        return '#1F8051';
      case 'Resources':
        return '#8BBAB8';
      case 'Company':
        return '#214140';
      case 'Contact':
        return '#1F8051';
      case 'Legal':
        return '#273139';
      case 'Navigation':
        return '#8BBAB8';
      default:
        return '#214140';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Search Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold" style={{ color: '#214140' }}>
              Search Cordflex
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
            <Input
              placeholder="Search for pages, products, or information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 text-lg"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto"></div>
              <p className="text-gray-600 mt-2">Searching...</p>
            </div>
          ) : searchQuery.trim() === '' ? (
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">Start typing to search for pages, products, or information</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">No results found for "{searchQuery}"</p>
              <p className="text-gray-500 text-sm mt-2">Try different keywords or check spelling</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-4">
                Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  onClick={() => handleResultClick(result.url)}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: getCategoryColor(result.category) }}
                      >
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                          {result.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-teal-600 transition-colors duration-200" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                      <div className="mt-2">
                        <span 
                          className="inline-block px-2 py-1 text-xs font-medium rounded-full text-white"
                          style={{ backgroundColor: getCategoryColor(result.category) }}
                        >
                          {result.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Press ESC to close</span>
            <span>Enter to select</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;