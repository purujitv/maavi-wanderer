import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';

const Hero = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [stay, setStay] = useState('ashape');

  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center px-8">
        <h1 className="text-6xl font-bold mb-6">
          <span className="text-yellow-400">Luxury</span> Meets Adventure
        </h1>
        <p className="text-xl mb-8 max-w-2xl">Experience the thrill of off-road expeditions and the comfort of luxury stays in the heart of Himachal Pradesh.</p>
        
        {/* Booking Form */}
        <div className="bg-black bg-opacity-80 p-6 rounded-lg max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm mb-2">Check In</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-yellow-400" />
                <input
                  type="date"
                  className="w-full bg-black text-white rounded-md py-2 px-10 focus:ring-2 focus:ring-yellow-400"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Check Out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-yellow-400" />
                <input
                  type="date"
                  className="w-full bg-black text-white rounded-md py-2 px-10 focus:ring-2 focus:ring-yellow-400"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Stay</label>
              <div className="relative">
                <select
                  className="w-full bg-black text-white rounded-md py-2 px-4 focus:ring-2 focus:ring-yellow-400"
                  value={stay}
                  onChange={(e) => setStay(e.target.value)}
                >
                  <option value="ashape">A-Shape Cottage</option>
                  <option value="premium">Premium Cottage</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-yellow-400" />
                <select
                  className="w-full bg-black text-white rounded-md py-2 px-10 focus:ring-2 focus:ring-yellow-400"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  {[1,2,3,4,5,6].map(num => (
                    <option key={num} value={num}>{num} Guest{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
           
            <button className="bg-yellow-400 text-black py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors font-semibold mt-6 md:mt-0">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
