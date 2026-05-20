import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_LIST, PRICING_PACKAGES } from '../data';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
  setPreselectedPackage: (pkg: string) => void;
  setCustomEstimate: (estimate: { price: number; details: string }) => void;
}

export default function Services({ setCurrentPage, setPreselectedPackage, setCustomEstimate }: ServicesProps) {
  // Category tabs for high-fidelity interactive pricing
  const [activeTab, setActiveTab] = useState<'wedding' | 'photoshoot' | 'family' | 'corporate'>('wedding');

  // Sub-configuration states for specific categories in DELIGHT PRICELIST
  const [weddingDays, setWeddingDays] = useState<Record<string, '1day' | '2days'>>({
    pkg1: '1day',
    pkg2: '1day',
    pkg3: '1day'
  });
  
  const [studioOutfits, setStudioOutfits] = useState<1 | 2 | 3 | 4>(1);
  const [outdoorOutfits, setOutdoorOutfits] = useState<1 | 2 | 3 | 4>(1);
  const [familyHomeOutfits, setFamilyHomeOutfits] = useState<1 | 2>(1);
  const [familyStudioOutfits, setFamilyStudioOutfits] = useState<1 | 2>(1);

  // Calculator States
  const [selectedBaseId, setSelectedBaseId] = useState<string>('photoshoot_studio_1outfit');
  const [extraHours, setExtraHours] = useState<number>(0);
  const [extraPhotos, setExtraPhotos] = useState<number>(0);
  const [wantRawFiles, setWantRawFiles] = useState<boolean>(false);
  const [wantExpedited, setWantExpedited] = useState<boolean>(false);

  // Calculate total customized price
  const selectedBasePackage = PRICING_PACKAGES.find(p => p.id === selectedBaseId) || PRICING_PACKAGES[6];
  
  const additionalHourRate = 15000;
  const additionalPhotoRate = 2000;
  const rawFilesSurcharge = 35000;
  const expeditedSurcharge = 25000;

  const totalCalculatedPrice = 
    selectedBasePackage.price +
    (extraHours * additionalHourRate) +
    (extraPhotos * additionalPhotoRate) +
    (wantRawFiles ? rawFilesSurcharge : 0) +
    (wantExpedited ? expeditedSurcharge : 0);

  const formatCurrency = (val: number) => {
    return '₦' + val.toLocaleString('en-US');
  };

  const handleApplyEstimate = () => {
    let detailsString = `Base: ${selectedBasePackage.name} (${formatCurrency(selectedBasePackage.price)})`;
    if (extraHours > 0) detailsString += `, +${extraHours} Extra Hours`;
    if (extraPhotos > 0) detailsString += `, +${extraPhotos} Extra Photos`;
    if (wantRawFiles) detailsString += `, +RAW Files Delivery`;
    if (wantExpedited) detailsString += `, +48-Hour Expedited Delivery`;

    setPreselectedPackage(selectedBaseId);
    setCustomEstimate({
      price: totalCalculatedPrice,
      details: detailsString
    });
    
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackageDirectly = (pkgId: string) => {
    setPreselectedPackage(pkgId);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-theme-bg text-theme-fg pt-32 pb-20 min-h-screen transition-colors duration-350">
      
      {/* Page Title Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16 select-none animate-fade-in" id="services-header">
         <div className="text-center md:text-left max-w-2xl space-y-3 font-sans">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            THE DELIVERABLES
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-semibold tracking-tight text-theme-fg animate-fade-in">
            Professional Studio Services
          </h1>
          <p className="font-sans text-theme-fg/80 text-xs md:text-sm leading-relaxed">
            Delight Notions delivers intense contrast storytelling, elegant studio backdrops, and priority couture post-processing. Read about our standard session parameters.
          </p>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 font-sans" id="services-breakdown">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="bg-theme-bg/60 border border-theme-fg/10 p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-theme-fg/30 rounded-2xl group transition-all duration-300 hover:scale-[1.01]"
              id={`service-detail-card-${service.id}`}
            >
              <div className="w-full sm:w-1/3 aspect-[4/5] bg-stone-900 overflow-hidden relative border border-theme-fg/10 rounded-xl">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700 rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full sm:w-2/3 space-y-4 font-sans">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-theme-fg font-sans block">
                    SPECIALTY CORE 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-sans font-semibold text-theme-fg transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-theme-fg/70 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-1 bg-theme-fg/5 p-4 border border-theme-fg/10 text-theme-fg/85 text-xs rounded-xl font-sans leading-relaxed">
                  {service.bullets.map((bullet, k) => (
                    <div key={k} className="flex items-center gap-2.5 leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-theme-fg flex-shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table Section - Categorized via Tabs */}
      <section className="px-6 md:px-12 py-20 bg-transparent max-w-7xl mx-auto mb-20 font-sans" id="services-pricing">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10 select-none animate-fade-in">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            DELIGHT PRICELIST
          </span>
          <h2 className="text-3xl font-sans font-semibold text-theme-fg">
            Explore Studio Pricing
          </h2>
          <p className="font-sans text-theme-fg/80 text-xs leading-relaxed max-w-sm mx-auto">
            Choose a photography genre below to interactively explore rates, outfit swaps, framing dimensions, and photobook options.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14 max-w-2xl mx-auto select-none">
          {[
            { id: 'wedding', label: 'Wedding Narratives' },
            { id: 'photoshoot', label: 'Photoshoot Sessions' },
            { id: 'family', label: 'Family Portraits' },
            { id: 'corporate', label: 'Corporate Headshots' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 text-xs font-bold tracking-wide border cursor-pointer transition-all duration-300 rounded-full focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-theme-accent border-theme-accent text-[#F2F1ED] shadow-sm'
                  : 'bg-theme-bg/60 border-theme-fg/15 text-theme-fg/70 hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Category Renderer */}
        <div className="animate-fade-in">
          
          {/* A. WEDDING PRINCELIST GROUP */}
          {activeTab === 'wedding' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  key: 'pkg1',
                  pkg1DayId: 'wedding_pkg1_1day',
                  pkg2DayId: 'wedding_pkg1_2days',
                  title: 'Wedding Package 1',
                  bullets: [
                    'Full Event Photography',
                    '2 Wall Frames (16 by 20 inches)',
                    'Edited (Color Enhanced) Online delivery',
                    '1 Photobook (10 by 12 inches)',
                    'Delight and assistant'
                  ]
                },
                {
                  key: 'pkg2',
                  pkg1DayId: 'wedding_pkg2_1day',
                  pkg2DayId: 'wedding_pkg2_2days',
                  title: 'Wedding Package 2',
                  popular: true,
                  bullets: [
                    'Pre-wedding session',
                    'Full Event Photography',
                    '2 Wall Frames (20 by 24 inches)',
                    'Edited (Color Enhanced) online delivery',
                    '1 Photobook (10 by 12 inches + flash)',
                    '1 Videographer included',
                    'Delight and assistant'
                  ]
                },
                {
                  key: 'pkg3',
                  pkg1DayId: 'wedding_pkg3_1day',
                  pkg2DayId: 'wedding_pkg3_2days',
                  title: 'Wedding Package 3',
                  bullets: [
                    'Pre-wedding (complimentary)',
                    'Full Event Photography',
                    '2 Acrylic Wall Frames (20 by 24 inches)',
                    '2 Synthetic Photobooks (12 by 36 inches + flash)',
                    'Cinematography (1min Trailer + Full Length Video)',
                    'Delight + 1 photographer + 2 assistants'
                  ]
                }
              ].map((card) => {
                const dayOption = weddingDays[card.key];
                const activeId = dayOption === '1day' ? card.pkg1DayId : card.pkg2DayId;
                const activePkg = PRICING_PACKAGES.find(p => p.id === activeId)!;

                return (
                  <div
                    key={card.key}
                    className={`border p-8 flex flex-col justify-between relative shadow-sm hover:scale-[1.01] select-none rounded-[20px] transition-all duration-300 ${
                      card.popular
                        ? 'border-theme-fg ring-4 ring-theme-fg/10 bg-theme-bg/95 shadow-md'
                        : 'border-theme-fg/15 bg-theme-bg/50'
                    }`}
                  >
                    {card.popular && (
                      <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-theme-fg text-theme-bg text-[9.5px] font-bold tracking-wider uppercase py-1.5 px-4 rounded-full shadow-sm border-none leading-none">
                        RECOMMENDED
                      </span>
                    )}

                    <div className="space-y-6">
                      <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                        <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-theme-fg/60">
                          {card.title}
                        </h3>
                        
                        <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                          {formatCurrency(activePkg.price)}
                        </p>
                        
                        {/* Selector for Days */}
                        <div className="flex justify-center gap-1.5 mt-4">
                          <button
                            onClick={() => setWeddingDays({ ...weddingDays, [card.key]: '1day' })}
                            className={`px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                              dayOption === '1day'
                                ? 'bg-theme-fg text-theme-bg border-theme-fg'
                                : 'bg-transparent text-theme-fg/60 border-theme-fg/20 hover:border-theme-fg hover:text-theme-accent'
                            }`}
                          >
                            1 Day
                          </button>
                          <button
                            onClick={() => setWeddingDays({ ...weddingDays, [card.key]: '2days' })}
                            className={`px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                              dayOption === '2days'
                                ? 'bg-theme-fg text-theme-bg border-theme-fg'
                                : 'bg-transparent text-theme-fg/60 border-theme-fg/20 hover:border-theme-fg hover:text-theme-accent'
                            }`}
                          >
                            2 Days
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                        {activePkg.description}
                      </p>

                      <div className="space-y-3 pt-2">
                        <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                          Core Deliverables
                        </div>
                        {card.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                            <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 border-t border-theme-fg/10 mt-6">
                      <button
                        onClick={() => handleSelectPackageDirectly(activeId)}
                        className={`w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full ${
                          card.popular
                            ? 'bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white shadow-sm border-none'
                            : 'bg-theme-fg/5 text-theme-fg hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light border border-theme-fg/20'
                        }`}
                      >
                        Book {dayOption === '1day' ? '1 Day' : '2 Days'} Package
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* B. PHOTOSHOOT SESSIONS GROUP */}
          {activeTab === 'photoshoot' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              
              {/* STUDIO SESSIONS */}
              <div className="border p-8 flex flex-col justify-between relative shadow-sm rounded-[20px] transition-all duration-300 border-theme-fg/15 bg-theme-bg/50">
                <div className="space-y-6">
                  <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-[#F2F1ED] bg-theme-fg px-3 py-1 rounded-full uppercase leading-none">
                      Indoor Specialty
                    </span>
                    <h3 className="font-sans font-bold text-lg text-theme-fg mt-2">
                      Studio Session
                    </h3>
                    
                    {/* Dynamic Prices */}
                    {(() => {
                      const activeId = `photoshoot_studio_${studioOutfits}outfit${studioOutfits > 1 ? 's' : ''}`;
                      const activePkg = PRICING_PACKAGES.find(p => p.id === activeId)!;
                      return (
                        <>
                          <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                            {formatCurrency(activePkg.price)}
                          </p>
                          <p className="text-[10px] text-theme-accent font-bold uppercase tracking-wider mt-1">
                            Includes {studioOutfits * 8} Edited Pictures
                          </p>
                        </>
                      );
                    })()}

                    {/* Outfit Count Selection Pills */}
                    <div className="space-y-1.5 mt-5">
                      <span className="block text-[9px] font-extrabold uppercase tracking-widest text-theme-fg/60">
                        Choose Outfit Swaps
                      </span>
                      <div className="flex justify-center gap-1.5">
                        {([1, 2, 3, 4] as const).map((count) => (
                          <button
                            key={count}
                            onClick={() => setStudioOutfits(count)}
                            className={`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-full border transition-all cursor-pointer ${
                              studioOutfits === count
                                ? 'bg-theme-accent border-theme-accent text-white'
                                : 'bg-transparent text-theme-fg border-theme-fg/25 hover:border-theme-accent hover:text-theme-accent'
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                    Stellar strobe mapping, pristine cloth dressing changes, and precision skin color grading on earth tones.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                      Included Parameters
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{studioOutfits} Outfit configuration swap{studioOutfits > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{studioOutfits * 8} pristine fully enhanced & retouched pictures</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Elite strobe lighting setup & backdrop layouts</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Digital high-res print delivery in 24-48 hours</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-theme-fg/10 mt-6">
                  <button
                    onClick={() => handleSelectPackageDirectly(`photoshoot_studio_${studioOutfits}outfit${studioOutfits > 1 ? 's' : ''}`)}
                    className="w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white border-none"
                  >
                    Book {studioOutfits} Outfit Session
                  </button>
                </div>
              </div>

              {/* OUTDOOR SESSIONS */}
              <div className="border p-8 flex flex-col justify-between relative shadow-sm rounded-[20px] transition-all duration-300 border-theme-fg/15 bg-theme-bg/50">
                <div className="space-y-6">
                  <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-theme-accent bg-theme-accent/10 border border-theme-accent/20 px-3 py-1 rounded-full uppercase leading-none">
                      Outdoor / Environs
                    </span>
                    <h3 className="font-sans font-bold text-lg text-theme-fg mt-2">
                      Outdoor Session
                    </h3>
                    
                    {/* Dynamic Prices */}
                    {(() => {
                      const activeId = `photoshoot_outdoor_${outdoorOutfits}outfit${outdoorOutfits > 1 ? 's' : ''}`;
                      const activePkg = PRICING_PACKAGES.find(p => p.id === activeId)!;
                      return (
                        <>
                          <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                            {formatCurrency(activePkg.price)}
                          </p>
                          <p className="text-[10px] text-theme-accent font-bold uppercase tracking-wider mt-1">
                            Includes {outdoorOutfits * 8} Edited Pictures
                          </p>
                        </>
                      );
                    })()}

                    {/* Outfit Count Selection Pills */}
                    <div className="space-y-1.5 mt-5">
                      <span className="block text-[9px] font-extrabold uppercase tracking-widest text-theme-fg/60">
                        Choose Outfit Swaps
                      </span>
                      <div className="flex justify-center gap-1.5">
                        {([1, 2, 3, 4] as const).map((count) => (
                          <button
                            key={count}
                            onClick={() => setOutdoorOutfits(count)}
                            className={`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-full border transition-all cursor-pointer ${
                              outdoorOutfits === count
                                ? 'bg-theme-accent border-theme-accent text-white'
                                : 'bg-transparent text-theme-fg border-theme-fg/25 hover:border-theme-accent hover:text-theme-accent'
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                    Captured during peak golden hour sequences across spectacular environmental and raw nature landscapes.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                      Included Parameters
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{outdoorOutfits} Outfit configuration swap{outdoorOutfits > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{outdoorOutfits * 8} beautifully edit & color-enhanced images</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Natural & Environmental portable lighting setups</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Digital high-res print delivery in 48-72 hours</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-theme-fg/10 mt-6">
                  <button
                    onClick={() => handleSelectPackageDirectly(`photoshoot_outdoor_${outdoorOutfits}outfit${outdoorOutfits > 1 ? 's' : ''}`)}
                    className="w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white border-none"
                  >
                    Book {outdoorOutfits} Outfit Session
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* C. FAMILY PORTRAITS GROUP */}
          {activeTab === 'family' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              
              {/* HOME SERVICE */}
              <div className="border p-8 flex flex-col justify-between relative shadow-sm rounded-[20px] transition-all duration-300 border-theme-fg/15 bg-theme-bg/50">
                <div className="space-y-6">
                  <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-theme-fg/60 border border-theme-fg/20 px-3 py-1 rounded-full uppercase leading-none">
                      Convenient Home Call
                    </span>
                    <h3 className="font-sans font-bold text-lg text-theme-fg mt-2">
                      Home Service Family Portrait
                    </h3>
                    
                    {/* Dynamic Prices */}
                    {(() => {
                      const activeId = `family_home_pkg${familyHomeOutfits}`;
                      const activePkg = PRICING_PACKAGES.find(p => p.id === activeId)!;
                      return (
                        <>
                          <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                            {formatCurrency(activePkg.price)}
                          </p>
                          <p className="text-[10px] text-theme-accent font-bold uppercase tracking-wider mt-1">
                            Billed for Outfit Swap {familyHomeOutfits}
                          </p>
                        </>
                      );
                    })()}

                    {/* Outfit Count Toggle */}
                    <div className="flex justify-center gap-1.5 mt-5">
                      <button
                        onClick={() => setFamilyHomeOutfits(1)}
                        className={`px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                          familyHomeOutfits === 1
                            ? 'bg-theme-fg text-theme-bg border-theme-fg'
                            : 'bg-transparent text-theme-fg/60 border-theme-fg/20 hover:border-theme-fg hover:text-theme-accent'
                        }`}
                      >
                        1 Outfit
                      </button>
                      <button
                        onClick={() => setFamilyHomeOutfits(2)}
                        className={`px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                          familyHomeOutfits === 2
                            ? 'bg-theme-fg text-theme-bg border-theme-fg'
                            : 'bg-transparent text-theme-fg/60 border-theme-fg/20 hover:border-theme-fg hover:text-theme-accent'
                        }`}
                      >
                        2 Outfits
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                    We bring the full mobile studio setups, environmental lighting grids, and backdrops directly into your home space.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                      Included Parameters
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{familyHomeOutfits} outfit configuration swaps included</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Professional mobile strobes direct to your home</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Color enhanced high-res family legacy editing</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-theme-fg/10 mt-6">
                  <button
                    onClick={() => handleSelectPackageDirectly(`family_home_pkg${familyHomeOutfits}`)}
                    className="w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white border-none"
                  >
                    Book Home service
                  </button>
                </div>
              </div>

              {/* STUDIO SESSIONS */}
              <div className="border p-8 flex flex-col justify-between relative shadow-sm rounded-[20px] transition-all duration-300 border-theme-fg/15 bg-theme-bg/50">
                <div className="space-y-6">
                  <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-[#F2F1ED] bg-theme-fg px-3 py-1 rounded-full uppercase leading-none">
                      Studio Backdrop Elite
                    </span>
                    <h3 className="font-sans font-bold text-lg text-theme-fg mt-2">
                      Studio Family Portrait
                    </h3>
                    
                    {/* Dynamic Prices */}
                    {(() => {
                      const activeId = `family_studio_pkg${familyStudioOutfits}`;
                      const activePkg = PRICING_PACKAGES.find(p => p.id === activeId)!;
                      return (
                        <>
                          <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                            {formatCurrency(activePkg.price)}
                          </p>
                          <p className="text-[10px] text-theme-accent font-bold uppercase tracking-wider mt-1">
                            Billed for Outfit Swap {familyStudioOutfits}
                          </p>
                        </>
                      );
                    })()}

                    {/* Outfit Count Toggle */}
                    <div className="flex justify-center gap-1.5 mt-5">
                      <button
                        onClick={() => setFamilyStudioOutfits(1)}
                        className={`px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                          familyStudioOutfits === 1
                            ? 'bg-theme-fg text-theme-bg border-theme-fg'
                            : 'bg-transparent text-theme-fg/60 border-theme-fg/20 hover:border-theme-fg hover:text-theme-accent'
                        }`}
                      >
                        1 Outfit
                      </button>
                      <button
                        onClick={() => setFamilyStudioOutfits(2)}
                        className={`px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
                          familyStudioOutfits === 2
                            ? 'bg-theme-fg text-theme-bg border-theme-fg'
                            : 'bg-transparent text-theme-fg/60 border-theme-fg/20 hover:border-theme-fg hover:text-theme-accent'
                        }`}
                      >
                        2 Outfits
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                    Cherish high-contrast luxury positioning on earth-toned minimal canvases in the safety of our formal studio.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                      Included Parameters
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>{familyStudioOutfits} outfit configuration swaps included</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Earthy studio backdrop transitions</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Elite strobe lighting with multi-generational poses</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-theme-fg/10 mt-6">
                  <button
                    onClick={() => handleSelectPackageDirectly(`family_studio_pkg${familyStudioOutfits}`)}
                    className="w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white border-none"
                  >
                    Book Studio Portrait
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* D. CORPORATE HEADSHOTS GROUP */}
          {activeTab === 'corporate' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
              
              {/* PACKAGE 1 */}
              <div className="border p-8 flex flex-col justify-between relative shadow-sm rounded-[20px] transition-all duration-300 border-theme-fg/15 bg-theme-bg/50">
                <div className="space-y-6">
                  <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-[#F2F1ED] bg-theme-fg px-3 py-1 rounded-full uppercase leading-none">
                      Individual Starter
                    </span>
                    <h3 className="font-sans font-bold text-lg text-theme-fg mt-2">
                      Corporate Headshot (Package 1)
                    </h3>
                    
                    <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                      ₦80,000
                    </p>
                    <p className="text-[10px] text-theme-accent font-bold uppercase tracking-wider mt-1">
                      1 Outfit Configuration Swap
                    </p>
                  </div>

                  <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                    Perfect corporate layout designed for LinkedIn, formal executive resumés, and modern corporate dashboards.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                      Included Parameters
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>1 outfit configuration swap layout</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Clean high-contrast strobe focus setup</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>LinkedIn-optimised high dynamic compression files</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-theme-fg/10 mt-6">
                  <button
                    onClick={() => handleSelectPackageDirectly('corporate_pkg1')}
                    className="w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white border-none"
                  >
                    Book Package 1
                  </button>
                </div>
              </div>

              {/* PACKAGE 2 */}
              <div className="border p-8 flex flex-col justify-between relative shadow-sm rounded-[20px] transition-all duration-300 border-theme-fg/15 bg-theme-bg/50">
                <div className="space-y-6">
                  <div className="text-center space-y-2 border-b border-theme-fg/10 pb-5">
                    <span className="font-sans text-[10px] font-bold tracking-widest text-theme-accent bg-theme-accent/10 border border-theme-accent/20 px-3 py-1 rounded-full uppercase leading-none">
                      Extended Executive
                    </span>
                    <h3 className="font-sans font-bold text-lg text-theme-fg mt-2">
                      Corporate Headshot (Package 2)
                    </h3>
                    
                    <p className="font-sans font-black text-3xl md:text-4xl text-theme-fg mt-2">
                      ₦120,000
                    </p>
                    <p className="text-[10px] text-theme-accent font-bold uppercase tracking-wider mt-1">
                      2 Outfit Configuration Swaps
                    </p>
                  </div>

                  <p className="text-xs text-theme-fg/80 font-sans text-center min-h-[40px] leading-relaxed">
                    Designed for board members, general keynotes, founders biography layouts, and press dispatches.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-theme-fg/80 tracking-wide uppercase font-sans">
                      Included Parameters
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>2 outfits configuration swaps layouts</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>Formal and business environmental styles</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-theme-fg/85 font-sans leading-tight">
                      <Check size={14} className="text-theme-accent mt-0.5 flex-shrink-0" />
                      <span>On-site or studio setup guidance</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-theme-fg/10 mt-6">
                  <button
                    onClick={() => handleSelectPackageDirectly('corporate_pkg2')}
                    className="w-full py-3.5 text-center text-xs font-bold tracking-wide transition-all cursor-pointer rounded-full bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white border-none"
                  >
                    Book Package 2
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Interactive Custom Calculator Estimator */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto bg-theme-bg/60 border border-theme-fg/10 p-8 sm:p-12 relative rounded-[24px] shadow-sm font-sans" id="services-estimator">
        <div className="absolute top-4 right-4 bg-theme-fg/5 text-theme-fg px-3.5 py-1.5 font-sans text-[9px] font-bold tracking-wider uppercase border border-theme-fg/10 rounded-full flex items-center gap-1.5 select-none leading-none">
          <Sparkles size={11} />
          <span>Flexible Estimator</span>
        </div>

        <div className="space-y-3 mb-8">
          <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-theme-fg block">
            CUSTOM QUOTE ENGINE
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-theme-fg leading-tight font-sans">
            Tailor Your Perfect Session
          </h2>
          <p className="font-sans text-theme-fg/80 text-xs leading-relaxed">
            Need additional coverage hours, specific high-retouched photos, expedited deliveries, or uncompressed RAW backups? Balance your dials and dispatch this customized summary directly to Delight Notions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-theme-fg/10">
          
          {/* Sizing Base selections */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold tracking-wide uppercase text-theme-fg/70 font-sans">
                1. Select Base Package
              </label>
              <div className="grid grid-cols-3 gap-2">
                {PRICING_PACKAGES.filter(p => p.id === 'wedding_pkg1_1day' || p.id === 'photoshoot_studio_1outfit' || p.id === 'corporate_pkg1').map((p) => {
                  const isSel = selectedBaseId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedBaseId(p.id)}
                      className={`py-3 px-2 border text-[10px] font-bold tracking-wider uppercase text-center cursor-pointer transition-all rounded-xl ${
                        isSel
                          ? 'bg-theme-accent border-theme-accent text-[#F2F1ED] font-bold'
                          : 'bg-theme-fg/5 border border-theme-fg/10 text-theme-fg/70 hover:border-theme-accent hover:text-theme-accent hover:bg-theme-accent-light'
                      }`}
                      id={`calc-base-${p.id}`}
                    >
                      {p.id === 'wedding_pkg1_1day' ? 'Wedding' : p.id === 'photoshoot_studio_1outfit' ? 'Studio' : 'Corporate'}
                      <span className="block text-[8px] font-normal tracking-tight mt-1 opacity-75">
                        {formatCurrency(p.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scale Hours and Scale Photos */}
            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-theme-fg/70 font-sans">
                  <span>2. Additional Hours</span>
                  <span className="text-theme-accent">+{formatCurrency(extraHours * additionalHourRate)}</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={extraHours}
                    onChange={(e) => setExtraHours(parseInt(e.target.value))}
                    className="w-full h-[5.5px] accent-theme-accent bg-theme-fg/10 rounded-full cursor-pointer animate-none"
                  />
                  <span className="font-sans font-bold text-xs bg-theme-fg/5 text-theme-fg border border-theme-fg/10 px-3 py-1 block w-14 text-center rounded-lg">
                    {extraHours} h
                  </span>
                </div>
                <p className="text-[10px] text-theme-fg/50 font-sans">₦15,000 billed per additional hour over standard package allocations.</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wide text-theme-fg/70 font-sans">
                   <span>3. Extra Retouched Photos</span>
                  <span className="text-theme-accent">+{formatCurrency(extraPhotos * additionalPhotoRate)}</span>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="5"
                    value={extraPhotos}
                    onChange={(e) => setExtraPhotos(parseInt(e.target.value))}
                    className="w-full h-[5.5px] accent-theme-accent bg-theme-fg/10 rounded-full cursor-pointer animate-none"
                  />
                  <span className="font-sans font-bold text-xs bg-theme-fg/5 text-theme-fg border border-theme-fg/10 px-3 py-1 block w-14 text-center rounded-lg">
                    +{extraPhotos}
                  </span>
                </div>
                <p className="text-[10px] text-theme-fg/50 font-sans">₦2,000 billed per additional fully edited digital picture.</p>
              </div>
            </div>
          </div>

          {/* Sizing addons toggles */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <label className="block text-[10px] font-bold tracking-wide uppercase text-theme-fg/70 font-sans">
                4. Select Exclusive Addons
              </label>
              
              <div
                onClick={() => setWantRawFiles(!wantRawFiles)}
                className={`p-4 border cursor-pointer select-none transition-all flex items-center justify-between rounded-xl ${
                  wantRawFiles ? 'bg-theme-accent-light border-theme-accent text-theme-accent font-medium' : 'bg-theme-fg/5 border border-theme-fg/10 text-theme-fg/75 hover:border-theme-accent hover:text-theme-accent'
                }`}
              >
                <div>
                  <h4 className="font-sans font-semibold text-xs text-theme-fg">RAW Backups Delivery</h4>
                  <p className="text-[10px] text-theme-fg/50 font-sans">Uncompressed digital negatives (.NEF/.CR3 formats)</p>
                </div>
                <span className="font-sans font-bold text-xs text-theme-fg block pl-3">
                  +₦35,000
                </span>
              </div>

              <div
                onClick={() => setWantExpedited(!wantExpedited)}
                className={`p-4 border cursor-pointer select-none transition-all flex items-center justify-between rounded-xl ${
                  wantExpedited ? 'bg-theme-accent-light border-theme-accent text-theme-accent font-medium' : 'bg-theme-fg/5 border border-theme-fg/10 text-theme-fg/75 hover:border-theme-accent hover:text-theme-accent'
                }`}
              >
                <div>
                  <h4 className="font-sans font-semibold text-xs text-theme-fg">48-Hour Expedited Delivery</h4>
                  <p className="text-[10px] text-theme-fg/50 font-sans">Priority edit queue, ideal for launch campaigns</p>
                </div>
                <span className="font-sans font-bold text-xs text-[#d52518] mt-0.5 max-w-sm block">
                  +₦25,000
                </span>
              </div>
            </div>

            {/* Final computation tally */}
            <div className="bg-theme-fg/5 p-5 border border-theme-fg/10 space-y-4 rounded-2xl">
              <div className="flex items-center justify-between border-b border-theme-fg/10 pb-3">
                <span className="text-[9px] font-bold tracking-wide uppercase text-theme-fg/55 font-sans">Total Estimated Investment</span>
                <span className="font-sans font-bold text-xl text-theme-fg font-sans">
                  {formatCurrency(totalCalculatedPrice)}
                </span>
              </div>
              <button
                onClick={handleApplyEstimate}
                className="w-full flex items-center justify-center gap-2 bg-theme-fg text-theme-bg hover:bg-theme-accent hover:text-white py-3.5 text-xs font-bold tracking-wide cursor-pointer rounded-full shadow-sm border-none font-sans"
                id="calc-confirm-book"
              >
                <Sparkles size={13} className="text-theme-bg" />
                <span>Book with this Quote</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
