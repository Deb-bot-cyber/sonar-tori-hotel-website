import { useState } from 'react';

// Import Suite Room Images (From RoomsSuites assets)
import suite1 from '../assets/Sweet Rooms/SDP_4393.JPG';
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

const galleryImages = [
  suite1, suite3, suite4, suite5, suite6, suite7,
  deluxe1, deluxe2, deluxe3, deluxe4, deluxe5, deluxe6, deluxe7,
  royal1, royal2, royal3, royal4, royal5, royal6, royal7
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const openGallery = (index) => {
    setCurrentGalleryIndex(index);
    setSelectedImage(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-dark-bg relative overflow-hidden">
      <div className="section-title-container text-center mb-24">
        <span className="text-primary font-bold text-[10px] tracking-[0.4em] block mb-6 uppercase">Visual Experience</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-heading leading-tight tracking-tight">
          Captured Moments
        </h2>
      </div>

      {/* 2 Rows Grid (6 images) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.slice(0, 6).map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden aspect-[16/10] group rounded-none shadow-2xl cursor-pointer"
            onClick={() => openGallery(index)}
          >
            <img
              src={src}
              alt={`Gallery visual ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-dark-bg/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-8">
              <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center mb-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                <i className="ri-fullscreen-line text-primary text-xl"></i>
              </div>
              <span className="text-white font-bold text-[10px] uppercase tracking-[0.3em] translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                View Fullscreen
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button
          onClick={() => openGallery(0)}
          className="btn-outline !px-12 !py-5"
        >
          View All Imagery ({galleryImages.length})
        </button>
      </div>

      {/* Gallery Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 animate-fade-in"
          onClick={closeGallery}
        >
          {/* Modal Header */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center text-white z-10">
            <div>
              <h4 className="text-2xl font-heading">Gallery Imagery</h4>
              <p className="text-xs uppercase tracking-widest text-primary font-bold">Photo {currentGalleryIndex + 1} of {galleryImages.length}</p>
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
              src={galleryImages[currentGalleryIndex]}
              alt="Gallery highlight"
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
            {galleryImages.map((img, idx) => (
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
    </section>
  );
};

export default Gallery;

