import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone, Users, Calendar, Award, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: ThumbsUp,
    title: 'Upfront Pricing',
    description: 'No hidden fees or surprises. We provide clear, honest quotes before any work begins.',
  },
  {
    icon: Calendar,
    title: 'Same-Day Service',
    description: 'We understand HVAC emergencies can\'t wait. Same-day appointments available in most cases.',
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Our team is fully licensed, EPA certified, and trained on all major HVAC brands.',
  },
  {
    icon: CheckCircle,
    title: 'Satisfaction Guaranteed',
    description: 'Your comfort is our priority. We stand behind every repair and installation we perform.',
  },
];

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-primary-foreground mb-4">
            About CoreComfort HVAC
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Family-owned and operated since 2009, serving the Dallas–Fort Worth community with honest, reliable HVAC services.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="heading-2 text-foreground mt-2 mb-6">
                15+ Years of Keeping DFW Comfortable
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CoreComfort HVAC was founded in 2009 by a team of experienced HVAC professionals who shared a simple vision: provide honest, reliable heating and cooling services that homeowners could trust.
                </p>
                <p>
                  What started as a small operation has grown into one of the most trusted HVAC companies in the Dallas–Fort Worth metroplex. But our commitment to treating every customer like family has never changed.
                </p>
                <p>
                  Today, our team of certified technicians serves thousands of homes and businesses across DFW. We're proud of the reputation we've built—one service call at a time.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
            <h2 className="heading-2 text-foreground mt-2 mb-6">
              Honest Pricing, Fast Service, Long-Term Comfort
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We believe everyone deserves a comfortable home without the stress of unexpected costs or unreliable service. That's why we've built our business on transparency, speed, and quality workmanship that lasts.
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-medium text-foreground">Expert Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="heading-2 text-foreground mt-2">
              The CoreComfort Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center">
          <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="heading-2 text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team of 20+ certified HVAC professionals brings decades of combined experience to every job. From initial consultation to final installation, you're in expert hands.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-primary-foreground mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust CoreComfort for their HVAC needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:+12145550198">
              <Button variant="outline-light" size="xl">
                <Phone className="w-5 h-5" />
                (214) 555-0198
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
