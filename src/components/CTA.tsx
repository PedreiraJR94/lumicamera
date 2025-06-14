import React, { useState, useEffect } from 'react';
import { Clock, Check, ShoppingCart, Shield, Star, Truck, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          return 59;
        }
        if (hours > 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          return 59;
        }
        clearInterval(timer);
        return 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [hours, minutes]);

  return (
    <section id="cta" className="section bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PROMOÇÃO RELÂMPAGO LEVE EM DOBRO!</h2>
            <p className="text-xl opacity-90 mb-6">
              Comprando sua Luminária Solar com Câmera até o final da promoção, você vai levar outra exatamente igual de graça! Obs: Limite de 1 pedido por CPF
            </p>
            <div className="flex justify-center items-center gap-4 my-8">
              <div className="flex flex-col items-center">
                <div className="bg-white text-primary-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                  {hours.toString().padStart(2, '0')}
                </div>
                <span className="text-sm mt-1">Horas</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center">
                <div className="bg-white text-primary-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                  {minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-sm mt-1">Minutos</span>
              </div>
              <span className="text-2xl font-bold">:</span>
              <div className="flex flex-col items-center">
                <div className="bg-white text-primary-700 w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold">
                  {seconds.toString().padStart(2, '0')}
                </div>
                <span className="text-sm mt-1">Segundos</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2" data-aos="fade-right">
              <img src="https://i.imgur.com/hs2twgf.png" alt="Luminária Solar com Câmera" className="rounded-xl shadow-lg w-full object-cover" />
            </div>
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="bg-white text-dark-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">LEVE EM DOBRO Luminária Solar com Câmera Integrada</h3>
                <div className="flex justify-center mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                </div>
                <div className="text-center mb-6">
                  <span className="text-sm line-through text-slate-500 block mb-1">De R$ 349,90</span>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-4xl font-bold text-accent-600">R$ 289,80</span>
                    <span className="text-sm bg-accent-100 text-accent-700 px-2 py-1 rounded-full font-semibold">-17% OFF</span>
                  </div>
                  <span className="text-sm text-slate-600 block mt-2">em até 12x</span>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-success-500" />
                    <span>Frete Grátis para todo Brasil</span>
                  </div>
                   <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-success-500" />
                    <span>Pague 1 e Leve 2, Pague 2 e Leve 4</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-success-500" />
                    <span>Parcelamento em até 12x</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-success-500" />
                    <span>Garantia de 12 meses</span>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-hidden mb-2">
                    <div className="absolute top-0 left-0 h-full bg-accent-600 w-[75%]"></div>
                  </div>
                  <p className="text-sm text-slate-600 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Restam apenas <b>23 unidades</b> em estoque!</span>
                  </p>
                </div>
                <a href="https://seguro.lojasoluz.com/r/jY974n5QQ2X9dG586" className="w-full py-6 px-8 bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mb-6">
                  <ShoppingCart className="w-7 h-7" />
                  <span>Quero Garantir a Minha Agora!</span>
                </a>
                <div className="flex justify-center gap-4 text-slate-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    <span>Envio Imediato</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-white/20 p-4 rounded-lg flex items-center gap-3">
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">
                  Ao efetuar a compra, você receberá um e-mail com o código de rastreamento e todas as instruções de instalação e configuração.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
