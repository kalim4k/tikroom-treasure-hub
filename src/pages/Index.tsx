
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CoinPackage from '@/components/CoinPackage';
import Advantages from '@/components/Advantages';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        <section id="coins" className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-tikroom-50 text-tikroom-700 text-xs font-medium">
                Choisissez votre pack
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Les packs de Tikroom Coins</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Achetez des Tikroom Coins et profitez de toutes les fonctionnalités premium de notre réseau social.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CoinPackage amount={52000} price={4990} delay={0.1} />
              <CoinPackage amount={115000} price={9990} popular={true} delay={0.2} />
              <CoinPackage amount={145000} price={13000} delay={0.3} />
            </div>
          </div>
        </section>
        
        <Advantages />
        
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-tikroom-50 opacity-50 transform -skew-y-6"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer votre expérience Tikroom ?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui ont déjà amélioré leur expérience sur Tikroom.net en achetant des coins.
            </p>
            
            <a 
              href="#coins" 
              className="button-shine inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-tikroom rounded-full transition-all duration-200 hover:bg-tikroom-light hover:shadow-lg hover:shadow-tikroom-200/30"
            >
              Acheter des coins maintenant
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
