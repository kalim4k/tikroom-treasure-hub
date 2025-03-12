
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Coins } from 'lucide-react';
import CountrySelector from './CountrySelector';

interface CoinPackageProps {
  amount: number;
  price: number;
  popular?: boolean;
  delay?: number;
  imageUrl?: string;
}

const CoinPackage: React.FC<CoinPackageProps> = ({ 
  amount, 
  price, 
  popular = false, 
  delay = 0,
  imageUrl
}) => {
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);
  const formattedAmount = amount.toLocaleString('fr-FR');
  const formattedPrice = price.toLocaleString('fr-FR');
  
  const handleBuyClick = () => {
    // Pour le pack à 52000 coins (4990 FCFA), ouvrir le sélecteur de pays
    if (amount === 52000 && price === 4990) {
      setIsCountrySelectorOpen(true);
    } else {
      // Pour les autres packs, rediriger directement vers le paiement par défaut
      window.location.href = 'https://www.pay.moneyfusion.net/pack-de-52000-coins_1741608496961/';
    }
  };
  
  return (
    <>
      <div 
        className={cn(
          "relative coin-card-shadow rounded-2xl p-6 md:p-8 flex flex-col animate-zoom-in transition-all duration-300",
          popular ? "bg-tikroom-50 border border-tikroom-200" : "bg-white border border-gray-100",
        )}
        style={{ animationDelay: `${delay}s` }}
      >
        {popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-tikroom px-4 py-1 rounded-full text-white text-xs font-medium">
            Populaire
          </div>
        )}
        
        <div className="flex items-center justify-center mb-6 mx-auto">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt="Treasure chest with coins" 
              className="w-28 h-28 object-contain transition-all duration-300 hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-tikroom-50">
              <Coins className="w-8 h-8 text-tikroom" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-center mb-2">Pack de Coins</h3>
        
        <div className="text-center mb-6">
          <div className="text-3xl md:text-4xl font-bold text-tikroom mb-1">{formattedAmount}</div>
          <div className="text-gray-500 text-sm">Tikroom Coins</div>
        </div>
        
        <div className="text-center mb-8">
          <div className="text-2xl font-bold">{formattedPrice} FCFA</div>
        </div>
        
        <button 
          onClick={handleBuyClick}
          className={cn(
            "button-shine mt-auto w-full py-3 px-4 rounded-xl font-medium transition-all duration-200",
            popular 
              ? "bg-tikroom text-white hover:bg-tikroom-light hover:shadow-lg hover:shadow-tikroom-200/30" 
              : "bg-tikroom-50 text-tikroom hover:bg-tikroom-100"
          )}
        >
          Acheter maintenant
        </button>
      </div>
      
      <CountrySelector 
        isOpen={isCountrySelectorOpen} 
        onClose={() => setIsCountrySelectorOpen(false)} 
        packageAmount={amount}
        packagePrice={price}
      />
    </>
  );
};

export default CoinPackage;
