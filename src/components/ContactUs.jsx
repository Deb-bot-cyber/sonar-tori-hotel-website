import { useState } from 'react';
import contactBg from '../assets/HeroImages/SDP_4439.JPG';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, phone, message } = formData;
    
    // Construct WhatsApp Message
    const whatsappMessage = `*New Inquiry from Sonar Tori Website*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Subject:* ${subject}%0A%0A` +
      `*Message:* %0A${message}`;
      
    const whatsappUrl = `https://wa.me/919832579769?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen section-padding flex items-center justify-center bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="absolute inset-0 bg-dark-bg/80 z-0" />
      
      <div className="max-w-4xl w-full glass-panel relative z-10 p-12 md:p-16 border-primary/20 bg-dark-bg/95 backdrop-blur-3xl shadow-2xl ring-1 ring-primary/10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-heading text-primary font-bold tracking-tight">Get in Touch</h2>
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">We are here to assist you with any inquiries or reservation requests. Experience the <span className="text-primary font-heading">Sonar Tori</span> hospitality.</p>
        </div>
        
        <form className="space-y-8 group" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-widest text-primary/70 pl-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: John Doe" 
                className="w-full bg-white/5 border border-white/10 p-5 rounded-none text-white font-light focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/20" 
                required 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-widest text-primary/70 pl-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: john@example.com" 
                className="w-full bg-white/5 border border-white/10 p-5 rounded-none text-white font-light focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/20" 
                required 
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-widest text-primary/70 pl-2">Subject</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-dark-surface-light border border-white/10 p-5 rounded-none text-white font-light focus:outline-none focus:border-primary focus:bg-white/10 transition-all focus:ring-1 focus:ring-primary/20 appearance-none cursor-pointer" 
                required 
              >
                <option value="" disabled className="bg-dark-bg">Select Subject</option>
                <option value="Room Reservation" className="bg-dark-bg">Room Reservation</option>
                <option value="Event Booking" className="bg-dark-bg">Event Booking</option>
                <option value="Feedback" className="bg-dark-bg">Feedback</option>
                <option value="Other Inquiry" className="bg-dark-bg">Other Inquiry</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-extrabold tracking-widest text-primary/70 pl-2">Phone Number</label>
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000" 
                className="w-full bg-white/5 border border-white/10 p-5 rounded-none text-white font-light focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/20" 
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase font-extrabold tracking-widest text-primary/70 pl-2">Your Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..." 
              className="w-full bg-white/5 border border-white/10 p-5 rounded-none text-white font-light focus:outline-none focus:border-primary focus:bg-white/10 transition-all h-36 placeholder:text-gray-600 focus:ring-1 focus:ring-primary/20" 
              required
            ></textarea>
          </div>
          <div className="text-center pt-8">
            <button type="submit" className="btn-primary px-16">
              Send Message via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
