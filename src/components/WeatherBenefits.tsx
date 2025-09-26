"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Droplets, 
  Sun, 
  CloudRain, 
  Thermometer, 
  Shield, 
  Leaf,
  Wind,
  Eye,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const WeatherBenefits = () => {
  const weatherChallenges = [
    {
      challenge: "Heavy Rainfall",
      description: "Nigeria's rainy season brings intense downpours that can cause flooding and waterlogging",
      impact: "Traditional surfaces create runoff, flooding, and damage",
      solution: "Drenopav drains 600mm/hour, preventing flooding",
      icon: <CloudRain className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      challenge: "Intense Heat",
      description: "Temperatures can reach 40°C+ with intense UV radiation",
      impact: "Asphalt melts, concrete cracks, tiles fade",
      solution: "UV-stable materials maintain color and integrity",
      icon: <Sun className="h-6 w-6" />,
      color: "text-orange-500"
    },
    {
      challenge: "Humidity",
      description: "High humidity levels accelerate material degradation",
      impact: "Mold, mildew, and material breakdown",
      solution: "Permeable design prevents moisture buildup",
      icon: <Droplets className="h-6 w-6" />,
      color: "text-cyan-500"
    },
    {
      challenge: "Harmattan Dust",
      description: "Dry season brings fine dust and sand particles",
      impact: "Surface damage and constant cleaning needs",
      solution: "Smooth finish resists dust accumulation",
      icon: <Wind className="h-6 w-6" />,
      color: "text-yellow-600"
    }
  ];

  const climateBenefits = [
    {
      benefit: "Flood Prevention",
      description: "Prevents waterlogging during heavy rains",
      icon: <Droplets className="h-8 w-8" />,
      stats: "600mm/hour drainage rate"
    },
    {
      benefit: "Heat Resistance",
      description: "Maintains integrity in extreme temperatures",
      icon: <Thermometer className="h-8 w-8" />,
      stats: "Up to 60°C without damage"
    },
    {
      benefit: "UV Protection",
      description: "Colors remain vibrant under intense sun",
      icon: <Sun className="h-8 w-8" />,
      stats: "20+ years color stability"
    },
    {
      benefit: "Low Maintenance",
      description: "Easy cleaning in dusty conditions",
      icon: <Shield className="h-8 w-8" />,
      stats: "Pressure wash only"
    }
  ];

  const seasonalPerformance = [
    {
      season: "Rainy Season (April - October)",
      challenges: ["Heavy rainfall", "Flooding risk", "Waterlogging"],
      drenopavSolution: "Excellent drainage prevents flooding and water damage",
      traditionalProblems: "Flooding, waterlogging, surface damage"
    },
    {
      season: "Dry Season (November - March)",
      challenges: ["Intense heat", "UV radiation", "Harmattan dust"],
      drenopavSolution: "UV-stable materials and easy-to-clean surface",
      traditionalProblems: "Fading, cracking, constant cleaning needed"
    }
  ];

  return (
    <section id="weather-benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Climate Optimized</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Nigeria's
            <span className="block text-primary">Challenging Climate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Drenopav permeable floor surfaces are specifically engineered to excel in Nigeria's 
            demanding weather conditions, from heavy rains to intense heat and dust.
          </p>
        </div>

        {/* Weather Challenges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Weather Challenges in Nigeria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weatherChallenges.map((challenge, index) => (
              <Card key={index} className="hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${challenge.color} flex-shrink-0`}>
                      {challenge.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {challenge.challenge}
                      </h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {challenge.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Traditional Impact:</p>
                            <p className="text-xs text-muted-foreground">{challenge.impact}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Drenopav Solution:</p>
                            <p className="text-xs text-muted-foreground">{challenge.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Climate Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Climate Performance Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {climateBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-accent-foreground mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.benefit}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {benefit.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {benefit.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Seasonal Performance */}
        <Card className="bg-gradient-premium text-primary-foreground mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Year-Round Performance
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Drenopav permeable floor surfaces maintain excellent performance 
                throughout Nigeria's challenging seasonal variations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seasonalPerformance.map((season, index) => (
                <div key={index} className="bg-primary-foreground/10 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-4">{season.season}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Challenges
                      </h5>
                      <ul className="text-sm text-primary-foreground/80 space-y-1">
                        {season.challenges.map((challenge, i) => (
                          <li key={i}>• {challenge}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Drenopav Solution
                      </h5>
                      <p className="text-sm text-primary-foreground/80">
                        {season.drenopavSolution}
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Traditional Problems
                      </h5>
                      <p className="text-sm text-primary-foreground/80">
                        {season.traditionalProblems}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="bg-gradient-hero mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Environmental Benefits
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Drenopav permeable floor surfaces contribute to Nigeria's environmental 
                sustainability goals while providing superior performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Reduces Runoff</h4>
                <p className="text-sm text-muted-foreground">
                  Prevents surface water runoff, reducing flood risk and supporting sustainable drainage
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Heat Island Reduction</h4>
                <p className="text-sm text-muted-foreground">
                  Permeable surface helps reduce urban heat island effects in Nigerian cities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Long-lasting</h4>
                <p className="text-sm text-muted-foreground">
                  20+ year lifespan reduces waste and environmental impact compared to other surfaces
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready for Nigeria's Climate?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Choose the only flooring solution designed specifically for Nigeria's challenging 
            weather conditions. Get a surface that performs year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-premium hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Shield className="mr-2 h-5 w-5" />
              Get Climate-Proof Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to learn more about how Drenopav performs in Nigeria climate.', '_blank')}
            >
              <CloudRain className="mr-2 h-5 w-5" />
              Discuss Weather Benefits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherBenefits;
