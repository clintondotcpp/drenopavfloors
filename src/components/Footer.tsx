import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/d7b5a072-54be-437c-9284-4130d5f5218e.png" 
                alt="Duruco Concept Limited - Drenopav Floors" 
                className="h-16 w-auto mb-4 bg-white p-2 rounded"
              />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Nigeria's leading provider of premium Quartz stone permeable surfaces. 
                Transforming driveways, patios, and commercial spaces with sustainable, 
                durable flooring solutions.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-primary-foreground/10">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#showcase" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Product Showcase</a></li>
              <li><a href="#benefits" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Benefits</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Projects</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary-foreground/80">Residential Driveways</span></li>
              <li><span className="text-primary-foreground/80">Commercial Parking</span></li>
              <li><span className="text-primary-foreground/80">Patio Surfaces</span></li>
              <li><span className="text-primary-foreground/80">Pool Surrounds</span></li>
              <li><span className="text-primary-foreground/80">Walkways & Paths</span></li>
              <li><span className="text-primary-foreground/80">Custom Designs</span></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">+234 802 631 8818</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">durucoenter12@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-primary-foreground/80">No. 181, Anwal Inland Road<br />Ugbolu, Asaba, Delta State</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Get updates on new projects and special offers.
              </p>
              <div className="flex">
                <Input 
                  placeholder="Your email" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 text-sm"
                />
                <Button variant="secondary" size="sm" className="ml-2 px-3">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-center text-lg font-semibold mb-4">Service Areas Across Nigeria</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            {[
              "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Benin City",
              "Jos", "Kaduna", "Enugu", "Calabar", "Owerri", "Warri", "Akure",
              "Ilorin", "Sokoto", "Minna", "Bauchi", "Gombe", "Uyo", "Asaba"
            ].map((city, index) => (
              <span key={index} className="hover:text-primary-foreground transition-colors cursor-default">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>
              © 2024 Duruco Concept Limited - Drenopav Floors. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-luxury animate-pulse"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;