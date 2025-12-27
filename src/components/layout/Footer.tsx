import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'AC Repair', href: '/services#ac-repair' },
    { label: 'AC Installation', href: '/services#ac-installation' },
    { label: 'Heating Services', href: '/services#heating' },
    { label: 'Furnace Installation', href: '/services#furnace' },
    { label: 'Indoor Air Quality', href: '/services#air-quality' },
    { label: 'Maintenance Plans', href: '/services#maintenance' },
  ];

  const serviceAreas = [
    'Dallas', 'Fort Worth', 'Arlington', 'Plano',
    'Irving', 'Garland', 'Frisco', 'McKinney'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight">
                  CoreComfort
                </span>
                <span className="text-xs text-primary-foreground/70">HVAC</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Reliable heating and cooling services for the Dallas–Fort Worth area. 
              Family-owned and operated since 2009.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-primary-foreground/80 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12145550198"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary" />
                  <span>(214) 555-0198</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:service@corecomforthvac.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary" />
                  <span>service@corecomforthvac.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span>Serving Dallas–Fort Worth, Texas</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 text-secondary mt-0.5" />
                <div>
                  <p>Mon–Sat: 7AM – 9PM</p>
                  <p className="text-secondary font-medium">24/7 Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} CoreComfort HVAC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
