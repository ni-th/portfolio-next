'use client';

import { useRef, useState, useEffect, RefObject } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Footer from '@/components/ui/Footer';


// Define section IDs
export type SectionId = 'home' | 'about' | 'skills' | 'projects';

// Define refs interface
interface SectionRefs {
  home: RefObject<HTMLElement | null>;
  about: RefObject<HTMLElement | null>;
  skills: RefObject<HTMLElement | null>;
  projects: RefObject<HTMLElement | null>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  const sectionRefs: SectionRefs = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null)
  };

  // Track scroll position for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section while scrolling
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: '-80px 0px 0px 0px'
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: SectionId) => {
    const ref = sectionRefs[sectionId];
    ref?.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <Navbar 
        onNavClick={scrollToSection}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
      
      <main>
        <HeroSection 
          ref={sectionRefs.home}
          onCtaClick={() => scrollToSection('projects')}
        />
        <AboutSection ref={sectionRefs.about} />
        <SkillsSection ref={sectionRefs.skills} />
        <ProjectsSection ref={sectionRefs.projects} />
      </main>

      <Footer />
    </>
  );
}