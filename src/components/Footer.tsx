import { Mail, Phone, MapPin, Camera, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-theme-footer-bg text-theme-footer-fg pt-24 pb-16 border-t border-theme-footer-fg/10 backdrop-blur-[12px] transition-colors duration-350"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-theme-footer-fg/10 animate-fade-in font-sans">
          
          {/* Logo & Manifesto */}
          <div className="md:col-span-1 space-y-6">
            <button
               onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none bg-transparent border-none p-0"
              id="footer-logo"
            >
              <div className="w-10 h-10 rounded-full border border-theme-footer-fg/10 flex items-center justify-center bg-theme-footer-fg/5 text-theme-footer-fg transition-all duration-300 group-hover:scale-105 group-hover:bg-theme-footer-fg/10 group-hover:border-theme-footer-fg/30">
                <Camera size={18} strokeWidth={1.5} />
              </div>
              <div>
                <span className="block font-sans font-semibold tracking-[0.05em] text-sm text-theme-footer-fg uppercase">
                  DELIGHT<span className="font-light opacity-60">NOTIONS</span>
                </span>
                <span className="block font-sans text-[8px] tracking-[0.25em] uppercase text-theme-footer-fg/50">
                  Visual Studio
                </span>
              </div>
            </button>
            <p className="text-theme-footer-fg/70 font-sans text-xs leading-relaxed max-w-sm">
              Led by Momoh Elias. Capturing moments that tell organic stories, evoke intense raw emotions, and leave a lasting impression across Nigeria. Based in Abuja, traveling globally.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-5">
            <h4 className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-theme-footer-fg">
              Studio Portals
            </h4>
            <ul className="space-y-3.5 text-xs text-theme-footer-fg/75 font-sans animate-none animate-duration-75">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Home Portfolio
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    View Galleries
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Services & Pricing
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Meet Momoh Elias
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Book a Consult
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Photo Specialties */}
          <div className="space-y-5">
            <h4 className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-theme-footer-fg">
              Specialized Areas
            </h4>
            <ul className="space-y-3.5 text-xs text-theme-footer-fg/75 font-sans">
              <li>
                <button 
                  onClick={() => handleNav('portfolio')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Wedding Narratives
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Studio Portraiture
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Commercial & Editorial
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Corporate Branding
                  </span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')} 
                  className="hover:text-theme-accent cursor-pointer flex items-center gap-1 group bg-transparent border-none p-0 transition-all duration-300 ease-out hover:translate-x-1.5"
                >
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-theme-accent after:transition-all group-hover:after:w-full text-left">
                    Events & Celebrations
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact Info */}
          <div className="space-y-5">
            <h4 className="font-sans font-bold text-[10px] tracking-[0.2em] uppercase text-theme-footer-fg">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-xs text-theme-footer-fg/75 font-sans">
              <li className="flex items-center gap-3">
                <div className="w-6.5 h-6.5 rounded-full bg-theme-footer-fg/5 flex items-center justify-center border border-theme-footer-fg/10 text-theme-footer-fg">
                  <Phone size={11} />
                </div>
                <a href="tel:08160813750" className="hover:text-theme-accent transition-colors font-semibold text-theme-footer-fg">
                  0816 081 3750
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6.5 h-6.5 rounded-full bg-theme-footer-fg/5 flex items-center justify-center border border-theme-footer-fg/10 text-theme-footer-fg">
                  <Mail size={11} />
                </div>
                <a href="mailto:delightnotions@gmail.com" className="hover:text-theme-accent transition-colors font-semibold text-theme-footer-fg text-wrap break-all">
                  delightnotions@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6.5 h-6.5 rounded-full bg-theme-footer-fg/5 flex items-center justify-center border border-theme-footer-fg/10 text-theme-footer-fg mt-0.5 flex-shrink-0">
                  <MapPin size={11} />
                </div>
                <span className="leading-relaxed">Available Nationwide / Based in Abuja, Nigeria</span>
              </li>
              <li className="text-[10px] text-theme-footer-fg/50 pt-2 border-t border-theme-footer-fg/10 flex items-center gap-1.5 mt-1 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
                <span>Mon - Sat, 7:00 AM - 6:00 PM (GMT+1)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Final Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-theme-footer-fg/15">
          <p className="text-[11px] text-theme-footer-fg/55 font-sans text-center sm:text-left">
            © {new Date().getFullYear()} Delight Notions Studio Photography. All Rights Reserved. Abuja & Lagos, Nigeria.
          </p>
          <div className="flex gap-4 text-[11px] font-sans">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 bg-theme-footer-fg/5 hover:bg-theme-accent hover:text-white border border-theme-footer-fg/10 hover:border-theme-accent rounded-full text-theme-footer-fg/70 transition-all cursor-pointer flex items-center gap-1.5 font-sans leading-none"
            >
              <span>Instagram</span>
              <ArrowUpRight size={10} />
            </a>
            <a 
              href="https://vimeo.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 bg-theme-footer-fg/5 hover:bg-theme-accent hover:text-white border border-theme-footer-fg/10 hover:border-theme-accent rounded-full text-theme-footer-fg/70 transition-all cursor-pointer flex items-center gap-1.5 font-sans leading-none"
            >
              <span>Vimeo</span>
              <ArrowUpRight size={10} />
            </a>
            <a 
               href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 bg-theme-footer-fg/5 hover:bg-theme-accent hover:text-white border border-theme-footer-fg/10 hover:border-theme-accent rounded-full text-theme-footer-fg/70 transition-all cursor-pointer flex items-center gap-1.5 font-sans leading-none"
            >
              <span>Pinterest</span>
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
