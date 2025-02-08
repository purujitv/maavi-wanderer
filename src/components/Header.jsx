import React from 'react';
import { Mountain } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Maavi Wanderer</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors">
              Home
            </a>
            <a href="#stays" className="text-white hover:text-yellow-400 transition-colors">
              Stays
            </a>
            <a href="#expeditions" className="text-white hover:text-yellow-400 transition-colors">
              Expeditions
            </a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors font-semibold">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;