import React from 'react';
import { Battery, Lightbulb, Camera, Wifi } from 'lucide-react';

const SpecItem: React.FC<{
  name: string;
  value: string;
}> = ({ name, value }) => {
  return (
    <div className="flex justify-between py-3 border-b border-slate-200">
      <span className="text-slate-600">{name}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};

const Specifications: React.FC = () => {
  return (
    <section id="specs" className="section bg-slate-50">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Especificações Técnicas</h2>
          <p>Conheça todos os detalhes técnicos do nosso produto de alta tecnologia.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Luminária</h3>
              </div>
              
              <div className="space-y-1">
                <SpecItem name="Potência" value="450W" />
                <SpecItem name="Área de cobertura" value="até 120m²" />
                <SpecItem name="Temperatura de cor" value="6000K (branco frio)" />
                <SpecItem name="Ângulo de iluminação" value="120°" />
                <SpecItem name="Sensor de movimento" value="Alcance de 8-12m" />
                <SpecItem name="Modos de iluminação" value="3 (baixo, médio, alto)" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                  <Battery className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Energia</h3>
              </div>
              
              <div className="space-y-1">
                <SpecItem name="Painel solar" value="Monocristalino 5V/10W" />
                <SpecItem name="Bateria" value="26800mAh" />
                <SpecItem name="Autonomia" value="24h (totalmente carregada)" />
                <SpecItem name="Tempo de carga" value="6-8h (sol pleno)" />
                <SpecItem name="Proteção" value="Sobrecarga e descarga profunda" />
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Câmera</h3>
              </div>
              
              <div className="space-y-1">
                <SpecItem name="Resolução" value="2K (2304×1296p)" />
                <SpecItem name="Sensor" value="CMOS 1/2.7″" />
                <SpecItem name="Ângulo de visão" value="355° horizontal, 90° vertical" />
                <SpecItem name="Visão noturna" value="Colorida até 20m" />
                <SpecItem name="Áudio" value="Bidirecional com cancelamento de ruído" />
                <SpecItem name="Detecção" value="Movimento e pessoa/veículo" />
                <SpecItem name="Compressão" value="H.265/H.264" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold">Conectividade</h3>
              </div>
              
              <div className="space-y-1">
                <SpecItem name="Wi-Fi" value="2.4GHz (802.11 b/g/n)" />
                <SpecItem name="Alcance Wi-Fi" value="até 50m em área aberta" />
                <SpecItem name="Armazenamento" value="Cartão MicroSD até 128GB" />
                <SpecItem name="Controle remoto" value="Até 30m" />
                <SpecItem name="App compatível" value="iOS 9.0+ / Android 5.0+" />
                <SpecItem name="Proteção" value="IP66 (à prova d'água e poeira)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
