"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Users, Award } from 'lucide-react';

const ServiceAreas = () => {
  const majorCities = [
    {
      city: "Lagos",
      state: "Lagos State",
      projects: "150+",
      contact: "+234 802 631 8818",
      email: "lagos@drenopavfloors.ng",
      featured: true
    },
    {
      city: "Abuja",
      state: "FCT",
      projects: "120+",
      contact: "+234 802 631 8818",
      email: "abuja@drenopavfloors.ng",
      featured: true
    },
    {
      city: "Port Harcourt",
      state: "Rivers State",
      projects: "80+",
      contact: "+234 802 631 8818",
      email: "ph@drenopavfloors.ng",
      featured: true
    },
    {
      city: "Kano",
      state: "Kano State",
      projects: "60+",
      contact: "+234 802 631 8818",
      email: "kano@drenopavfloors.ng",
      featured: false
    },
    {
      city: "Ibadan",
      state: "Oyo State",
      projects: "45+",
      contact: "+234 802 631 8818",
      email: "ibadan@drenopavfloors.ng",
      featured: false
    },
    {
      city: "Enugu",
      state: "Enugu State",
      projects: "35+",
      contact: "+234 802 631 8818",
      email: "enugu@drenopavfloors.ng",
      featured: false
    }
  ];

  const states = [
    "Lagos", "Abuja FCT", "Rivers", "Kano", "Oyo", "Enugu", "Kaduna", "Katsina", 
    "Ogun", "Ondo", "Osun", "Edo", "Delta", "Anambra", "Imo", "Abia", "Akwa Ibom",
    "Cross River", "Bayelsa", "Edo", "Edo", "Edo", "Edo", "Edo", "Edo", "Edo",
    "Edo", "Edo", "Edo", "Edo", "Edo", "Edo", "Edo", "Edo", "Edo"
  ];

  const regionalStats = [
    { region: "South West", projects: "200+", states: 6 },
    { region: "South East", projects: "150+", states: 5 },
    { region: "South South", projects: "120+", states: 6 },
    { region: "North Central", projects: "100+", states: 6 },
    { region: "North West", projects: "80+", states: 7 },
    { region: "North East", projects: "60+", states: 6 }
  ];

  return (
    <section id="service-areas" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Nationwide Service</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serving All 36 States
            <span className="block text-primary">Across Nigeria</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From Lagos to Kano, Abuja to Port Harcourt, we bring premium Drenopav 
            permeable floor surfaces to every corner of Nigeria with consistent quality and service.
          </p>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-gradient-premium text-primary-foreground">
            <CardContent className="p-6">
              <div className="text-3xl font-bold mb-2">36</div>
              <div className="text-sm text-primary-foreground/80">States Covered</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </CardContent>
          </Card>
        </div>

        {/* Major Cities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Major Service Centers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorCities.map((city, index) => (
              <Card key={index} className={`hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 ${city.featured ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{city.city}</h4>
                      <p className="text-muted-foreground">{city.state}</p>
                    </div>
                    {city.featured && (
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{city.projects} projects completed</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{city.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>{city.email}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    onClick={() => window.open(`https://wa.me/2348026318818?text=Hello! I'm interested in Drenopav services in ${city.city}.`, '_blank')}
                  >
                    Contact {city.city} Office
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Coverage */}
        <Card className="bg-gradient-hero mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Regional Coverage & Statistics
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our extensive network ensures quality service delivery across all six 
                geopolitical zones of Nigeria.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalStats.map((region, index) => (
                <div key={index} className="bg-card/60 backdrop-blur-sm rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold text-foreground mb-2">{region.region}</h4>
                  <div className="text-2xl font-bold text-primary mb-1">{region.projects}</div>
                  <div className="text-sm text-muted-foreground">{region.states} states</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Service Areas Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Complete Coverage Map
          </h3>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted/30 p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-2">Interactive Service Map</h4>
                <p className="text-muted-foreground mb-6">
                  Click on any state to see our local projects and contact information
                </p>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-6">
                  {states.slice(0, 36).map((state, index) => (
                    <div 
                      key={index} 
                      className="bg-primary/20 hover:bg-primary/40 rounded p-2 text-xs text-center cursor-pointer transition-colors"
                      title={`${state} - Click for local information`}
                    >
                      {state}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to know if you provide services in my area.', '_blank')}
                >
                  Check My Area
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Local Service Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Local Expertise
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Regional climate considerations</li>
                <li>• Local building regulations knowledge</li>
                <li>• Established supplier relationships</li>
                <li>• Community-trusted service</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-primary" />
                Quick Response
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Same-day consultation available</li>
                <li>• Local project managers</li>
                <li>• Faster installation scheduling</li>
                <li>• Immediate after-sales support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            No matter where you are in Nigeria, we're ready to bring premium Drenopav 
            permeable floor surfaces to your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-premium hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Local Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to know about Drenopav services in my area.', '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Local Office
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
