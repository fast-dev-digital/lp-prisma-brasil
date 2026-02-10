
import { Section, Container } from '../layout';
import { BookOpen, Heart, Shield, Infinity, Music } from 'lucide-react';

export const BenefitsSection = () => {
    const benefits = [
        {
            icon: <Music className="text-blue-500" size={28} />,
            title: "A História por Trás da Canção",
            description: "Entenda a inspiração real e bíblica de clássicos como Agradeço ao Pai e como eles se aplicam à sua luta hoje."
        },
        {
            icon: <BookOpen className="text-red-500" size={28} />,
            title: "Teologia, não Autoajuda",
            description: "Cada dia é fundamentado nas Escrituras (Ex: Filipenses), trazendo a mesma profundidade doutrinária dos nossos 45 álbuns."
        },
        {
            icon: <Shield className="text-green-500" size={28} />,
            title: "45 Anos de Experiência",
            description: "Aprenda com quem já viveu milagres, provações e vitórias em décadas de ministério pelo mundo."
        },
        {
            icon: <Heart className="text-orange-500" size={28} />,
            title: "Consolo Real",
            description: "Mensagens para momentos de angústia, escritas por quem viveu a realidade da estrada e da fé na prática."
        },
        {
            icon: <Infinity className="text-yellow-500" size={28} />,
            title: "Legado para sua Família",
            description: "Princípios eternos que sustentaram o Prisma Brasil e vão fortalecer a base da sua casa."
        }
    ];

  return (
    <Section className="bg-surface/50 border-y border-white/5">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <span className="text-sm font-bold text-white uppercase tracking-wider mb-2 block">
                Benefícios Exclusivos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Como sua fé será <br /> 
                <span className="text-white">renovada</span> nestes 30 dias
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
                Não é apenas um ebook ou curso, é um manual de sobrevivência e crescimento para o cristão moderno.
            </p>
            
            <div className="grid gap-6">
                {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface border border-white/5 flex items-center justify-center">
                            {benefit.icon}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">{benefit.title}</h4>
                            <p className="text-gray-400 text-sm">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="relative">
             <div className="absolute inset-0 bg-rainbow blur-[60px] opacity-20" />
             <div className="relative z-10 bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">
                 {/* Visual representation of content (e.g., Chapter list) */}
                 <div className="space-y-4">
                     {[
                        "Dia 01: A Chegada Vai Valer A Pena",
                        "Dia 07: A Coroação De Jesus",
                        "Dia 15: Angústia, Suor e Sangue",
                        "Dia 21: Bateu O Desespero",
                        "Dia 30: Como Seria Ter O Coração De Jesus",
                     ].map((title, i) => (
                         <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-surface/50 border border-white/5 hover:bg-white/5 transition-colors">
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-gray-500 flex-shrink-0">
                                 0{i + 1}
                             </div>
                             <div className="flex-1">
                                 <h4 className="font-medium text-white text-sm md:text-base line-clamp-1">{title}</h4>
                             </div>
                         </div>
                     ))}
                      <div className="p-4 rounded-lg bg-rainbow/10 border border-white/10 text-center text-sm font-medium text-white mt-4">
                          + Bônus Exclusivos Inclusos
                      </div>
                 </div>
             </div>
        </div>
      </Container>
    </Section>
  );
};
