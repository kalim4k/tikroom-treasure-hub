
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-tikroom animate-fade-in">
            Tikroom<span className="text-tikroom-500">.net</span>
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#coins" className="text-sm font-medium text-gray-700 hover:text-tikroom-500 transition-colors">
            Coins
          </a>
          <a href="#advantages" className="text-sm font-medium text-gray-700 hover:text-tikroom-500 transition-colors">
            Avantages
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-tikroom-500 transition-colors">
            FAQ
          </a>
        </nav>
        
        <div>
          <a 
            href="https://tikroom.net" 
            className="button-shine inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-tikroom hover:bg-tikroom-light rounded-full transition-colors duration-200"
          >
            Se connecter
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
