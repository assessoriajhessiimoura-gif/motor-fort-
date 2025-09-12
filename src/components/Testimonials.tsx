import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    location: "Betim - MG",
    text: "Excelente serviço! Meu motor ficou como novo após a retífica. Equipe muito profissional e preço justo. Recomendo para todos.",
    rating: 5,
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Ana Rodrigues",
    location: "Contagem - MG",
    text: "A Motor Fort salvou meu carro! Diagnóstico preciso e solução rápida. Atendimento excepcional e garantia nos serviços.",
    rating: 5,
    image: "https://images.pexels.com/photos/3752864/pexels-photo-3752864.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Roberto Santos",
    location: "Belo Horizonte - MG",
    text: "Profissionalismo e qualidade em primeiro lugar. Fiz a manutenção do meu veículo e fiquei muito satisfeito com o resultado.",
    rating: 5,
    image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Maria Costa",
    location: "Betim - MG",
    text: "Melhor oficina da região! Trabalho impecável na retífica do meu motor. Equipe competente e preços honestos.",
    rating: 5,
    image: "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-red-600">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confia na Motor Fort.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-red-100 p-4 rounded-full">
                    <Quote className="w-8 h-8 text-red-600" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt="Serviço Motor Fort"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-black rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Conquiste a confiança que você merece
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
              <p className="text-white">Clientes Satisfeitos</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">5★</div>
              <p className="text-white">Avaliação Média</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
              <p className="text-white">Garantia nos Serviços</p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://wa.me/553173228099?text=Ol%C3%A1,%20%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:scale-105"
            >
              <span>Faça parte dos nossos clientes satisfeitos!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
