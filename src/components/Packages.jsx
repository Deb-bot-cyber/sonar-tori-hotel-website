import React from 'react';

const packageList = [
  {
    title: 'Romantic Getaway',
    price: '$899',
    duration: '2 Nights / 3 Days',
    features: ['Champagne on arrival', 'Couples Spa treatment', 'Romantic dinner for two', 'Late check-out'],
    popular: true
  },
  {
    title: 'Business Executive',
    price: '$599',
    duration: '1 Night / 2 Days',
    features: ['Airport transfers', 'Access to Executive Lounge', 'Complimentary pressing', 'High-speed internet access'],
    popular: false
  },
  {
    title: 'Family Retreat',
    price: '$1299',
    duration: '3 Nights / 4 Days',
    features: ['Connecting rooms', 'Free kids meals', 'Guided city tour', 'Family pool cabana'],
    popular: false
  }
];

const Packages = () => {
  return (
    <section id="packages" className="section-padding bg-dark-surface overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-none filter blur-[100px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-50"></div>
      
      <div className="section-title-container">
        <h2 className="section-heading text-white">Exclusive Packages</h2>
        <p className="section-subheading">Tailored experiences curated for your specific desires, combining the best of our luxury offerings.</p>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
        {packageList.map((pkg, index) => (
          <div key={index} className={`glass-panel p-10 text-center flex flex-col group relative ${pkg.popular ? 'border-primary ring ring-primary ring-opacity-20 scale-105 transition-all duration-500 z-10 shadow-2xl shadow-primary/10' : 'border-primary/10 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-100 hover:border-primary/30 rotate-0'}`}>
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-dark-bg font-bold py-2 px-8 rounded-none text-xs uppercase tracking-[0.2em] shadow-lg">
                Most Popular
              </div>
            )}
            <h3 className="font-heading text-3xl font-bold text-white mb-6 tracking-wide group-hover:text-primary transition-colors">{pkg.title}</h3>
            <div className="mb-10 flex flex-col items-center">
              <span className="text-primary text-5xl font-extrabold mb-2 tracking-tighter drop-shadow-md">{pkg.price}</span>
              <span className="text-gray-400 text-sm font-light tracking-[0.1em] italic">/ {pkg.duration}</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow text-gray-400 font-light border-y border-white/5 py-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex flex-col items-center gap-1 group-hover:bg-primary/5 p-2 rounded-none transition-all">
                   <span className="text-sm tracking-wide group-hover:text-white transition-colors uppercase">{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-outline">
              Choose This Package
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
