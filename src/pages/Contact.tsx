import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Plot No. PP19, Pandav Nagar',
        'Tankapani Road, Badagada Square',
        'Bhubaneshwar - 751018, Odisha'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 84015 39713 (Primary)',
        '+91 674 2345678 (Office)',
        'WhatsApp: +91 84015 39713'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'contact@abinashmishra.co',
        'info@abinashmishra.co',
        'support@abinashmishra.co'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const services = [
    'Taxation Services',
    'Auditing & Assurance',
    'Business Registration',
    'Financial Advisory',
    'Compliance Services',
    'NRI Services',
    'Other'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our expert team for professional Chartered Accountancy services. 
            We're here to help you with all your financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-professional">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-ca-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
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
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  
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
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Required</Label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Please describe your requirements or questions..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="professional" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-ca-md hover:shadow-ca-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground">
                            {info.title === 'Phone Numbers' && detail.includes('+91') ? (
                              <a href={`tel:${detail.split(' ')[0]}`} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : info.title === 'Email Addresses' ? (
                              <a href={`mailto:${detail}`} className="hover:text-primary transition-colors">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Actions</h2>
            <p className="text-lg text-muted-foreground">
              Get immediate assistance through these convenient options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center shadow-ca-md hover:shadow-ca-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <Phone className="w-12 h-12 text-ca-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Call Now</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
                <Button variant="success" asChild>
                  <a href="tel:+918401539713">+91 84015 39713</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-ca-md hover:shadow-ca-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-ca-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Chat with us instantly</p>
                <Button variant="success" asChild>
                  <a href="https://wa.me/918401539713" target="_blank" rel="noopener noreferrer">
                    Message Us
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-ca-md hover:shadow-ca-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Send detailed queries</p>
                <Button variant="professional" asChild>
                  <a href="mailto:contact@abinashmishra.co">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Google Maps */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Bhubaneshwar for easy accessibility
            </p>
          </div>
          
          <Card className="shadow-professional">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Office Location</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Plot No. PP19, Pandav Nagar, Tankapani Road, 
                    Badagada Square, Bhubaneshwar - 751018
                  </p>
                  <Button variant="outline" className="mt-4" asChild>
                    <a 
                      href="https://maps.google.com?q=Plot+No.+PP19,+Pandav+Nagar,+Tankapani+Road,+Badagada+Square,+Bhubaneshwar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Appointment Booking CTA */}
        <section className="text-center bg-gradient-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert CA team to discuss your specific 
            requirements and get personalized advice for your financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Book Free Consultation
            </Button>
            <Button variant="outline" size="xl">
              View Available Slots
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;