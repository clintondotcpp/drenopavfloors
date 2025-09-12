"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react';

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Pool Area",
      category: "residential",
      location: "Abuja",
      year: "2024",
      image: "/lovable-uploads/12d9d3d9-76b8-4759-8992-3c78731e826e.png",
      description: "Premium drenopav permeable floor surrounding luxury swimming pool with scenic landscape integration.",
      testimonial: "The transformation is incredible! The surface looks stunning and drains perfectly during the rainy season.",
      client: "Mr. Adebayo O.",
      features: ["Pool Surround", "5-Ton Load Capacity", "Natural Beige Finish"]
    },
    {
      id: 2,
      title: "Modern Geometric Entrance",
      category: "commercial",
      location: "Lagos",
      year: "2024", 
      image: "/lovable-uploads/6e262374-26bb-4cac-8085-a64f1658da0f.png",
      description: "Custom geometric pattern entrance with integrated branding for corporate headquarters.",
      testimonial: "Professional installation and beautiful finish. Our clients always comment on the entrance.",
      client: "Corporate HQ",
      features: ["Custom Design", "Branding Integration", "High Traffic"]
    },
    {
      id: 3,
      title: "Luxury Driveway Installation",
      category: "residential",
      location: "Port Harcourt",
      year: "2023",
      image: "/lovable-uploads/ea210c8a-5741-43cb-a515-5f762f7ab7e8.png",
      description: "Elegant natural stone finish driveway with superior drainage and load-bearing capacity.",
      testimonial: "Outstanding quality and service. The driveway has transformed our home's appearance completely.",
      client: "Mrs. Funmi K.",
      features: ["Natural Stone", "Vehicle Access", "Flood Resistant"]
    },
    {
      id: 4,
      title: "Commercial Welcome Mat",
      category: "commercial",
      location: "Ibadan",
      year: "2024",
      image: "/lovable-uploads/236058dd-4c66-4b00-8661-52e3639639db.png",
      description: "Branded entrance surface with embedded welcome message for commercial facility.",
      testimonial: "Impressive durability and the custom branding really makes a professional statement.",
      client: "Business Center",
      features: ["Custom Text", "Commercial Grade", "Brand Integration"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Our Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recently Completed
            <span className="block text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of stunning Drenopav permeable floor installations across Nigeria. 
            Each project showcases our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className="transition-colors"
            >
              All Projects
            </Button>
            <Button 
              variant={activeFilter === 'residential' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveFilter('residential')}
              className="transition-colors"
            >
              Residential
            </Button>
            <Button 
              variant={activeFilter === 'commercial' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveFilter('commercial')}
              className="transition-colors"
            >
              Commercial
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-500">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Project Image */}
                  <div className="aspect-square md:aspect-auto overflow-hidden">
                    <img 
                      src={project.image}
                      alt={`${project.title} - Drenopav permeable floor project in ${project.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.category === 'residential' ? 'Residential' : 'Commercial'}
                        </Badge>
                        <Button variant="ghost" size="sm" className="p-1 h-auto">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Project Meta */}
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{project.client}</span>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, index) => (
                          <span key={index} className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-accent">
                      <p className="text-sm text-foreground italic mb-1">
                        "{project.testimonial}"
                      </p>
                      <p className="text-xs text-muted-foreground">
                        - {project.client}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join hundreds of satisfied customers across Nigeria who have transformed their spaces with Drenopav.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-premium hover:opacity-90 transition-opacity">
              Request Free Quote
            </Button>
            <Button variant="outline" size="lg">
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;