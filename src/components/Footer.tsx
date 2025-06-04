import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lamp-icon.svg" 
                alt="Soluz Logo" 
                className="w-8 h-8"
              />
              <span className="font-bold text-xl">Soluz</span>
            </div>
            <p className="text-slate-300 mb-6">
              Iluminação e segurança em um único produto. Tecnologia de ponta para o seu dia a dia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-dark-700 hover:bg-primary-600 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-dark-700 hover:bg-primary-600 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-dark-700 hover:bg-primary-600 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-white transition-colors">Recursos</a>
              </li>
              <li>
                <a href="#specs" className="text-slate-300 hover:text-white transition-colors">Especificações</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Central de Ajuda</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Política de Devolução</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">Garantia</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">contato@soluz.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">(11) 98765-4321</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Rua da Liberdade, 273 — São Paulo/SP — CEP 01502-000</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Soluz. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            CNPJ: 26.263.722/0001-22
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
