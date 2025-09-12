import { 
  Droplets, 
  Shield, 
  Sparkles, 
  Sun, 
  Leaf, 
  Trophy,
  Truck,
  Clock
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Benefits = () => {
  const benefits = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Permeable & Flood-Resistant",
      description: "Advanced drainage system prevents waterlogging and flooding, making it ideal for Nigeria's climate."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ultra-Strong (5+ Tons)",
      description: "Supports heavy vehicles including trucks and SUVs without cracking or damage."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Easy to Clean & Maintain",
      description: "Simple pressure washing keeps your surface looking pristine year after year."
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "UV-Stable Colors",
      description: "Fade-resistant technology ensures your surface maintains its beauty under intense sun."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly Choice",
      description: "Supports sustainable urban drainage systems (SuDS) and reduces environmental impact."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Luxurious Finish",
      description: "Premium aesthetic that enhances property value and creates stunning visual appeal."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Heavy-Duty Performance",
      description: "Perfect for commercial applications including car parks, loading areas, and high-traffic zones."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Long-Lasting Durability",
      description: "20+ year lifespan with minimal maintenance requirements and excellent return on investment."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Why Choose Drenopav?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unmatched Benefits for
            <span className="block text-primary">Nigerian Conditions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our Drenopav permeable floor surfaces are specifically designed to excel in Nigeria's demanding climate, 
            offering superior performance, longevity, and aesthetic appeal.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full text-accent-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Applications Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8">Perfect for Every Application</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Driveways",
              "Pathways", 
              "Patios",
              "Pool Surrounds",
              "Gardens",
              "Commercial Spaces"
            ].map((application, index) => (
              <div key={index} className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-accent transition-colors">
                <span className="text-foreground font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Highlight */}
        <Card className="bg-primary text-primary-foreground overflow-hidden relative">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-secondary text-secondary-foreground">Sustainability</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Contributing to Nigeria's Environmental Future
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Our Drenopav permeable floor surfaces support sustainable urban drainage systems (SuDS), 
                  helping prevent flooding and reducing urban heat island effects. Choose Drenopav for 
                  a greener, more resilient Nigeria.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4" />
                    <span>Reduces Surface Runoff</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Leaf className="h-4 w-4" />
                    <span>Carbon Neutral Production</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/0ec54c9b-d340-47fb-80ec-9ec9013abe2b.png"
                  alt="Drenopav permeable floor surface installation showing excellent drainage properties with natural stone aggregates"
                  className="w-full rounded-lg shadow-luxury"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Benefits;