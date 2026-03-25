import React, { useEffect, useRef, useState } from 'react';

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
      label: 'Positive Feedback',
      number: '98%',
      desc: 'Over 98% positive feedback from satisfied guests, reflecting our commitment to exceptional service and memorable stays.'
    },
    {
      label: 'Years of Expertise',
      number: '15+',
      desc: 'Backed by 15 years of industry expertise, we turn every stay into a seamless experience.'
    },
    {
      label: 'Happy Clients',
      number: '25K+',
      desc: 'Proudly serving 25K+ happy travelers who\'ve trusted us to find their perfect stay.'
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
              const text = "Since 2016, we've been helping travelers find stays they love — effortlessly. We're about curating unforgettable journeys! Since 2016, our passionate team has been helping travelers find the perfect stay, blending seamless technology with a love for discovery. From cozy hideaways to grand escapes, we turn your travel dreams into real-world adventures.";
              const characters = text.split("");
              return characters.map((char, index) => {
                // Calculate individual character reveal progress
                // Each character has a slightly offset start point based on its index
                const charTotal = characters.length;
                const charStart = index / charTotal;
                const charEnd = (index + 20) / charTotal; // Each letter takes 20/total of the scroll range
                
                // Map the overall scroll progress to this character's range
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
          <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-dark-bg pb-1 hover:text-primary hover:border-primary transition-all">
            KNOW MORE <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Bottom Section: By The Number */}
      <div className="w-full">
        <div className="flex items-center gap-2 text-dark-bg font-bold text-xs uppercase tracking-widest mb-16">
          <span className="w-2 h-2 rounded-none bg-dark-bg"></span>
          BY THE NUMBER
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-12 flex flex-col gap-6 transition-all duration-500 rounded-none">
              <div className="font-heading text-7xl md:text-8xl font-normal text-dark-bg flex items-baseline">
                {stat.number.replace(/\D/g, '')}
                <span className="text-primary text-5xl ml-1">{stat.number.replace(/\d/g, '')}</span>
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
