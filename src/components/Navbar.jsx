import { useState, useEffect } from 'react';
import hotelLogo from '../assets/Hotel_SonarToriLogo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'ROOMS', href: '#rooms' },
    { name: 'AMENITIES', href: '#amenities' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'LOCATION', href: '#location' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-primary/10' : 'bg-transparent'}`}>
      {/* Top Info Bar */}
      <div className="w-full px-[60px] py-2 bg-primary/10 backdrop-blur-sm border-b border-white/5 hidden md:flex justify-between items-center text-[10px] font-bold tracking-[0.2em] text-white/50">
        <div className="flex gap-6 uppercase items-center">
          <span className="flex items-center gap-1.5"><i className="ri-map-pin-fill text-primary"></i> Dinhata Main Road, Cooch Behar</span>
          <span className="flex items-center gap-1.5"><i className="ri-time-line text-primary"></i> Check-in: 10AM | Check-out: 9AM</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="tel:+919641733880" className="hover:text-primary transition-colors flex items-center gap-1.5"><i className="ri-phone-fill text-primary"></i> +91 96417 33880</a>
          <a href="tel:+919907427858" className="hover:text-primary transition-colors flex items-center gap-1.5"><i className="ri-phone-fill text-primary"></i> +91 99074 27858</a>
        </div>
      </div>

      <div className={`w-full px-[60px] flex justify-between items-center ${scrolled || mobileMenuOpen ? 'py-4' : 'py-6'}`}>
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <img src={hotelLogo} alt="Sonar Tori Logo" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110" />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-4 xl:gap-6 list-none text-[12px] font-bold tracking-[0.1em] text-white/90 uppercase">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="cursor-pointer hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Reservation Button */}
          <a
            href="https://wa.me/919832579769"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !py-2.5 !px-6 !text-[12px] flex items-center gap-2"
          >
            Reservation
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer hover:text-primary transition-colors flex items-center justify-center p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[600px] border-b border-primary/20 opacity-100 py-10' : 'max-h-0 opacity-0 py-0'}`}>
        <ul className="flex flex-col items-center gap-8 list-none text-base font-bold tracking-[0.2em] text-white uppercase px-[60px]">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setMobileMenuOpen(false)}>
              <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
            </li>
          ))}
          <li className="mt-4 w-full">
            <a
              href="https://wa.me/919832579769"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
