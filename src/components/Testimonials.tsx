"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, Play, MapPin, Calendar } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Adebayo O.",
      location: "Abuja",
      project: "Luxury Pool Area",
      rating: 5,
      quote: "The transformation is incredible! The surface looks stunning and drains perfectly during the rainy season. No more flooding issues in our compound.",
      image: "/lovable-uploads/12d9d3d9-76b8-4759-8992-3c78731e826e.png",
      video: true,
      verified: true
    },
    {
      id: 2,
      name: "Mrs. Funmi K.",
      location: "Port Harcourt",
      project: "Residential Driveway",
      rating: 5,
      quote: "Outstanding quality and service. The driveway has transformed our home's appearance completely. Our neighbors are always asking about it.",
      image: "/lovable-uploads/ea210c8a-5741-43cb-a515-5f762f7ab7e8.png",
      video: false,
      verified: true
    },
    {
      id: 3,
      name: "Corporate HQ",
      location: "Lagos",
      project: "Commercial Entrance",
      rating: 5,
      quote: "Professional installation and beautiful finish. Our clients always comment on the entrance. It's become a talking point for our business.",
      image: "/lovable-uploads/6e262374-26bb-4cac-8085-a64f1658da0f.png",
      video: true,
      verified: true
    },
    {
      id: 4,
      name: "Business Center",
      location: "Ibadan",
      project: "Branded Welcome Area",
      rating: 5,
      quote: "Impressive durability and the custom branding really makes a professional statement. Worth every naira invested.",
      image: "/lovable-uploads/236058dd-4c66-4b00-8661-52e3639639db.png",
      video: false,
      verified: true
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Customer Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
            <span className="block text-primary">About Drenopav</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from hundreds of satisfied customers across Nigeria 
            who have transformed their spaces with our premium Drenopav permeable floor surfaces.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                {/* Customer Info */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs">Verified</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-4">
                  <Quote className="h-6 w-6 text-accent mb-2" />
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Project Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {testimonial.project}
                  </div>
                  {testimonial.video && (
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      <Play className="h-3 w-3 mr-1" />
                      Watch Video
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              See Drenopav in Action
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Watch real customers share their experiences and see the transformation 
              that Drenopav permeable floor surfaces can bring to your space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Installation Process</h4>
              <p className="text-sm text-primary-foreground/80">See how we transform your space</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Customer Stories</h4>
              <p className="text-sm text-primary-foreground/80">Real experiences from our clients</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Play className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Before & After</h4>
              <p className="text-sm text-primary-foreground/80">Amazing transformations</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the same quality and service that has made us Nigeria's trusted 
            leader in permeable floor surfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-premium hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to see more customer testimonials and project examples.', '_blank')}
            >
              View More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
