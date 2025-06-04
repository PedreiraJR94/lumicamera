import React from 'react';
import { ShoppingCart, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-800 mb-4 leading-tight">
              Iluminação e Segurança 24h — Sem Fios, Sem Complicações!
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              Câmera IP com visão noturna colorida, Wi-Fi, áudio bidirecional e controle total pelo celular.
            </p>
            <div className="aspect-square w-full max-w-2xl mx-auto mb-8">
              <img
                src="https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg"
                alt="Câmera de segurança com visão noturna"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="btn-accent btn-lg flex items-center justify-center gap-2 animate-pulse-slow">
                <ShoppingCart className="w-5 h-5" />
                <span>Compre Agora com Frete Rápido e Garantia!</span>
              </a>
              <a href="#features" className="btn bg-white hover:bg-slate-100 text-dark-800 flex items-center justify-center gap-1">
                <span>Ver Demonstração</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg" 
                    alt="Cliente satisfeito" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.pexels.com/photos/788567/pexels-photo-788567.jpeg" 
                    alt="Cliente satisfeito" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg" 
                    alt="Cliente satisfeito" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm text-slate-600">Mais de 10.000 clientes satisfeitos</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <img 
              src="https://i.imgur.com/hs2twgf.png" 
              alt="Luminária Solar com Câmera Integrada instalada em uma fachada" 
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;