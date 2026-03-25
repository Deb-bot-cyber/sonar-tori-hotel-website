import React from 'react';

import img1 from '../assets/HeroImages/SDP_4393.JPG';
import img2 from '../assets/HeroImages/SDP_4395.JPG';
import img3 from '../assets/HeroImages/SDP_4404.JPG';
import img4 from '../assets/HeroImages/SDP_4425.JPG';
import img5 from '../assets/HeroImages/SDP_4439.JPG';

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img1
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-dark-surface">
      <div className="section-title-container">
        <h2 className="section-heading text-white">Photo Gallery</h2>
        <p className="section-subheading">Catch a glimpse of the luxurious surroundings and picturesque spots that define Sonar Tori.</p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="relative overflow-hidden aspect-[4/3] group rounded-none shadow-xl cursor-crosshair">
            <img 
              src={src} 
              alt={`Gallery visual ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
              <span className="text-dark-bg font-heading font-extrabold text-2xl uppercase tracking-widest translate-y-10 group-hover:translate-y-0 transition-transform duration-[0.6s]">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a href="#gallery-full" className="btn-outline px-10 py-4 uppercase font-bold tracking-widest transition-all">
          Load More Imagery
        </a>
      </div>
    </section>
  );
};

export default Gallery;
