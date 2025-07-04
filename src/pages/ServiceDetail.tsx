import React from 'react';
import SEO from "../components/Seo";
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  Building, 
  TrendingUp, 
  Shield, 
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Download,
  Star,
  Clock,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Service Details Data Structure
const serviceDetails = {
  taxation: {
    icon: Calculator,
    title: 'Taxation Services',
    subtitle: 'Expert Income Tax Filing & GST Compliance Solutions',
    description: 'Comprehensive tax planning, compliance, and advisory services for individuals and businesses across Bhubaneswar and Odisha.',
    heroImage: '/api/placeholder/800/400',
    startingPrice: '₹999',
    popular: true,
    features: [
      'Income Tax Return (ITR) Filing for All Categories',
      'Advanced Tax Planning & Strategic Advisory',
      'GST Registration & Monthly/Quarterly Returns',
      'TDS Compliance & Quarterly Returns',
      'Advance Tax Calculations & Payments',
      'Tax Audit Services & Representations',
      'Income Tax Appeals & Legal Support'
    ],
    process: [
      {
        step: '01',
        title: 'Document Collection',
        description: 'Gather all required financial documents and receipts'
      },
      {
        step: '02', 
        title: 'Analysis & Planning',
        description: 'Analyze your tax situation and identify savings opportunities'
      },
      {
        step: '03',
        title: 'Filing & Compliance',
        description: 'Accurate filing of returns and ensuring full compliance'
      },
      {
        step: '04',
        title: 'Follow-up Support',
        description: 'Ongoing support for queries and future planning'
      }
    ],
    benefits: [
      'Maximum Tax Savings through Legal Deductions',
      'Zero Penalties with Timely & Accurate Filing',
      'Expert Guidance on Tax-Saving Investments',
      'Complete Documentation & Record Maintenance',
      'Professional Representation before Tax Authorities'
    ],
    pricing: [
      {
        category: 'Individual ITR Filing',
        price: '₹999 - ₹2,999',
        features: ['Salary Income', 'House Property', 'Capital Gains', 'Other Sources']
      },
      {
        category: 'Business ITR Filing',
        price: '₹3,999 - ₹8,999',
        features: ['Business Income', 'Professional Income', 'Partnership Returns', 'Company Returns']
      },
      {
        category: 'GST Services',
        price: '₹1,999/month',
        features: ['GST Registration', 'Monthly Returns', 'Annual Returns', 'Compliance']
      }
    ],
    faqs: [
      {
        question: 'Who needs to file Income Tax Returns?',
        answer: 'Any individual with annual income above ₹2.5 lakh (₹3 lakh for senior citizens) must file ITR. Even if income is below this limit, filing is beneficial for refund claims and loan applications.'
      },
      {
        question: 'What documents are required for ITR filing?',
        answer: 'Form 16, bank statements, investment proofs (80C, 80D), property documents, capital gains details, and any other income source documents.'
      },
      {
        question: 'What is the deadline for ITR filing?',
        answer: 'July 31st for individuals and September 30th for businesses. However, it\'s advisable to file early to avoid last-minute rush.'
      },
      {
        question: 'Can you help with tax audits?',
        answer: 'Yes, we provide complete tax audit services and representation before Income Tax authorities for assessments and appeals.'
      }
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        designation: 'Software Engineer',
        rating: 5,
        text: 'Excellent service for ITR filing. Saved me significant tax through proper planning. Very professional and timely.'
      },
      {
        name: 'Rajesh Kumar',
        designation: 'Business Owner',
        rating: 5,
        text: 'Complete GST compliance handled smoothly. No penalties or notices since working with them.'
      }
    ]
  },
  
  auditing: {
    icon: FileText,
    title: 'Auditing & Assurance',
    subtitle: 'Professional Audit Services for Transparency & Compliance',
    description: 'Comprehensive audit services ensuring compliance, transparency, and risk management for businesses of all sizes.',
    heroImage: '/api/placeholder/800/400',
    startingPrice: '₹15,000',
    features: [
      'Statutory Audits as per Companies Act',
      'Internal Audits for Process Improvement',
      'Tax Audits under Income Tax Act',
      'Bank Audits & Concurrent Audits',
      'Due Diligence for Investments',
      'Management Audits & Operational Reviews',
      'Compliance Audits for Regulatory Requirements'
    ],
    process: [
      {
        step: '01',
        title: 'Planning & Assessment',
        description: 'Understand business operations and identify audit scope'
      },
      {
        step: '02',
        title: 'Risk Analysis',
        description: 'Identify potential risks and control weaknesses'
      },
      {
        step: '03',
        title: 'Detailed Audit',
        description: 'Systematic examination of financial records and processes'
      },
      {
        step: '04',
        title: 'Report & Recommendations',
        description: 'Comprehensive audit report with actionable recommendations'
      }
    ],
    benefits: [
      'Enhanced Financial Transparency & Credibility',
      'Improved Internal Controls & Risk Management',
      'Regulatory Compliance & Reduced Legal Risks',
      'Better Decision Making with Accurate Information',
      'Increased Stakeholder Confidence'
    ],
    pricing: [
      {
        category: 'Statutory Audit',
        price: '₹25,000 - ₹75,000',
        features: ['Annual Audit', 'Audit Report', 'Management Letter', 'Compliance Certificate']
      },
      {
        category: 'Internal Audit',
        price: '₹15,000 - ₹50,000',
        features: ['Process Review', 'Risk Assessment', 'Control Testing', 'Recommendations']
      },
      {
        category: 'Tax Audit',
        price: '₹20,000 - ₹60,000',
        features: ['Section 44AB Audit', 'Audit Report', 'Tax Compliance', 'Documentation']
      }
    ],
    faqs: [
      {
        question: 'When is statutory audit mandatory?',
        answer: 'Companies with turnover above ₹1 crore or having paid-up capital above ₹50 lakh require mandatory statutory audit.'
      },
      {
        question: 'What is the difference between statutory and internal audit?',
        answer: 'Statutory audit is legally mandated annual audit, while internal audit is voluntary periodic review for operational improvement.'
      },
      {
        question: 'How long does an audit take?',
        answer: 'Depending on company size and complexity, audits can take 2-8 weeks. We ensure minimal disruption to your operations.'
      }
    ],
    testimonials: [
      {
        name: 'Suresh Patel',
        designation: 'Managing Director',
        rating: 5,
        text: 'Thorough and professional audit services. Their recommendations helped improve our financial controls significantly.'
      }
    ]
  },

  'business-registration': {
    icon: Building,
    title: 'Business Registration',
    subtitle: 'Complete Business Setup & Legal Compliance Solutions',
    description: 'End-to-end assistance for business registration, incorporation, and startup compliance across Odisha.',
    heroImage: '/api/placeholder/800/400',
    startingPrice: '₹8,999',
    features: [
      'Private Limited Company Registration',
      'Limited Liability Partnership (LLP) Formation',
      'Partnership Firm Registration',
      'Sole Proprietorship Setup',
      'Section 8 (NGO) Company Registration',
      'Startup India Registration & Benefits',
      'Foreign Company Registration & FEMA Compliance'
    ],
    process: [
      {
        step: '01',
        title: 'Business Structure Consultation',
        description: 'Choose optimal business structure based on your needs'
      },
      {
        step: '02',
        title: 'Document Preparation',
        description: 'Prepare and verify all required legal documents'
      },
      {
        step: '03',
        title: 'Government Filing',
        description: 'Submit applications and follow up with authorities'
      },
      {
        step: '04',
        title: 'Post-Registration Support',
        description: 'Complete setup with bank accounts and compliance'
      }
    ],
    benefits: [
      'Legal Protection & Limited Liability',
      'Enhanced Business Credibility',
      'Easy Access to Funding & Loans',
      'Tax Benefits & Government Schemes',
      'Simplified Compliance Management'
    ],
    pricing: [
      {
        category: 'Private Limited Company',
        price: '₹12,999',
        features: ['Name Approval', 'MOA/AOA', 'DIN/DSC', 'Registration Certificate']
      },
      {
        category: 'LLP Registration',
        price: '₹8,999',
        features: ['Name Approval', 'LLP Agreement', 'DPIN/DSC', 'Registration Certificate']
      },
      {
        category: 'Partnership Firm',
        price: '₹5,999',
        features: ['Partnership Deed', 'PAN/TAN', 'Bank Account', 'Registration']
      }
    ],
    faqs: [
      {
        question: 'Which business structure is best for startups?',
        answer: 'For most startups, Private Limited Company offers best protection, credibility, and growth potential, though choice depends on specific needs.'
      },
      {
        question: 'How long does company registration take?',
        answer: 'Private Limited Company registration typically takes 10-15 working days if all documents are ready and approved.'
      },
      {
        question: 'What are the ongoing compliance requirements?',
        answer: 'Annual filings, board meetings, audit requirements, and tax filings. We provide comprehensive compliance support.'
      }
    ],
    testimonials: [
      {
        name: 'Amit Dash',
        designation: 'Startup Founder',
        rating: 5,
        text: 'Seamless company registration process. They handled everything professionally and got us started quickly.'
      }
    ]
  },

  'financial-advisory': {
    icon: TrendingUp,
    title: 'Financial Advisory',
    subtitle: 'Strategic Financial Planning for Sustainable Growth',
    description: 'Expert financial planning and investment guidance to help individuals and businesses achieve their financial goals.',
    heroImage: '/api/placeholder/800/400',
    startingPrice: '₹5,000',
    features: [
      'Comprehensive Investment Planning',
      'Financial Statement Analysis & Review',
      'Budgeting & Financial Forecasting',
      'Cash Flow Management Solutions',
      'Working Capital Optimization',
      'Project Finance Advisory',
      'Merger & Acquisition Support'
    ],
    process: [
      {
        step: '01',
        title: 'Financial Assessment',
        description: 'Comprehensive review of current financial position'
      },
      {
        step: '02',
        title: 'Goal Setting',
        description: 'Define clear financial objectives and timelines'
      },
      {
        step: '03',
        title: 'Strategy Development',
        description: 'Create customized financial strategies and plans'
      },
      {
        step: '04',
        title: 'Implementation & Monitoring',
        description: 'Execute plans and provide ongoing monitoring'
      }
    ],
    benefits: [
      'Maximized Returns on Investments',
      'Improved Cash Flow Management',
      'Reduced Financial Risks',
      'Better Financial Decision Making',
      'Long-term Wealth Creation'
    ],
    pricing: [
      {
        category: 'Individual Advisory',
        price: '₹5,000 - ₹15,000',
        features: ['Portfolio Review', 'Investment Planning', 'Tax Planning', 'Goal-based Planning']
      },
      {
        category: 'Business Advisory',
        price: '₹15,000 - ₹50,000',
        features: ['Financial Analysis', 'Business Planning', 'Cash Flow', 'Growth Strategy']
      }
    ],
    faqs: [
      {
        question: 'When should I seek financial advisory?',
        answer: 'Anytime you have financial goals, investment decisions, or need better financial planning - whether personal or business.'
      },
      {
        question: 'How often should financial plans be reviewed?',
        answer: 'Annual reviews are recommended, with quarterly check-ins for significant changes or market volatility.'
      }
    ],
    testimonials: [
      {
        name: 'Sunita Agarwal',
        designation: 'NRI Professional',
        rating: 5,
        text: 'Excellent financial planning advice. Helped optimize my investments and tax planning as an NRI.'
      }
    ]
  },

  compliance: {
    icon: Shield,
    title: 'Compliance Services',
    subtitle: 'Complete Regulatory Compliance & Statutory Filing Solutions',
    description: 'Comprehensive compliance services ensuring adherence to all regulatory requirements and statutory filings.',
    heroImage: '/api/placeholder/800/400',
    startingPrice: '₹2,500',
    features: [
      'ROC Annual Filings & Returns',
      'Board Meeting Compliance & Minutes',
      'Provident Fund (PF) & ESIC Compliance',
      'Labour Law Compliance & Registrations',
      'Environmental Clearances & NOCs',
      'FSSAI Registration & Food License',
      'Professional Tax Registration & Returns'
    ],
    process: [
      {
        step: '01',
        title: 'Compliance Audit',
        description: 'Review current compliance status and identify gaps'
      },
      {
        step: '02',
        title: 'Planning & Scheduling',
        description: 'Create compliance calendar and action plan'
      },
      {
        step: '03',
        title: 'Documentation & Filing',
        description: 'Prepare and submit all required documents'
      },
      {
        step: '04',
        title: 'Ongoing Monitoring',
        description: 'Regular monitoring and timely updates'
      }
    ],
    benefits: [
      'Zero Penalties & Legal Notices',
      'Reduced Regulatory Risks',
      'Enhanced Business Reputation',
      'Streamlined Operations',
      'Peace of Mind for Business Owners'
    ],
    pricing: [
      {
        category: 'ROC Compliance',
        price: '₹5,000 - ₹15,000',
        features: ['Annual Returns', 'Board Resolutions', 'Statutory Registers', 'Compliance Calendar']
      },
      {
        category: 'PF/ESIC Compliance',
        price: '₹2,500/month',
        features: ['Monthly Returns', 'Annual Returns', 'Registrations', 'Compliance Support']
      }
    ],
    faqs: [
      {
        question: 'What happens if compliance deadlines are missed?',
        answer: 'Missing deadlines can result in penalties, interest charges, and legal notices. We ensure timely compliance to avoid such issues.'
      },
      {
        question: 'How do you track multiple compliance requirements?',
        answer: 'We maintain comprehensive compliance calendars and automated reminder systems to ensure nothing is missed.'
      }
    ],
    testimonials: [
      {
        name: 'Ramesh Industries',
        designation: 'Manufacturing Company',
        rating: 5,
        text: 'Complete compliance management. Never missed a deadline since engaging their services. Highly reliable.'
      }
    ]
  },

  'nri-services': {
    icon: Users,
    title: 'NRI Services',
    subtitle: 'Specialized Tax & Investment Services for Non-Resident Indians',
    description: 'Expert services for NRIs including tax planning, DTAA benefits, and investment guidance for India.',
    heroImage: '/api/placeholder/800/400',
    startingPrice: '₹3,500',
    popular: true,
    features: [
      'NRI Tax Planning & Compliance',
      'DTAA (Double Taxation Avoidance Agreement) Advisory',
      'NRE/NRO Account Opening Guidance',
      'FEMA Compliance & Regulations',
      'Property Investment Advisory in India',
      'Repatriation Services & Documentation',
      'FIRC & Tax Residency Certificates'
    ],
    process: [
      {
        step: '01',
        title: 'Residency Status Assessment',
        description: 'Determine tax residency status and obligations'
      },
      {
        step: '02',
        title: 'Tax Planning Strategy',
        description: 'Optimize tax liabilities using DTAA benefits'
      },
      {
        step: '03',
        title: 'Compliance & Filing',
        description: 'Handle all tax filings and regulatory requirements'
      },
      {
        step: '04',
        title: 'Ongoing Advisory',
        description: 'Continuous support for changing regulations'
      }
    ],
    benefits: [
      'Optimized Tax Liability using DTAA',
      'Simplified India Investment Process',
      'FEMA Compliance Assurance',
      'Professional Documentation Support',
      'Expert Guidance on Regulatory Changes'
    ],
    pricing: [
      {
        category: 'NRI Tax Filing',
        price: '₹3,500 - ₹8,500',
        features: ['Tax Return Filing', 'DTAA Benefits', 'Tax Certificates', 'Advisory']
      },
      {
        category: 'Investment Advisory',
        price: '₹10,000 - ₹25,000',
        features: ['Property Advisory', 'Investment Planning', 'FEMA Compliance', 'Documentation']
      }
    ],
    faqs: [
      {
        question: 'How is NRI tax liability calculated?',
        answer: 'NRI tax is calculated on India-sourced income. DTAA benefits can significantly reduce overall tax liability.'
      },
      {
        question: 'Can NRIs invest in Indian property?',
        answer: 'Yes, NRIs can invest in residential and commercial property with certain restrictions under FEMA regulations.'
      },
      {
        question: 'What is the difference between NRE and NRO accounts?',
        answer: 'NRE accounts are for foreign earnings (fully repatriable), while NRO accounts are for Indian income (limited repatriation).'
      }
    ],
    testimonials: [
      {
        name: 'Dr. Vikash Singh',
        designation: 'NRI Professional, USA',
        rating: 5,
        text: 'Excellent NRI services. Saved substantial tax through DTAA planning and provided clear guidance on India investments.'
      }
    ]
  }
};

/**
 * ServiceDetail Component - Displays detailed information about specific CA services
 * Features: Service overview, process steps, benefits, pricing, FAQs, and testimonials
 */
const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Get service details or redirect if service not found
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  /**
   * Animation variants for stagger effect on feature lists
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <SEO 
        title={`${service.title} - Professional CA Services in Bhubaneswar`}
        description={service.description}
        keywords={`${service.title}, CA Services, Bhubaneswar, Chartered Accountant,Swosti Consultancy ${service.subtitle}`}
        canonical={`/services/${serviceId}`}
        ogImage={service.heroImage}
      />
    <div className="min-h-screen py-12">
      {/* SEO optimized meta information would be handled by helmet or similar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li className="before:content-['/'] before:mx-2">
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            </li>
            <li className="before:content-['/'] before:mx-2 text-primary font-medium">
              {service.title}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-ca-lg">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                {'popular' in service && service.popular && (
                  <Badge className="bg-ca-gold text-foreground font-semibold px-4 py-2">
                    Most Popular Service
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                {service.title}
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">
                {service.subtitle}
              </h2>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Quote
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
              
              <p className="text-2xl font-bold text-ca-green">
                Starting from {service.startingPrice}
              </p>
            </div>
            
            <div className="relative">
              <img 
                src={service.heroImage} 
                alt={`${service.title} - Professional CA Services in Bhubaneswar`}
                className="w-full rounded-2xl shadow-professional"
                loading="lazy"
              />
            </div>
          </div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Service Includes</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 p-6 bg-gradient-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-ca-green flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <section className="mb-16 bg-muted/30 py-16 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent process for efficient service delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-ca-md">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Our {service.title}?</h2>
            <p className="text-lg text-muted-foreground">
              Key benefits that set our services apart
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-hero text-primary-foreground rounded-xl shadow-professional"
              >
                <Award className="w-8 h-8 text-ca-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16 bg-gradient-card p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the package that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.pricing.map((package_item, index) => (
              <Card key={index} className="relative border border-border/50 hover:border-primary/20 transition-colors shadow-professional">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-primary">{package_item.category}</CardTitle>
                  <div className="text-3xl font-bold text-ca-green mt-2">{package_item.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {package_item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-ca-green flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="professional" className="w-full mt-6" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our {service.title.toLowerCase()}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Testimonials Section */}
        {service.testimonials && service.testimonials.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Client Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Hear from our satisfied clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-border/50 hover:border-primary/20 transition-colors shadow-professional">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-primary-foreground">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                      </div>
                      <div className="flex ml-auto">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-ca-gold text-ca-gold" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center bg-gradient-professional py-16 rounded-2xl text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized consultation and discover how our 
              expert {service.title.toLowerCase()} can benefit your business or personal finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 w-5 h-5" />
                  Book Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="tel:+919861035535">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 98610 35535
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://wa.me/919861035535?text=Hi%20Abinash%20Mishra%20and%20Co,%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
    </>
  );
};

export default ServiceDetail;