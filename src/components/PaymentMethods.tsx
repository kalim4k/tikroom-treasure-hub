
import React from 'react';
import { cn } from '@/lib/utils';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      name: 'Wave',
      image: 'https://celinaroom.com/wp-content/uploads/2025/02/Design-sans-titre4.png',
      alt: 'Logo Wave'
    },
    {
      name: 'Moov Money',
      image: 'https://celinaroom.com/wp-content/uploads/2025/01/Moov_Money_Flooz.png',
      alt: 'Logo Moov Money'
    },
    {
      name: 'MTN Money',
      image: 'https://celinaroom.com/wp-content/uploads/2025/01/mtn-1-Copie.jpg',
      alt: 'Logo MTN Money'
    },
    {
      name: 'Orange Money',
      image: 'https://celinaroom.com/wp-content/uploads/2025/01/Orange-Money-recrute-pour-ce-poste-22-Mars-2023.png',
      alt: 'Logo Orange Money'
    },
    {
      name: 'PayPal',
      image: 'https://celinaroom.com/wp-content/uploads/2025/01/ENIGME3.png',
      alt: 'Logo PayPal'
    },
    {
      name: 'Carte Bancaire',
      image: 'https://celinaroom.com/wp-content/uploads/2025/02/credit-card.png',
      alt: 'Carte Bancaire'
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-tikroom-50 text-tikroom-700 text-xs font-medium">
            Moyens de paiement sécurisés
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Paiements faciles et sécurisés</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Utilisez votre méthode de paiement préférée pour acheter des Tikroom Coins en toute sécurité.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {paymentMethods.map((method, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-tikroom-100"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <img 
                  src={method.image} 
                  alt={method.alt} 
                  className={cn(
                    "max-h-16 object-contain transition-transform duration-300 hover:scale-110",
                    method.name === "Carte Bancaire" ? "max-w-[64px]" : "max-w-[100px]"
                  )}
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{method.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
