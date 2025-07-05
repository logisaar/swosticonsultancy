import React, { useState, useEffect } from 'react';
import SEO from "../components/Seo";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  FileText, 
  Building, 
  TrendingUp, 
  Shield, 
  Users,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import LocationMap from '@/components/LocationMap';
import abinashPortrait from '@/assets/WhatsApp Image 2025-07-05 at 15.01.57_6564f2ac.jpg';
import officeInterior from '@/assets/office-interior.jpg';
import clientConsultation from '@/assets/client-consultation.jpg';

const Homepage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: Calculator,
      title: 'Taxation Services',
      description: 'Comprehensive tax planning, ITR filing, and GST compliance services for individuals and businesses.',
      href: '/services/taxation',
      features: ['ITR Filing & Planning', 'GST Registration & Returns', 'Tax Advisory & Consultation', 'TDS Compliance']
    },
    {
      icon: FileText,
      title: 'Auditing & Assurance',
      description: 'Professional audit services ensuring compliance and transparency for your business operations.',
      href: '/services/auditing',
      features: ['Statutory Audits', 'Internal Audits', 'Tax Audits', 'Compliance Audits']
    },
    {
      icon: Building,
      title: 'Business Registration',
      description: 'Complete assistance for company registration, LLP formation, and startup incorporation.',
      href: '/services/business-registration',
      features: ['Company Registration', 'LLP Formation', 'Partnership Registration', 'Startup India Registration']
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and investment guidance for sustainable business growth.',
      href: '/services/financial-advisory',
      features: ['Investment Planning', 'Financial Analysis', 'Budgeting & Forecasting', 'Cash Flow Management']
    },
    {
      icon: Shield,
      title: 'Compliance Services',
      description: 'Ensure regulatory compliance with ROC filings, PF, ESI, and other statutory requirements.',
      href: '/services/compliance',
      features: ['ROC Filings', 'PF & ESI Compliance', 'Annual Returns', 'Regulatory Updates']
    },
    {
      icon: Users,
      title: 'NRI Services',
      description: 'Specialized services for Non-Resident Indians including DTAA benefits and account guidance.',
      href: '/services/nri-services',
      features: ['DTAA Advisory', 'NRE/NRO Accounts', 'FEMA Compliance', 'Investment Guidelines']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      designation: 'Managing Director',
      company: 'TechnoSoft Solutions',
      rating: 5,
      testimonial: 'Abinash Sir has been handling our company accounts for over 5 years. His expertise in taxation and prompt service has saved us significant costs and compliance issues.'
    },
    {
      name: 'Priya Sharma',
      designation: 'Business Owner',
      company: 'Sharma Enterprises',
      rating: 5,
      testimonial: 'The professional guidance provided for our GST registration and ongoing compliance has been exceptional. Highly recommend their services for any business.'
    },
    {
      name: 'Dr. Amit Patel',
      designation: 'Medical Practitioner',
      company: 'Patel Clinic',
      rating: 5,
      testimonial: 'As a busy doctor, I needed someone reliable for my tax planning and ITR filing. The team provides excellent service with complete transparency.'
    },
    {
      name: 'Sunita Agarwal',
      designation: 'NRI Professional',
      company: 'Software Engineer, USA',
      rating: 5,
      testimonial: 'Being an NRI, tax compliance was complex for me. Their specialized NRI services and DTAA guidance has been invaluable for my investments in India.'
    }
  ];

  const stats = [
    { number: '27+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'ITR Filed' },
    { number: '100+', label: 'Companies Registered' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <SEO
        title="Best CA in Bhubaneswar | Income Tax Consultant, GST Consultant, Company Audit, Digital Signature, Labour Consultant, Professional Tax, ESI, EPF, TDS, Tax Refund"
        description="Swosti Consultancy is the best CA in Bhubaneswar, Odisha. Expert Chartered Accountant services: Income Tax, GST Registration, TDS Return, Digital Signature, Labour Law, Professional Tax, ESI, EPF, Tax Refund, and more. 27+ years experience."
        keywords="Best CA in Bhubaneswar, Income Tax Consultant, GST Consultant, Company Audit, Private Limited, Digital Signature, Labour Consultant, Professional Tax Consultant, ESI, EPF, Tax Consultant, TDS Consultant, Tax Refund Consultant, Chartered Accountant Odisha, Swosti Consultancy"
        canonical="/"
        ogImage="/images/faqs-hero.jpg"
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Trusted Chartered Accountancy & 
                <span className="text-ca-gold"> Advocate Services</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-4 text-primary-foreground/90">
                For Individuals and Businesses
              </p>
              <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed">
                Professional financial expertise with 27 years of experience in taxation, 
                audit, and business advisory services in Bhubaneshwar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/services">
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={abinashPortrait}
                  alt="CA Abinash Mishra"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-ca-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-background text-foreground p-4 rounded-xl shadow-professional">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-ca-gold" />
                    <div>
                      <p className="font-semibold text-sm">ICAI Certified</p>
                      <p className="text-xs text-muted-foreground">Member Since 1998</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Meet CA Abinash Mishra
          </h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            I'm <strong>Abinash Mishra</strong>, a Chartered Accountants and Advocates  with over 
            <strong> 27 years of experience</strong> in taxation, audit, and financial advisory services. 
            Since establishing our practice in <strong>1998</strong>, I have been committed to providing 
            professional, reliable, and personalized accounting solutions to individuals and businesses 
            across Bhubaneshwar and beyond.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive accounting and financial services tailored to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by hundreds of satisfied clients across various industries
            </p>
          </div>
          
          {/* Featured Testimonial */}
          <div className="max-w-4xl mx-auto mb-12">
            <TestimonialCard {...testimonials[currentTestimonial]} />
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>

          <div className="text-center">
            <Button variant="professional" asChild>
              <Link to="/testimonials">
                View All Testimonials
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Abinash Mishra & Co.?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Your trusted partner for all accounting and financial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Timely Service',
                description: 'Always meet deadlines and provide prompt responses to all queries'
              },
              {
                icon: Shield,
                title: 'Confidentiality',
                description: 'Complete privacy and security of your financial information'
              },
              {
                icon: Award,
                title: '27+ Years Experience',
                description: 'Extensive experience in taxation, audit, and financial advisory'
              },
              {
                icon: CheckCircle,
                title: 'Accurate Compliance',
                description: 'Ensure 100% compliance with all regulatory requirements'
              },
              {
                icon: Users,
                title: 'Personalized Service',
                description: 'Customized solutions based on your specific business needs'
              },
              {
                icon: TrendingUp,
                title: 'Business Growth',
                description: 'Strategic advice to help grow and scale your business efficiently'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground h-full transform transition-all duration-300 hover:bg-primary-foreground/15">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-12 h-12 mx-auto mb-4 text-ca-gold" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-primary-foreground/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <LocationMap />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-professional">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today for a free consultation and discover how we can help 
            streamline your financial operations and ensure compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default Homepage;