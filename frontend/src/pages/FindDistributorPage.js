import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredList from '../components/StaggeredList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Search, 
  Filter, 
  Building,
  Star,
  CheckCircle,
  ExternalLink,
  Users,
  Award,
  Truck,
  Clock
} from 'lucide-react';

const FindDistributorPage = () => {
  const [searchState, setSearchState] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'northeast', label: 'Northeast' },
    { value: 'southeast', label: 'Southeast' },
    { value: 'midwest', label: 'Midwest' },
    { value: 'southwest', label: 'Southwest' },
    { value: 'west', label: 'West' },
    { value: 'canada', label: 'Canada' }
  ];

  const distributorTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'national', label: 'National' },
    { value: 'regional', label: 'Regional' },
    { value: 'local', label: 'Local' },
    { value: 'specialty', label: 'Specialty' }
  ];

  const distributors = [
    {
      id: 1,
      name: "MedSupply Solutions",
      type: "national",
      region: "northeast",
      states: ["NY", "NJ", "PA", "CT", "MA", "RI", "VT", "NH", "ME"],
      address: "123 Medical Drive, New York, NY 10001",
      phone: "(555) 123-4567",
      email: "info@medsupplysolutions.com",
      website: "www.medsupplysolutions.com",
      specialties: ["ICU Equipment", "Critical Care", "Nursing Supplies"],
      certifications: ["ISO 13485", "FDA Registered"],
      experience: "25+ years",
      rating: 4.8,
      featured: true,
      description: "Leading national distributor specializing in critical care equipment with comprehensive service and support."
    },
    {
      id: 2,
      name: "Regional Healthcare Supply",
      type: "regional",
      region: "southeast",
      states: ["FL", "GA", "AL", "SC", "NC", "TN", "KY"],
      address: "456 Healthcare Blvd, Atlanta, GA 30309",
      phone: "(555) 234-5678",
      email: "sales@regionalhealthcare.com",
      website: "www.regionalhealthcare.com",
      specialties: ["Medical Devices", "Hospital Equipment", "Training Services"],
      certifications: ["ISO 13485", "FDA Registered"],
      experience: "15+ years",
      rating: 4.7,
      featured: false,
      description: "Regional specialist serving Southeast healthcare facilities with personalized service and clinical expertise."
    },
    {
      id: 3,
      name: "Midwest Medical Partners",
      type: "regional",
      region: "midwest",
      states: ["IL", "IN", "OH", "MI", "WI", "IA", "MN"],
      address: "789 Central Ave, Chicago, IL 60601",
      phone: "(555) 345-6789",
      email: "contact@midwestmedical.com",
      website: "www.midwestmedical.com",
      specialties: ["Critical Care", "Emergency Medicine", "Surgical Equipment"],
      certifications: ["ISO 13485", "FDA Registered"],
      experience: "20+ years",
      rating: 4.9,
      featured: false,
      description: "Trusted Midwest distributor known for exceptional customer service and rapid delivery."
    },
    {
      id: 4,
      name: "Southwest Medical Supply",
      type: "regional",
      region: "southwest",
      states: ["TX", "OK", "AR", "LA", "NM", "AZ"],
      address: "321 Desert Way, Dallas, TX 75201",
      phone: "(555) 456-7890",
      email: "info@southwestmedical.com",
      website: "www.southwestmedical.com",
      specialties: ["ICU Solutions", "Respiratory Care", "Infection Control"],
      certifications: ["ISO 13485", "FDA Registered"],
      experience: "18+ years",
      rating: 4.6,
      featured: false,
      description: "Southwest region leader in medical device distribution with focus on ICU and critical care."
    },
    {
      id: 5,
      name: "West Coast Medical",
      type: "regional",
      region: "west",
      states: ["CA", "OR", "WA", "NV", "UT", "CO"],
      address: "654 Pacific Ave, San Francisco, CA 94102",
      phone: "(555) 567-8901",
      email: "sales@westcoastmedical.com",
      website: "www.westcoastmedical.com",
      specialties: ["Innovation Technology", "Advanced Medical Devices", "Clinical Training"],
      certifications: ["ISO 13485", "FDA Registered"],
      experience: "12+ years",
      rating: 4.8,
      featured: false,
      description: "Innovative West Coast distributor focused on cutting-edge medical technology and comprehensive support."
    },
    {
      id: 6,
      name: "Canadian Medical Supply",
      type: "national",
      region: "canada",
      states: ["ON", "QC", "BC", "AB", "MB", "SK", "NS", "NB", "PE", "NL"],
      address: "987 Maple Street, Toronto, ON M5V 3A1",
      phone: "(416) 555-0123",
      email: "info@canadianmedical.ca",
      website: "www.canadianmedical.ca",
      specialties: ["Critical Care", "Medical Devices", "Healthcare Solutions"],
      certifications: ["Health Canada Licensed", "ISO 13485"],
      experience: "22+ years",
      rating: 4.7,
      featured: true,
      description: "Canada's leading distributor of medical devices with coast-to-coast coverage and bilingual support."
    }
  ];

  const distributorServices = [
    {
      title: "Product Distribution",
      description: "Nationwide distribution network ensuring timely delivery",
      icon: <Truck className="h-6 w-6" />,
      color: "#214140"
    },
    {
      title: "Clinical Training",
      description: "On-site training and education programs for healthcare staff",
      icon: <Users className="h-6 w-6" />,
      color: "#8BBAB8"
    },
    {
      title: "Technical Support",
      description: "24/7 technical support and troubleshooting assistance",
      icon: <Phone className="h-6 w-6" />,
      color: "#1F8051"
    },
    {
      title: "Implementation Support",
      description: "Complete implementation support from setup to go-live",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "#214140"
    }
  ];

  const filteredDistributors = distributors.filter(distributor => {
    const matchesRegion = selectedRegion === 'all' || distributor.region === selectedRegion;
    const matchesType = selectedType === 'all' || distributor.type === selectedType;
    const matchesSearch = searchState === '' || 
      distributor.name.toLowerCase().includes(searchState.toLowerCase()) ||
      distributor.states.some(state => state.toLowerCase().includes(searchState.toLowerCase()));
    
    return matchesRegion && matchesType && matchesSearch;
  });

  const handleContactDistributor = (distributor) => {
    window.location.href = `mailto:${distributor.email}?subject=Cordflex Product Inquiry`;
  };

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
                  Find a Distributor
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Connect with authorized Cordflex distributors in your area. Our trusted partners 
                  provide local support, training, and implementation services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Find Your Distributor
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Direct Contact
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-4">
                  {/* Search by Location */}
                  <div>
                    <Label htmlFor="search-location" className="block text-sm font-medium mb-2">
                      Search by State/Location
                    </Label>
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        id="search-location"
                        placeholder="Enter state or city..."
                        value={searchState}
                        onChange={(e) => setSearchState(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Filter by Region */}
                  <div>
                    <Label htmlFor="filter-region" className="block text-sm font-medium mb-2">
                      Filter by Region
                    </Label>
                    <select
                      id="filter-region"
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {regions.map((region) => (
                        <option key={region.value} value={region.value}>
                          {region.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Filter by Type */}
                  <div>
                    <Label htmlFor="filter-type" className="block text-sm font-medium mb-2">
                      Filter by Type
                    </Label>
                    <select
                      id="filter-type"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      {distributorTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Results Count */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600">
                Showing {filteredDistributors.length} distributor{filteredDistributors.length !== 1 ? 's' : ''} 
                {selectedRegion !== 'all' && ` in ${regions.find(r => r.value === selectedRegion)?.label}`}
                {selectedType !== 'all' && ` (${distributorTypes.find(t => t.value === selectedType)?.label})`}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Distributors */}
        {filteredDistributors.filter(d => d.featured).length > 0 && (
          <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
            <div className="container mx-auto px-4">
              <AnimatedSection animation="fade-up">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                    Featured Distributors
                  </h2>
                  <p className="text-xl text-gray-600">
                    Our top-performing distribution partners
                  </p>
                </div>
              </AnimatedSection>

              <StaggeredList delay={200} className="space-y-8">
                {filteredDistributors.filter(distributor => distributor.featured).map((distributor) => (
                  <Card key={distributor.id} className="max-w-6xl mx-auto bg-white shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <Badge style={{ backgroundColor: '#8BBAB8', color: 'white' }}>
                              Featured Partner
                            </Badge>
                            <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                              {distributor.type.charAt(0).toUpperCase() + distributor.type.slice(1)}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-2" style={{ color: '#214140' }}>
                            {distributor.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{distributor.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{distributor.rating}</span>
                          </div>
                          <div className="text-sm text-gray-600">{distributor.experience}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>Coverage Areas:</h4>
                          <div className="flex flex-wrap gap-1">
                            {distributor.states.map((state, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {state}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>Specialties:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {distributor.specialties.map((specialty, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
                                <span>{specialty}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2" style={{ color: '#214140' }}>Contact Info:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-gray-400" />
                              <span>{distributor.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <span>{distributor.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Globe className="h-4 w-4 text-gray-400" />
                              <span>{distributor.website}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                        <Button
                          onClick={() => handleContactDistributor(distributor)}
                          className="flex-1 hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Contact Distributor
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(`https://${distributor.website}`, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Website
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredList>
            </div>
          </section>
        )}

        {/* All Distributors */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#214140' }}>
                  All Distributors
                </h2>
                <p className="text-xl text-gray-600">
                  Complete list of authorized Cordflex distributors
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-6xl mx-auto">
              <StaggeredList delay={100} className="grid lg:grid-cols-2 gap-6">
                {filteredDistributors.filter(distributor => !distributor.featured).map((distributor) => (
                  <Card key={distributor.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" style={{ backgroundColor: '#DFEAF0', color: '#214140' }}>
                          {distributor.type.charAt(0).toUpperCase() + distributor.type.slice(1)}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{distributor.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl" style={{ color: '#214140' }}>
                        {distributor.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{distributor.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="font-medium text-sm mb-1" style={{ color: '#214140' }}>Coverage:</h4>
                          <div className="flex flex-wrap gap-1">
                            {distributor.states.slice(0, 6).map((state, index) => (
                              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {state}
                              </span>
                            ))}
                            {distributor.states.length > 6 && (
                              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                +{distributor.states.length - 6} more
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-1" style={{ color: '#214140' }}>Contact:</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-3 w-3" />
                              <span>{distributor.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-3 w-3" />
                              <span className="truncate">{distributor.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          onClick={() => handleContactDistributor(distributor)}
                          className="flex-1 text-sm"
                          style={{ backgroundColor: '#214140', color: 'white' }}
                        >
                          Contact
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`https://${distributor.website}`, '_blank')}
                          className="flex-1 text-sm"
                        >
                          Website
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </StaggeredList>
            </div>
          </div>
        </section>

        {/* Distributor Services */}
        <section className="py-20" style={{ backgroundColor: '#273139' }}>
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                  What Our Distributors Provide
                </h2>
                <p className="text-xl text-gray-300">
                  Comprehensive support beyond just product distribution
                </p>
              </div>
            </AnimatedSection>

            <StaggeredList delay={150} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {distributorServices.map((service, index) => (
                <Card key={index} className="bg-white shadow-lg text-center">
                  <CardContent className="p-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: service.color, color: 'white' }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#214140' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  Can't Find a Distributor?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  If you can't find a distributor in your area, contact us directly. 
                  We'll help connect you with the right partner or provide direct support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="px-8 py-4 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                    style={{ backgroundColor: '#214140', color: 'white' }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Us Directly
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 1-800-CORDFLEX
                  </Button>
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

export default FindDistributorPage;