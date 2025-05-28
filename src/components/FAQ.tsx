import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleOpen}
      >
        <h3 className="font-medium text-lg">{question}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como instalar a luminária solar?",
      answer: "A instalação é simples e não requer fiação elétrica. Basta fixar o suporte em uma parede ou poste usando os parafusos inclusos, encaixar a luminária e ajustar o ângulo do painel solar para receber luz direta do sol. O produto vem com manual detalhado e kit de instalação completo."
    },
    {
      question: "A luminária funciona em dias nublados?",
      answer: "Sim! O painel solar de alta eficiência consegue captar energia mesmo em dias nublados, embora com menor eficiência. A bateria de 26800mAh garante autonomia de até 24 horas com carga completa, o suficiente para atravessar vários dias com pouca luz solar."
    },
    {
      question: "É compatível com meu celular?",
      answer: "O aplicativo é compatível com dispositivos iOS 9.0 ou superior e Android 5.0 ou superior. Basta baixar o app gratuito na App Store ou Google Play, criar uma conta e seguir as instruções para conectar sua luminária à rede Wi-Fi doméstica."
    },
    {
      question: "Como recebo notificações?",
      answer: "As notificações são enviadas diretamente para seu smartphone pelo aplicativo. Você pode personalizar os alertas para detecção de movimento, pessoas ou veículos, e definir áreas específicas de monitoramento. As notificações incluem imagens e você pode acessar imediatamente a transmissão ao vivo."
    },
    {
      question: "O produto tem garantia?",
      answer: "Sim, oferecemos garantia de 12 meses contra defeitos de fabricação. Além disso, você tem 7 dias para testar o produto e, caso não esteja satisfeito, pode solicitar a devolução com reembolso integral (desde que o produto esteja em perfeitas condições e na embalagem original)."
    },
    {
      question: "É possível armazenar as gravações?",
      answer: "Sim, as gravações podem ser armazenadas de três formas: no cartão MicroSD (até 128GB, vendido separadamente), na nuvem (com planos gratuitos e premium disponíveis) ou diretamente no seu smartphone através do aplicativo."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre nosso produto e funcionamento.</p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center" data-aos="fade-up">
          <p className="mb-4 text-lg">Ainda tem dúvidas?</p>
          <a 
            href="#" 
            className="btn bg-primary-600 hover:bg-primary-700 text-white inline-flex items-center gap-2"
          >
            <span>Fale com um especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;