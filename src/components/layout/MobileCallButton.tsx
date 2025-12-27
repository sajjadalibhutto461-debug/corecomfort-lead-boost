import { Phone } from 'lucide-react';

const MobileCallButton = () => {
  return (
    <a
      href="tel:+12145550198"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-16 h-16 bg-cta text-cta-foreground rounded-full shadow-elevated animate-pulse-glow"
      aria-label="Call Now"
    >
      <Phone className="w-7 h-7" />
    </a>
  );
};

export default MobileCallButton;
