
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToCoins = () => {
    const coinsSection = document.getElementById('coins');
    if (coinsSection) {
      coinsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-64 h-64 bg-tikroom-100 rounded-full opacity-20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-tikroom-200 rounded-full opacity-20 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-tikroom-300 rounded-full opacity-10 filter blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-tikroom-50 text-tikroom-700 text-xs font-medium animate-slide-down">
          Exclusif pour les utilisateurs de Tikroom.net
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-shadow animate-slide-down" style={{ animationDelay: '0.1s' }}>
          Augmentez votre expérience <span className="text-tikroom">Tikroom</span> avec nos Coins
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-down" style={{ animationDelay: '0.2s' }}>
          Achetez des coins pour débloquer plus d'avantages et profiter pleinement de toutes les fonctionnalités premium de notre réseau social.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-down" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#coins" 
            onClick={scrollToCoins}
            className="button-shine inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-tikroom rounded-full transition-all duration-200 hover:bg-tikroom-light hover:shadow-lg hover:shadow-tikroom-200/30"
          >
            Découvrir les packs
          </a>
          
          <a 
            href="#advantages" 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-tikroom bg-tikroom-50 rounded-full transition-all duration-200 hover:bg-tikroom-100"
          >
            Voir les avantages
          </a>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse-soft">
          <button 
            onClick={scrollToCoins}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <ChevronDown className="w-6 h-6 text-tikroom" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
