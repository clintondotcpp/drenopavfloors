"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  MessageCircle,
  FileText
} from 'lucide-react';

const ProcessTimeline = () => {
  const timelineSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      duration: "Same Day",
      description: "Free site visit and assessment of your project requirements",
      details: [
        "Site survey and measurements",
        "Drainage assessment",
        "Color and design consultation",
        "Detailed project discussion"
      ],
      icon: <Phone className="h-6 w-6" />,
      color: "bg-primary"
    },
    {
      step: 2,
      title: "Quote & Design",
      duration: "1-2 Days",
      description: "Detailed quote with 3D design visualization and material selection",
      details: [
        "Comprehensive cost breakdown",
        "3D design mockup",
        "Material samples",
        "Timeline and schedule"
      ],
      icon: <FileText className="h-6 w-6" />,
      color: "bg-accent"
    },
    {
      step: 3,
      title: "Preparation",
      duration: "1 Day",
      description: "Site preparation and material delivery to your location",
      details: [
        "Site clearing and cleaning",
        "Base preparation",
        "Material delivery",
        "Equipment setup"
      ],
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-secondary"
    },
    {
      step: 4,
      title: "Installation",
      duration: "1-3 Days",
      description: "Professional installation by our certified technicians",
      details: [
        "Surface preparation",
        "Aggregate mixing",
        "Expert application",
        "Quality control checks"
      ],
      icon: <Users className="h-6 w-6" />,
      color: "bg-primary"
    },
    {
      step: 5,
      title: "Completion & Handover",
      duration: "Same Day",
      description: "Final inspection, cleanup, and project handover",
      details: [
        "Final quality inspection",
        "Cleanup and waste removal",
        "Care instructions",
        "Warranty documentation"
      ],
      icon: <CheckCircle className="h-6 w-6" />,
      color: "bg-accent"
    }
  ];

  const projectTypes = [
    {
      type: "Residential Driveway",
      duration: "1-2 days",
      size: "50-200 m²",
      complexity: "Standard"
    },
    {
      type: "Commercial Entrance",
      duration: "2-3 days", 
      size: "100-500 m²",
      complexity: "High"
    },
    {
      type: "Pool Surround",
      duration: "1-2 days",
      size: "30-150 m²", 
      complexity: "Standard"
    },
    {
      type: "Custom Design",
      duration: "3-5 days",
      size: "Any size",
      complexity: "Premium"
    }
  ];

  return (
    <section id="process" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Our Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Consultation to
            <span className="block text-primary">Completion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your Drenopav permeable floor surface 
            is installed to perfection, on time and within budget.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block"></div>
          
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={step.step} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1 lg:max-w-md">
                  <Card className="hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                            <Badge variant="secondary" className="text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {step.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <ul className="space-y-1">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 mx-4">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-luxury`}>
                    {step.step}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 lg:max-w-md hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Project Timeline Estimates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {project.type}
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.size}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4" />
                      <span>{project.complexity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <Card className="bg-gradient-premium text-primary-foreground mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                What to Expect During Installation
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                We work efficiently to minimize disruption to your daily routine while 
                ensuring the highest quality installation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  During Installation
                </h4>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Minimal noise and disruption</li>
                  <li>• Professional cleanup daily</li>
                  <li>• Regular progress updates</li>
                  <li>• Quality control at each step</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  After Completion
                </h4>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>• Complete site cleanup</li>
                  <li>• Care and maintenance guide</li>
                  <li>• Warranty documentation</li>
                  <li>• Follow-up service call</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get your free consultation and see how our proven process can transform 
            your space with Drenopav permeable floor surfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-premium hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to learn more about your installation process and timeline.', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Ask Questions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
