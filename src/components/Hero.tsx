import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/WhatsApp-Image-2025-09-08-at-21.37.36-_1_.png" 
              alt="Motor Fort" 
              className="h-32 w-auto object-contain animate-fade-in"
            />
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
              MOTOR
              <span className="block text-red-500">FORT</span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 animate-slide-up delay-200">
              Retífica e Mecânica
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-400">
            Especialistas em retífica de motores e serviços automotivos de alta qualidade em Betim/MG
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-slide-up delay-600">
            <a
              href="https://wa.me/553197322809?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 flex items-center space-x-3"
            >
              <Phone size={24} />
              <span>Fazer Orçamento</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-white/25 transform hover:scale-105 flex items-center space-x-3"
            >
              <span>Nossos Serviços</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;