'use client';

import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState, useEffect, memo, useCallback, useMemo, useRef } from "react";
import { SectionId } from "@/app/page";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onNavClick: (sectionId: SectionId) => void;
  activeSection: SectionId;
  isScrolled: boolean;
}

interface NavItem {
  name: string;
  sectionId: SectionId;
}

const Navbar: React.FC<NavbarProps> = memo(({ onNavClick, activeSection, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems: NavItem[] = useMemo(() => [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Skills", sectionId: "skills" },
    { name: "Projects", sectionId: "projects" },
  ], []);

  const handleNavClick = useCallback((sectionId: SectionId) => {
    onNavClick(sectionId);
    setIsMobileMenuOpen(false);
  }, [onNavClick]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (!mounted) return null;

  return (
    <>
      <nav 
        ref={navRef}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          "transform-gpu will-change-transform",
          isScrolled || isMobileMenuOpen 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo with enhanced styling */}
            <button 
              onClick={() => handleNavClick('home')}
              className="relative group text-white font-bold text-lg sm:text-2xl tracking-wide focus:outline-none"
              aria-label="Go to home"
            >
              NITH
            </button>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={cn(
                    "relative px-4 py-2 rounded-lg transition-all duration-300",
                    "text-sm lg:text-base font-medium tracking-wide",
                    "hover:text-white group",
                    activeSection === item.sectionId
                      ? 'text-white'
                      : 'text-gray-300'
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover background effect */}
                  <span className={cn(
                    "absolute inset-0 rounded-lg transition-all duration-300",
                    "bg-linear-to-r from-blue-600/20 to-purple-600/20",
                    "opacity-0 group-hover:opacity-100",
                    activeSection === item.sectionId && "opacity-100"
                  )} />
                  
                  {/* Active indicator */}
                  {activeSection === item.sectionId && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:email@example.com", label: "Email" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full transition-all duration-300",
                    "text-gray-300 hover:text-white",
                    "hover:bg-linear-to-r hover:from-blue-600/20 hover:to-purple-600/20",
                    "hover:scale-110"
                  )}
                  aria-label={social.label}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              {isMobileMenuOpen ? 
                <X className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" /> : 
                <Menu className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-gray-900/95 backdrop-blur-lg z-40 md:hidden transition-all duration-500",
          "flex flex-col",
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-6 p-8">
          {/* Mobile Navigation Items */}
          {navItems.map((item, index) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className={cn(
                "relative group w-full max-w-xs",
                "transition-all duration-500",
                isMobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "relative px-8 py-4 rounded-xl text-center",
                "border border-gray-800 overflow-hidden",
                "transition-all duration-300",
                activeSection === item.sectionId
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-300 hover:text-white'
              )}>
                <span className="relative z-10 text-xl font-bold tracking-wider">
                  {item.name}
                </span>
                
                {/* Hover effect */}
                <span className={cn(
                  "absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600",
                  "transition-transform duration-300",
                  activeSection === item.sectionId
                    ? "translate-x-0"
                    : "translate-x-full group-hover:translate-x-0"
                )} />
              </div>
            </button>
          ))}

          {/* Mobile Social Icons */}
          <div className={cn(
            "flex gap-4 mt-8",
            "transition-all duration-500 delay-500",
            isMobileMenuOpen 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          )}>
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:email@example.com", label: "Email" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Close button at bottom */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "absolute top-6 right-4 p-2 text-gray-400 hover:text-white",
            "transition-all duration-500 delay-700",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar;