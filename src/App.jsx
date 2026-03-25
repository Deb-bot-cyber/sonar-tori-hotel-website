import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import RoomsSuites from './components/RoomsSuites';
import Amenities from './components/Amenities';
import Restaurant from './components/Restaurant';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
import Packages from './components/Packages';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <RoomsSuites />
        <Amenities />
        <Restaurant />
        <Gallery />
        <LocationMap />
        <Packages />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
