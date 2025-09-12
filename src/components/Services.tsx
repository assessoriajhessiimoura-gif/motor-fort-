import React from 'react';
import { Wrench, Settings, Search, Shield, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Retífica de Motores",
    description: "Serviços especializados em retífica de bloco, cabeçote e virabrequim com equipamentos de última geração.",
    features: [
      "Retífica de bloco do motor",
      "Retífica de cabeçote",
      "Retífica de virabrequim",
      "Brunimento de cilindros"
    ]
  },
  {
    icon: <Wrench className="w-12 h-12" />,
    title: "Mecânica Geral",
    description: "Serviços completos de mecânica automotiva para todos os tipos de veículos.",
    features: [
      "Troca de óleo e filtros",
      "Revisão de motor",
      "Sistema de arrefecimento",
      "Embreagem e transmissão"
    ]
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: "Diagnóstico Avançado",
    description: "Diagnóstico preciso utilizando tecnologia moderna para identificar problemas no motor.",
    features: [
      "Análise computadorizada",
      "Teste de compressão",
      "Diagnóstico de falhas",
      "Relatório técnico detalhado"
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Manutenção Preventiva",
    description: "Serviços de manutenção preventiva para aumentar a vida útil do seu veículo.",
    features: [
      "Planos de manutenção",
      "Inspeção completa",
      "Lubrificação geral",
      "Verificação de sistemas"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-red-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Oferecemos uma gama completa de serviços automotivos com a mais alta qualidade e tecnologia avançada
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 text-red-600 p-4 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/553173228099?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-black rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Por que escolher a <span className="text-red-500">Motor Fort</span>?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Qualidade Garantida</h4>
              <p className="text-gray-300">Todos os nossos serviços vêm com garantia e qualidade comprovada</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Equipamentos Modernos</h4>
              <p className="text-gray-300">Utilizamos tecnologia de ponta para serviços precisos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Profissionais Experientes</h4>
              <p className="text-gray-300">Equipe altamente qualificada e com anos de experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
