import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProductShowcase = () => {
  const colorOptions = [
    {
      name: "Natural Stone",
      image: "/lovable-uploads/ea210c8a-5741-43cb-a515-5f762f7ab7e8.png",
      description: "Classic beige finish perfect for driveways and pathways"
    },
    {
      name: "Pigmented Grey",
      image: "/lovable-uploads/e6e06b22-f846-490b-970c-afb749def808.png",
      description: "Contemporary grey tones for modern applications"
    },
    {
      name: "Premium Brown",
      image: "/lovable-uploads/480d5d95-0845-414d-82fa-c8ddee2b7977.png",
      description: "Rich brown aggregates for luxury finishes"
    },
    {
      name: "Designer Patterns",
      image: "/lovable-uploads/6e262374-26bb-4cac-8085-a64f1658da0f.png",
      description: "Custom geometric designs and branded surfaces"
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">Product Showcase</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Drenopav Permeable Floor Surface Solutions
            <span className="block text-primary">Surface Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our range of high-quality aggregates and finishes. Each surface combines natural stone beauty 
            with cutting-edge Drenopav permeable floor technology for unmatched durability and style.
          </p>
        </div>

        {/* Color Sample Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <img 
              src="/lovable-uploads/850108b5-ea4e-4e4c-a919-9d975396fc59.png"
              alt="Drenopav permeable floor color samples showcasing various aggregate options including natural, black, red, brown, blue, and green finishes"
              className="mx-auto rounded-lg shadow-elevated max-w-2xl w-full"
            />
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              Complete range of premium aggregate colors and textures available. 
              Each sample represents our commitment to quality and variety.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {colorOptions.map((option, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-luxury hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={option.image}
                    alt={`${option.name} Drenopav permeable floor surface finish by Duruco Concept Limited`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {option.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Installation Process */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Installation Process</Badge>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Expert Installation
              <span className="block text-primary">Guaranteed Results</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our skilled technicians follow a proven installation process that ensures perfect 
              bonding, optimal drainage, and long-lasting beauty. Every project is completed 
              to the highest standards with attention to detail.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground mt-1">1</div>
                <div>
                  <p className="font-semibold text-foreground">Surface Preparation</p>
                  <p className="text-sm text-muted-foreground">Professional cleaning and priming of the base surface</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground mt-1">2</div>
                <div>
                  <p className="font-semibold text-foreground">Quartz Stone Mixing</p>
                  <p className="text-sm text-muted-foreground">Precise blending of premium aggregates with high-grade Quartz stones</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground mt-1">3</div>
                <div>
                  <p className="font-semibold text-foreground">Expert Application</p>
                  <p className="text-sm text-muted-foreground">Seamless installation ensuring perfect finish and drainage</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <img 
              src="/lovable-uploads/c829327b-79ed-4d9d-b815-7d4465474b90.png"
              alt="Drenopav installation process showing cross-section of Drenopav permeable floor surface with natural stone aggregates"
              className="w-full rounded-lg shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;