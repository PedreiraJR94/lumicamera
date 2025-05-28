import React from 'react';
import { Truck, Shield, HeadphonesIcon } from 'lucide-react';

const GuaranteeCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="mb-4 p-4 bg-primary-100 text-primary-600 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const Guarantees: React.FC = () => {
  const guarantees = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envio Imediato FULL/FLEX",
      description: "Receba em até 3 dias úteis em capitais e 7 dias para demais regiões.",
      delay: 0
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Nota Fiscal e Garantia",
      description: "Produto 100% original com garantia de 1 ano contra defeitos de fabricação.",
      delay: 100
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Suporte em Português",
      description: "Equipe de suporte técnico especializada disponível por telefone, e-mail e WhatsApp.",
      delay: 200
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Garantias e Diferenciais</h2>
          <p>Tenha total tranquilidade ao fazer sua compra com nossas garantias exclusivas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <GuaranteeCard
              key={index}
              icon={guarantee.icon}
              title={guarantee.title}
              description={guarantee.description}
              delay={guarantee.delay}
            />
          ))}
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="text-xl font-semibold text-dark-800 mb-8">
            "Compre com total segurança e receba em poucos dias!"
          </p>
          <div className="flex justify-center">
            <img 
              src="https://i.imgur.com/lld4agM.png" 
              alt="Selos de qualidade e segurança" 
              className="rounded-lg shadow-md h-24 md:h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;