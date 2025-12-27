import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Wrench, Snowflake, ThermometerSun, Fan, Wind, Settings, 
  CheckCircle, Phone, ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 'ac-repair',
    icon: Wrench,
    title: 'Air Conditioning Repair',
    description: 'Quick, reliable AC repair services to restore your comfort fast. Our certified technicians diagnose and fix all makes and models.',
    problems: [
      'AC not cooling properly',
      'Strange noises or odors',
      'Frequent cycling on and off',
      'High energy bills',
      'Frozen evaporator coils',
    ],
    benefits: [
      'Same-day service available',
      'Upfront pricing, no surprises',
      'All repairs guaranteed',
      '24/7 emergency availability',
    ],
  },
  {
    id: 'ac-installation',
    icon: Snowflake,
    title: 'AC Installation',
    description: 'Expert installation of high-efficiency air conditioning systems. We help you choose the right unit for your home and budget.',
    problems: [
      'Old, inefficient AC unit',
      'Uneven cooling throughout home',
      'Rising energy costs',
      'Frequent repairs needed',
      'Home addition or renovation',
    ],
    benefits: [
      'Energy-efficient options',
      'Professional sizing and selection',
      'Manufacturer warranties',
      'Financing available',
    ],
  },
  {
    id: 'heating',
    icon: ThermometerSun,
    title: 'Heating & Furnace Repair',
    description: 'Don\'t get left in the cold. Our heating repair services ensure your home stays warm and comfortable all winter long.',
    problems: [
      'No heat or weak heat output',
      'Furnace not turning on',
      'Unusual sounds or smells',
      'Thermostat issues',
      'Pilot light problems',
    ],
    benefits: [
      'Fast response times',
      'All heating systems serviced',
      'Safety inspections included',
      'Energy efficiency optimization',
    ],
  },
  {
    id: 'furnace',
    icon: Fan,
    title: 'Furnace Installation',
    description: 'Professional furnace installation with expert guidance on the best heating solutions for your home. Stay warm for years to come.',
    problems: [
      'Aging furnace (15+ years)',
      'Increasing repair costs',
      'Inconsistent heating',
      'Safety concerns',
      'Poor energy efficiency',
    ],
    benefits: [
      'High-efficiency units available',
      'Expert installation team',
      'Long-term warranties',
      'Rebate assistance',
    ],
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'HVAC Maintenance Plans',
    description: 'Prevent costly breakdowns with regular maintenance. Our service plans keep your system running efficiently year-round.',
    problems: [
      'Unexpected breakdowns',
      'Reduced system lifespan',
      'Higher utility bills',
      'Poor air quality',
      'Voided warranties',
    ],
    benefits: [
      'Priority scheduling',
      'Discounted repairs',
      'Extended equipment life',
      'Improved efficiency',
    ],
  },
  {
    id: 'air-quality',
    icon: Wind,
    title: 'Indoor Air Quality',
    description: 'Breathe easier with our comprehensive indoor air quality solutions. From filtration to humidity control, we\'ve got you covered.',
    problems: [
      'Allergies and respiratory issues',
      'Dust accumulation',
      'Musty odors',
      'Dry or humid air',
      'Poor ventilation',
    ],
    benefits: [
      'HEPA filtration options',
      'UV air purification',
      'Humidity control systems',
      'Whole-home solutions',
    ],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-primary-foreground mb-4">
            Our HVAC Services
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive heating, cooling, and air quality solutions for homes and businesses in Dallas–Fort Worth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h2 className="heading-2 text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {service.description}
                  </p>
                  <Link to="/contact">
                    <Button variant="cta" size="lg">
                      Request Service
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Common Problems We Solve
                    </h3>
                    <ul className="space-y-3">
                      {service.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/5 rounded-xl p-6 border border-secondary/20">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      Service Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today for a free estimate. Our team is ready to help with all your HVAC needs.
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

export default Services;
