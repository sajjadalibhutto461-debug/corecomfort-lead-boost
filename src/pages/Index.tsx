import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, Award, Star, Phone, Wrench, ThermometerSun, Wind, Snowflake, Fan,
  Clock, CheckCircle, Users, Calendar, Zap, BadgeCheck, ArrowRight, Play,
  MessageSquare, ThumbsUp, Timer
} from 'lucide-react';
import heroImage from '@/assets/hero-hvac.jpg';

// Animated counter hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-cta/20 backdrop-blur-sm text-cta px-4 py-2 rounded-full mb-4 animate-fade-up border border-cta/30">
            <Timer className="w-4 h-4" />
            <span className="text-sm font-bold">Same-Day Service Available Today!</span>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-6 animate-fade-up ml-2">
            <Star className="w-4 h-4 fill-current text-cta" />
            <span className="text-sm font-medium">Rated #1 HVAC Company in DFW</span>
          </div>

          {/* Headline */}
          <h1 className="heading-1 text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Fast, Reliable HVAC Services <span className="text-secondary">You Can Trust</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Heating, Cooling & Air Quality Experts Serving Dallas–Fort Worth
          </p>

          {/* Value Proposition */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+12145550198">
              <Button variant="outline-light" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call (214) 555-0198
              </Button>
            </a>
          </div>

          {/* Trust Badges Row */}
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
              <span className="text-sm font-medium">500+ 5-Star Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border py-6 hidden md:block">
        <div className="container-custom">
          <div className="grid grid-cols-4 gap-8">
            <StatItem end={15} suffix="+" label="Years Experience" />
            <StatItem end={10000} suffix="+" label="Happy Customers" />
            <StatItem end={500} suffix="+" label="5-Star Reviews" />
            <StatItem end={24} suffix="/7" label="Emergency Service" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-heading font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const TrustBadgesSection = () => {
  const badges = [
    { icon: Shield, label: 'Licensed & Insured', description: 'Fully bonded for your protection' },
    { icon: Award, label: 'EPA Certified', description: 'Environmentally responsible' },
    { icon: BadgeCheck, label: 'NATE Certified', description: 'Industry-leading technicians' },
    { icon: ThumbsUp, label: 'BBB A+ Rated', description: 'Trusted business practices' },
    { icon: Clock, label: 'Same-Day Service', description: 'Fast response guaranteed' },
    { icon: CheckCircle, label: '100% Guaranteed', description: 'Your satisfaction assured' },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
          <h2 className="heading-3 text-foreground mt-2">Certified. Trusted. Guaranteed.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors group-hover:scale-110 duration-300">
                <badge.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{badge.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
            </div>
          ))}
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
    popular: true,
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
              className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 right-4 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="heading-3 text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center text-secondary font-semibold text-sm group-hover:text-primary transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Call or Request Online',
      description: 'Reach out via phone or our easy online form. We respond within 15 minutes during business hours.',
      icon: Phone,
    },
    {
      step: '02',
      title: 'Get a Free Diagnosis',
      description: 'Our certified technician arrives, diagnoses the issue, and provides upfront pricing—no surprises.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Approve & We Fix It',
      description: 'Once you approve, we get to work immediately. Most repairs completed same-day.',
      icon: Wrench,
    },
    {
      step: '04',
      title: 'Enjoy Your Comfort',
      description: 'Relax in your perfectly climate-controlled home, backed by our satisfaction guarantee.',
      icon: ThumbsUp,
    },
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="heading-2 text-primary-foreground mt-2 mb-4">
            Getting Started is Easy
          </h2>
          <p className="text-primary-foreground/70">
            From first call to finished repair, we make the process simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-foreground/20 -translate-x-1/2" />
              )}
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-secondary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cta flex items-center justify-center text-cta-foreground font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
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
    service: 'AC Repair',
    verified: true,
  },
  {
    name: 'Mike T.',
    location: 'Fort Worth, TX',
    rating: 5,
    text: 'We\'ve used them for both heating and cooling services. Always professional, always on time. Highly recommend for any HVAC needs.',
    service: 'Furnace Installation',
    verified: true,
  },
  {
    name: 'Jennifer L.',
    location: 'Arlington, TX',
    rating: 5,
    text: 'Best HVAC company in DFW! They installed our new furnace and the whole process was smooth. Fair pricing and excellent workmanship.',
    service: 'AC Installation',
    verified: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Real Reviews</span>
          <h2 className="heading-2 text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-cta fill-current" />
              ))}
            </div>
            <span className="font-bold text-foreground text-lg">4.9/5</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border/50 relative"
            >
              {testimonial.verified && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-secondary text-xs font-medium">
                  <BadgeCheck className="w-4 h-4" />
                  Verified
                </div>
              )}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cta fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/reviews">
            <Button variant="outline" size="lg">
              Read All 500+ Reviews
            </Button>
          </Link>
          <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Leave a Review
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent rounded-3xl p-8 md:p-12 border border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
                <Shield className="w-5 h-5" />
                <span className="font-semibold text-sm">Our Promise to You</span>
              </div>
              <h2 className="heading-2 text-foreground mb-6">
                100% Satisfaction Guarantee
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                We stand behind every repair and installation. If you're not completely satisfied with our work, we'll make it right—guaranteed. That's the CoreComfort promise.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">No-Surprise Pricing</span>
                    <p className="text-sm text-muted-foreground">You'll know the exact cost before we start any work.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">1-Year Labor Warranty</span>
                    <p className="text-sm text-muted-foreground">All repairs backed by our comprehensive warranty.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">On-Time, Every Time</span>
                    <p className="text-sm text-muted-foreground">We respect your time with punctual, professional service.</p>
                  </div>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Schedule Service Today
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-secondary/20 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-secondary/30 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-secondary mx-auto mb-2" />
                      <span className="font-heading font-bold text-2xl text-foreground block">100%</span>
                      <span className="text-sm text-muted-foreground">Guaranteed</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-cta text-cta-foreground px-4 py-2 rounded-full font-bold text-sm animate-bounce-subtle">
                  Risk-Free!
                </div>
              </div>
            </div>
          </div>
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
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Service Area</span>
            <h2 className="heading-2 text-foreground mt-2 mb-4">
              Proudly Serving Dallas–Fort Worth
            </h2>
            <p className="text-muted-foreground mb-6">
              CoreComfort HVAC provides fast, reliable heating and cooling services throughout the DFW metroplex. Our technicians are strategically located to reach you quickly—usually within 1 hour for emergencies.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">{area}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">
              Don't see your city? Call us—we likely serve your area too!
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 text-center shadow-card border border-border">
            <div className="w-20 h-20 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-10 h-10 text-cta" />
            </div>
            <h3 className="heading-3 text-foreground mb-2">Need Service Now?</h3>
            <p className="text-muted-foreground mb-4">
              Call now for same-day service availability
            </p>
            <a href="tel:+12145550198">
              <Button variant="cta" size="lg" className="w-full mb-3">
                <Phone className="w-5 h-5" />
                (214) 555-0198
              </Button>
            </a>
            <p className="text-xs text-muted-foreground">
              Average response time: <span className="font-semibold text-secondary">15 minutes</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencyBanner = () => {
  return (
    <section className="bg-cta py-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
        }} />
      </div>
      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex items-center gap-4">
            <div className="hidden md:flex w-16 h-16 rounded-full bg-cta-foreground/20 items-center justify-center animate-pulse">
              <Zap className="w-8 h-8 text-cta-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-cta-foreground mb-1">
                24/7 Emergency HVAC Service
              </h3>
              <p className="text-cta-foreground/90">
                AC stopped working? Furnace won't start? We're here when you need us most.
              </p>
            </div>
          </div>
          <a href="tel:+12145550198" className="flex-shrink-0">
            <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
              <Phone className="w-5 h-5" />
              Call Now: (214) 555-0198
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

const FinalCTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-2 text-foreground mb-4">
            Ready to Experience the CoreComfort Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join over 10,000 satisfied customers who trust us with their home comfort. Get your free, no-obligation estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact">
              <Button variant="cta" size="xl" className="w-full sm:w-auto">
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+12145550198">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                (214) 555-0198
              </Button>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>Financing Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <>
      <HeroSection />
      <TrustBadgesSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <ServiceAreaSection />
      <EmergencyBanner />
      <FinalCTASection />
    </>
  );
};

export default Index;
