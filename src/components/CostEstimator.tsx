"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Download, MapPin } from 'lucide-react';

const CostEstimator = () => {
  const [area, setArea] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<string>('standard');

  // Base pricing per square meter (derived from the invoice: ₦8,600,000 for 150sqm = ₦57,333/sqm)
  const basePricePerSqm = 57333;
  
  const finishOptions = [
    {
      id: 'standard',
      name: 'Standard Finish',
      multiplier: 1,
      description: '100% natural rolled quartz stones with polyepoxides'
    },
    {
      id: 'premium',
      name: 'Premium Finish',
      multiplier: 1.2,
      description: 'Enhanced finish with premium aggregates and superior hardener'
    },
    {
      id: 'luxury',
      name: 'Luxury Finish',
      multiplier: 1.4,
      description: 'Top-tier finish with imported materials and decorative elements'
    }
  ];

  const calculateEstimate = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || areaNum <= 0) return null;

    const selectedOption = finishOptions.find(option => option.id === selectedFinish);
    const pricePerSqm = basePricePerSqm * (selectedOption?.multiplier || 1);
    const totalCost = areaNum * pricePerSqm;

    return {
      area: areaNum,
      pricePerSqm,
      totalCost,
      materials: totalCost * 0.7, // 70% materials
      workmanship: totalCost * 0.3, // 30% workmanship
      finishName: selectedOption?.name
    };
  };

  const estimate = calculateEstimate();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="estimator" className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Drenopav Cost Estimator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant estimate for your Drenopav permeable floor installation. 
            Our transparent pricing includes materials, workmanship, and logistics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <span>Project Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="area" className="text-sm font-medium">
                    Area (Square Meters)
                  </Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Enter area in sqm (e.g., 150)"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="mt-1"
                    min="1"
                    step="0.1"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">
                    Finish Type
                  </Label>
                  <div className="space-y-3">
                    {finishOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${
                          selectedFinish === option.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedFinish(option.id)}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{option.name}</span>
                          <span className="text-sm text-primary font-semibold">
                            {formatCurrency(basePricePerSqm * option.multiplier)}/sqm
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Prices include logistics to your location</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    * Final pricing may vary based on site conditions, accessibility, and specific requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Estimate Results */}
            <Card className="shadow-luxury">
              <CardHeader>
                <CardTitle className="text-primary">Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                {estimate ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-premium rounded-lg text-primary-foreground">
                      <div className="text-sm opacity-90 mb-1">Total Estimated Cost</div>
                      <div className="text-3xl font-bold">
                        {formatCurrency(estimate.totalCost)}
                      </div>
                      <div className="text-sm opacity-90 mt-1">
                        {estimate.area} sqm × {formatCurrency(estimate.pricePerSqm)}/sqm
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-muted-foreground">Finish Type:</span>
                        <span className="font-medium">{estimate.finishName}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-muted-foreground">Materials (70%):</span>
                        <span className="font-medium">{formatCurrency(estimate.materials)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b">
                        <span className="text-muted-foreground">Workmanship (30%):</span>
                        <span className="font-medium">{formatCurrency(estimate.workmanship)}</span>
                      </div>
                    </div>

                    <div className="bg-accent/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Payment Terms:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• 70% upfront for procurement of materials</li>
                        <li>• 20% before work start</li>
                        <li>• 10% after work completed</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-premium" size="lg">
                        Get Detailed Quote
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Download className="h-4 w-4 mr-2" />
                        Download Estimate
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Enter your project area above to see the cost breakdown
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-primary mb-2">150+ sqm</div>
              <p className="text-sm text-muted-foreground">Minimum project size for standard pricing</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-primary mb-2">36 States</div>
              <p className="text-sm text-muted-foreground">Nationwide coverage across Nigeria</p>
            </Card>
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Customer support and consultation</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostEstimator;
