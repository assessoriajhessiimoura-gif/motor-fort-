import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/WhatsApp-Image-2025-09-08-at-21.37.36-_1_.png" 
              alt="Motor Fort Logo" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-white text-xl font-bold">MOTOR FORT</h1>
              <p className="text-red-500 text-sm font-light">Retífica e Mecânica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-red-500 transition-colors duration-200 font-medium"
            >
              Contato
            </button>
            <a
              href="https://wa.me/553173228099?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm absolute top-full left-0 right-0 shadow-lg">
            <nav className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-red-500 transition-colors duration-200 font-medium text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-red-500 transition-colors duration-200 font-medium text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-red-500 transition-colors duration-200 font-medium text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-red-500 transition-colors duration-200 font-medium text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-red-500 transition-colors duration-200 font-medium text-left"
              >
                Contato
              </button>
              <a
                href="https://wa.me/553197322809?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all duration-200 font-semibold text-center"
              >
                Fazer Orçamento
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
