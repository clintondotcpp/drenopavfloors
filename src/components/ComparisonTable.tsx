"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X, TrendingUp, DollarSign, Shield, Droplets } from 'lucide-react';

const ComparisonTable = () => {
  const features = [
    {
      feature: "Initial Cost (per m²)",
      drenopav: "₦8,000 - ₦12,000",
      concrete: "₦3,000 - ₦5,000",
      tiles: "₦4,000 - ₦8,000",
      asphalt: "₦2,500 - ₦4,000",
      drenopavBest: true
    },
    {
      feature: "20-Year Total Cost",
      drenopav: "₦8,000 - ₦12,000",
      concrete: "₦15,000 - ₦25,000",
      tiles: "₦12,000 - ₦20,000",
      asphalt: "₦8,000 - ₦15,000",
      drenopavBest: true
    },
    {
      feature: "Maintenance Required",
      drenopav: "Minimal (pressure wash)",
      concrete: "Regular sealing, repairs",
      tiles: "Re-grouting, replacement",
      asphalt: "Annual resurfacing",
      drenopavBest: true
    },
    {
      feature: "Drainage Performance",
      drenopav: "Excellent (600mm/hr)",
      concrete: "Poor (runoff)",
      tiles: "Poor (runoff)",
      asphalt: "Poor (runoff)",
      drenopavBest: true
    },
    {
      feature: "Load Capacity",
      drenopav: "5+ tons",
      concrete: "3-4 tons",
      tiles: "2-3 tons",
      asphalt: "4-5 tons",
      drenopavBest: true
    },
    {
      feature: "UV Resistance",
      drenopav: "Excellent",
      concrete: "Poor (fading)",
      tiles: "Good",
      asphalt: "Poor (melting)",
      drenopavBest: true
    },
    {
      feature: "Installation Time",
      drenopav: "1-3 days",
      concrete: "3-7 days",
      tiles: "2-5 days",
      asphalt: "1-2 days",
      drenopavBest: false
    },
    {
      feature: "Lifespan",
      drenopav: "20-25 years",
      concrete: "10-15 years",
      tiles: "8-12 years",
      asphalt: "5-10 years",
      drenopavBest: true
    },
    {
      feature: "Environmental Impact",
      drenopav: "Eco-friendly",
      concrete: "High carbon",
      tiles: "Medium impact",
      asphalt: "High impact",
      drenopavBest: true
    },
    {
      feature: "Aesthetic Appeal",
      drenopav: "Premium luxury",
      concrete: "Basic",
      tiles: "Good",
      asphalt: "Poor",
      drenopavBest: true
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Best Long-term Value",
      description: "Lowest total cost of ownership over 20 years"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Superior Durability",
      description: "Highest load capacity and longest lifespan"
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Flood Prevention",
      description: "Only solution that prevents flooding and waterlogging"
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Why Choose Drenopav?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Drenopav vs Traditional
            <span className="block text-primary">Flooring Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Drenopav permeable floor surfaces compare to traditional flooring options. 
            The numbers speak for themselves - Drenopav delivers superior value and performance.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="mb-16 shadow-luxury overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-6 font-semibold text-foreground">Features</th>
                    <th className="text-center p-6 font-semibold text-foreground">
                      <div className="flex items-center justify-center space-x-2">
                        <Badge className="bg-primary text-primary-foreground">Drenopav</Badge>
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                    </th>
                    <th className="text-center p-6 font-semibold text-muted-foreground">Concrete</th>
                    <th className="text-center p-6 font-semibold text-muted-foreground">Tiles</th>
                    <th className="text-center p-6 font-semibold text-muted-foreground">Asphalt</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <td className="p-6 font-medium text-foreground">{item.feature}</td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="font-semibold text-primary">{item.drenopav}</span>
                          {item.drenopavBest && <Check className="h-4 w-4 text-green-500" />}
                        </div>
                      </td>
                      <td className="p-6 text-center text-muted-foreground">{item.concrete}</td>
                      <td className="p-6 text-center text-muted-foreground">{item.tiles}</td>
                      <td className="p-6 text-center text-muted-foreground">{item.asphalt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-accent-foreground mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cost Analysis */}
        <Card className="bg-gradient-premium text-primary-foreground mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                20-Year Cost Analysis
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                While Drenopav has a higher initial cost, it provides the best long-term value 
                with minimal maintenance and maximum durability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Drenopav</div>
                <div className="text-3xl font-bold text-accent mb-1">₦8,000</div>
                <div className="text-sm text-primary-foreground/80">per m² (20 years)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Concrete</div>
                <div className="text-3xl font-bold text-primary-foreground/60 mb-1">₦15,000</div>
                <div className="text-sm text-primary-foreground/80">per m² (20 years)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Tiles</div>
                <div className="text-3xl font-bold text-primary-foreground/60 mb-1">₦12,000</div>
                <div className="text-sm text-primary-foreground/80">per m² (20 years)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Asphalt</div>
                <div className="text-3xl font-bold text-primary-foreground/60 mb-1">₦8,000</div>
                <div className="text-sm text-primary-foreground/80">per m² (20 years)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Make the Smart Choice?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of smart property owners who have chosen Drenopav for 
            superior performance, durability, and value.
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
              onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to learn more about how Drenopav compares to other flooring options.', '_blank')}
            >
              Discuss Your Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
