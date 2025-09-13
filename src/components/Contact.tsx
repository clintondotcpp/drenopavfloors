"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Download,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'contact'
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank you for your inquiry!",
          description: "We'll contact you within 24 hours to discuss your project.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Message failed to send",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Get Started Today</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform Your Space with
            <span className="block text-primary">Expert Consultation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience the future of flooring? Contact our experts for a free consultation 
            and discover how Drenopav can transform your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-luxury bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Request Your Free Consultation</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+234 xxx xxxx xxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select 
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select project type</option>
                        <option value="residential-driveway">Residential Driveway</option>
                        <option value="residential-patio">Residential Patio</option>
                        <option value="commercial-parking">Commercial Parking</option>
                        <option value="pool-surround">Pool Surround</option>
                        <option value="walkway">Walkway/Pathway</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your project - area size, current surface, timeline, any specific requirements..."
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-premium hover:opacity-90 transition-opacity flex-1"
                    >
                      {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button type="button" variant="outline" className="flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download Guide</span>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="shadow-elevated bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 justify-start"
                    size="lg"
                    onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to inquire about Drenopav permeable floor surfaces.', '_blank')}
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    WhatsApp Chat
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary-foreground/30 text-secondary-foreground hover:bg-primary-foreground/10 justify-start"
                    size="lg"
                    onClick={() => window.open('tel:+2348026318818', '_self')}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="shadow-elevated">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">+234 802 631 8818</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">durucoenter12@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground text-sm">No. 181, Anwal Inland Road, Ugbolu, Asaba, Delta State, Nigeria</p>
                      <p className="text-muted-foreground text-sm mt-1"><strong>Service Areas:</strong> Lagos, Abuja, Port Harcourt, Kano & Nationwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Business Hours</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Free Guide */}
            <Card className="shadow-elevated bg-accent text-accent-foreground">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Download className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Free Guide</h3>
                </div>
                <p className="text-sm mb-4 opacity-90">
                  "7 Things to Know Before Installing Drenopav Permeable Floor Surfaces" - Download our comprehensive guide.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Download Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sticky WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-luxury"
            aria-label="Contact us on WhatsApp"
            onClick={() => window.open('https://wa.me/2348026318818?text=Hello! I would like to inquire about Drenopav permeable floor surfaces.', '_blank')}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;