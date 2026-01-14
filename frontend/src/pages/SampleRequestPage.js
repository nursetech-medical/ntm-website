import React, { useState } from 'react';
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
import { contactApi, handleApiError } from '../services/api';
import emailService from '../services/emailService';
import { useToast } from '../hooks/use-toast';

const SampleRequestPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hospital: '',
    unit: '',
    role: '',
    priorities: {},
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

  const priorityOptions = [
    { value: 'save-time', label: 'Save nurse time' },
    { value: 'reduce-frustration', label: 'Reduce staff frustration' },
    { value: 'feel-safer', label: 'Help nurses feel safer ambulating patients' },
    { value: 'easier-transfers', label: 'Make patient transfers/ambulation easier/more enjoyable' },
    { value: 'prevent-falls', label: 'Prevent trips & falls' },
    { value: 'prevent-tracing-errors', label: 'Prevent line tracing errors' },
    { value: 'prevent-medical-errors', label: 'Prevent medical errors' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePriorityChange = (priority, rank) => {
    setFormData(prev => {
      const newPriorities = { ...prev.priorities };
      
      // Remove this priority from any existing rank
      Object.keys(newPriorities).forEach(key => {
        if (newPriorities[key] === priority) {
          delete newPriorities[key];
        }
      });
      
      // Remove any existing priority from this rank
      delete newPriorities[rank];
      
      // Add the new priority to this rank
      if (priority) {
        newPriorities[rank] = priority;
      }
      
      return { ...prev, priorities: newPriorities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const requestData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        hospital: formData.hospital,
        department: formData.unit,
        beds: 0,
        source: 'Sample Request Form',
        comments: `Role: ${formData.role}, Unit: ${formData.unit}, Priorities: ${JSON.stringify(formData.priorities)}, Comments: ${formData.otherComments}`
      };

      // Try backend API first, fallback to email service
      let response;
      try {
        response = await contactApi.sampleRequest(requestData);
        toast({
          title: "Sample Request Submitted Successfully",
          description: response.data.message,
          duration: 5000,
        });
      } catch (apiError) {
        // Fallback to email service
        response = await emailService.sendSampleRequest(requestData);
        toast({
          title: "Sample Request Submitted Successfully",
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
        unit: '',
        role: '',
        priorities: {},
        otherComments: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || 'Failed to submit sample request. Please try again.',
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
                  Request a Sample
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the Cordflex difference in your ICU. Request a free sample kit to see how 
                  our innovative line management solution can transform your patient care workflow.
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
                      Sample Request Form
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
                      <div className="grid md:grid-cols-2 gap-6">
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
                      </div>

                      {/* Role Selection */}
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

                      {/* Priority Rating */}
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Rate your top 3 priorities (1 = highest, 2 = second, 3 = third):
                        </Label>
                        <div className="space-y-4">
                          {priorityOptions.map((priority) => (
                            <div key={priority.value} className="flex items-center justify-between p-4 border rounded-lg">
                              <span className="text-sm font-medium">{priority.label}</span>
                              <div className="flex space-x-2">
                                {[1, 2, 3].map((rank) => (
                                  <label key={rank} className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`priority-${priority.value}`}
                                      value={rank}
                                      checked={formData.priorities[rank] === priority.value}
                                      onChange={() => handlePriorityChange(priority.value, rank)}
                                      className="w-4 h-4 text-teal-600"
                                    />
                                    <span className="text-sm">{rank}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Other Comments */}
                      <div>
                        <Label htmlFor="otherComments">Other Comments</Label>
                        <Textarea
                          id="otherComments"
                          name="otherComments"
                          value={formData.otherComments}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="Any additional information or special requests..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
                        style={{ backgroundColor: '#214140', color: 'white' }}
                      >
                        {isLoading ? 'Submitting Request...' : 'Submit Sample Request'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#214140' }}>
                  What's Included in Your Sample Kit
                </h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-2xl">5</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cordflex Clips</h3>
                    <p className="text-gray-600">Try them in your ICU environment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">📋</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Training Materials</h3>
                    <p className="text-gray-600">Quick start guide and best practices</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8BBAB8' }}>
                      <span className="text-white font-bold text-xl">📞</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Follow-up Support</h3>
                    <p className="text-gray-600">Our team will check in on your experience</p>
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

export default SampleRequestPage;