import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ChevronUp, ChevronDown, Download, MessageCircle, Phone, FileText } from 'lucide-react';

const FloatingActionWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actions = [
    { 
      icon: FileText, 
      label: 'Request a Sample',
      action: () => console.log('Sample request'),
      primary: true 
    },
    { 
      icon: Download, 
      label: 'Request a Trial',
      action: () => console.log('Trial start'),
      primary: true 
    },
    { 
      icon: Download, 
      label: 'Download Resources',
      action: () => console.log('Download resources') 
    },
    { 
      icon: Phone, 
      label: 'Contact Us',
      action: () => console.log('Contact us') 
    },
    { 
      icon: MessageCircle, 
      label: 'Live Chat',
      action: () => console.log('Live chat') 
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <Card className="bg-white shadow-xl border-2 border-gray-200 overflow-hidden">
        <CardContent className="p-0">
          {/* Header */}
          <div 
            className="p-4 cursor-pointer flex items-center justify-between text-white"
            style={{ backgroundColor: '#214140' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="font-semibold">Quick Actions</span>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </div>

          {/* Actions */}
          <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="p-4 space-y-2">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.action}
                  variant={action.primary ? "default" : "outline"}
                  className={`w-full justify-start text-sm transition-all duration-200 hover:scale-105 ${
                    action.primary 
                      ? 'text-white hover:opacity-90' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                  style={action.primary ? { backgroundColor: '#214140' } : {}}
                >
                  <action.icon className="h-4 w-4 mr-2" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FloatingActionWidget;