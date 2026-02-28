
import { forwardRef } from 'react';
import { Meteors } from '../ui/meteors';

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onCtaClick }, ref) => {
  return (
    <section 
      ref={ref} 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <Meteors className='absolute inset-0 -z-10' />

    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;