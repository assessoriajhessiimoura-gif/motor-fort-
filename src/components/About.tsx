import React from 'react';
import { Award, Clock, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-red-600">Motor Fort</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Referência em retífica de motores e mecânica automotiva em Betim/MG, 
            com anos de experiência e compromisso com a excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A Motor Fort nasceu da paixão por motores e do compromisso em oferecer 
                os melhores serviços automotivos da região. Especializada em retífica 
                de motores e mecânica geral, nossa empresa se destaca pela qualidade, 
                precisão e atendimento personalizado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com equipamentos de última geração e uma equipe altamente qualificada, 
                garantimos que seu veículo receba o melhor tratamento possível, 
                sempre com foco na durabilidade e performance.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Proporcionar serviços automotivos de excelência, utilizando tecnologia 
                avançada e conhecimento técnico especializado para garantir a total 
                satisfação de nossos clientes e a máxima performance de seus veículos.
              </p>
            </div>
          </div>

          {/* Image/Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <img 
                src="/images/WhatsApp-Image-2025-09-08-at-21.37.36-_1_.png" 
                alt="Motor Fort Logo" 
                className="relative h-80 w-auto object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Qualidade</h4>
            <p className="text-gray-600">Serviços com garantia e padrão de excelência</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Agilidade</h4>
            <p className="text-gray-600">Prazos cumpridos e entregas no tempo certo</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Experiência</h4>
            <p className="text-gray-600">Profissionais especializados e experientes</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">Localização</h4>
            <p className="text-gray-600">Bem localizada em Betim Industrial</p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-black rounded-3xl p-8 sm:p-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-red-500 mb-4">Transparência</h4>
              <p className="text-gray-300 leading-relaxed">
                Orçamentos claros e honestos, sem surpresas ou custos ocultos
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-red-500 mb-4">Confiança</h4>
              <p className="text-gray-300 leading-relaxed">
                Construímos relacionamentos duradouros baseados na confiança mútua
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-semibold text-red-500 mb-4">Inovação</h4>
              <p className="text-gray-300 leading-relaxed">
                Sempre atualizados com as últimas tecnologias e técnicas do mercado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;