import { useState, useEffect } from 'react';
import { Camera, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isNightMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ currentPage, setCurrentPage, isNightMode, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services & Pricing', id: 'services' },
    { name: 'About Momoh', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-theme-bg/90 backdrop-blur-xl border-b border-theme-fg/10 py-3.5 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - Render cropped logo.png image */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center group cursor-pointer focus:outline-none py-1"
          id="btn-logo"
        >
          <img
            src="/logo.png"
            alt="Delight Notions Logo"
            className={`h-9 sm:h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
              isNightMode ? '' : 'invert'
            }`}
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-theme-fg/5 border border-theme-fg/10 rounded-full px-6 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 px-3 font-sans text-[11px] uppercase tracking-wider font-semibold cursor-pointer transition-colors duration-250 focus:outline-none ${
                  isActive ? 'text-theme-accent' : 'text-theme-fg/70 hover:text-theme-accent'
                }`}
                id={`nav-${link.id}`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute inset-0 bg-theme-accent/5 border border-theme-accent/20 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button and Theme Toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2.5 mr-4 rounded-full border border-theme-fg/15 hover:border-theme-accent/40 hover:text-theme-accent hover:bg-theme-accent-light transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95"
            title={isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            id="theme-toggle-desktop"
          >
            {isNightMode ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
          </button>
          
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-[#F2F1ED] px-6 py-2.5 text-xs font-semibold tracking-wide hover:scale-102 active:scale-98 transition-all duration-300 rounded-full shadow-md group cursor-pointer border-none"
            id="btn-book-nav"
          >
            <span>Book Session</span>
            <ArrowRight size={13} className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Menu and Theme Toggles */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 border border-theme-fg/10 text-theme-fg focus:outline-none bg-theme-fg/5 rounded-full hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light transition-colors cursor-pointer"
            title={isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            id="theme-toggle-mobile"
          >
            {isNightMode ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border border-theme-fg/10 text-theme-fg/80 focus:outline-none bg-theme-fg/5 rounded-full hover:text-theme-accent hover:border-theme-accent transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-theme-bg border-b border-theme-fg/10 overflow-hidden backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left font-sans text-xs font-semibold tracking-wider uppercase py-2.5 border-l-2 pl-3 transition-all ${
                      isActive
                        ? 'text-theme-accent border-theme-accent bg-theme-accent-light/50'
                        : 'text-theme-fg/60 border-transparent hover:text-theme-accent hover:border-theme-accent hover:bg-theme-accent-light/20'
                    }`}
                    id={`mobile-nav-${link.id}`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center flex items-center justify-center gap-2 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-[#F2F1ED] px-5 py-3 text-xs font-semibold tracking-wide transition-all rounded-full border-none"
                id="mobile-btn-book"
              >
                <span>Book Session</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
