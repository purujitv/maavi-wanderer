import React from 'react'
import { Clock, Compass, Mail, MapPin } from 'lucide-react'
export default function UnderMatience() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
    }}>
 <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-white border border-white/20">
   <div className="flex items-center justify-center mb-8">
     <Compass className="w-12 h-12 text-yellow-400 mr-3" />
     <h1 className="text-3xl font-bold">Maavi Wanderer</h1>
   </div>
   
   <div className="text-center mb-8">
     <h2 className="text-4xl font-bold mb-4">Under Maintenance</h2>
     <p className="text-xl text-gray-200 mb-6">
       We're currently enhancing your travel experience
     </p>
     <div className="flex items-center justify-center mb-8">
       <Clock className="animate-spin-slow w-16 h-16 text-yellow-400" />
     </div>
     <p className="text-gray-300 max-w-xl mx-auto">
       Our website is getting a makeover to serve you better. We'll be back soon with exciting new features and amazing travel deals!
     </p>
   </div>

   <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
     <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
       <Mail className="w-6 h-6 text-yellow-400 mb-3" />
       <h3 className="font-semibold mb-2">Contact Us</h3>
       <p className="text-gray-300">hello@maaviwanderer.com</p>
     </div>
     
     <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
       <MapPin className="w-6 h-6 text-yellow-400 mb-3" />
       <h3 className="font-semibold mb-2">Location</h3>
       <p className="text-gray-300">Maavi wanderer, Janedghat, Himachal Pradesh 173217, India
       </p>
     </div>
   </div>

   <div className="text-center mt-12">
     <p className="text-sm text-gray-400">
       Expected to return in 24 hours • Thank you for your patience
     </p>
   </div>
 </div>
</div>
  )
}
