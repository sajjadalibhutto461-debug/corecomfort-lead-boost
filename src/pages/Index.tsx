import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Award, Star, Phone, Wrench, ThermometerSun, Wind, Snowflake, Fan } from 'lucide-react';
import heroImage from '@/assets/hero-hvac.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional HVAC technician servicing air conditioning unit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Star className="w-4 h-4 fill-current text-cta" />
            <span className="text-sm font-medium">5-Star Rated HVAC Service in DFW</span>
          </div>

          {/* Headline */}
          <h1 className="heading-1 text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fast, Reliable HVAC Services You Can Trust
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Heating, Cooling & Air Quality Experts Serving Dallas–Fort Worth
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:+12145550198">
              <Button variant="outline-light" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call (214) 555-0198
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">EPA Certified</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Star className="w-5 h-5 text-cta fill-current" />
              <span className="text-sm font-medium">5-Star Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: Wrench,
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair to keep you cool when you need it most.',
    href: '/services#ac-repair',
  },
  {
    icon: Snowflake,
    title: 'AC Installation',
    description: 'Expert installation of energy-efficient cooling systems for your home.',
    href: '/services#ac-installation',
  },
  {
    icon: ThermometerSun,
    title: 'Heating Repair',
    description: 'Quick heating repairs to restore warmth and comfort to your home.',
    href: '/services#heating',
  },
  {
    icon: Fan,
    title: 'Furnace Installation',
    description: 'Professional furnace installation for reliable heating all winter long.',
    href: '/services#furnace',
  },
  {
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Improve your home\'s air quality with our filtration and purification solutions.',
    href: '/services#air-quality',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            Complete HVAC Solutions for Your Home
          </h2>
          <p className="text-muted-foreground">
            From emergency repairs to new installations, we provide comprehensive heating and cooling services for the Dallas–Fort Worth area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-3 text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <span className="text-secondary font-semibold text-sm group-hover:text-primary transition-colors">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Dallas, TX',
    rating: 5,
    text: 'CoreComfort saved us on the hottest day of the year! They arrived within an hour and had our AC running perfectly. Honest pricing and great service.',
  },
  {
    name: 'Mike T.',
    location: 'Fort Worth, TX',
    rating: 5,
    text: 'We\'ve used them for both heating and cooling services. Always professional, always on time. Highly recommend for any HVAC needs.',
  },
  {
    name: 'Jennifer L.',
    location: 'Arlington, TX',
    rating: 5,
    text: 'Best HVAC company in DFW! They installed our new furnace and the whole process was smooth. Fair pricing and excellent workmanship.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. See why homeowners across DFW trust CoreComfort for their HVAC needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cta fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/reviews">
            <Button variant="outline" size="lg">
              Read More Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const serviceAreas = [
  'Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Garland',
  'Frisco', 'McKinney', 'Grand Prairie', 'Mesquite', 'Carrollton', 'Denton'
];

const ServiceAreaSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Service Area</span>
            <h2 className="heading-2 text-foreground mt-2 mb-4">
              Serving the Dallas–Fort Worth Metroplex
            </h2>
            <p className="text-muted-foreground mb-6">
              CoreComfort HVAC provides fast, reliable heating and cooling services throughout the DFW area. No matter where you are in the metroplex, our certified technicians are ready to help.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">{area}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="heading-3 text-foreground mb-2">Need Service Now?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is standing by to help with all your HVAC needs.
            </p>
            <a href="tel:+12145550198">
              <Button variant="cta" size="lg" className="w-full">
                Call (214) 555-0198
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyBanner = () => {
  return (
    <section className="bg-cta py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl text-cta-foreground mb-1">
              24/7 Emergency HVAC Service
            </h3>
            <p className="text-cta-foreground/90">
              AC stopped working? Furnace won't start? We're here when you need us most.
            </p>
          </div>
          <a href="tel:+12145550198">
            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-5 h-5" />
              Call Now: (214) 555-0198
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <EmergencyBanner />
    </>
  );
};

export default Index;
