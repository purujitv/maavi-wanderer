import React from 'react';

const Expeditions = () => {
  return (
    <section id="expeditions" className="py-20 relative">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80"
          alt="Expedition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <div className="relative container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-yellow-400">4x4</span> Expeditions
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Experience the thrill of off-road adventures in our specially equipped 4x4 vehicles. Navigate through challenging terrains and discover hidden gems of Himachal Pradesh.
          </p>
        </div>
        <div className="text-center">
          <button className="bg-yellow-400 text-black py-3 px-8 rounded-md hover:bg-yellow-300 transition-colors font-semibold">
            Join the Adventure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expeditions;