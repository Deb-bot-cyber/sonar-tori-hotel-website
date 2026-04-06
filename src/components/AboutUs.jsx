import { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the window the text is
      // Start revealing when at 80% scroll, fully revealed at 40%
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    {
      label: 'Luxury Units',
      number: '25+',
      desc: 'Our newly designed luxury spaces are ready to welcome you with premium interiors and state-of-the-art amenities.'
    },
    {
      label: 'Contemporary Design',
      number: '100%',
      desc: 'Experience a fresh perspective on hospitality with our modern architecture and meticulously planned layouts.'
    },
    {
      label: 'Guest Commitment',
      number: '24/7',
      desc: 'Being a new landmark, our dedicated team is focused on providing personalized care to make your very first stay memorable.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white text-dark-bg">
      {/* Top Section: About Us Text */}
      <div className="w-full flex flex-col md:flex-row items-start gap-12 md:gap-24 mb-32">
        <div className="md:w-1/4">
          <div className="flex items-center gap-2 text-dark-bg font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-none bg-dark-bg"></span>
            ABOUT US
          </div>
        </div>
        <div className="md:w-3/4 flex flex-col items-start gap-8">
          <p 
            ref={textRef}
            className="text-2xl md:text-3xl font-light leading-snug transition-all duration-300"
          >
            {(() => {
              const text = "Welcome to Sonar Tori, Cooch Behar's newest luxury landmark. We have recently opened our doors to offer a fresh perspective on hospitality, combining modern architectural elegance with timeless comfort. Every corner of our property is designed to provide a serene escape, featuring state-of-the-art amenities and a dedicated team committed to making your very first visit truly unforgettable. Experience the vibrant energy of a new beginning with us.";
              const characters = text.split("");
              return characters.map((char, index) => {
                // Calculate individual character reveal progress
                const charTotal = characters.length;
                const charStart = index / charTotal;
                const charEnd = (index + 20) / charTotal; 
                
                const charProgress = Math.max(0, Math.min(1, (scrollProgress - charStart) / (charEnd - charStart)));
                
                return (
                  <span 
                    key={index} 
                    style={{ 
                      color: `rgba(10, 10, 10, ${0.15 + (charProgress * 0.85)})`,
                      transition: 'color 0.1s ease-out'
                    }}
                  >
                    {char}
                  </span>
                )
              });
            })()}
          </p>
          <a href="#rooms" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-dark-bg pb-1 hover:text-primary hover:border-primary transition-all">
            EXPLORE ROOMS <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Section: By The Number */}
      <div className="w-full">
        <div className="flex items-center gap-2 text-dark-bg font-bold text-xs uppercase tracking-widest mb-16">
          <span className="w-2 h-2 rounded-none bg-dark-bg"></span>
          MODERN EXCELLENCE
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-12 flex flex-col gap-6 transition-all duration-500 rounded-none">
              <div className="font-heading text-7xl md:text-8xl font-normal text-dark-bg flex items-baseline">
                {stat.number.split(/(\D+)/).map((part, i) => (
                  <span key={i} className={/\D/.test(part) ? "text-primary text-5xl ml-0.5" : ""}>
                    {part}
                  </span>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-dark-bg">{stat.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
