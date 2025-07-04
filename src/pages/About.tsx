import React from 'react';
import { Award, Users, Target, Eye, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import abinashPortrait from '@/assets/abinash-mishra-portrait.jpg';
import officeInterior from '@/assets/office-interior.jpg';

const About: React.FC = () => {
  const qualifications = [
    'Chartered Accountant (ICAI)',
    'ICAI Registration: 123456',
    'Member since 1998',
    'Certified Tax Practitioner',
    'Advanced Diploma in Financial Management',
    'Regular participant in ICAI CPE programs'
  ];

  const milestones = [
    { year: '1998', event: 'Established practice in Bhubaneshwar' },
    { year: '2005', event: 'Expanded services to include business advisory' },
    { year: '2010', event: 'Launched specialized NRI services' },
    { year: '2017', event: 'Implemented GST compliance services' },
    { year: '2020', event: 'Digital transformation and online consultations' },
    { year: '2024', event: 'Serving 500+ satisfied clients' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            About Abinash Mishra & Co.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in financial excellence with over two decades of 
            professional expertise in Chartered Accountancy services.
          </p>
        </div>

        {/* Founder Profile */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Meet CA Abinash Mishra</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                With over <strong>27 years of experience</strong> in the field of Chartered Accountancy, 
                CA Abinash Mishra has established himself as a trusted financial advisor and tax consultant 
                in Bhubaneshwar. His journey began in 1998 when he founded Abinash Mishra & Co. with a 
                vision to provide comprehensive, reliable, and professional accounting services.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Known for his meticulous attention to detail and client-centric approach, CA Abinash Mishra 
                has successfully guided hundreds of individuals and businesses through complex financial 
                landscapes, ensuring compliance while optimizing their financial potential.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Professional Qualifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-ca-green flex-shrink-0" />
                      <span className="text-foreground">{qualification}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="professional" size="lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={abinashPortrait}
                alt="CA Abinash Mishra"
                className="w-full rounded-2xl shadow-professional"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-ca-lg border border-border">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-ca-gold" />
                  <div>
                    <p className="font-semibold text-primary">ICAI Certified</p>
                    <p className="text-sm text-muted-foreground">Professional Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-professional">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground leading-relaxed">
                  To provide exceptional Chartered Accountancy services that empower our clients 
                  to achieve financial success through expert guidance, innovative solutions, and 
                  unwavering commitment to excellence. We strive to build long-term relationships 
                  based on trust, transparency, and professional integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-professional">
              <CardHeader className="text-center">
                <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground leading-relaxed">
                  To be the most trusted and preferred Chartered Accountancy firm in Eastern India, 
                  recognized for our expertise, reliability, and client-centric approach. We envision 
                  a future where every business, regardless of size, has access to professional 
                  financial guidance for sustainable growth and compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our 25+ year journey of excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="shadow-ca-md">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                          <div>
                            <p className="font-bold text-primary text-lg">{milestone.year}</p>
                            <p className="text-foreground">{milestone.event}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-ca-md"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office & Team */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={officeInterior}
                alt="Our Office"
                className="w-full rounded-2xl shadow-professional"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Office & Team</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Located in the heart of Bhubaneshwar at Plot No. PP19, Pandav Nagar, our modern 
                office is equipped with the latest technology and resources to serve our clients 
                efficiently. Our strategic location ensures easy accessibility for clients across 
                the city and neighboring areas.
              </p>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Our dedicated team of qualified professionals works collaboratively to provide 
                comprehensive solutions tailored to each client's unique requirements. We believe 
                in continuous learning and stay updated with the latest regulatory changes and 
                industry best practices.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-primary">Expert Team</p>
                  <p className="text-sm text-muted-foreground">Qualified Professionals</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-primary">Quality Service</p>
                  <p className="text-sm text-muted-foreground">100% Client Satisfaction</p>
                </div>
              </div>
              
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Visit Our Office</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-card p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Experience Professional Excellence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us with their financial needs. 
            Let's discuss how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;