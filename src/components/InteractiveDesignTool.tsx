"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  Palette, 
  Ruler, 
  Calculator, 
  Download, 
  Share2, 
  RefreshCw,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const InteractiveDesignTool = () => {
  const [selectedColor, setSelectedColor] = useState('natural');
  const [selectedPattern, setSelectedPattern] = useState('standard');
  const [area, setArea] = useState([50]);
  const [thickness, setThickness] = useState([40]);

  const colorOptions = [
    { id: 'natural', name: 'Natural Stone', color: '#D2B48C', price: 8000 },
    { id: 'grey', name: 'Pigmented Grey', color: '#708090', price: 8500 },
    { id: 'brown', name: 'Premium Brown', color: '#8B4513', price: 9000 },
    { id: 'black', name: 'Elegant Black', color: '#2F2F2F', price: 9500 },
    { id: 'red', name: 'Terracotta Red', color: '#CD853F', price: 9200 },
    { id: 'blue', name: 'Ocean Blue', color: '#4682B4', price: 8800 }
  ];

  const patternOptions = [
    { id: 'standard', name: 'Standard Finish', multiplier: 1.0 },
    { id: 'textured', name: 'Textured Surface', multiplier: 1.1 },
    { id: 'polished', name: 'Polished Finish', multiplier: 1.2 },
    { id: 'custom', name: 'Custom Design', multiplier: 1.5 }
  ];

  const calculateCost = () => {
    const selectedColorData = colorOptions.find(c => c.id === selectedColor);
    const selectedPatternData = patternOptions.find(p => p.id === selectedPattern);
    const basePrice = selectedColorData?.price || 8000;
    const patternMultiplier = selectedPatternData?.multiplier || 1.0;
    const areaValue = area[0];
    const thicknessValue = thickness[0];
    
    const thicknessMultiplier = thicknessValue > 40 ? 1.2 : 1.0;
    const totalCost = basePrice * patternMultiplier * thicknessMultiplier * areaValue;
    
    return {
      baseCost: totalCost,
      installation: totalCost * 0.3,
      materials: totalCost * 0.7,
      total: totalCost * 1.3
    };
  };

  const cost = calculateCost();

  return (
    <section id="design-tool" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Design Your Space</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Design Tool
            <span className="block text-primary">Visualize Your Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Design your perfect Drenopav permeable floor surface with our interactive tool. 
            Choose colors, patterns, and get an instant quote for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Design Controls */}
          <div className="space-y-8">
            {/* Color Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Palette className="h-5 w-5 mr-2" />
                  Choose Your Color
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {colorOptions.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-elevated ${
                        selectedColor === color.id 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      <div 
                        className="w-full h-12 rounded mb-2"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      <div className="text-sm font-medium text-foreground">{color.name}</div>
                      <div className="text-xs text-muted-foreground">₦{color.price.toLocaleString()}/m²</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pattern Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Ruler className="h-5 w-5 mr-2" />
                  Select Pattern
                </h3>
                <div className="space-y-3">
                  {patternOptions.map((pattern) => (
                    <button
                      key={pattern.id}
                      onClick={() => setSelectedPattern(pattern.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        selectedPattern === pattern.id 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{pattern.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {pattern.multiplier}x
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Area Slider */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Project Area
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Area: {area[0]} m²
                    </label>
                    <Slider
                      value={area}
                      onValueChange={setArea}
                      max={500}
                      min={10}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>10 m²</span>
                      <span>500 m²</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Thickness: {thickness[0]}mm
                    </label>
                    <Slider
                      value={thickness}
                      onValueChange={setThickness}
                      max={80}
                      min={20}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>20mm</span>
                      <span>80mm</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Quote */}
          <div className="space-y-8">
            {/* Visual Preview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Design Preview</h3>
                <div className="aspect-square rounded-lg border-2 border-border overflow-hidden mb-4">
                  <div 
                    className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ 
                      backgroundColor: colorOptions.find(c => c.id === selectedColor)?.color || '#D2B48C'
                    }}
                  >
                    {selectedPattern === 'custom' ? 'Custom Design' : 'Drenopav Surface'}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Color: {colorOptions.find(c => c.id === selectedColor)?.name}</span>
                  <span>Pattern: {patternOptions.find(p => p.id === selectedPattern)?.name}</span>
                </div>
              </CardContent>
            </Card>

            {/* Cost Calculator */}
            <Card className="bg-gradient-premium text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Instant Quote
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Base Cost ({area[0]}m²)</span>
                    <span>₦{cost.baseCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Materials</span>
                    <span>₦{cost.materials.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Installation</span>
                    <span>₦{cost.installation.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-primary-foreground/20 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Cost</span>
                      <span>₦{cost.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Get Detailed Quote
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Save Design
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Your Design Includes</h3>
                <div className="space-y-2">
                  {[
                    'Premium aggregate materials',
                    'Professional installation',
                    '10-year warranty',
                    'Free maintenance guide',
                    'After-sales support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Bring Your Design to Life?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team will work with you to perfect your design and deliver 
            a stunning Drenopav permeable floor surface that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-premium hover:opacity-90 transition-opacity"
              onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I have a design in mind for my Drenopav project and would like to discuss it.', '_blank')}
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDesignTool;
