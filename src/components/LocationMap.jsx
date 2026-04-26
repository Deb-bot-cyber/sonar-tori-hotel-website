

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
              <i className="ri-map-pin-2-line text-primary text-2xl mt-1"></i>
              <p className="text-white text-base leading-relaxed tracking-wide font-light">
                <strong className="text-primary font-bold uppercase tracking-tighter block mb-1">Address:</strong>
                Dinhata Main Road, Express Bazar-3rd Floor,<br />Dinhata, Cooch Behar - 736135
              </p>
            </div>
            <div className="flex items-start gap-4">
              <i className="ri-train-line text-primary text-2xl mt-1"></i>
              <p className="text-white text-base leading-relaxed tracking-wide font-light">
                <strong className="text-primary font-bold uppercase block mb-1">Transit:</strong>
                Dinhata Railway Station (Local), Cooch Behar Airport (appx 25 km)
              </p>
            </div>
            <div className="flex items-start gap-4">
              <i className="ri-building-2-line text-primary text-2xl mt-1"></i>
              <p className="text-white text-base leading-relaxed tracking-wide font-light">
                <strong className="text-primary font-bold uppercase block mb-1">Nearby:</strong>
                Express Bazar, Dinhata Main Market, Cooch Behar City (45 mins)
              </p>
            </div>
          </div>
          <div className="pt-8 text-left">
            <a
              href="https://maps.app.goo.gl/1teRdkt8xUZqqzSL6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div className="flex-[1.5] h-[500px] min-h-[400px] lg:h-auto rounded-none overflow-hidden glass-panel p-1 group border-white/5 bg-white/5">
          <div className="w-full h-full rounded-none overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.115682855219!2d89.45965097485038!3d26.1304703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2e1805482630b%3A0xcdf4a93da393afd0!2sHotel%20Sonar%20Tori%20Dinhata!5e0!3m2!1sen!2sin!4v1714150764516!5m2!1sen!2sin"
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
