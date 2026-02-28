'use client';

import { useRef, useState, useEffect, RefObject, useCallback, useMemo } from 'react';
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

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    
    const updateScrollState = () => {
      setIsScrolled(prev => {
        const newValue = window.scrollY > 50;
        // Only update if value actually changed
        return prev !== newValue ? newValue : prev;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section while scrolling with optimized observer
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

    // Small delay to ensure refs are ready
    const timeoutId = setTimeout(() => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Memoize scroll function
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const ref = sectionRefs[sectionId];
    ref?.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  // Memoize navbar props to prevent unnecessary re-renders
  const navbarProps = useMemo(() => ({
    onNavClick: scrollToSection,
    activeSection,
    isScrolled
  }), [activeSection, isScrolled, scrollToSection]);

  return (
    <>
      <Navbar {...navbarProps} />
      
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