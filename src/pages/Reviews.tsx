import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Phone, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Dallas, TX',
    rating: 5,
    date: 'December 2024',
    service: 'AC Repair',
    text: 'CoreComfort saved us on the hottest day of the year! Our AC went out at noon and they had a technician at our house by 2pm. The tech was professional, explained everything clearly, and had us cool again in no time. Honest pricing and great service—we\'ll never use anyone else.',
  },
  {
    name: 'Mike T.',
    location: 'Fort Worth, TX',
    rating: 5,
    date: 'November 2024',
    service: 'Furnace Installation',
    text: 'We\'ve used CoreComfort for both heating and cooling services over the past 5 years. They installed our new high-efficiency furnace last month and the process was seamless. Always professional, always on time. Highly recommend for any HVAC needs.',
  },
  {
    name: 'Jennifer L.',
    location: 'Arlington, TX',
    rating: 5,
    date: 'November 2024',
    service: 'AC Installation',
    text: 'Best HVAC company in DFW! They helped us choose the right AC unit for our home and the installation was perfect. Fair pricing, excellent workmanship, and they cleaned up everything when they were done. Five stars all the way!',
  },
  {
    name: 'Robert K.',
    location: 'Plano, TX',
    rating: 5,
    date: 'October 2024',
    service: 'Heating Repair',
    text: 'Called them on a Sunday evening when our heater stopped working. They had someone out first thing Monday morning. The technician diagnosed the problem quickly and had parts on his truck. Fixed and done in under 2 hours. Very impressed!',
  },
  {
    name: 'Amanda C.',
    location: 'Irving, TX',
    rating: 5,
    date: 'October 2024',
    service: 'Maintenance Plan',
    text: 'Signed up for their annual maintenance plan and it\'s been worth every penny. They come out twice a year, tune everything up, and catch small issues before they become big problems. Our system runs better than ever.',
  },
  {
    name: 'David W.',
    location: 'Frisco, TX',
    rating: 5,
    date: 'September 2024',
    service: 'Indoor Air Quality',
    text: 'Had them install a whole-home air purification system. The difference in air quality is incredible—my allergies have improved significantly. Professional installation and fair pricing. Highly recommend their air quality services.',
  },
  {
    name: 'Lisa H.',
    location: 'McKinney, TX',
    rating: 5,
    date: 'September 2024',
    service: 'AC Repair',
    text: 'Our AC was making a terrible noise and barely cooling. CoreComfort came out same day, diagnosed a failing compressor, and gave us options for repair vs. replacement. No pressure, just honest advice. Went with the repair and it\'s been perfect since.',
  },
  {
    name: 'James P.',
    location: 'Garland, TX',
    rating: 5,
    date: 'August 2024',
    service: 'Ductwork',
    text: 'Had them inspect and repair our ductwork. Found several leaks that were costing us money every month. The repair was affordable and our energy bills have dropped noticeably. Great service from start to finish.',
  },
];

const Reviews = () => {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-primary-foreground mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-6">
            See what our customers have to say about their experience with CoreComfort HVAC.
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-cta fill-current" />
            ))}
            <span className="text-2xl font-bold text-primary-foreground ml-2">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-primary-foreground/70 mt-2">Based on {reviews.length}+ reviews</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-cta fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded">
                      {review.service}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-secondary/20 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground pl-6 italic">"{review.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-16">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-foreground mb-4">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the CoreComfort difference for yourself. Contact us today for fast, reliable HVAC service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Get Free Estimate
              </Button>
            </Link>
            <a href="tel:+12145550198">
              <Button variant="outline" size="lg">
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

export default Reviews;
