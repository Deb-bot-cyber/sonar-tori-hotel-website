import React, { useState } from 'react';

const amenitiesList = [
  { 
    title: 'Infinity Pool', 
    desc: 'Breathtaking rooftop views with temperature control.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Depth: 5ft', 'Size: 20x40m', 'Temp: 28°C']
  },
  { 
    title: 'Luxury Spa', 
    desc: 'Signature treatments by world-class therapists.',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Therapeutic', 'Steam Bath', 'Organic Products']
  },
  { 
    title: 'Fitness Center', 
    desc: 'State-of-the-art equipment for your performance.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['24/7 Access', 'Pro Trainers', 'Advanced Gear']
  },
  { 
    title: 'Executive Concierge', 
    desc: 'Dedicated assistance for all your requests.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Tour Guides', 'Travel Desk', 'Valet Pickups']
  },
  { 
    title: 'High-Speed Connectivity', 
    desc: 'Seamless internet throughout the entire property.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tags: ['Gigabit WiFi', 'Cloud Ready', 'Safe Network']
  }
];

const Amenities = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start central

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % amenitiesList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + amenitiesList.length) % amenitiesList.length);
  };

  return (
    <section id="amenities" className="section-padding bg-white relative overflow-hidden">
      {/* Heading Block */}
      <div className="section-title-container !mb-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-primary"></div>
          <span className="text-primary font-bold text-[10px] tracking-[0.4em]">Discover Our Best Offers</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-dark-bg font-heading leading-tight tracking-tight">
          Our Amenities
        </h2>
      </div>
      
      {/* Carousel Container */}
      <div className="relative w-full max-w-[1600px] mx-auto flex items-center justify-center gap-4 md:gap-12">
        {/* Previous Peek */}
        <div className="hidden lg:block w-[15%] h-[400px] opacity-30 grayscale cursor-pointer overflow-hidden transition-all duration-700" onClick={handlePrev}>
          <img 
            src={amenitiesList[(activeIndex - 1 + amenitiesList.length) % amenitiesList.length].image} 
            className="w-full h-full object-cover" 
            alt="prev"
          />
        </div>

        {/* Active Main Card */}
        <div className="w-[90%] lg:w-[60%] relative group transition-all duration-700">
          <div className="aspect-[16/9] overflow-hidden shadow-2xl relative">
            <img 
              src={amenitiesList[activeIndex].image} 
              alt={amenitiesList[activeIndex].title} 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
            />
            
            {/* Overlay Text Content (Matching UI Logo Overlay Style) */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-center text-white z-20">
                <div className="flex justify-center items-center gap-3 mb-4 scale-75 md:scale-100 opacity-60">
                  <span className="w-8 h-[1px] bg-white"></span>
                  <span className="text-[12px] font-bold tracking-[0.3em]">Signature Feature</span>
                  <span className="w-8 h-[1px] bg-white"></span>
               </div>
               <h3 className="text-3xl md:text-5xl font-heading mb-6 tracking-wide drop-shadow-xl">{amenitiesList[activeIndex].title}</h3>
               
               {/* Specs Row */}
               <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-[12px] font-bold tracking-[0.1em] uppercase opacity-80 border-t border-white/20 pt-6">
                 {amenitiesList[activeIndex].tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-2">
                       <span className="text-primary text-xl translate-y-[2px]">✧</span> {tag}
                    </span>
                 ))}
               </div>
            </div>

            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
          </div>

          {/* Navigation Controls on Card (UI shows small circles on sides or bars below) */}
          {/* We use bars below as per the orange indicator in UI */}
        </div>

        {/* Next Peek */}
        <div className="hidden lg:block w-[15%] h-[400px] opacity-30 grayscale cursor-pointer overflow-hidden transition-all duration-700" onClick={handleNext}>
          <img 
            src={amenitiesList[(activeIndex + 1) % amenitiesList.length].image} 
            className="w-full h-full object-cover" 
            alt="next"
          />
        </div>
      </div>

      {/* Pagination Bars (UI Detail) */}
      <div className="flex justify-center items-center gap-4 mt-12 mb-16">
        {amenitiesList.map((_, i) => (
          <button 
             key={i}
             onClick={() => setActiveIndex(i)}
             className={`h-[3px] transition-all duration-500 rounded-none ${i === activeIndex ? 'w-12 bg-primary' : 'w-6 bg-gray-200 hover:bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Footer Text & Action (Matching UI Image) */}
      <div className="max-w-3xl mx-auto text-center space-y-10 px-6">
        <p className="text-dark-bg/80 text-lg md:text-xl font-light leading-relaxed">
          Indulge in our world-class facilities designed for your ultimate leisure and convenience. 
          From rooftop infinity pools to professional fitness suites, we provide everything needed for a seamless stay.
        </p>

        <button className="bg-primary hover:bg-primary-dark text-white px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 cursor-pointer">
          Explore Our Facilities
        </button>
      </div>
    </section>
  );
};

export default Amenities;
