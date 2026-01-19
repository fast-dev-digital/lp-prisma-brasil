
import { Section, Container } from '../layout';
import { BookOpen, Heart, Shield, Zap } from 'lucide-react';

export const BenefitsSection = () => {
    const benefits = [
        {
            icon: <BookOpen className="text-pink-500" size={28} />,
            title: "Conhecimento Bíblico Profundo",
            description: "Vá além do superficial com estudos baseados em teologia sólida e aplicável."
        },
        {
            icon: <Heart className="text-purple-500" size={28} />,
            title: "Cura Emocional",
            description: "Ferramentas práticas para lidar com ansiedade, medo e insegurança à luz da fé."
        },
        {
            icon: <Zap className="text-yellow-500" size={28} />,
            title: "Clareza de Propósito",
            description: "Descubra exatamente o que você foi chamado para fazer nesta geração."
        },
        {
            icon: <Shield className="text-blue-500" size={28} />,
            title: "Fortalecimento Espiritual",
            description: "Crie uma rotina devocional inabalável e blinde sua mente contra o mal."
        }
    ];

  return (
    <Section className="bg-surface/50 border-y border-white/5">
      <Container className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 uppercase tracking-wider mb-2 block">
                Benefícios Exclusivos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                O que você vai <br /> 
                <span className="text-white">conquistar</span> com este guia
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
             <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 blur-[60px] opacity-20" />
             <div className="relative z-10 bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">
                 {/* Visual representation of content (e.g., Chapter list) */}
                 <div className="space-y-4">
                     {[1, 2, 3].map((i) => (
                         <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-surface/50 border border-white/5">
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-gray-500">
                                 0{i}
                             </div>
                             <div className="flex-1">
                                 <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
                                 <div className="h-2 w-1/2 bg-white/5 rounded" />
                             </div>
                         </div>
                     ))}
                      <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/20 text-center text-sm font-medium text-white mt-4">
                          + Bônus Exclusivos Inclusos
                      </div>
                 </div>
             </div>
        </div>
      </Container>
    </Section>
  );
};
