import hotelLogo from '../assets/Hotel_SonarToriLogo.png';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-primary/20 pt-20">
      <div className="w-full px-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        <div className="space-y-6">
          <div className="flex items-center">
            <img src={hotelLogo} alt="Sonar Tori Logo" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-gray-400 text-base font-light leading-relaxed max-w-xs">
            Redefining luxury living. An oasis of calm and unparalleled comfort in the heart of the metropolis.
          </p>
          <div className="flex gap-4 pt-4">
            {[
              { id: 'FB', icon: 'ri-facebook-fill' },
              { id: 'IG', icon: 'ri-instagram-line' },
              { id: 'TW', icon: 'ri-twitter-x-line' },
              { id: 'IN', icon: 'ri-linkedin-box-line' }
            ].map(social => (
              <a
                key={social.id}
                href="#"
                className="w-10 h-10 border border-white/20 rounded-none flex items-center justify-center text-lg text-white hover:bg-primary hover:border-primary hover:text-dark-bg transition-all duration-300"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-heading text-xl font-bold text-primary tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-4 list-none">
            {['About Us', 'Rooms & Suites', 'Facilities', 'Gallery'].map(link => (
              <li key={link}>
                <a href={`#${link.split(' ')[0].toLowerCase()}`} className="text-gray-400 text-sm font-light hover:text-primary hover:pl-2 transition-all duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-heading text-xl font-bold text-primary tracking-widest uppercase">Contact Us</h4>
          <ul className="space-y-4 list-none text-gray-400 text-sm font-light leading-relaxed">
            <li>
              <strong className="text-white block mb-1">Address:</strong>
              Dinhata Main Road, Express Bazar-3rd Floor,<br />
              Dinhata, Cooch Behar - 736135
            </li>
            <li>
              <strong className="text-white block mb-1">Phone:</strong>
              +91 96417 33880<br />
              +91 99074 27858<br />
              +91 98325 79769
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-heading text-xl font-bold text-primary tracking-widest uppercase">Newsletter</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">Subscribe to our newsletter for exclusive offers and updates.</p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="relative group overflow-hidden pb-1 border-b border-white/20 focus-within:border-primary transition-all">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-none py-3 text-white text-sm font-light focus:outline-none placeholder:text-gray-600 focus:placeholder:text-gray-400 transition-all"
                required
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-primary font-bold text-2xl hover:translate-x-1 transition-transform cursor-pointer">
                →
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5 py-8 text-center bg-dark-surface/50">
        <p className="text-gray-500 text-xs font-light tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} <span className="text-primary font-bold">Sonar Tori Hotel</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
