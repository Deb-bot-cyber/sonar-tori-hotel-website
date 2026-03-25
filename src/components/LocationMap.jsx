import React from 'react';

const LocationMap = () => {
  return (
    <section id="location" className="section-padding bg-dark-bg relative">
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-12">
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-primary text-sm uppercase font-bold tracking-[0.3em] font-body">Location & Map</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white font-bold tracking-tight">Heart of the City</h3>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Sonar Tori is ideally situated in the prime district, offering seamless access to major business hubs, shopping centers, and cultural landmarks.
          </p>
          <div className="space-y-6 pt-6">
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">📍</span>
              <p className="text-white text-base leading-relaxed tracking-wide font-light">
                <strong className="text-primary font-bold uppercase tracking-tighter block mb-1">Address:</strong>
                Dinhata Main Road, Express Bazar-3rd Floor,<br />Dinhata, Cooch Behar - 736135
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">🚉</span>
              <p className="text-white text-base leading-relaxed tracking-wide font-light">
                <strong className="text-primary font-bold uppercase block mb-1">Transit:</strong>
                Dinhata Railway Station (Local), Cooch Behar Airport (appx 25 km)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-primary text-2xl">🏢</span>
              <p className="text-white text-base leading-relaxed tracking-wide font-light">
                <strong className="text-primary font-bold uppercase block mb-1">Nearby:</strong>
                Express Bazar, Dinhata Main Market, Cooch Behar City (45 mins)
              </p>
            </div>
          </div>
          <div className="pt-8 text-left">
            <a href="#directions" className="btn-primary">
              Get Directions
            </a>
          </div>
        </div>
        <div className="flex-[1.5] h-[500px] min-h-[400px] lg:h-auto rounded-none overflow-hidden glass-panel p-1 group border-white/5 bg-white/5">
          <div className="w-full h-full rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://maps.google.com/maps?q=Hotel%20Sonar%20Tori,%20Dinhata,%20Cooch%20Behar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
