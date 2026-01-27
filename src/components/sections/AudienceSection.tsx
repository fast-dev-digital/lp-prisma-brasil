
import { Section, Container } from '../layout';
import { CheckCircle2 } from 'lucide-react';

export const AudienceSection = () => {
    const audiences = [
        {
            title: "Líderes de Ministério",
            description: "Que desejam inspirar seus membros com uma visão clara e espiritual."
        },
        {
            title: "Jovens Cristãos",
            description: "Em busca de propósito e direção em um mundo cheio de distrações."
        },
        {
            title: "Pais e Mães",
            description: "Que querem construir um lar fundamentado nos princípios eternos."
        },
        {
            title: "Cristãos Cansados",
            description: "Para quem sente o peso da jornada e precisa de um lembrete diário de que a luz de Cristo não se apaga."
        }
    ];

  return (
    <Section id="quem-somos" className="bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rainbow opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-rainbow opacity-10 rounded-full blur-[100px]" />

      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para quem é este material?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Este conteúdo foi desenhado especificamente para quem não se conforma com o raso e busca profundidade espiritual prática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((item, idx) => (
                <div key={idx} className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};
