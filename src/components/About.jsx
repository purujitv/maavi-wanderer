import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 container mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&q=80&w=400"
            alt="Cottage"
            className="rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=400"
            alt="4x4 Expedition"
            className="rounded-lg mt-8"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-yellow-400">About</span> Maavi Wanderer
          </h2>
          <p className="text-gray-300 mb-6">
            Nestled in the serene landscapes of Chail, Himachal Pradesh, Maavi Wanderer offers an unparalleled blend of luxury accommodation and thrilling adventures. Our property has hosted numerous celebrities, including the renowned Diljit Dosanjh, making us a premier destination for those seeking extraordinary experiences.
          </p>
          <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
            Learn More <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;