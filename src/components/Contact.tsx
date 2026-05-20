import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, CheckCircle, Sparkles, Send, AlertCircle } from 'lucide-react';
import { PRICING_PACKAGES } from '../data';
import { PhotoCategory } from '../types';

interface ContactProps {
  preselectedPackage: string;
  setPreselectedPackage: (pkg: string) => void;
  preselectedCategory: PhotoCategory | '';
  setPreselectedCategory: (cat: PhotoCategory | '') => void;
  customEstimate: { price: number; details: string } | null;
  clearCustomEstimate: () => void;
}

export default function Contact({
  preselectedPackage,
  setPreselectedPackage,
  preselectedCategory,
  setPreselectedCategory,
  customEstimate,
  clearCustomEstimate
}: ContactProps) {
  // Booking Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState<PhotoCategory>('wedding');
  const [selectedPkg, setSelectedPkg] = useState('standard');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  const [customLocation, setCustomLocation] = useState('');

  // Form Submission feedback states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{
    id: string;
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    priceString: string;
    date: string;
  } | null>(null);

  const [formError, setFormError] = useState('');

  // Sync incoming pre-selected properties from pricing page or portfolio lightbox
  useEffect(() => {
    if (preselectedPackage) {
      setSelectedPkg(preselectedPackage);
    }
  }, [preselectedPackage]);

  useEffect(() => {
    if (preselectedCategory) {
      setServiceType(preselectedCategory);
    }
  }, [preselectedCategory]);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !eventDate) {
      setFormError('Please fill out all required fields marked with * (Name, Email, Phone, and Event Date).');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    // Simulate elite network request latency
    setTimeout(() => {
      const generatedId = 'DN-' + Math.floor(100000 + Math.random() * 900000);
      
      const pkgObj = PRICING_PACKAGES.find(p => p.id === selectedPkg);
      const computedPriceText = customEstimate 
        ? '₦' + customEstimate.price.toLocaleString('en-US') 
        : pkgObj 
          ? '₦' + pkgObj.price.toLocaleString('en-US') 
          : '₦120,000';

      setSubmittedTicket({
        id: generatedId,
        name,
        email,
        phone,
        serviceType: serviceType.toUpperCase(),
        priceString: computedPriceText,
        date: eventDate
      });

      setIsSubmitting(false);
      clearForm();
    }, 1500);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setEventDate('');
    setMessage('');
    setCustomLocation('');
  };

  const handleResetEstimate = () => {
    clearCustomEstimate();
    setPreselectedPackage('standard');
    setSelectedPkg('standard');
  };

  return (
    <div className="bg-theme-bg text-theme-fg pt-32 pb-20 min-h-screen transition-colors duration-350" id="contact-page">
      
      {/* Page Title */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 select-none animate-fade-in">
        <div className="text-center md:text-left max-w-2xl space-y-3 font-sans">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            SECURE YOUR SESSION
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-theme-fg animate-fade-in animate-duration-700 font-sans">
            Let's Work Together
          </h1>
          <p className="font-sans text-theme-fg/80 text-xs md:text-sm leading-relaxed animate-fade-in font-sans">
            Fill out our formal session inquiry portal. Momoh Elias will personally review your prompt details and coordinate a response timeline within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form Page Layout */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
        
        {/* Left Column Studio Details */}
        <div className="lg:col-span-5 space-y-8 select-none font-sans">
          <div className="bg-theme-bg/60 border border-theme-fg/10 p-8 space-y-6 rounded-2xl shadow-sm">
            <h3 className="font-sans font-bold text-[10px] text-theme-fg uppercase tracking-widest border-b border-theme-fg/10 pb-4">
              Delight Notions Contact Map
            </h3>
            
            <ul className="space-y-6 text-sm font-sans text-theme-fg/80">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-theme-fg/5 border border-theme-fg/10 flex items-center justify-center text-theme-fg group-hover:bg-theme-accent-light group-hover:text-theme-accent group-hover:border-theme-accent/20 transition-all duration-250 mt-0.5">
                  <Phone size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-wide text-theme-fg/55 font-sans">Call Directly</h4>
                  <a href="tel:08160813750" className="block text-sm font-bold text-theme-fg hover:text-theme-accent transition-colors duration-250 mt-0.5">
                    0816 081 3750
                  </a>
                  <p className="text-[10px] text-theme-fg/55 leading-normal">Monday through Saturday, 7:00 AM - 6:00 PM</p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-theme-fg/5 border border-theme-fg/10 flex items-center justify-center text-theme-fg group-hover:bg-theme-accent-light group-hover:text-theme-accent group-hover:border-theme-accent/20 transition-all duration-250 mt-0.5">
                  <Mail size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-wide text-theme-fg/55 font-sans">Studio Email</h4>
                  <a href="mailto:delightnotions@gmail.com" className="block text-sm font-bold text-theme-fg hover:text-theme-accent transition-colors duration-250 mt-0.5">
                    delightnotions@gmail.com
                  </a>
                  <p className="text-[10px] text-theme-fg/55 leading-normal font-sans">Client logs processed within 24 hours of dispatch</p>
                </div>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-theme-fg/5 border border-theme-fg/10 flex items-center justify-center text-theme-fg group-hover:bg-theme-accent-light group-hover:text-theme-accent group-hover:border-theme-accent/20 transition-all duration-250 mt-0.5">
                  <MapPin size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[9px] uppercase tracking-wide text-theme-fg/55 font-sans">Active Location</h4>
                  <p className="block text-theme-fg text-sm font-bold mt-0.5">Nigeria (Abuja / Lagos)</p>
                  <p className="text-[10px] text-theme-fg/55 leading-normal font-sans">Available for nationwide editorial commissions</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-theme-fg/10 p-8 bg-theme-bg/60 space-y-4 rounded-2xl shadow-sm">
            <h4 className="font-sans font-bold text-sm text-theme-fg">
              Personal Note from Momoh Elias
            </h4>
            <p className="font-sans text-theme-fg/75 text-xs sm:text-sm leading-relaxed font-serif italic">
              "Every narrative is completely distinct. If standard pricing packages do not quite cover your target scope, let me know. I will design a curated, customized blueprint that protects your portfolio goals."
            </p>
          </div>
        </div>

        {/* Right Column Booking System */}
        <div className="lg:col-span-7 font-sans">
          <AnimatePresence mode="wait">
            
            {!submittedTicket ? (
              <motion.div
                key="booking-form-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-theme-bg/60 border border-theme-fg/10 p-8 sm:p-10 shadow-sm rounded-[24px]"
              >
                <div className="mb-8 border-b border-theme-fg/10 pb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-sans font-semibold text-theme-fg">Book a Session</h3>
                    <p className="text-xs text-theme-fg/70 font-sans mt-0.5">Specify campaign formats, dates, and package alignments.</p>
                  </div>
                  {customEstimate && (
                    <div className="bg-theme-fg/5 border border-theme-fg/20 p-4 flex flex-col items-end text-right max-w-xs select-none rounded-xl">
                      <span className="flex items-center gap-1.5 text-[8.5px] font-bold tracking-wider text-theme-fg uppercase font-sans leading-none">
                        <Sparkles size={11} /> CUSTOM ESTIMATE ACTIVE
                      </span>
                      <span className="text-base font-bold text-theme-fg mt-1">₦{customEstimate.price.toLocaleString('en-US')}</span>
                      <button
                        onClick={handleResetEstimate}
                        className="text-[9px] text-theme-fg hover:text-theme-accent border-b border-dashed border-theme-fg/40 hover:border-theme-accent mt-1.5 cursor-pointer focus:outline-none bg-transparent font-semibold font-sans leading-none transition-colors"
                      >
                        Reset to standard
                      </button>
                    </div>
                  )}
                </div>
                
                {formError && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 text-red-800 dark:text-red-300 text-xs flex items-center gap-2 rounded-xl mb-6 font-sans">
                    <AlertCircle size={15} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adaeze Okonkwo"
                        className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg placeholder-theme-fg/40 text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200"
                        id="contact-field-name"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="adaeze@example.com"
                        className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg placeholder-theme-fg/40 text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200"
                        id="contact-field-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0816 081 3750"
                        className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg placeholder-theme-fg/40 text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200"
                        id="contact-field-phone"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                        Planned Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200 cursor-pointer"
                        id="contact-field-date"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                        Photography Specialty
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value as PhotoCategory)}
                        className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200 cursor-pointer"
                        id="contact-field-category"
                      >
                        <option value="wedding">Wedding Narratives</option>
                        <option value="portrait">Studio Portraits</option>
                        <option value="model">Creative Model & Fashion</option>
                        <option value="corporate">Corporate Profiles</option>
                        <option value="events">Events & Galas</option>
                        <option value="family">Family & Maternity</option>
                        <option value="products">Product Commercials</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                        Selected Package Base
                      </label>
                      <select
                        value={selectedPkg}
                        onChange={(e) => {
                          setSelectedPkg(e.target.value);
                          if (customEstimate) clearCustomEstimate(); // clear on change to synch
                        }}
                        className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200 cursor-pointer"
                        id="contact-field-package"
                      >
                        <option value="starter">Starter Session (₦50,000)</option>
                        <option value="standard">Standard Session (₦120,000)</option>
                        <option value="premium">Premium Session (₦250,000)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                      Target Shooting Location (City, Address)
                    </label>
                    <input
                      type="text"
                      value={customLocation}
                      onChange={(e) => setCustomLocation(e.target.value)}
                      placeholder="e.g. Abuja Wuse II, or Lagos Ikeja Studio"
                      className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg placeholder-theme-fg/40 text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200"
                      id="contact-field-location"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-sans text-[10px] font-bold tracking-wider uppercase text-theme-fg/80">
                      Session Details & Backstory
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your goals, desired backdrops, clothing swaps, or campaign timeline notes..."
                      className="w-full bg-theme-bg border border-theme-fg/25 px-4 py-3 text-theme-fg placeholder-theme-fg/40 text-sm focus:border-theme-accent focus:ring-1 focus:ring-theme-accent/30 focus:outline-none rounded-xl transition-all duration-200"
                      id="contact-field-message"
                    />
                  </div>

                  {customEstimate && (
                    <div className="p-4 bg-theme-fg/5 border border-theme-fg/10 text-theme-fg text-xs flex items-center gap-2.5 font-sans select-none rounded-xl">
                      <AlertCircle size={15} className="text-theme-fg flex-shrink-0" />
                      <span>Note: Your submitted inquiry contains customized estimator metrics: <strong>{customEstimate.details}</strong></span>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-theme-fg disabled:opacity-40 text-theme-bg hover:bg-theme-accent hover:text-white py-4 text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full shadow-sm border-none font-sans"
                      id="contact-btn-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border border-theme-bg border-t-transparent animate-spin" />
                          <span>Issuing Studio Ticket...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} />
                          <span>Send Booking Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="booking-success-ticket"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-theme-bg border border-theme-fg/15 p-8 sm:p-12 shadow-md relative rounded-[24px] font-sans animate-fade-in"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-theme-accent rounded-t-[24px]" />
                
                <div className="text-center space-y-4 mb-8">
                  <div className="w-14 h-14 bg-theme-fg/5 text-theme-fg rounded-full flex items-center justify-center mx-auto border border-theme-fg/25 shadow-inner">
                    <CheckCircle size={32} />
                  </div>
                  <div className="space-y-1">
                    <span className="font-sans text-[9px] font-bold tracking-wider text-theme-fg bg-theme-fg/5 px-3.5 py-1 border border-theme-fg/15 uppercase inline-block rounded-full leading-none">
                      Booking Ticket Issued
                    </span>
                    <h3 className="text-2xl font-sans font-semibold text-theme-fg pt-2 font-sans">
                      Inquiry Received Successfully
                    </h3>
                    <p className="text-xs text-theme-fg/75 font-sans max-w-sm mx-auto font-sans">
                      Thank you for choosing Delight Notions. We have cataloged your dynamic session data.
                    </p>
                  </div>
                </div>

                {/* Simulated Premium Receipt Ticket */}
                <div className="border border-theme-fg/10 bg-theme-fg/5 p-6 space-y-4 font-sans text-xs rounded-2xl">
                  <div className="flex justify-between items-center border-b border-theme-fg/10 pb-3">
                    <span className="font-bold tracking-wider uppercase text-theme-fg/55">TICKET REF ID</span>
                    <span className="font-mono font-bold text-theme-fg">{submittedTicket.id}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 border-b border-theme-fg/10 pb-4 text-theme-fg">
                    <div>
                      <span className="block text-[10px] text-theme-fg/55 uppercase tracking-tight font-semibold">Lead Contact</span>
                      <span className="font-bold text-theme-fg text-xs">{submittedTicket.name}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-theme-fg/55 uppercase tracking-tight font-semibold">Contact Phone</span>
                      <span className="font-bold text-theme-fg text-xs">{submittedTicket.phone}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-theme-fg/55 uppercase tracking-tight font-semibold">Service Needed</span>
                      <span className="font-bold text-theme-fg text-xs font-sans">{submittedTicket.serviceType}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-theme-fg/55 uppercase tracking-tight font-semibold">Budget Level</span>
                      <span className="font-bold text-theme-fg text-xs">{submittedTicket.priceString}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-theme-bg p-3 text-theme-fg/80 text-[11px] leading-relaxed border border-theme-fg/10 justify-between rounded-xl">
                    <span className="font-sans font-semibold">📅 Requested Cover Date:</span>
                    <span className="font-bold text-theme-fg">{submittedTicket.date}</span>
                  </div>
                </div>

                {/* Next Steps List */}
                <div className="mt-8 space-y-4 border-t border-theme-fg/10 pt-6 font-sans">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-theme-fg">
                    What happens next?
                  </h4>
                  <ul className="space-y-3 text-theme-fg/85 font-sans">
                    <li className="flex gap-2 text-xs">
                      <span className="font-bold text-theme-fg font-sans flex-shrink-0">1. Personal Call:</span>
                      <span>Momoh Elias will personally review your backdrop files and coordinate a calendar retainer.</span>
                    </li>
                    <li className="flex gap-2 text-xs">
                      <span className="font-bold text-theme-fg font-sans flex-shrink-0">2. Planning Assistant:</span>
                      <span>An interactive wardrobe consult is dispatched to map out styling themes and timelines.</span>
                    </li>
                    <li className="flex gap-2 text-xs">
                      <span className="font-bold text-theme-fg font-sans flex-shrink-0">3. Master Shoot:</span>
                      <span>Enjoy bespoke visual direction and premium uncompromised fine-art captures.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      clearCustomEstimate();
                    }}
                    className="w-full py-4 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white text-xs font-bold tracking-wide transition-all cursor-pointer text-center rounded-full shadow-sm border-none font-sans font-sans"
                    id="success-btn-dismiss"
                  >
                    Send Another Dispatch Inquiry
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </section>

    </div>
  );
}
