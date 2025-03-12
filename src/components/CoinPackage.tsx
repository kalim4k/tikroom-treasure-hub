
import React from 'react';
import { cn } from '@/lib/utils';
import { Coins } from 'lucide-react';

interface CoinPackageProps {
  amount: number;
  price: number;
  popular?: boolean;
  delay?: number;
}

const CoinPackage: React.FC<CoinPackageProps> = ({ amount, price, popular = false, delay = 0 }) => {
  const formattedAmount = amount.toLocaleString('fr-FR');
  const formattedPrice = price.toLocaleString('fr-FR');
  
  return (
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
      
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-tikroom-50 mx-auto">
        <Coins className="w-8 h-8 text-tikroom" />
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
  );
};

export default CoinPackage;
