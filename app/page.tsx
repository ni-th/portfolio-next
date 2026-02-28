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

  // Scroll handler for navbar background
  useEffect(() => {
    let ticking = false;
    
    const updateScrollState = () => {
      setIsScrolled(prev => {
        const newValue = window.scrollY > 50;
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

  // Manual scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar
      
      // Get all sections with their positions
      const sections: { id: SectionId; top: number; bottom: number }[] = [];
      
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;
          
          sections.push({
            id: id as SectionId,
            top,
            bottom
          });
        }
      });

      // Sort sections by their position on page
      sections.sort((a, b) => a.top - b.top);

      // Find the current section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const nextSection = sections[i + 1];
        
        // Check if we're in this section
        if (scrollPosition >= section.top && 
            (i === sections.length - 1 || scrollPosition < nextSection.top)) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array - only run once on mount

  // Memoize scroll function
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const ref = sectionRefs[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Manually set active section after scrolling
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    }
  }, []);

  // Memoize navbar props
  const navbarProps = useMemo(() => ({
    onNavClick: scrollToSection,
    activeSection,
    isScrolled
  }), [activeSection, isScrolled, scrollToSection]);

  return (
    <>
      <Navbar {...navbarProps} />
      
      <main className='text-white'>
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