

const Restaurant = () => {
  return (
    <section id="dining" className="section-padding bg-dark-bg">
      <div className="w-full flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h2 className="text-primary text-sm uppercase font-bold tracking-[0.3em]">Fine Dining</h2>
            <h3 className="text-4xl md:text-5xl font-heading text-white font-bold leading-tight uppercase">A Culinary Journey<br/><span className="italic text-primary-light">Like No Other</span></h3>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Experience the art of gastronomy at our signature restaurant, <span className="text-primary italic font-heading">'The Golden Palate'</span>. Our master chefs curate an exquisite menu blending local flavors with international culinary techniques.
          </p>
          <ul className="space-y-6 pt-4 text-white font-medium list-none">
            <li className="flex items-center gap-4 group">
              <span className="text-primary text-2xl group-hover:scale-125 transition-transform">★</span>
              <span className="text-lg tracking-wide border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Michelin-star chef</span>
            </li>
            <li className="flex items-center gap-4 group">
              <span className="text-primary text-2xl group-hover:scale-125 transition-transform">🍷</span>
              <span className="text-lg tracking-wide border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Premium wine selection</span>
            </li>
            <li className="flex items-center gap-4 group">
              <span className="text-primary text-2xl group-hover:scale-125 transition-transform">🌇</span>
              <span className="text-lg tracking-wide border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Panoramic city views</span>
            </li>
          </ul>
        <div className="pt-8 flex justify-start">
          <a href="#table" className="btn-primary">
            Reserve a Table
          </a>
        </div>
        </div>
        <div className="flex-1 relative h-[600px] w-full mt-16 md:mt-0">
        <div className="absolute top-0 right-0 w-[75%] h-[85%] rounded-none overflow-hidden border-2 border-primary shadow-2xl z-10 scale-100 hover:scale-105 transition-transform duration-700 cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant interior" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-none overflow-hidden border-4 border-dark-bg shadow-2xl z-20 hover:scale-110 transition-transform duration-700 cursor-pointer group">
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Gourmet dish" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
