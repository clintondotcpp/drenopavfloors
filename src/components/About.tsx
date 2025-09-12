import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  MapPin, 
  Clock,
  Target,
  Shield,
  Lightbulb,
  Heart
} from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Projects Completed"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      number: "36",
      label: "States Covered"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "24/7",
      label: "Customer Support"
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description: "We deliver nothing but the highest quality Drenopav permeable floor surfaces, exceeding industry standards."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reliability", 
      description: "Trusted by hundreds of clients across Nigeria for consistent, dependable results."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Leading the industry with cutting-edge techniques and sustainable solutions."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Customer First",
      description: "Your satisfaction is our priority, from consultation to project completion."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">About Drenopav</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nigeria's Trusted Leader in
            <span className="block text-primary">Quartz Stone Flooring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 3 years, Drenopav has been transforming Nigeria's landscape with premium 
            Drenopav permeable floor surfaces, setting the standard for quality and innovation.
          </p>
        </div>

        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Pioneering Sustainable
              <span className="block text-primary">Flooring Solutions</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to bring world-class Quartz stone technology to Nigeria, 
                Drenopav has grown from a small specialist contractor to the country's leading 
                provider of permeable surface solutions.
              </p>
              <p>
                Our commitment to excellence has made us the preferred choice for luxury 
                residential projects, commercial developments, and infrastructure initiatives 
                across all 36 states of Nigeria.
              </p>
              <p>
                As part of Duruco Concept Limited, we combine technical expertise with 
                innovative thinking to deliver surfaces that are not just beautiful, 
                but environmentally responsible and built to last.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">Why Choose Drenopav?</h4>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                      {value.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{value.title}</p>
                      <p className="text-muted-foreground text-xs">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="shadow-luxury overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/d7b5a072-54be-437c-9284-4130d5f5218e.png"
                  alt="Duruco Concept Limited - Drenopav company logo showing construction and building expertise with 'simplifying technology' tagline"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-lg p-4 shadow-luxury">
              <div className="text-center">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-premium rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Delivering Excellence Across Nigeria
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Our track record speaks for itself. From Lagos to Kano, Abuja to Port Harcourt, 
              we've earned the trust of clients nationwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full text-primary-foreground mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Target className="mr-3 h-6 w-6 text-primary" />
                Our Mission
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To transform Nigeria's infrastructure landscape by providing sustainable, 
                high-quality Quartz stone surfaces that enhance both aesthetics and functionality 
                while supporting environmental conservation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elevated">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                Our Vision
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                To be Africa's leading provider of innovative flooring solutions, 
                setting new standards for quality, sustainability, and customer satisfaction 
                across the continent.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Certified Excellence & Trusted Partnerships
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Industry Leader</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Authorized Dealer</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span>Customer Choice Award</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;