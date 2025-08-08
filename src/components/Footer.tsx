import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-yellow-600 p-2 rounded">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400">@LIKIN</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4 max-w-xs">
              Le marché de Kinshasa sur votre téléphone. Connectons les commerçants locaux avec leur communauté.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Vendeurs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Acheteurs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Livreurs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Partenariats</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">contact@likin.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-300">+243 8 54 84 62 49</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5" />
                <span className="text-gray-300">123 Avenue du Commerce<br />Kinshasa, R.D.Congo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © 2025 @LIKIN. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookies</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;