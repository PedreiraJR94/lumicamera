import React from 'react';
import { Building2, Users, Award, HeartHandshake } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Sobre Nós</h2>
          <p>Inovação e qualidade a serviço da sua segurança</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="prose max-w-none">
              <p className="text-lg text-slate-700 mb-6">
                Há 8 anos no mercado de iluminação e segurança, a Soluz se destaca pelo compromisso com a qualidade e inovação. Nossa trajetória é marcada pela confiança de mais de 10.000 clientes satisfeitos em todo o Brasil, que escolheram nossas soluções para proteger o que mais importa.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                Nossa equipe de especialistas está sempre pronta para oferecer um atendimento personalizado e humanizado, garantindo que cada cliente encontre a solução ideal para suas necessidades. Acreditamos que segurança e tecnologia devem ser acessíveis e fáceis de usar.
              </p>
              <p className="text-lg text-slate-700">
                Oferecemos garantia de 12 meses em todos os produtos e política de satisfação garantida: se não estiver completamente satisfeito, devolvemos seu dinheiro em até 7 dias após a compra.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg w-fit mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">8 Anos</h3>
              <p className="text-slate-600">de experiência no mercado de segurança</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">+10.000</h3>
              <p className="text-slate-600">clientes satisfeitos em todo o Brasil</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg w-fit mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-slate-600">produtos com certificação e garantia</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="p-3 bg-primary-100 text-primary-600 rounded-lg w-fit mb-4">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-slate-600">atendimento humanizado e especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;