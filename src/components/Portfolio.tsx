import { useState, useEffect, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X, ZoomIn, Calendar, Tag, MessageSquare } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';
import { PhotoCategory, PortfolioItem } from '../types';

interface PortfolioProps {
  setCurrentPage: (page: string) => void;
  setPreselectedCategory: (cat: PhotoCategory) => void;
}

export default function Portfolio({ setCurrentPage, setPreselectedCategory }: PortfolioProps) {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const tabs = [
    { label: 'All Work', id: 'all' },
    { label: 'Wedding Sessions', id: 'wedding' },
    { label: 'Studio Portraits', id: 'portrait' },
    { label: 'Model & Fashion', id: 'model' },
    { label: 'Corporate Profiles', id: 'corporate' },
    { label: 'Events & Galas', id: 'events' },
    { label: 'Family & Maternity', id: 'family' },
    { label: 'Product Elegance', id: 'products' },
  ];

  // Filter products based on selected tab
  const filteredItems = selectedTab === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedTab);

  const handleOpenDetails = (item: PortfolioItem) => {
    setActiveItem(item);
    setCarouselIndex(0);
    setDirection(0);
  };

  const handleClose = () => {
    setActiveItem(null);
    setCarouselIndex(0);
    setDirection(0);
  };

  const images = activeItem
    ? (activeItem.relatedImages && activeItem.relatedImages.length > 0 ? activeItem.relatedImages : [activeItem.imageUrl])
    : [];

  const handlePrevCarousel = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length <= 1) return;
    setDirection(-1);
    setCarouselIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextCarousel = (e?: MouseEvent) => {
    if (e) e.stopPropagation();
    if (images.length <= 1) return;
    setDirection(1);
    setCarouselIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Custom Mobile Carousel
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum distance threshold of 45px to trigger swipe
    if (diff > 45) {
      handleNextCarousel();
    } else if (diff < -45) {
      handlePrevCarousel();
    }
    setTouchStartX(null);
  };

  // Keyboard navigation for image carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') handleClose();
      
      const itemImages = activeItem.relatedImages && activeItem.relatedImages.length > 0
        ? activeItem.relatedImages
        : [activeItem.imageUrl];

      if (itemImages.length <= 1) return;

      if (e.key === 'ArrowRight') {
        setDirection(1);
        setCarouselIndex(prev => (prev === itemImages.length - 1 ? 0 : prev + 1));
      }
      if (e.key === 'ArrowLeft') {
        setDirection(-1);
        setCarouselIndex(prev => (prev === 0 ? itemImages.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem]);

  // Premium cross-fade slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 160 : dir < 0 ? -160 : 0,
      opacity: 0,
      scale: 0.97
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 160 : dir > 0 ? -160 : 0,
      opacity: 0,
      scale: 0.97
    })
  };

  return (
    <div className="bg-theme-bg text-theme-fg pt-32 pb-20 min-h-screen transition-colors duration-350">
      
      {/* Editorial Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-10 select-none animate-fade-in" id="portfolio-header">
        <div className="text-center md:text-left max-w-2xl space-y-3">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            THE RETROSPECTIVE
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-theme-fg animate-fade-in">
            Photography Portfolio
          </h1>
          <p className="font-sans text-theme-fg/80 text-xs md:text-sm leading-relaxed">
            Delve into our curated historical studies. We blend strict technical symmetry with completely organic moments of love, determination, and focus across Nigeria.
          </p>
        </div>
      </section>

      {/* Categories Filter Tabs - Apple rounded capsules */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12 overflow-x-auto scrollbar-none" id="portfolio-tabs">
        <div className="flex flex-nowrap md:flex-wrap items-center gap-2.5 pb-4 min-w-[600px] md:min-w-0">
          {tabs.map((tab) => {
            const isActive = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-5 py-2 text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-300 rounded-full focus:outline-none ${
                  isActive
                    ? 'bg-theme-accent border-theme-accent text-[#F2F1ED] shadow-sm font-bold shadow-theme-accent/20'
                    : 'bg-theme-bg/60 border-theme-fg/15 text-theme-fg/70 hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light'
                }`}
                id={`tab-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid Display - High polished minimal rows */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto" id="portfolio-grid">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-theme-bg/60 border border-theme-fg/10 group relative flex flex-col h-full overflow-hidden hover:border-theme-accent/30 transition-all duration-300 rounded-2xl cursor-pointer hover:scale-[1.01]"
                onClick={() => handleOpenDetails(item)}
                id={`portfolio-item-${item.id}`}
              >
                <div className="aspect-[4/3] bg-stone-900 overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.02] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay Icon - Apple Blur */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <div className="w-12 h-12 bg-theme-accent/20 backdrop-blur-md text-[#F2F1ED] rounded-full border border-theme-accent/35 shadow-lg flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn size={18} strokeWidth={1.5} className="text-white" />
                    </div>
                  </div>

                  <span className="absolute top-4 right-4 bg-theme-fg text-theme-bg font-sans text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full border border-theme-bg/10 shadow-sm leading-none">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between border-t border-theme-fg/10 bg-theme-bg/5 leading-relaxed">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-theme-fg/75 font-sans uppercase">
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-[17px] font-sans font-semibold text-theme-fg group-hover:text-theme-accent transition-colors duration-300 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-theme-fg/70 line-clamp-2 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-theme-bg/50 rounded-2xl border border-dashed border-theme-fg/20 space-y-3 animate-fade-in">
            <p className="font-sans text-base text-theme-fg/80">No items available in this category yet.</p>
            <p className="font-sans text-xs text-theme-fg/50 font-sans">Please check other beautiful available series.</p>
          </div>
        )}
      </section>

      {/* Immersive Details Modal with Internal Image Carousel */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            onClick={handleClose}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-2.5 rounded-full border border-white/10 bg-black/60 hover:bg-theme-accent hover:border-theme-accent hover:text-white transition-all cursor-pointer shadow-lg"
              aria-label="Close Lightbox"
            >
              <X size={18} />
            </button>

            {/* Content Container - Beautiful continuous curved layout */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 bg-theme-fg text-theme-bg overflow-hidden border border-theme-bg/15 shadow-3xl relative rounded-2xl md:rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image box & Interactive Carousel */}
              <div 
                className="lg:col-span-8 bg-stone-950 min-h-[400px] h-[400px] sm:h-[500px] lg:h-[600px] flex flex-col justify-between relative overflow-hidden group touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                
                {/* Main slide display */}
                <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden p-4">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                      key={carouselIndex}
                      src={images[carouselIndex]}
                      alt={`${activeItem.title} - view ${carouselIndex + 1}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 260, damping: 28 },
                        opacity: { duration: 0.2 }
                      }}
                      className="w-full h-full object-contain filter brightness-[0.92] contrast-[1.02] rounded-xl select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>

                  {/* Carousel navigation overlay buttons (Left / Right) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevCarousel}
                        className="absolute left-6 bg-black/60 hover:bg-theme-bg hover:text-theme-fg border border-white/10 text-theme-bg p-3 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center z-10 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
                        aria-label="Previous image"
                      >
                        <ArrowLeft size={15} />
                      </button>

                      <button
                        onClick={handleNextCarousel}
                        className="absolute right-6 bg-black/60 hover:bg-theme-bg hover:text-theme-fg border border-white/10 text-theme-bg p-3 rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center z-10 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm"
                        aria-label="Next image"
                      >
                        <ArrowRight size={15} />
                      </button>
                    </>
                  )}

                  {/* Top image position indicator pill formatted in 3/12 layout */}
                  {images.length > 1 && (
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 text-xs font-mono font-medium text-theme-bg tracking-widest rounded-full shadow-lg flex items-center gap-1 select-none z-10 transition-all">
                      <span className="text-theme-bg font-extrabold">{carouselIndex + 1}</span>
                      <span className="opacity-30">/</span>
                      <span className="opacity-60">{images.length}</span>
                    </div>
                  )}

                  {/* Dynamic indicator dots/bars at the bottom of slide viewport */}
                  {images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 select-none transition-all shadow-md">
                      {images.map((_, idx) => {
                        const isSelected = carouselIndex === idx;
                        return (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setDirection(idx > carouselIndex ? 1 : -1);
                              setCarouselIndex(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                              isSelected 
                                ? 'w-6 bg-theme-bg' 
                                : 'w-1.5 bg-theme-bg/30 hover:bg-theme-bg/60'
                            }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Bottom thumbnail strip display */}
                {images.length > 1 && (
                  <div className="bg-black/40 border-t border-white/5 py-3.5 px-6 flex justify-center items-center gap-2.5 overflow-x-auto select-none backdrop-blur-md">
                    {images.map((img, idx) => {
                      const isSelected = carouselIndex === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setCarouselIndex(idx)}
                          className={`relative aspect-[4/3] w-14 sm:w-16 overflow-hidden rounded-lg border transition-all duration-200 cursor-pointer flex-shrink-0 ${
                            isSelected
                              ? 'border-theme-bg opacity-100 scale-105 shadow-md'
                              : 'border-white/5 opacity-40 hover:opacity-85'
                          }`}
                        >
                          <img
                            src={img}
                            alt="thumbnail"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-4 p-8 flex flex-col justify-between h-auto lg:h-[600px] bg-theme-fg text-theme-bg font-sans">
                <div className="space-y-6">
                  
                  {/* Category Card */}
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 bg-white/5 text-theme-bg font-sans text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-white/5">
                      <Tag size={10} />
                      {activeItem.category}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-white/5 text-theme-bg/60 font-sans text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-white/5">
                      <Calendar size={10} />
                      {activeItem.date}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-sans font-semibold text-theme-bg leading-snug">
                      {activeItem.title}
                    </h3>
                    <div className="w-10 h-[1.5px] bg-theme-bg rounded-full" />
                  </div>

                  {/* Description text */}
                  <p className="text-xs text-theme-bg/70 leading-relaxed font-sans">
                    {activeItem.description || 'No additional shoot parameters specified, but can be requested directly.'}
                  </p>

                  <div className="space-y-2.5 bg-black/10 p-4 rounded-xl border border-white/5 text-theme-bg/75 text-xs shadow-inner">
                    <p className="flex items-center gap-2"><span className="text-xs">📸</span> Lead Lens: Momoh Elias</p>
                    <p className="flex items-center gap-2"><span className="text-xs">⚡</span> Lighting: Studio Monoport & Diffusers</p>
                    <p className="flex items-center gap-2"><span className="text-xs">📍</span> Location: Available Nationwide</p>
                  </div>
                </div>

                {/* Lightbox booking cta */}
                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      setPreselectedCategory(activeItem.category);
                      setCurrentPage('contact');
                      handleClose();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-theme-bg text-theme-fg hover:bg-theme-accent hover:text-white px-5 py-3.5 text-xs font-bold tracking-wide transition-all rounded-full cursor-pointer shadow-md border-none"
                    id="lightbox-cta-book"
                  >
                    <MessageSquare size={13} />
                    <span>Inquire this Style</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
