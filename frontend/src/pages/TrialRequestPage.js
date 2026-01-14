import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { contactApi, handleApiError } from '../services/api';
import emailService from '../services/emailService';
import { useToast } from '../hooks/use-toast';

const TrialRequestPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospital: '',
    hospitalAddress: '',
    unit: '',
    role: '',
    preferredDate: null,
    requestedSample: false,
    otherComments: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const roleOptions = [
    { value: 'nurse', label: 'Nurse' },
    { value: 'nurse-manager', label: 'Nurse Manager' },
    { value: 'cns', label: 'CNS' },
    { value: 'nurse-educator', label: 'Nurse Educator' },
    { value: 'product-purchasing', label: 'Product Purchasing' },
    { value: 'c-suite', label: 'C-Suite' },
    { value: 'hospital-admin', label: 'Other Hospital Admin' },
    { value: 'value-analysis', label: 'Value Analysis' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const requestData = {
        name: `${formData.firstName} ${formData.lastName}`,
        title: formData.role,
        email: formData.email,
        phone: formData.phone,
        hospital: formData.hospital,
        department: formData.unit,
        beds: 0,
        current_solution: 'Current manual process',
        challenges: ['Line management efficiency'],
        start_date: formData.preferredDate ? formData.preferredDate.toISOString() : new Date().toISOString(),
        timeline: '3 months',
        stakeholders: `Role: ${formData.role}, Unit: ${formData.unit}, Hospital Address: ${formData.hospitalAddress}, Requested Sample: ${formData.requestedSample}`,
        comments: formData.otherComments
      };

      // Try backend API first, fallback to email service
      let response;
      try {
        response = await contactApi.trialRequest(requestData);
        toast({
          title: "Trial Request Submitted",
          description: response.data.message,
          duration: 5000,
        });
      } catch (apiError) {
        // Fallback to email service
        response = await emailService.sendTrialRequest(requestData);
        toast({
          title: "Trial Request Submitted",
          description: response.message,
          duration: 5000,
        });
      }

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hospital: '',
        hospitalAddress: '',
        unit: '',
        role: '',
        preferredDate: null,
        requestedSample: false,
        otherComments: ''
      });

    } catch (error) {
      toast({
        title: "Error",
        description: error.message || 'Failed to submit trial request. Please try again.',
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
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
                  Request a Trial
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to see the full impact of Cordflex in your ICU? Request a comprehensive trial 
                  to experience how our solution can transform your line management workflow and improve patient outcomes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20" style={{ backgroundColor: '#DFEAF0' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center" style={{ color: '#214140' }}>
                      Trial Request Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Hospital Information */}
                      <div>
                        <Label htmlFor="hospital">Hospital/Organization *</Label>
                        <Input
                          id="hospital"
                          name="hospital"
                          value={formData.hospital}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="hospitalAddress">Hospital Address *</Label>
                        <Textarea
                          id="hospitalAddress"
                          name="hospitalAddress"
                          value={formData.hospitalAddress}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="mt-1"
                          placeholder="Full hospital address including street, city, state, zip code"
                        />
                      </div>

                      {/* Unit and Role */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="unit">Unit/Department *</Label>
                          <Input
                            id="unit"
                            name="unit"
                            value={formData.unit}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role">Role *</Label>
                          <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select your role" />
                            </SelectTrigger>
                            <SelectContent>
                              {roleOptions.map((role) => (
                                <SelectItem key={role.value} value={role.value}>
                                  {role.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Preferred Date */}
                      <div>
                        <Label>Preferred Week for Trial *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal mt-1"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Select preferred start date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={formData.preferredDate}
                              onSelect={(date) => setFormData(prev => ({ ...prev, preferredDate: date }))}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* Sample Request Checkbox */}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="requestedSample"
                          checked={formData.requestedSample}
                          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, requestedSample: checked }))}
                        />
                        <Label htmlFor="requestedSample" className="text-sm">
                          I have already requested a sample
                        </Label>
                      </div>

                      {/* Link to Sample Request */}
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">
                          Haven't requested a sample yet? We recommend trying our sample first to ensure Cordflex meets your needs.
                        </p>
                        <Link 
                          to="/sample-request" 
                          className="text-blue-600 hover:text-blue-800 font-medium underline"
                        >
                          Request a Sample →
                        </Link>
                      </div>

                      {/* Other Comments */}
                      <div>
                        <Label htmlFor="otherComments">Additional Comments</Label>
                        <Textarea
                          id="otherComments"
                          name="otherComments"
                          value={formData.otherComments}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="Any additional information about your trial requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                        style={{ backgroundColor: '#214140', color: 'white' }}
                      >
                        {isLoading ? 'Submitting Request...' : 'Submit Trial Request'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Trial Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  What's Included in Your Trial
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">📦</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Complete Supply</h3>
                    <p className="text-gray-600">Full supply of Cordflex clips for your trial period</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">🎓</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Staff Training</h3>
                    <p className="text-gray-600">Comprehensive training for your nursing staff</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
                    <p className="text-gray-600">Detailed analysis of outcomes and ROI</p>
                  </div>
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

export default TrialRequestPage;