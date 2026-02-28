import { Button } from "@heroui/react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { SectionId } from "@/app/page";

interface NavbarProps {
  onNavClick: (sectionId: SectionId) => void;
  activeSection: SectionId;
  isScrolled: boolean;
}

interface NavItem {
  name: string;
  sectionId: SectionId;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection, isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Skills", sectionId: "skills" },
    { name: "Projects", sectionId: "projects" },
  ];

  const handleNavClick = (sectionId: SectionId) => {
    onNavClick(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`px-4 py-2 rounded-lg transition-all relative group ${
                  activeSection === item.sectionId
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                {activeSection === item.sectionId && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-2">
            <Button isIconOnly variant="light" size="sm" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Button>
            <Button isIconOnly variant="light" size="sm" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button isIconOnly variant="light" size="sm" aria-label="Email">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`px-4 py-3 rounded-lg text-left transition ${
                    activeSection === item.sectionId
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="flex gap-2 pt-4 mt-2 border-t border-gray-200">
                <Button isIconOnly variant="light" size="sm" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </Button>
                <Button isIconOnly variant="light" size="sm" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button isIconOnly variant="light" size="sm" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;