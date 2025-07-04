import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TestimonialCardProps {
  name: string;
  designation: string;
  company: string;
  rating: number;
  testimonial: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  designation,
  company,
  rating,
  testimonial,
  image
}) => {
  return (
    <Card className="h-full shadow-ca-md hover:shadow-ca-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20 -mt-2 -ml-2" />
          <p className="text-foreground italic leading-relaxed text-sm pt-4">
            "{testimonial}"
          </p>
        </div>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-ca-gold fill-current' : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <span className="text-primary-foreground font-semibold text-lg">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{designation}</p>
            <p className="text-xs text-primary font-medium">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;