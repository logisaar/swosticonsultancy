import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Income Tax Filing', href: '/services/taxation' },
    { name: 'GST Registration', href: '/services/taxation' },
    { name: 'Company Registration', href: '/services/business-registration' },
    { name: 'Audit Services', href: '/services/auditing' },
    { name: 'Financial Advisory', href: '/services/financial-advisory' },
    { name: 'NRI Services', href: '/services/nri-services' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-ca-md">
                <span className="text-xl font-bold text-primary-foreground">AM</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Abinash Mishra & Co.</h3>
                <p className="text-sm text-background/70">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-background/80 text-sm mb-6">
              Professional Chartered Accountancy services with 27 years of experience in taxation, 
              audit, and financial advisory for individuals and businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/abinash-mishra-co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/abinashmishraca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/abinashmishraca/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919861035535?text=Hi%20Abinash%20Mishra%20and%20Co,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-ca-green transition-colors duration-300"
                aria-label="WhatsApp Contact"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm">
                    Plot No. PP19, Pandav Nagar,<br />
                    Tankapani Road, Badagada Square,<br />
                    Bhubaneshwar - 751018, Odisha
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919861035535"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  +91 98610 35535
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:abinashmishra70@gmail.com"
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  abinashmishra70@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/70 text-sm">
              © 2024 Abinash Mishra & Co. All rights reserved. | ICAI Registration: 123456
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;