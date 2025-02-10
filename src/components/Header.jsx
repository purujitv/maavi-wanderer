import React, { useState } from 'react';
import { Mountain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className="fixed w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 z-50">
            <Mountain className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Maavi Wanderer</span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors font-semibold">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden z-50 text-white hover:text-yellow-400 transition-colors"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Mobile Navigation Overlay */}
          <div className={`
            fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <a 
                href="#home" 
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href="#stays" 
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
                onClick={closeMenu}
              >
                Stays
              </a>
              <a 
                href="#expeditions" 
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
                onClick={closeMenu}
              >
                Expeditions
              </a>
              <a 
                href="#about" 
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-md hover:bg-yellow-300 transition-colors font-semibold mt-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
