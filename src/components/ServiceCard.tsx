import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, href, features }) => {
  return (
    <Card className="group hover:shadow-professional transition-all duration-300 transform hover:-translate-y-2 border border-border/50 hover:border-primary/20">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-ca-md">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-dark transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <ul className="text-left space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <div className="w-2 h-2 bg-ca-green rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <Button variant="professional" className="w-full" asChild>
            <Link to={href}>Learn More</Link>
          </Button>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;