import React from 'react';
import { Sun, Camera, TowerControl as RemoteControl, Battery, Shield } from 'lucide-react';

const BenefitCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="feature-card" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Iluminação Potente",
      description: "Cobre até 120m² com iluminação brilhante e eficiente, ideal para grandes áreas.",
      delay: 0
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Visão Noturna Colorida",
      description: "Veja imagens claras e coloridas mesmo na escuridão total com infravermelho automático.",
      delay: 100
    },
    {
      icon: <RemoteControl className="w-6 h-6" />,
      title: "Controle Total",
      description: "Controle remoto e via aplicativo no celular com tecnologia PTZ para visualização em 360°.",
      delay: 200
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Energia 100% Solar",
      description: "Funciona mesmo em dias nublados, com bateria de longa duração e recarga solar constante.",
      delay: 300
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proteção IP66",
      description: "Totalmente resistente à chuva, poeira e condições climáticas adversas.",
      delay: 400
    }
  ];

  return (
    <section id="benefits" className="section bg-white">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Benefícios Principais</h2>
          <p>Nossa luminária solar com câmera integrada oferece segurança e praticidade em um único dispositivo.</p>
        </div>

        <img
          src="https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg"
          alt="Luminária solar com câmera integrada"
          className="w-full max-w-4xl mx-auto rounded-xl shadow-lg mb-12"
          data-aos="fade-up"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;