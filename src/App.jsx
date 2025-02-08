import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Expeditions from './components/Expeditions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Accommodations />
      <Expeditions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;