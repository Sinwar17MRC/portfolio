
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Check which section is currently in view
      const sections = ['home', 'about', 'projects', 'experience', 'opportunities', 'skills', 'certifications', 'academic', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ordered according to page layout
  const navItems = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#opportunities', label: 'Future', id: 'opportunities' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#certifications', label: 'Certs', id: 'certifications' },
    { href: '#academic', label: 'Academic', id: 'academic' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.startsWith('#') ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate absolute document position correctly
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm border-b border-amber-900/20' : 'bg-transparent'
      }`}>
      {/* Enhanced glowing effect - more intense and clearly visible */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-2xl shadow-amber-500/80"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent blur-md"></div>
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent blur-xl"></div>
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent blur-2xl"></div>

      <div className="w-full px-4 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            BZIZ IMAD
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-slate-300 hover:text-amber-300 transition-all duration-300 relative group ${activeSection === item.id ? 'text-amber-400' : ''
                  }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 ${activeSection === item.id
                  ? 'w-full scale-110 shadow-2xl shadow-amber-500/80 drop-shadow-2xl'
                  : 'w-0 group-hover:w-full'
                  }`}></span>
                {/* Additional stronger glow for active state */}
                {activeSection === item.id && (
                  <>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 blur-sm opacity-80"></span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400/40 to-orange-400/40 blur-md"></span>
                    <span className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-xl"></span>
                  </>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 p-4 border border-amber-900/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-2 text-slate-300 hover:text-amber-300 transition-colors duration-200 ${activeSection === item.id ? 'text-amber-400' : ''
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
