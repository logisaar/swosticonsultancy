import React, { useState } from 'react';
import { Star, Quote, Filter, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      designation: 'Managing Director',
      company: 'TechnoSoft Solutions',
      service: 'Taxation Services',
      rating: 5,
      testimonial: 'Abinash Sir has been handling our company accounts for over 5 years. His expertise in taxation and prompt service has saved us significant costs and compliance issues. The team is highly professional and always available for consultation.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: 2,
      name: 'Priya Sharma',
      designation: 'Business Owner',
      company: 'Sharma Enterprises',
      service: 'Business Registration',
      rating: 5,
      testimonial: 'The professional guidance provided for our GST registration and ongoing compliance has been exceptional. They simplified the entire process and ensured we were compliant from day one. Highly recommend their services for any business.',
      date: '2024-02-20',
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      designation: 'Medical Practitioner',
      company: 'Patel Clinic',
      service: 'Taxation Services',
      rating: 5,
      testimonial: 'As a busy doctor, I needed someone reliable for my tax planning and ITR filing. The team provides excellent service with complete transparency. They explained all the tax-saving options available and helped me optimize my returns.',
      date: '2023-12-10',
      verified: true
    },
    {
      id: 4,
      name: 'Sunita Agarwal',
      designation: 'NRI Professional',
      company: 'Software Engineer, USA',
      service: 'NRI Services',
      rating: 5,
      testimonial: 'Being an NRI, tax compliance was complex for me. Their specialized NRI services and DTAA guidance has been invaluable for my investments in India. They handle everything efficiently and keep me updated on all regulatory changes.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: 5,
      name: 'Vikram Singh',
      designation: 'Startup Founder',
      company: 'InnovateTech Pvt Ltd',
      service: 'Business Registration',
      rating: 5,
      testimonial: 'From company registration to ongoing compliance, their support has been phenomenal. They guided us through the entire startup registration process and continue to provide valuable business advisory services.',
      date: '2023-11-28',
      verified: true
    },
    {
      id: 6,
      name: 'Meera Nair',
      designation: 'Financial Controller',
      company: 'Global Logistics Ltd',
      service: 'Auditing & Assurance',
      rating: 5,
      testimonial: 'Their audit services are thorough and professional. The team identified several areas for improvement in our financial processes and helped implement better controls. Their attention to detail is commendable.',
      date: '2024-01-30',
      verified: true
    },
    {
      id: 7,
      name: 'Rohit Gupta',
      designation: 'Restaurant Owner',
      company: 'Gupta Food Chain',
      service: 'Compliance Services',
      rating: 5,
      testimonial: 'Managing compliance for multiple restaurant locations was challenging until we engaged their services. They ensure all our PF, ESI, and other statutory compliances are filed on time. Great peace of mind!',
      date: '2023-10-15',
      verified: true
    },
    {
      id: 8,
      name: 'Anita Reddy',
      designation: 'Real Estate Developer',
      company: 'Reddy Constructions',
      service: 'Financial Advisory',
      rating: 5,
      testimonial: 'Their financial advisory services helped us navigate complex project financing and tax implications. The strategic guidance on cash flow management and investment planning has been instrumental in our business growth.',
      date: '2024-02-12',
      verified: true
    },
    {
      id: 9,
      name: 'Kiran Joshi',
      designation: 'Export-Import Business',
      company: 'Joshi Exports',
      service: 'Taxation Services',
      rating: 5,
      testimonial: 'Handling GST for export-import business requires expertise, and their team delivers exactly that. They ensure all our IGST, customs documentation, and refund processes are handled smoothly.',
      date: '2023-09-20',
      verified: true
    }
  ];

  const services = ['all', 'Taxation Services', 'Business Registration', 'NRI Services', 'Auditing & Assurance', 'Compliance Services', 'Financial Advisory'];

  const filteredTestimonials = selectedFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === selectedFilter);

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const totalTestimonials = testimonials.length;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Read what our satisfied clients have to say about our professional 
            Chartered Accountancy services and expertise.
          </p>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) ? 'text-ca-gold fill-current' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-primary">{averageRating.toFixed(1)}/5.0</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">{totalTestimonials}+</p>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Filter by Service:</span>
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service === 'all' ? 'All Services' : service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <p className="text-muted-foreground">
            Showing {filteredTestimonials.length} of {totalTestimonials} testimonials
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full shadow-ca-md hover:shadow-ca-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="relative mb-4 flex-1">
                  <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20 -mt-2 -ml-2" />
                  <p className="text-foreground leading-relaxed text-sm pt-4 italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? 'text-ca-gold fill-current' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="secondary" className="text-xs">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.service}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Section */}
        <section className="mb-16 bg-gradient-card p-12 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Find Us on Google Reviews
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Read more authentic reviews from our clients on Google and share your 
              experience to help others discover our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg">
                View Google Reviews
              </Button>
              <Button variant="outline" size="lg">
                Write a Review
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Join Our Satisfied Clients
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of professional service and expertise that our 
            clients rave about. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;