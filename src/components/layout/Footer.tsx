
import { Container } from './index';
import { Mail, Instagram } from 'lucide-react';
import logo from '../../assets/logo-prisma-brasil.png';

export const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-center md:text-left">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                    <img src={logo} alt="Prisma Brasil" className="h-20 w-auto object-contain" />
                    <span className="font-bold text-xl text-white">Prisma Brasil</span>
                </div>
                <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                    Levando a mensagem do evangelho através de conteúdo relevante e transformador para a nossa geração.
                </p>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-4">Contato</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <Mail size={16} className="text-white" />
                        <span>contato@prismabrasil.com</span>
                    </li>
                    <li className="flex items-center gap-2 justify-center md:justify-start">
                        <Instagram size={16} className="text-white" />
                        <span>@prismabrasil</span>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Prisma Brasil. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
