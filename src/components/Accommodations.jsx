import React from 'react';

const accommodations = [
  {
    title: 'A-Shape Cottages',
    description: 'Cozy wooden interiors with modern amenities',
    price: '₹12,000/night',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Premium Cottages',
    description: 'Luxury stay with panoramic mountain views',
    price: '₹18,000/night',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Glamps Mushroom Shape',
    description: 'Unique glamping experience in nature',
    price: '₹15,000/night',
    image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cocoon',
    description: 'Nature-immersed pods for the adventurous soul',
    price: '₹20,000/night',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800'
  }
];

const Accommodations = () => {
  return (
    <section id="stays" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-yellow-400">Luxury</span> Stays
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={accommodation.image}
                alt={accommodation.title}
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{accommodation.title}</h3>
                <p className="text-gray-300 mb-2">{accommodation.description}</p>
                <p className="text-yellow-400 font-bold mb-4">{accommodation.price}</p>
                <button className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;