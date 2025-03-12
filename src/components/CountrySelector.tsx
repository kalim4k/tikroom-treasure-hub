
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  packageAmount: number;
  packagePrice: number;
}

type PaymentDestination = {
  countries: string[];
  url: string;
};

const CountrySelector: React.FC<CountrySelectorProps> = ({ 
  isOpen, 
  onClose, 
  packageAmount,
  packagePrice
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const { toast } = useToast();
  
  const countries = [
    'Bénin',
    'Burkina Faso',
    'Cameroun',
    'Congo',
    'Côte d\'Ivoire',
    'Gabon',
    'Guinée',
    'Mali',
    'Niger',
    'République démocratique du Congo',
    'Sénégal',
    'Togo',
    'Autre'
  ].sort();
  
  const paymentDestinations: Record<number, PaymentDestination[]> = {
    4990: [
      {
        countries: ['Guinée', 'Niger'],
        url: 'https://me.fedapay.com/IcZXcvqO'
      },
      {
        countries: ['Gabon', 'Cameroun', 'République démocratique du Congo', 'Congo'],
        url: 'https://pay.lygosapp.com//link/89f36dec-5395-42bc-b6c9-42aa398cdba3'
      }
    ],
    9990: [
      {
        countries: ['Guinée', 'Niger'],
        url: 'https://me.fedapay.com/sZK1KmrD'
      },
      {
        countries: ['Gabon', 'Cameroun', 'République démocratique du Congo', 'Congo'],
        url: 'https://pay.lygosapp.com//link/af08e398-4d9b-4e95-b76d-28dc1b1380cf'
      }
    ],
    13000: [
      {
        countries: ['Guinée', 'Niger'],
        url: 'https://me.fedapay.com/x-jWazyW'
      },
      {
        countries: ['Gabon', 'Cameroun', 'République démocratique du Congo', 'Congo'],
        url: 'https://pay.lygosapp.com//link/757bc650-cef9-4c3e-aef2-96937abcb6a7'
      }
    ]
  };
  
  const getPaymentUrl = (country: string): string => {
    const destinations = paymentDestinations[packagePrice] || [];
    
    for (const destination of destinations) {
      if (destination.countries.includes(country)) {
        return destination.url;
      }
    }
    
    if (packagePrice === 4990) {
      return 'https://www.pay.moneyfusion.net/pack-de-52000-coins_1741608496961/';
    } else if (packagePrice === 9990) {
      return 'https://www.pay.moneyfusion.net/pack-de-115000-coins_1741767859668/';
    } else if (packagePrice === 13000) {
      return 'https://www.pay.moneyfusion.net/pack-de-145000-coins_1741768055474/';
    }
    
    return 'https://www.pay.moneyfusion.net/pack-de-52000-coins_1741608496961/';
  };
  
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
  };
  
  const handleProceedToPayment = () => {
    if (!selectedCountry) {
      toast({
        title: "Sélection requise",
        description: "Veuillez sélectionner un pays pour continuer",
        variant: "destructive",
      });
      return;
    }
    
    const paymentUrl = getPaymentUrl(selectedCountry);
    window.location.href = paymentUrl;
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative z-10 animate-zoom-in shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Choisissez votre pays</h3>
          <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/favicon.ico" alt="Tikroom" className="w-8 h-8 mr-2" />
            <span className="text-lg font-medium">Pack de {packageAmount.toLocaleString('fr-FR')} Coins</span>
          </div>
          <div className="text-2xl font-bold text-tikroom mb-1">
            {packagePrice.toLocaleString('fr-FR')} FCFA
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            Pays de résidence
          </label>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => handleCountrySelect(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-tikroom focus:border-transparent"
          >
            <option value="">Sélectionnez un pays</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        
        <button
          onClick={handleProceedToPayment}
          className="button-shine w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 bg-tikroom text-white hover:bg-tikroom-light hover:shadow-lg hover:shadow-tikroom-200/30"
        >
          Procéder au paiement
        </button>
      </div>
    </div>
  );
};

export default CountrySelector;
