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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/553173228099?text=${encodedMessage}`, "_blank");

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
                    href="https://wa.me/553173228099?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento!"
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
                  <a 
                    href="mailto:contato@motorfort.com.br"
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    contato@motorfort.com.br
                  </a>
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

          {/* Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-10 bg-green-50 rounded-lg shadow-lg">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-600 text-center">
                  Em breve entraremos em contato com você pelo WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Serviço de Interesse */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Selecione um serviço</option>
                    <optgroup label="Serviços de Retífica">
                      <option value="Retífica de Motor">Retífica de Motor</option>
                      <option value="Retífica de Cabeçote">Retífica de Cabeçote</option>
                      <option value="Bloco do Motor">Bloco do Motor</option>
                      <option value="Virabrequim">Virabrequim</option>
                      <option value="Bielas">Bielas</option>
                    </optgroup>
                    <optgroup label="Serviços Mecânicos">
                      <option value="Troca de Óleo">Troca de Óleo</option>
                      <option value="Revisão Completa">Revisão Completa</option>
                      <option value="Troca de Correia Dentada">Troca de Correia Dentada</option>
                      <option value="Suspensão e Freios">Suspensão e Freios</option>
                      <option value="Embreagem">Embreagem</option>
                    </optgroup>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  ></textarea>
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
