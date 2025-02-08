import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-yellow-400">Contact</span> Us
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="text-yellow-400 mr-4" />
                <p>Chail, Himachal Pradesh, India</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-yellow-400 mr-4" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-yellow-400 mr-4" />
                <p>info@maaviwanderer.com</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <Instagram />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <Facebook />
              </a>
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <Youtube />
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-white bg-opacity-10 rounded-md py-2 px-4 focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button className="bg-yellow-400 text-black py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;