import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, X } from 'lucide-react';

const StickyCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (roughly 600px)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10 py-3 animate-slide-up hidden md:block">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground font-semibold">
              Ready for reliable HVAC service?
            </span>
            <span className="text-primary-foreground/70 text-sm hidden lg:inline">
              Same-day appointments available
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+12145550198">
              <Button variant="outline-light" size="sm">
                <Phone className="w-4 h-4" />
                (214) 555-0198
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="cta" size="sm">
                Get Free Estimate
              </Button>
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-primary-foreground/50 hover:text-primary-foreground p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
