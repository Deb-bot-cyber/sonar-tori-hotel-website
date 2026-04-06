
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import RoomsSuites from './components/RoomsSuites';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap';
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
        <Gallery />
        <LocationMap />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
