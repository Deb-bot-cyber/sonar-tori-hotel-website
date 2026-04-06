import { useState, useEffect } from 'react';

// Import specifically named local images for amenities
import wifiImg from '../assets/wifi.jpg';
import serviceImg from '../assets/room_service.jpg';
import parkingImg from '../assets/parking.jpg';
import housekeepingImg from '../assets/house_keeping.jpg';
import acImg from '../assets/AC.jpg';

const amenitiesList = [
  { 
    title: 'High-Speed Connectivity', 
    desc: 'Experience seamless gigabit fiber internet across our entire premises, tailored for business professionals and digital nomads.',
    image: wifiImg,
    tags: ['Gigabit WiFi', 'Cloud Ready', '24/7 Access']
  },
  { 
    title: '24/7 Room Service', 
    desc: 'Savor gourmet Indian and global delicacies from the comfort of your sanctuary, served meticulously by our master chefs.',
    image: serviceImg,
    tags: ['Exquisite Cuisine', 'Prompt Service', 'Freshly Prepared']
  },
  { 
    title: 'Free Secure Parking', 
    desc: 'Your vehicles are safe in our expansive, well-lit parking zone, monitored continuously by 24/7 security and CCTV.',
    image: parkingImg,
    tags: ['CCTV Secured', 'Complimentary', 'Large Compound']
  },
  { 
    title: 'Professional Housekeeping', 
    desc: 'Unwavering commitment to hygiene and cleanliness with our dedicated team ensuring your room is immaculate daily.',
    image: housekeepingImg,
    tags: ['Deep Sanitized', 'Modern Equipment', 'Timely Service']
  },
  { 
    title: 'Full Air Conditioning', 
    desc: 'Each corner of our property features premium climate control, ensuring your absolute comfort regardless of the weather.',
    image: acImg,
    tags: ['Individual Control', 'Silent Operation', 'Constant Temp']
  }
];

const Amenities = () => {
  const [activeIndex, setActiveIndex] = useState(amenitiesList.length); // Start at the middle set for loop
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Triple the list for seamless looping [copy, copy, copy]
  const extendedList = [...amenitiesList, ...amenitiesList, ...amenitiesList];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  // Junction adjustment for seamless loop
  useEffect(() => {
    if (activeIndex >= amenitiesList.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(amenitiesList.length);
      }, 1000); // Wait for transition animation to end
    }
    if (activeIndex <= amenitiesList.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(amenitiesList.length * 2 - 1);
      }, 1000);
    }
  }, [activeIndex]);

  return (
    <section id="amenities" className="py-24 bg-white relative overflow-hidden">
      {/* Heading Block */}
      <div className="section-title-container !mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-dark-bg font-heading leading-tight tracking-tight">
          Our Amenities
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Sliding Track */}
        <div
          className="flex gap-8"
          style={{
            transition: isTransitioning ? 'transform 1000ms ease-in-out' : 'none',
            transform: `translateX(calc(-${activeIndex * 60}% - ${activeIndex * 32}px + 20%))`
          }}
        >
          {extendedList.map((item, index) => {
            const isCenter = index === activeIndex;
            return (
              <div
                key={index}
                className={`min-w-[60%] relative group transition-all duration-1000 ${isCenter ? 'scale-100 opacity-100 z-20' : 'scale-90 opacity-20 z-10 grayscale'}`}
              >
                <div className="aspect-[16/9] overflow-hidden shadow-2xl relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                  />

                  {/* Overlay Text Content */}
                  <div className={`absolute inset-x-0 bottom-0 p-8 md:p-12 text-center text-white z-20 transition-all duration-700 ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="flex justify-center items-center gap-3 mb-4 scale-75 md:scale-100 opacity-60">
                      <span className="w-8 h-[1px] bg-white"></span>
                      <span className="text-[12px] font-bold tracking-[0.3em]">Signature Feature</span>
                      <span className="w-8 h-[1px] bg-white"></span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-heading mb-6 tracking-wide drop-shadow-xl">{item.title}</h3>

                    {/* Specs Row */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-[12px] font-bold tracking-[0.1em] uppercase opacity-80 border-t border-white/20 pt-6">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="flex items-center gap-2">
                          <i className="ri-sparkling-fill text-primary text-lg translate-y-[1px]"></i> {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dark Vignette Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity duration-700 ${isCenter ? 'opacity-100' : 'opacity-40'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Bars */}
      <div className="flex justify-center items-center gap-4 mt-12 mb-16">
        {amenitiesList.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setActiveIndex(i + amenitiesList.length);
            }}
            className={`h-[3px] transition-all duration-500 rounded-none ${activeIndex % amenitiesList.length === i ? 'w-12 bg-primary' : 'w-6 bg-gray-200 hover:bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Footer Text & Action */}
      <div className="max-w-3xl mx-auto text-center space-y-10 px-6">
        <p className="text-dark-bg/80 text-lg md:text-xl font-light leading-relaxed">
          Experience unparalleled comfort with our range of essential facilities.
          From high-speed connectivity to 24/7 room service, we ensure your stay is as convenient as it is comfortable.
        </p>
      </div>
    </section>
  );
};

export default Amenities;
