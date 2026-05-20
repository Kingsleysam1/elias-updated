import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import { PhotoCategory } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  // Cross-page routing states (carrying selections directly to contact)
  const [preselectedPackage, setPreselectedPackage] = useState<string>('standard');
  const [preselectedCategory, setPreselectedCategory] = useState<PhotoCategory | ''>('');
  const [customEstimate, setCustomEstimate] = useState<{ price: number; details: string } | null>(null);

  const clearCustomEstimate = () => {
    setCustomEstimate(null);
  };

  // Initialize from saved preference, or fall back to system preferences
  const [isNightMode, setIsNightMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Keep DOM class list and localStorage in sync with theme state
  useEffect(() => {
    const root = document.documentElement;
    if (isNightMode) {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isNightMode]);

  // Render correct page view
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return (
          <Portfolio 
            setCurrentPage={setCurrentPage} 
            setPreselectedCategory={(cat) => {
              setPreselectedCategory(cat);
              setPreselectedPackage(''); // bypass package when following a specific visual category style
            }} 
          />
        );
      case 'services':
        return (
          <Services 
            setCurrentPage={setCurrentPage} 
            setPreselectedPackage={setPreselectedPackage} 
            setCustomEstimate={setCustomEstimate}
          />
        );
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'contact':
        return (
          <Contact 
            preselectedPackage={preselectedPackage} 
            setPreselectedPackage={setPreselectedPackage}
            preselectedCategory={preselectedCategory}
            setPreselectedCategory={setPreselectedCategory}
            customEstimate={customEstimate}
            clearCustomEstimate={clearCustomEstimate}
          />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen ${isNightMode ? 'dark-theme' : 'light-theme'} bg-theme-bg text-theme-fg flex flex-col font-sans transition-colors duration-300`}>
      
      {/* 1. Global Navigation */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isNightMode={isNightMode} toggleTheme={() => setIsNightMode(!isNightMode)} />

      {/* 2. Main Layout Area with Route Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            id={`page-wrapper-${currentPage}`}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Floating Quick Book Helper Banner (only shown on non-booking/non-contact screens) */}
      <AnimatePresence>
        {currentPage !== 'contact' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="fixed bottom-6 right-6 z-40 hidden sm:block"
          >
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 bg-theme-fg text-theme-bg hover:opacity-90 px-7 py-3.5 shadow-xl border border-theme-bg/15 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer group rounded-full"
              id="floating-quick-book"
            >
              <Sparkles size={14} className="text-theme-bg transform group-hover:rotate-12 transition-transform" />
              <span className="font-sans text-[11.5px] font-semibold tracking-wider">Book a Session</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Footer Column Portal */}
      <Footer setCurrentPage={setCurrentPage} isNightMode={isNightMode} />

    </div>
  );
}

