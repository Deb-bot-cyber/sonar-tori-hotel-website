import React, { useState, useEffect } from 'react';

// Import Hero Images
import img1 from '../assets/HeroImages/SDP_4393.JPG';
import img2 from '../assets/HeroImages/SDP_4395.JPG';
import img3 from '../assets/HeroImages/SDP_4404.JPG';
import img4 from '../assets/HeroImages/SDP_4425.JPG';
import img5 from '../assets/HeroImages/SDP_4439.JPG';

const heroImages = [img1, img2, img3, img4, img5];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="h-screen relative flex items-end justify-center overflow-hidden px-[60px] pb-32">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img}
              alt={`Luxury Hotel View ${index + 1}`}
              className={`w-full h-full object-cover transition-transform duration-[10s] ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
            />
          </div>
        ))}
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl px-5 flex flex-col items-center">
        {/* Star Rating & Badge */}
        <div className="flex flex-col items-center gap-4 mb-8 animate-fade-in-down">
          <div className="flex text-primary text-xl">
            <span>★★★★★</span>
            <span className="text-white/60 text-sm ml-2 font-body font-light self-center">(5.0)</span>
          </div>
          <div className="flex items-center gap-2 text-white/50 uppercase tracking-[0.3em] text-xs font-bold">
            <span className="text-primary">✦</span>
            MODERN LUXURY AND TIMELESS LIVING
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl mb-10 text-white drop-shadow-2xl animate-fade-in-down font-heading leading-tight font-normal">
          Welcome to Our <br />
          Luxurious Hotel & Resort
        </h1>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a href="#rooms" className="btn-primary">
            Book Apartments
          </a>
          <a href="#about" className="btn-outline">
            Explore Now
          </a>
        </div>
      </div>


      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-bg to-transparent z-10" />
    </section>
  );
};

export default Hero;
