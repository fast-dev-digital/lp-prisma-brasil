
import { Section, Container } from '../layout';
import { Button } from '../ui/Button';
import { ShieldCheck, Clock } from 'lucide-react';

export const CTASection = () => {
  return (
    <Section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-black" />
      
      <Container className="relative z-10 text-center max-w-3xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl shadow-purple-900/20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Comece Sua Transformação Hoje
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Tenha acesso vitalício ao conteúdo, suporte exclusivo e atualizações constantes.
        </p>

        <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-gray-400 line-through text-lg">De R$ 197,00</span>
            <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">R$ 97,90</span>
            <span className="text-green-400 font-medium">ou 12x de R$ 9,90</span>
        </div>

        <Button size="lg" className="w-full md:w-auto mx-auto px-12 py-4 text-xl hover:scale-105 mb-6">
            GARANTIR MINHA VAGA AGORA
        </Button>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>Acesso imediato após confirmação</span>
            </div>
        </div>
      </Container>
    </Section>
  );
};
