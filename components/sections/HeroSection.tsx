
import { forwardRef } from 'react';
import { Meteors } from '../ui/meteors';
import Image from 'next/image';
import Shuffle from '../ui/shuffle';
import TypingText from '../ui/typing-text';

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
      <div className="z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 text-center lg:text-left">
          
          <div className="flex justify-center lg:justify-end">
            <Image 
              src="/images/me.png" 
              alt="Nimantha"
              width={1280} 
              height={1280} 
              className="w-80 sm:w-96 md:w-md h-auto object-cover rounded-2xl"
            />
          </div>
        
          <div>
            <TypingText 
              text={[
                "Hi, I'm Nimantha",
                "A Full Stack Developer",
                "I build amazing web experiences",
              ]}
              as="h1"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 dark:text-gray-100 mb-6"
              typingSpeed={100}
            />
          </div>
        
        </div>
      </div>
      <Meteors className='absolute inset-0 -z-10' />

    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;