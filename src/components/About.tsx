import { Award, Clock, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SKILLS_LIST } from '../data';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-theme-bg text-theme-fg pt-32 pb-20 transition-colors duration-350">
      {/* 1. EDITORIAL HEADER */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 select-none animate-fade-in" id="about-header">
        <div className="text-center max-w-3xl mx-auto space-y-4 font-sans">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            THE PERSON BEHIND THE LENS
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-semibold tracking-tight text-theme-fg leading-tight">
            Momoh Elias
          </h1>
          <p className="font-sans text-theme-fg/80 text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed italic font-serif">
            "We do not merely take photographs, we curate historic narratives of joy, resilience, and style."
          </p>
        </div>
      </section>

      {/* 2. DUAL COLUMNS BIOGRAPHY */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-theme-fg/10 pb-20" id="about-bio">
        
        {/* Left Column Image */}
        <div className="lg:col-span-12 xl:col-span-5 relative">
          <div className="aspect-4/5 w-full bg-theme-bg/60 border border-theme-fg/10 p-2 shadow-sm rounded-2xl overflow-hidden">
            <img
              src="/event/KHA_4309.jpg"
              alt="Momoh Elias Portrait"
              className="w-full h-full object-cover filter brightness-[0.9] grayscale contrast-[1.02] rounded-xl"
              referrerPolicy="no-referrer"
              id="about-momoh-picture"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-theme-bg text-theme-fg p-6 max-w-xs border border-theme-fg/15 rounded-2xl shadow-md font-sans">
            <h4 className="font-sans font-bold text-[10px] tracking-wider uppercase text-theme-fg font-sans flex items-center gap-1.5 mb-1">
              <Sparkles size={11} />
              Creative Visionary
            </h4>
            <p className="font-sans text-[11px] text-theme-fg/75 leading-relaxed">
              Serving high-profile directors, couture brands, and bridal couples nationwide from our Abuja and Lagos hubs.
            </p>
          </div>
        </div>

        {/* Right Column Bio Copy */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <div className="space-y-4 font-sans">
            <h2 className="text-2xl font-sans font-semibold text-theme-fg">
              Our Story: From Vision to Studio
            </h2>
            <p className="font-sans text-theme-fg/85 text-sm md:text-base leading-relaxed">
              Delight Notions Studio was born out of a deep passion for couture storytelling. Under the creative direction of Momoh Elias, we spent 4 years in dedicated apprenticeships mastering camera geometry, environment/lighting setups, and high-fidelity digital formatting, followed by over 3 years of professional studio leadership.
            </p>
            <p className="font-sans text-theme-fg/65 text-xs md:text-sm leading-relaxed">
              Whether it's a bride's final glance in the bridal suite, an Abuja tech executive's profile study, or a minimal skincare product catalog shoot framed on high-contrast slate surfaces — we approach every pixel with artistic intent.
            </p>
            <p className="font-sans text-theme-fg/65 text-xs md:text-sm leading-relaxed">
              Today, Delight Notions services industry leaders, couture labels, wedding planners, and models across Nigeria. We pride ourselves on quick turnover, transparent rates, and an eye for details that other studios pass by.
            </p>
          </div>

          {/* Core Stats Bar */}
          <div className="grid grid-cols-4 gap-4 bg-theme-fg/5 border border-theme-fg/10 p-6 text-center rounded-2xl">
            <div className="space-y-1">
              <span className="block font-sans font-bold text-2xl md:text-3xl text-theme-fg">7+</span>
              <span className="block text-[8px] font-bold tracking-widest uppercase text-theme-fg/50 font-sans">Years Exp.</span>
            </div>
            <div className="space-y-1">
              <span className="block font-sans font-bold text-2xl md:text-3xl text-theme-fg">200+</span>
              <span className="block text-[8px] font-bold tracking-widest uppercase text-theme-fg/50 font-sans">Series Done</span>
            </div>
            <div className="space-y-1">
              <span className="block font-sans font-bold text-2xl md:text-3xl text-theme-fg">150+</span>
              <span className="block text-[8px] font-bold tracking-widest uppercase text-theme-fg/50 font-sans">Patrons Served</span>
            </div>
            <div className="space-y-1">
              <span className="block font-sans font-bold text-2xl md:text-3xl text-theme-fg">12</span>
              <span className="block text-[8px] font-bold tracking-widest uppercase text-theme-fg/50 font-sans">Awards Won</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <button
              onClick={() => {
                setCurrentPage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-[#F2F1ED] px-6 py-3.5 text-xs font-semibold tracking-wide transition-all rounded-full cursor-pointer shadow-sm border-none"
              id="about-visit-portfolio"
            >
              <span>Explore Portfolio</span>
              <ChevronRight size={14} />
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 border border-theme-fg/20 bg-transparent text-theme-fg hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light px-6 py-3.5 text-xs font-semibold tracking-wide transition-all rounded-full cursor-pointer"
              id="about-btn-start"
            >
              <span>Book a Private Session</span>
            </button>
          </div>
        </div>

      </section>

      {/* 3. TECHNICAL SKILLS & ASSURANCE */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-b border-theme-fg/10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="about-skills">
        
        {/* Left Column Text */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-4">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            TECHNICAL RIGOR
          </span>
          <h2 className="text-2xl md:text-4xl font-sans font-semibold text-theme-fg leading-tight font-sans">
            Our Mastery & Handcrafted Skills
          </h2>
          <p className="font-sans text-theme-fg/80 text-xs md:text-sm leading-relaxed max-w-xl">
            Momoh Elias believes photography is 50% technical mastery and 50% direct emotional synergy. We invest in high-end studio lighting equipment and premium focus-tracking cameras to guarantee extreme sharpness in every frame.
          </p>
        </div>

        {/* Right Column Skill Indicators */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6 w-full">
          {SKILLS_LIST.map((skill, index) => (
            <div key={index} className="space-y-1.5" id={`skill-bar-${index}`}>
              <div className="flex justify-between items-center text-xs font-semibold font-sans uppercase tracking-wider text-theme-fg/85">
                <span>{skill.name}</span>
                <span className="text-theme-accent">{skill.level}%</span>
              </div>
              <div className="h-[4px] bg-theme-fg/10 w-full rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 * index, ease: "easeInOut" }}
                  className="h-full bg-theme-accent"
                />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. DETAILS CARD GRID */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto text-theme-fg" id="about-details">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 border border-theme-fg/10 bg-theme-bg/60 space-y-4 hover:border-theme-accent/30 duration-300 transition-all rounded-2xl shadow-sm group">
            <div className="w-10 h-10 rounded-full bg-theme-fg/5 flex items-center justify-center text-theme-fg group-hover:bg-theme-accent-light group-hover:text-theme-accent border border-theme-fg/10 group-hover:border-theme-accent/20 transition-all duration-300">
              <MapPin size={18} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-semibold text-lg text-theme-fg group-hover:text-theme-accent transition-colors duration-250">
              Coverage Location
            </h3>
            <p className="font-sans text-theme-fg/70 text-xs leading-relaxed">
              Based natively in Nigeria, operating daily within Abuja and Lagos. Custom cross-country packages can be commissioned for global campaigns.
            </p>
          </div>

          <div className="p-8 border border-theme-fg/10 bg-theme-bg/60 space-y-4 hover:border-theme-accent/30 duration-300 transition-all rounded-2xl shadow-sm group">
            <div className="w-10 h-10 rounded-full bg-theme-fg/5 flex items-center justify-center text-theme-fg group-hover:bg-theme-accent-light group-hover:text-theme-accent border border-theme-fg/10 group-hover:border-theme-accent/20 transition-all duration-300">
              <Clock size={18} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-semibold text-lg text-theme-fg group-hover:text-theme-accent transition-colors duration-250">
              Working Hours
            </h3>
            <p className="font-sans text-theme-fg/70 text-xs leading-relaxed">
              Monday through Saturday, 7:00 AM to 6:00 PM. Studio responses are dispatched within 24 hours of form submission.
            </p>
          </div>

          <div className="p-8 border border-theme-fg/10 bg-theme-bg/60 space-y-4 hover:border-theme-accent/30 duration-300 transition-all rounded-2xl shadow-sm group">
            <div className="w-10 h-10 rounded-full bg-theme-fg/5 flex items-center justify-center text-theme-fg group-hover:bg-theme-accent-light group-hover:text-theme-accent border border-theme-fg/10 group-hover:border-theme-accent/20 transition-all duration-300">
              <Award size={18} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans font-semibold text-lg text-theme-fg group-hover:text-theme-accent transition-colors duration-250">
              Vision Statement
            </h3>
            <p className="font-sans text-theme-fg/70 text-xs leading-relaxed">
              Maintaining high-contrast details, avoiding low-fidelity presets, delivering premium print products, and maintaining 100% verified delight.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
