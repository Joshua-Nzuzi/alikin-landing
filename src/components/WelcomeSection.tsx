import React from 'react';
import { ArrowRight } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-yellow-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nouveau sur @LIKIN
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Le marché de Kinshasa
          <br />
          <span className="text-yellow-400">sur votre téléphone</span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Connectons les commerçants locaux avec leur communauté. 
          Achetez facilement, vendez simplement, livrez rapidement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center gap-2 group">
            Découvrir @LIKIN
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-white/80 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200">
            En savoir plus
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-300">Commerçants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10k+</div>
            <div className="text-gray-300">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-300">Livreurs actifs</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;