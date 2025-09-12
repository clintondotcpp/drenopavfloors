import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Will Drenopav permeable floor surfaces crack over time?",
      answer: "No, when properly installed by our certified technicians, Drenopav permeable floor surfaces are extremely durable and flexible. They can withstand temperature variations, ground movement, and heavy loads without cracking. Our surfaces come with a comprehensive warranty and have been proven to last 20+ years with minimal maintenance."
    },
    {
      question: "How long does a Drenopav permeable floor surface last?",
      answer: "Our premium Drenopav permeable floor surfaces are designed to last 20-25 years with proper installation and minimal maintenance. The UV-stable resins we use are specifically chosen to withstand Nigeria's intense sunlight, and the permeable structure prevents damage from water accumulation."
    },
    {
      question: "Can heavy cars and trucks park on Drenopav permeable floor surfaces?",
      answer: "Absolutely! Our Drenopav permeable floor surfaces are engineered to support loads of 5+ tons, making them perfect for SUVs, delivery trucks, and commercial vehicles. The surface distributes weight evenly, preventing rutting or damage even under heavy traffic."
    },
    {
      question: "How much does Drenopav permeable floor surfacing cost compared to concrete or tiles?",
      answer: "While the initial investment in Drenopav permeable floor surfacing may be higher than basic concrete, the total cost of ownership is significantly lower. You save on long-term maintenance, replacement costs, and drainage solutions. Plus, the aesthetic and property value benefits make it an excellent investment. Contact us for a detailed, no-obligation quote."
    },
    {
      question: "How does the drainage system work?",
      answer: "Our Drenopav permeable floor surfaces are fully permeable, allowing water to drain through at rates of up to 600mm per hour. This prevents flooding, reduces surface runoff, and supports Nigeria's sustainable drainage requirements. The water filters naturally through to the ground below, making it environmentally friendly."
    },
    {
      question: "What maintenance is required?",
      answer: "Maintenance is minimal! Regular sweeping and occasional pressure washing (every 6-12 months) will keep your surface looking pristine. Unlike other surfaces, there's no need for sealing, re-painting, or major repairs. Weeds cannot grow through the surface due to the UV-stable Quartz stones."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential projects (driveways, patios) are completed in 1-3 days depending on size and complexity. Commercial projects may take longer. We work efficiently to minimize disruption to your daily routine and always clean up thoroughly after completion."
    },
    {
      question: "Can you match specific colors or create custom designs?",
      answer: "Yes! We offer a wide range of aggregate colors and can create custom blends to match your preferences. We can also incorporate logos, patterns, or text into the surface design. Our design team will work with you to achieve your exact vision."
    },
    {
      question: "Do you provide service nationwide?",
      answer: "Yes, Drenopav provides installation services across all 36 states of Nigeria. We have regional teams and partnerships that ensure consistent quality and service standards regardless of location. Contact us to discuss your project anywhere in Nigeria."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide a comprehensive 10-year warranty on workmanship and a 20-year warranty on material performance. This covers any issues related to installation quality, premature wear, or structural problems. Our warranty is backed by our reputation and 15+ years of successful projects."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary text-primary-foreground">Frequently Asked Questions</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Know About
            <span className="block text-primary">Drenopav Permeable Floor Surfaces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our Drenopav permeable floor solutions. 
            Can't find what you're looking for? Our experts are here to help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-subtle hover:shadow-elevated transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center bg-gradient-premium rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h3>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our flooring experts are standing by to answer any specific questions about your project. 
            Get personalized advice and detailed information about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Expert
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-secondary-foreground hover:bg-primary-foreground/10"
            >
              Schedule Call Back
            </Button>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-12 bg-accent rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-accent-foreground mb-1">
                Need Immediate Assistance?
              </h4>
              <p className="text-accent-foreground/80 text-sm">
                Call us now for instant answers to your questions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" size="sm">
                Call: +234 xxx xxxx xxx
              </Button>
              <Button variant="outline" size="sm" className="border-accent-foreground/30">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;