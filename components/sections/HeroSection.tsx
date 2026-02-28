import { forwardRef } from 'react';
import { Button } from "@heroui/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-r from-blue-600 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white overflow-hidden">
              <img 
                src="/api/placeholder/160/160" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full" />
        </div>

        {/* Greeting */}
        <p className="text-lg md:text-xl text-blue-600 font-semibold mb-4">
          👋 Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>

        {/* Title with animation */}
        <div className="h-16 mb-6">
          <h2 className="text-2xl md:text-3xl text-gray-700">
            I'm a{' '}
            <span className="font-bold text-gray-900 border-r-2 border-blue-600 pr-2 animate-typing">
              Full Stack Developer
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          I build exceptional and accessible digital experiences for the web.
          Passionate about creating solutions that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            color="primary" 
            size="lg"
            onClick={onCtaClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          >
            View My Work
          </Button>
          <Button 
            variant="bordered" 
            size="lg"
            onClick={() => window.open('/resume.pdf')}
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <Button isIconOnly variant="ghost" size="lg" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </Button>
          <Button isIconOnly variant="ghost" size="lg" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button isIconOnly variant="ghost" size="lg" aria-label="Email">
            <Mail className="w-6 h-6" />
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;