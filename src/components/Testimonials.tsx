import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard: React.FC<{
  name: string;
  location: string;
  text: string;
  rating: number;
  delay: number;
  photoUrl: string;
}> = ({ name, location, text, rating, delay, photoUrl }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-accent-500 fill-accent-500' : 'text-slate-300'}`}
          />
        ))}
      </div>
      <div className="mb-4">
        <Quote className="w-8 h-8 text-primary-200" />
      </div>
      <p className="text-slate-700 mb-4 italic">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={photoUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-slate-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      location: "São Paulo, SP",
      text: "Instalei na minha casa há 3 meses e tem funcionado perfeitamente. A iluminação é potente e a câmera tem uma qualidade incrível, mesmo à noite.",
      rating: 5,
      delay: 0,
      photoUrl: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
    },
    {
      name: "Carla Mendes",
      location: "Rio de Janeiro, RJ",
      text: "O que mais gostei foi a facilidade de instalação e o app intuitivo. Consigo monitorar minha casa mesmo quando estou viajando!",
      rating: 5,
      delay: 100,
      photoUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Lucas Fernandes",
      location: "Belo Horizonte, MG",
      text: "Já passei por 3 dias de chuva intensa e a bateria não descarregou. A proteção contra água realmente funciona!",
      rating: 4,
      delay: 200,
      photoUrl: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg"
    }
  ];

  return (
    <section className="section bg-slate-100">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>O Que Nossos Clientes Dizem</h2>
          <p className="text-center text-xl font-medium text-primary-600 mb-2">
            Mais de 10.000 clientes satisfeitos em todo o Brasil!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              text={testimonial.text}
              rating={testimonial.rating}
              delay={testimonial.delay}
              photoUrl={testimonial.photoUrl}
            />
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8" data-aos="fade-up">
          <div className="bg-white px-6 py-4 rounded-lg shadow-md flex items-center gap-3">
            <div className="p-2 bg-success-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Satisfação Garantida</p>
              <p className="text-sm text-slate-500">Ou seu dinheiro de volta</p>
            </div>
          </div>
          
          <div className="bg-white px-6 py-4 rounded-lg shadow-md flex items-center gap-3">
            <div className="p-2 bg-success-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Envio Rápido</p>
              <p className="text-sm text-slate-500">Em todo o Brasil</p>
            </div>
          </div>
          
          <div className="bg-white px-6 py-4 rounded-lg shadow-md flex items-center gap-3">
            <div className="p-2 bg-success-500 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Garantia de 1 Ano</p>
              <p className="text-sm text-slate-500">Suporte técnico incluso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;