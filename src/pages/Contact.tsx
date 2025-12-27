import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How much does HVAC service cost?',
    answer: 'Service costs vary depending on the type of service needed. We provide free estimates for all major repairs and installations. Our diagnostic fee is $89, which is waived if you proceed with the repair. We always provide upfront pricing before any work begins.',
  },
  {
    question: 'Do you offer emergency HVAC service?',
    answer: 'Yes! We offer 24/7 emergency HVAC service for urgent heating and cooling issues. Our emergency technicians are available nights, weekends, and holidays. Call (214) 555-0198 anytime for emergency service.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve the entire Dallas–Fort Worth metroplex, including Dallas, Fort Worth, Arlington, Plano, Irving, Garland, Frisco, McKinney, Grand Prairie, Mesquite, Carrollton, Denton, and surrounding areas.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Absolutely! All of our repairs come with a 1-year labor warranty. New installations include manufacturer warranties (typically 5-10 years) plus our own 2-year labor warranty. We stand behind every job we do.',
  },
  {
    question: 'How often should I service my HVAC system?',
    answer: 'We recommend professional maintenance twice a year—once in spring for your AC and once in fall for your heating system. Regular maintenance extends equipment life, improves efficiency, and prevents costly breakdowns.',
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes, we offer flexible financing options for new installations and major repairs. We work with multiple lenders to find terms that fit your budget. Ask about our 0% APR options for qualified buyers.',
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours. For immediate assistance, call (214) 555-0198.",
    });
    
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ready for reliable HVAC service? Get in touch for a free estimate or to schedule service.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h2 className="heading-3 text-foreground mb-6">Request a Free Estimate</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(214) 555-0000"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service...</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="ac-installation">AC Installation</option>
                    <option value="heating-repair">Heating Repair</option>
                    <option value="furnace-installation">Furnace Installation</option>
                    <option value="maintenance">Maintenance Plan</option>
                    <option value="air-quality">Indoor Air Quality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your HVAC needs..."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20">
                <h3 className="heading-3 text-foreground mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <a
                    href="tel:+12145550198"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-cta flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cta-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                        (214) 555-0198
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:service@corecomforthvac.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                        service@corecomforthvac.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Service Area</p>
                      <p className="text-lg font-semibold text-foreground">
                        Dallas–Fort Worth, TX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Clock className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Hours</p>
                      <p className="font-semibold text-foreground">Mon–Sat: 7AM – 9PM</p>
                      <p className="text-sm text-secondary font-medium">24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-cta/10 border border-cta/30 rounded-xl p-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">HVAC Emergency?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    No heat? No AC? Strange noises or smells? We're available 24/7 for urgent HVAC issues.
                  </p>
                  <a href="tel:+12145550198">
                    <Button variant="cta" size="sm">
                      <Phone className="w-4 h-4" />
                      Call Emergency Line
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="heading-2 text-foreground mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
