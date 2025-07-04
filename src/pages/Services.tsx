import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Building, 
  TrendingUp, 
  Shield, 
  Users,
  Download,
  ArrowRight,
  CheckCircle,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services: React.FC = () => {
  const services = [
    {
      id: 'taxation',
      icon: Calculator,
      title: 'Taxation Services',
      description: 'Comprehensive tax planning, compliance, and advisory services for individuals and businesses.',
      features: [
        'Income Tax Return (ITR) Filing',
        'Tax Planning & Advisory',
        'GST Registration & Returns',
        'TDS Compliance & Returns',
        'Advance Tax Calculations',
        'Tax Audit Services',
        'Appeals & Representations'
      ],
      popular: true,
      startingPrice: '₹999'
    },
    {
      id: 'auditing',
      icon: FileText,
      title: 'Auditing & Assurance',
      description: 'Professional audit services ensuring compliance, transparency, and risk management.',
      features: [
        'Statutory Audits',
        'Internal Audits',
        'Tax Audits',
        'Bank Audits',
        'Concurrent Audits',
        'Due Diligence',
        'Management Audits'
      ],
      startingPrice: '₹15,000'
    },
    {
      id: 'business-registration',
      icon: Building,
      title: 'Business Registration',
      description: 'Complete assistance for business setup, registration, and legal compliance.',
      features: [
        'Private Limited Company Registration',
        'LLP Formation',
        'Partnership Firm Registration',
        'Proprietorship Setup',
        'Section 8 Company Registration',
        'Startup India Registration',
        'Foreign Company Registration'
      ],
      startingPrice: '₹8,999'
    },
    {
      id: 'financial-advisory',
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and investment guidance for sustainable growth.',
      features: [
        'Investment Planning',
        'Financial Statement Analysis',
        'Budgeting & Forecasting',
        'Cash Flow Management',
        'Working Capital Management',
        'Project Finance Advisory',
        'Merger & Acquisition Advisory'
      ],
      startingPrice: '₹5,000'
    },
    {
      id: 'compliance',
      icon: Shield,
      title: 'Compliance Services',
      description: 'Ensure regulatory compliance with all statutory requirements and filings.',
      features: [
        'ROC Annual Filings',
        'Board Meeting Compliance',
        'PF & ESI Compliance',
        'Labour Law Compliance',
        'Environmental Clearances',
        'FSSAI Registration',
        'Professional Tax Registration'
      ],
      startingPrice: '₹2,500'
    },
    {
      id: 'nri-services',
      icon: Users,
      title: 'NRI Services',
      description: 'Specialized services for Non-Resident Indians including DTAA benefits and compliance.',
      features: [
        'NRI Tax Planning',
        'DTAA Advisory',
        'NRE/NRO Account Guidance',
        'FEMA Compliance',
        'Property Investment Advisory',
        'Repatriation Services',
        'FIRC & Tax Certificates'
      ],
      popular: true,
      startingPrice: '₹3,500'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Professional CA Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive Chartered Accountancy services tailored to meet your specific 
            business and personal financial needs with 27+ years of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+919861035535">
                <Phone className="mr-2 w-5 h-5" />
                Call: +91 98610 35535
              </a>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="group relative shadow-professional hover:shadow-ca-xl transition-all duration-300 transform hover:-translate-y-1">
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-ca-gold text-foreground font-semibold">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-ca-md">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-ca-green">
                        Starting from {service.startingPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-4">Key Services Include:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-ca-green flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="professional" className="flex-1" asChild>
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/contact">
                      Get Quote
                    </Link>
                  </Button>
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="link" size="sm" className="text-primary">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process ensures efficient and professional service delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Understand your requirements and provide expert guidance'
              },
              {
                step: '02',
                title: 'Proposal & Quote',
                description: 'Detailed proposal with transparent pricing and timelines'
              },
              {
                step: '03',
                title: 'Service Delivery',
                description: 'Professional execution with regular updates and communication'
              },
              {
                step: '04',
                title: 'Ongoing Support',
                description: 'Continuous support and advisory for long-term success'
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-ca-md">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-gradient-card p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground">
              Professional excellence backed by experience and commitment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: '100% Compliance',
                description: 'Ensure complete adherence to all regulatory requirements'
              },
              {
                icon: Shield,
                title: 'Data Security',
                description: 'Complete confidentiality and security of your financial information'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Qualified professionals with extensive industry experience'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized consultation and discover how our 
            professional services can benefit your business or personal finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+919861035535">
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 98610 35535
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;