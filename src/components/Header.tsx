import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-yellow-600 p-2 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              <span className="text-yellow-600">@</span>LIKIN
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Accueil
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              À propos
            </a>
            <a href="#" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Contact
            </a>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Commencer
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                Accueil
              </a>
              <a href="#" className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                Services
              </a>
              <a href="#" className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                À propos
              </a>
              <a href="#" className="block text-gray-700 hover:text-yellow-600 transition-colors font-medium">
                Contact
              </a>
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Commencer
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;