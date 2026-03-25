import React from 'react';

const rooms = [
  {
    id: 1,
    title: 'Suit (4 Bed)',
    price: '₹4200',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: { sqft: '180', bed: '4 Single', sleeps: '4' }
  },
  {
    id: 2,
    title: 'Super Deluxe Royal Club',
    price: '₹1890',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: { sqft: '120', bed: '1 King', sleeps: '2' }
  },
  {
    id: 3,
    title: 'Super Deluxe (A/C)',
    price: '₹1680',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: { sqft: '90', bed: '1 King', sleeps: '2' }
  },
  {
    id: 4,
    title: 'Deluxe (A/C)',
    price: '₹1470',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: { sqft: '75', bed: '1 Queen', sleeps: '2' }
  },
  {
    id: 5,
    title: 'Standard (Non AC)',
    price: '₹1260',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    specs: { sqft: '60', bed: '1 Double', sleeps: '2' }
  }
];

const RoomsSuites = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const maxIndex = rooms.length - 3; // Show 3 at once

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="rooms" className="section-padding bg-white relative overflow-hidden">
      <div className="section-title-container !mb-24 text-center">
        <span className="text-gray-500 font-bold text-[10px] tracking-[0.4em] block mb-6">(ROOMS & SUITES)</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-dark-bg font-heading leading-tight tracking-tight">
          Our Exquisite Rooms Collections
        </h2>
      </div>
      
      <div className="relative w-full max-w-[1400px] mx-auto px-4">
        {/* Navigation Arrows (Functional) */}
        <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-30">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 border border-gray-200 rounded-none flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all bg-white shadow-xl cursor-pointer"
          >
            ←
          </button>
        </div>
        <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-30">
          <button 
            onClick={nextSlide}
            className="w-12 h-12 border border-gray-200 rounded-none flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-all bg-white shadow-xl cursor-pointer"
          >
            →
          </button>
        </div>

        {/* Slider Window */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-8"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (32 / 3)}px))` 
            }}
          >
            {rooms.map(room => (
              <div 
                key={room.id} 
                className="min-w-full md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-21.333px)] group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Price Tag (Ribbon Style from UI) */}
                  <div 
                    className="absolute bottom-6 right-0 bg-white text-dark-bg px-6 py-2.5 flex items-center gap-1 shadow-xl z-20"
                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                  >
                    <span className="font-bold text-lg tracking-tight">{room.price}</span>
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest translate-y-0.5">/Night</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-left space-y-4 px-2">
                  <h3 className="text-2xl md:text-3xl font-heading text-dark-bg group-hover:text-primary transition-colors leading-tight">
                    {room.title}
                  </h3>
                  
                  <div className="flex items-center gap-6 text-gray-500 text-[11px] font-bold tracking-[0.1em] uppercase overflow-x-auto whitespace-nowrap scrollbar-hide pb-2 border-b border-gray-100">
                    <span className="flex items-center gap-2">
                      <span className="text-lg opacity-40">📐</span> {room.specs.sqft} Sq Ft
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-lg opacity-40">🛏</span> {room.specs.bed} Bed
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-lg opacity-40">👤</span> {room.specs.sleeps} Sleeps
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policies Footer */}
      <div className="text-center mt-32 border-t border-gray-100 pt-12 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto">
        Rates include 5% GST &nbsp;|&nbsp; Extra Person: ₹400/- &nbsp;|&nbsp; Check-in: 10AM &nbsp;|&nbsp; Check-out: 9AM
      </div>
      
      <div className="text-center mt-12">
        <a href="#contact" className="btn-primary">
          Check All Collections
        </a>
      </div>
    </section>
  );
};

export default RoomsSuites;
