import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ChevronDown, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS, SERVICES_LIST, TESTIMONIALS, FAQ_ITEMS } from '../data';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export default function Home({ setCurrentPage }: HomeProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Filter 3 featured items to display on home
  const featuredWorks = PORTFOLIO_ITEMS.filter(item => item.featured).slice(0, 3);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  };

  return (
    <div className="bg-theme-bg text-theme-fg pt-28 transition-colors duration-350">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 md:px-12 py-16 lg:py-24 max-w-7xl mx-auto border-b border-theme-fg/10 overflow-hidden" id="home-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Headline Column */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-8 select-none">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-theme-fg/5 border border-theme-fg/10 px-4.5 py-2 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-theme-fg animate-pulse" />
              <span className="font-sans text-[10px] font-bold tracking-wider text-theme-fg uppercase">
                Booking Open • Abuja & Lagos
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-sans font-semibold tracking-tight text-theme-fg leading-[1.05]"
            >
              Photography with <br />
              <span className="font-serif italic font-light opacity-80">depth, emotion, and meaning.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-theme-fg/80 text-sm md:text-[15px] leading-relaxed max-w-lg md:max-w-xl"
            >
              We believe a single photograph has the power to convey an entire cinematic narrative. Led by Momoh Elias, Delight Notions translates genuine expressions into timeless fine-art editorial legacies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => {
                  setCurrentPage('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-[#F2F1ED] px-8 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 transform hover:scale-102 active:scale-98 cursor-pointer rounded-full border-none shadow-sm"
                id="hero-btn-portfolio"
              >
                <span>View Portfolio</span>
                <ArrowRight size={14} />
              </button>
              
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 bg-transparent text-theme-fg border border-theme-fg/20 hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light px-8 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer hover:scale-102 active:scale-98"
                id="hero-btn-services"
              >
                <span>Packages & Rates</span>
              </button>
            </motion.div>
          </div>

          {/* Hero Featured Image Column */}
          <div className="lg:col-span-12 xl:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative aspect-4/5 w-full bg-theme-bg border border-theme-fg/10 p-2 flex items-center justify-center shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Highlight Portrait"
                className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.02] rounded-xl"
                referrerPolicy="no-referrer"
                id="hero-portrait-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none font-sans"></div>
              <div className="absolute bottom-6 right-6 bg-theme-fg text-theme-bg py-2.5 px-4.5 border border-theme-bg/10 rounded-full flex items-center gap-2 shadow-md">
                <p className="font-sans text-[9px] font-bold tracking-wider text-theme-bg/60 uppercase">Featured Series</p>
                <div className="w-1 h-3 bg-theme-bg/20 rounded-full" />
                <p className="font-sans text-[10px] font-medium text-theme-bg/90 font-sans">The Silent Hour</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. THE STORY / STUDIO STATS */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-b border-theme-fg/10" id="home-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div className="lg:col-span-12 space-y-4 mb-4" {...fadeInUp}>
            <div className="flex items-center gap-3">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
                MEET MOMOH ELIAS
              </span>
              <div className="h-[1px] w-8 bg-theme-fg/10"></div>
            </div>
            <h2 className="text-3xl md:text-[42px] font-sans font-semibold tracking-tight text-theme-fg leading-tight font-sans">
              Transforming raw visions into permanent <span className="text-theme-fg/60 font-serif italic font-light">visual assets</span>
            </h2>
          </motion.div>
          
          <motion.div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" {...fadeInUp}>
            <div className="lg:col-span-12 xl:col-span-5 space-y-4">
              <p className="font-sans text-theme-fg/80 text-sm md:text-base leading-relaxed">
                Based in Nigeria, Delight Notions Studio is founded on a deep-seated passion for visual storytelling and editorial rigor. Under the creative direction of lead photographer <strong>Momoh Elias</strong>, we craft premium, high-contrast emotional legacies.
              </p>
              <p className="font-sans text-theme-fg/60 text-xs md:text-sm leading-relaxed">
                Our studio caters to couture fashion houses, premium brands, couples, and corporate leaders nationwide. Operating globally out of Abuja and Lagos, we formulate a signature direction that blends standard posed symmetry with candid, live-action chemistry.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 group text-xs font-semibold text-theme-fg hover:text-theme-accent transition-colors cursor-pointer border-none bg-transparent"
                  id="story-learn-more"
                >
                  <span>Read Full Studio Biography</span>
                  <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Counter Bento Box Row - Apple minimalist boxes with continuous curved cornering */}
            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              <div className="bg-theme-bg border border-theme-fg/10 p-6 rounded-2xl flex flex-col justify-between h-28 shadow-sm">
                <span className="block font-sans font-bold text-3xl text-theme-fg">7+</span>
                <span className="block font-sans text-[9px] font-bold tracking-wide text-theme-fg/60 uppercase">Years Crafting</span>
              </div>
              <div className="bg-theme-bg border border-theme-fg/10 p-6 rounded-2xl flex flex-col justify-between h-28 shadow-sm">
                <span className="block font-sans font-bold text-3xl text-theme-fg">200+</span>
                <span className="block font-sans text-[9px] font-bold tracking-wide text-theme-fg/60 uppercase">Completed Series</span>
              </div>
              <div className="bg-theme-bg border border-theme-fg/10 p-6 rounded-2xl flex flex-col justify-between h-28 shadow-sm">
                <span className="block font-sans font-bold text-3xl text-theme-fg">150+</span>
                <span className="block font-sans text-[9px] font-bold tracking-wide text-theme-fg/60 uppercase">Patrons Served</span>
              </div>
              <div className="bg-theme-bg border border-theme-fg/10 p-6 rounded-2xl flex flex-col justify-between h-28 shadow-sm">
                <span className="block font-sans font-bold text-3xl text-theme-fg">12</span>
                <span className="block font-sans text-[9px] font-bold tracking-wide text-theme-fg/60 uppercase">Studio Awards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED WORK */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-b border-theme-fg/10" id="home-featured">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <div className="space-y-2">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
              CURATED CURATIONS
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-theme-fg font-sans">
              Curated Captures
            </h2>
          </div>
          <button
            onClick={() => {
              setCurrentPage('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 border border-theme-fg/20 text-theme-fg px-6 py-2.5 text-xs font-semibold hover:bg-theme-accent hover:text-[#F2F1ED] hover:border-theme-accent transition-all duration-300 cursor-pointer group rounded-full bg-transparent"
            id="featured-btn-view-all"
          >
            <span>View All Works</span>
            <ArrowRight size={13} className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Featured Gallery Showcase */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {featuredWorks.map((work) => (
            <motion.div
              key={work.id}
              variants={fadeInUp}
              className="bg-theme-bg border border-theme-fg/10 group relative flex flex-col h-full rounded-2xl overflow-hidden hover:border-theme-fg/30 hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
              id={`featured-card-${work.id}`}
            >
              <div className="aspect-[4/3] bg-stone-900 overflow-hidden relative">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.02] transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-theme-fg text-theme-bg font-sans text-[9px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-theme-bg/10">
                  {work.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between border-t border-theme-fg/10 bg-theme-bg/5 leading-relaxed">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold tracking-wider uppercase text-theme-fg/60 font-sans">
                    {work.date}
                  </p>
                  <h3 className="text-lg font-sans font-semibold text-theme-fg leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-theme-fg/75 font-sans">
                    {work.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setCurrentPage('portfolio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-theme-fg hover:text-theme-accent transition-colors cursor-pointer text-left border-none bg-transparent"
                >
                  <span>Explore Shoot</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. THE SERVICES AND RATE HIGHLIGHT */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-b border-theme-fg/10 bg-transparent" id="home-services">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-4 space-y-6">
            <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
              CORE OFFERINGS
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-theme-fg leading-tight">
              Sophisticated <br />
              <span className="text-theme-fg/60 font-serif italic font-light opacity-85">editorial rates</span>
            </h2>
            <p className="font-sans text-theme-fg/75 text-sm leading-relaxed font-sans">
              We cover key corporate milestones, couture portraiture, editorial branding portfolios, and commercial catalogs. Our pricing suites are completely transparent, structured to deliver unmatched aesthetic value.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-[#F2F1ED] px-6 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer hover:scale-102 border-none shadow-sm"
                id="services-btn-view-rates"
              >
                <span>Read Package Rates</span>
                <ArrowRight size={13} className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES_LIST.slice(0, 4).map((service, idx) => (
              <div
                key={service.id}
                className="bg-theme-bg border border-theme-fg/10 p-7 space-y-4 hover:border-theme-accent/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between rounded-2xl group"
                id={`home-service-card-${idx}`}
              >
                <div className="space-y-3">
                  <span className="inline-flex w-7 h-7 rounded-full bg-theme-fg/5 text-theme-fg group-hover:text-theme-accent group-hover:bg-theme-accent-light group-hover:border-theme-accent/30 transition-all duration-300 items-center justify-center font-sans text-xs font-bold border border-theme-fg/10">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-sans font-semibold text-theme-fg leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-theme-fg/70 font-sans">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-theme-fg hover:text-theme-accent transition-colors cursor-pointer border-none bg-transparent"
                  >
                    <span>Read Deliverables</span>
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-b border-theme-fg/10" id="home-testimonials">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 animate-fade-in">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-theme-fg font-sans">
            What Our Patrons Say
          </h2>
          <p className="font-sans text-theme-fg/70 text-xs tracking-wide max-w-md mx-auto">
            A look back at standard verified testimonies left by actual Abuja and Lagos patrons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-theme-bg border border-theme-fg/10 p-8 space-y-5 flex flex-col justify-between relative shadow-sm hover:border-theme-fg/20 transition-all rounded-2xl animate-fade-in"
              id={`home-testimonial-card-${idx}`}
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-theme-fg">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="font-sans text-sm text-theme-fg/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-theme-fg/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-theme-fg">
                    {testimonial.author}
                  </h4>
                  <p className="text-[9px] text-theme-fg/50 font-sans tracking-wider uppercase font-semibold">
                    {testimonial.location}
                  </p>
                </div>
                <span className="text-[9px] font-bold text-theme-fg bg-theme-fg/5 px-3 py-1 rounded-full tracking-wider uppercase select-none border border-theme-fg/10">
                  Verified Booking
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQs ACCORDION */}
      <section className="px-6 md:px-12 py-20 max-w-3xl mx-auto" id="home-faq">
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            ANSWERING QUERIES
          </span>
          <h2 className="text-3xl font-sans font-semibold tracking-tight text-theme-fg">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-theme-fg/10 bg-theme-bg/40 rounded-xl overflow-hidden transition-colors duration-300"
                id={`faq-accordion-${faq.id}`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group bg-transparent border-none"
                >
                  <span className="font-sans font-semibold text-[15px] text-theme-fg leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-theme-fg/55 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-theme-fg/75 font-sans text-xs md:text-sm leading-relaxed border-t border-theme-fg/10">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
