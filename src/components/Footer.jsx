import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#stays" className="hover:text-yellow-400">Stays</a></li>
              <li><a href="#expeditions" className="hover:text-yellow-400">Expeditions</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-yellow-400 mb-4">Stays</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">A-Shape Cottages</a></li>
              <li><a href="#" className="hover:text-yellow-400">Premium Cottages</a></li>
              <li><a href="#" className="hover:text-yellow-400">Glamps</a></li>
              <li><a href="#" className="hover:text-yellow-400">Cocoon</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-yellow-400 mb-4">Adventures</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400">4x4 Expeditions</a></li>
              <li><a href="#" className="hover:text-yellow-400">Trekking</a></li>
              <li><a href="#" className="hover:text-yellow-400">Photography</a></li>
              <li><a href="#" className="hover:text-yellow-400">Camping</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-yellow-400 mb-4">Connect</h3>
            <a
              href="https://wa.me/919876543210"
              className="inline-flex items-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
          © 2025 Maavi Wanderer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;