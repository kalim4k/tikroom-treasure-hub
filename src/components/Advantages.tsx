
import React from 'react';
import { BadgeDollarSign, Star, Zap, ShoppingBag, Award, Users } from 'lucide-react';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="p-6 rounded-xl bg-white border border-gray-100 hover:border-tikroom-100 transition-all shadow-sm hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-tikroom-50 text-tikroom mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Achats exclusifs",
      description: "Utilisez vos coins pour acheter des produits exclusifs disponibles uniquement sur Tikroom.net."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Contenu premium",
      description: "Accédez à du contenu premium et des fonctionnalités exclusives réservées aux utilisateurs avec des coins."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Boost de visibilité",
      description: "Augmentez votre visibilité et obtenez plus d'engagement sur vos publications."
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6" />,
      title: "Meilleur rapport qualité-prix",
      description: "Plus vous achetez de coins, plus vous obtenez de valeur pour votre argent."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Badges exclusifs",
      description: "Débloquez des badges exclusifs qui montrent votre statut premium aux autres utilisateurs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fonctionnalités sociales",
      description: "Accédez à des fonctionnalités sociales avancées pour interagir avec votre communauté."
    }
  ];

  return (
    <section id="advantages" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-tikroom-50 text-tikroom-700 text-xs font-medium">
            Pourquoi acheter des coins ?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Les avantages des Tikroom Coins</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment les Tikroom Coins peuvent transformer votre expérience sur notre réseau social et vous donner accès à des fonctionnalités exclusives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
