import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/lamp-icon.svg" 
            alt="Soluz Logo" 
            className="w-8 h-8"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#benefits" className="text-dark-800 hover:text-primary-600 font-medium">Benefícios</a>
          <a href="#features" className="text-dark-800 hover:text-primary-600 font-medium">Recursos</a>
          <a href="#specs" className="text-dark-800 hover:text-primary-600 font-medium">Especificações</a>
          <a href="#faq" className="text-dark-800 hover:text-primary-600 font-medium">FAQ</a>
          <a 
            href="#cta" 
            className="btn-primary flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Comprar Agora</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark-800 p-2"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container flex flex-col gap-4">
            <a 
              href="#benefits" 
              className="text-dark-800 hover:text-primary-600 font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Benefícios
            </a>
            <a 
              href="#features" 
              className="text-dark-800 hover:text-primary-600 font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Recursos
            </a>
            <a 
              href="#specs" 
              className="text-dark-800 hover:text-primary-600 font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Especificações
            </a>
            <a 
              href="#faq" 
              className="text-dark-800 hover:text-primary-600 font-medium py-2"
              onClick={toggleMobileMenu}
            >
              FAQ
            </a>
            <a 
              href="#cta" 
              className="btn-primary flex items-center justify-center gap-2"
              onClick={toggleMobileMenu}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Comprar Agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;