import React, { useState, useEffect } from 'react';

// Import Suite Room Images
import suite1 from '../assets/Sweet Rooms/SDP_4393.JPG';
import suite2 from '../assets/Sweet Rooms/SDP_4394.JPG';
import suite3 from '../assets/Sweet Rooms/SDP_4407.JPG';
import suite4 from '../assets/Sweet Rooms/SDP_4413.JPG';
import suite5 from '../assets/Sweet Rooms/SDP_4422.JPG';
import suite6 from '../assets/Sweet Rooms/SDP_4556.JPG';
import suite7 from '../assets/Sweet Rooms/SDP_4562.JPG';

// Import Deluxe Room Images
import deluxe1 from '../assets/Delux Room/SDP_4483.JPG';
import deluxe2 from '../assets/Delux Room/SDP_4484.JPG';
import deluxe3 from '../assets/Delux Room/SDP_4486.JPG';
import deluxe4 from '../assets/Delux Room/SDP_4491.JPG';
import deluxe5 from '../assets/Delux Room/SDP_4500.JPG';
import deluxe6 from '../assets/Delux Room/SDP_4515.JPG';
import deluxe7 from '../assets/Delux Room/SDP_4540.JPG';

// Import Delux Royal Images
import royal1 from '../assets/Delux Royal/SDP_4404.JPG';
import royal2 from '../assets/Delux Royal/SDP_4406.JPG';
import royal3 from '../assets/Delux Royal/SDP_4414.JPG';
import royal4 from '../assets/Delux Royal/SDP_4428.JPG';
import royal5 from '../assets/Delux Royal/SDP_4490.JPG';
import royal6 from '../assets/Delux Royal/SDP_4496.JPG';
import royal7 from '../assets/Delux Royal/SDP_4563.JPG';

const rooms = [
  {
    id: 1,
    title: 'Deluxe Room (A/C)',
    price: '₹1470',
    image: deluxe1,
    specs: { sqft: '75', bed: '1 Queen', sleeps: '2' },
    gallery: [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5, deluxe6, deluxe7]
  },
  {
    id: 2,
    title: 'Deluxe Royal Club (A/C)',
    price: '₹1890',
    image: royal1,
    specs: { sqft: '120', bed: '1 King', sleeps: '2' },
    gallery: [royal1, royal2, royal3, royal4, royal5, royal6, royal7]
  },
  {
    id: 3,
    title: 'Suite Room (A/C)',
    price: '₹4200',
    image: suite1,
    specs: { sqft: '180', bed: '4 Single', sleeps: '4' },
    gallery: [suite1, suite2, suite3, suite4, suite5, suite6, suite7]
  }
];

const RoomCard = ({ room, openGallery }) => {
  return (
    <div
      className="group cursor-pointer bg-white"
      onClick={() => openGallery(room)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-2xl">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Image Count Hint Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-bold text-[10px] uppercase tracking-[0.3em] border border-white/30 px-4 py-2 bg-black/40 backdrop-blur-md">
            View {room.gallery.length} Photos
          </span>
        </div>

        {/* Price Tag */}
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
            <i className="ri-layout-grid-line text-lg opacity-40"></i> {room.specs.sqft} Sq Ft
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-hotel-bed-line text-lg opacity-40"></i> {room.specs.bed} Bed
          </span>
          <span className="flex items-center gap-2">
            <i className="ri-user-line text-lg opacity-40"></i> {room.specs.sleeps} Sleeps
          </span>
        </div>
      </div>
    </div>
  );
};

const RoomsSuites = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openGallery = (room) => {
    setSelectedRoom(room);
    setCurrentGalleryIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedRoom(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedRoom) {
      setCurrentGalleryIndex((prev) => (prev + 1) % selectedRoom.gallery.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedRoom) {
      setCurrentGalleryIndex((prev) => (prev - 1 + selectedRoom.gallery.length) % selectedRoom.gallery.length);
    }
  };

  return (
    <section id="rooms" className="section-padding bg-white relative overflow-hidden">
      <div className="section-title-container !mb-24 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-dark-bg font-heading leading-tight tracking-tight">
          Our Exquisite Rooms Collections
        </h2>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4">
        {/* Room Grid (Static 3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms.map(room => (
            <RoomCard key={room.id} room={room} openGallery={openGallery} />
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={closeGallery}
        >
          {/* Modal Header */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center text-white z-10">
            <div>
              <h4 className="text-2xl font-heading">{selectedRoom.title}</h4>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Image {currentGalleryIndex + 1} of {selectedRoom.gallery.length}</p>
            </div>
            <button
              className="text-4xl hover:text-primary transition-colors cursor-pointer p-4 flex items-center justify-center"
              onClick={closeGallery}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[70vh] flex items-center justify-center group/gall">
            <button
              className="absolute left-4 md:left-12 text-5xl text-white/50 hover:text-white transition-all cursor-pointer p-8 z-20"
              onClick={prevImage}
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <img
              src={selectedRoom.gallery[currentGalleryIndex]}
              alt={`${selectedRoom.title} detail`}
              className="max-w-full max-h-full object-contain shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 md:right-12 text-5xl text-white/50 hover:text-white transition-all cursor-pointer p-8 z-20"
              onClick={nextImage}
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>

          {/* Thumbnails Row */}
          <div className="w-full max-w-4xl mt-12 flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center">
            {selectedRoom.gallery.map((img, idx) => (
              <div
                key={idx}
                className={`min-w-[80px] h-20 md:h-24 cursor-pointer border-2 transition-all overflow-hidden ${idx === currentGalleryIndex ? 'border-primary opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-70'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentGalleryIndex(idx);
                }}
              >
                <img src={img} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Policies Footer */}
      <div className="text-center mt-32 border-t border-gray-100 pt-12 text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto">
        Rates include 5% GST &nbsp;|&nbsp; Extra Person: ₹400/- &nbsp;|&nbsp; Check-in: 10AM &nbsp;|&nbsp; Check-out: 9AM
      </div>

      <div className="text-center mt-12">
        <a href="https://wa.me/919832579769" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Check All Collections
        </a>
      </div>
    </section>
  );
};

export default RoomsSuites;
