import React from 'react';
import { Store, ShoppingBasket, Clock } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const handleVendorClick = () => {
    console.log('Vendeur clicked');
  };

  const handleBuyerClick = () => {
    console.log('Acheteur clicked');
  };

  const handleDeliveryClick = () => {
    console.log('Livreur clicked');
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Votre rôle ? A vous de choisir !
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Que vous soyez commerçant, client ou livreur, @LIKIN vous offre une plateforme 
            simple,efficace et sécurisée pour connecter tout KIN.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <ServiceCard
            icon={Store}
            title="Vendeur"
            subtitle="Vendez en ligne sans boutique"
            description="Créez votre micro-shop en 2 minutes et atteignez plus de clients locaux"
            buttonText="Je suis vendeur"
            onButtonClick={handleVendorClick}
          />

          <ServiceCard
            icon={ShoppingBasket}
            title="Acheteur"
            subtitle="Trouvez des produits locaux"
            description="Commandez chez les commerçants de votre choix et recevez vos achats rapidement"
            buttonText="Je veux acheter"
            onButtonClick={handleBuyerClick}
          />

          <ServiceCard
            icon={Clock}
            title="Livreur"
            subtitle="Devenez livreur partenaire"
            description="Utilisez votre moto pour livrer des courses et gagnez plus d'argent facilement"
            buttonText="Je veux livrer"
            onButtonClick={handleDeliveryClick}
          />
        </div>
      </div>
              {/* Moyens de paiement */}
              <div className="mt-16 max-w-2xl mx-auto text-center">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">
    Paiement rapide & sécurisé
  </h3>
  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
    <img
      src="/images/Visa.png"
      alt="Visa"
      className="h-10 w-auto object-contain"
    />
    <img
      src="/images/Orange_money.png"
      alt="Orange Money"
      className="h-10 w-auto object-contain"
    />
    <img
      src="/images/Mpesa.png"
      alt="M-Pesa"
      className="h-10 w-auto object-contain"
    />
    <img
      src="/images/Cash.png"
      alt="cash-on-delivery"
      className="h-10 w-auto object-contain"
    />
  </div>
</div>

    </section>
  );
};

export default ServicesSection;