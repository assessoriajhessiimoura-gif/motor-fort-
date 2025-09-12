import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Mensagem fixa + dados do formulário
      const whatsappMessage = `Olá, gostaria de fazer um orçamento!
      
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/553173228099?text=${encodedMessage}`, "_blank");

      // Resetar o formulário
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-red-600">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos prontos para atender você! Entre em contato conosco e 
            solicite um orçamento sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Capela Nova, 335<br />
                      Betim Industrial, Betim/MG<br />
                      CEP: 30670-432
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta<br />
                      08:00 às 18:00
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/553173228099?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      (31) 9 7322-8099
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@motorfort.com.br</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Instagram className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                    <a 
                      href="https://instagram.com/motorfort" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      @motorfort
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input 
                type="text" 
                name="name" 
                placeholder="Nome" 
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Telefone" 
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input 
                type="text" 
                name="service" 
                placeholder="Serviço desejado" 
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea 
                name="message" 
                placeholder="Mensagem" 
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg h-32"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-red-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors w-full"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Enviado!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
