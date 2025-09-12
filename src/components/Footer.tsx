import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/WhatsApp-Image-2025-09-08-at-21.37.36-_1_.png" 
                alt="Motor Fort Logo" 
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">MOTOR FORT</h3>
                <p className="text-red-500 font-light">Retífica e Mecânica</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Especialistas em retífica de motores e mecânica automotiva em Betim/MG. 
              Qualidade, confiança e excelência em cada serviço.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/motor.fortt?igsh=ejJnbW1scTRvYXRu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/553197322809?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:assessoriamotorfort@gmail.com"
                className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-200">
                  Retífica de Motores
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-200">
                  Mecânica Geral
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-200">
                  Diagnóstico Avançado
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors duration-200">
                  Manutenção Preventiva
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Rua Capela Nova, 335<br />
                    Betim Industrial, Betim/MG<br />
                    CEP: 30670-432
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Segunda a Sexta<br />
                    08:00 às 18:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-red-500 flex-shrink-0" />
                <a 
                  href="https://wa.me/553197322809?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-red-500 transition-colors duration-200"
                >
                  (31) 9 7322-0809
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Motor Fort - Retífica e Mecânica. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;