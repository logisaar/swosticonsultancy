import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LocationMap: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-muted-foreground">
            Located in the heart of Bhubaneswar for your convenience
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative">
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-professional">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1234567890123!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a7c7b7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sPandav%20Nagar%2C%20Bhubaneswar%2C%20Odisha%20751018!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Abinash Mishra & Co. Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="border border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  <span>Office Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  Plot No. PP19, Pandav Nagar<br />
                  Tankapani Road, Badagada Square<br />
                  Bhubaneshwar, Odisha - 751018
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Phone className="w-5 h-5" />
                  <span>Contact Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground">
                  <a href="tel:+919861035535" className="hover:text-primary transition-colors">
                    +91 98610 35535
                  </a>
                </p>
                <p className="text-foreground">
                  <a href="https://wa.me/919861035535?text=Hi%20Abinash%20Mishra%20and%20Co,%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp: +91 98610 35535
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  <a href="mailto:abinashmishra70@gmail.com" className="hover:text-primary transition-colors">
                    abinashmishra70@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <Clock className="w-5 h-5" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-foreground">
                  <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;