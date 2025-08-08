import React from 'react';
import { ShoppingBag } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-slate-800 text-white p-6 md:p-8 rounded-2xl w-full max-w-md mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-yellow-600 p-2 rounded">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-yellow-400">@LIKIN</h1>
          <span className="text-xs text-gray-400 ml-2">le marché de tout Kinshasa</span>
        </div>
        
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Le marché de tout Kinshasa sur votre téléphone
        </h2>
        
        <p className="text-gray-300 text-sm mb-4">
          Achetez en ligne facilement,et de manière securisee. remboursement en 24h
        </p>
      </div>

      <div className="rounded-xl mb-6 overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="Femme heureuse faisant du shopping en ligne avec des sacs colorés"
          className="w-full h-48 md:h-56 object-cover rounded-xl"
        />
      </div>

      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200">
        Explorer
      </button>
    </div>
  );
};

export default HeroSection;