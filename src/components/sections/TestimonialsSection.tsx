
import { Section, Container } from '../layout';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Lucas Pereira",
            role: "Líder de Jovens",
            content: "Mudou completamente a forma como eu enxergo minha liderança. O conteúdo é profundo e muito prático ao mesmo tempo.",
            image: "https://i.pravatar.cc/100?img=11"
        },
        {
            name: "Ana Clara",
            role: "Empreendedora",
            content: "Estava perdida sem saber como conciliar minha fé com meus negócios. Esse material foi a resposta de oração que eu precisava.",
            image: "https://i.pravatar.cc/100?img=5"
        },
        {
            name: "Pr. Marcos Silva",
            role: "Pastor Sênior",
            content: "Recomendo para todos os membros da minha igreja. É um material de excelente qualidade teológica e visual.",
            image: "https://i.pravatar.cc/100?img=3"
        }
    ];

  return (
    <Section id="depoimentos" className="bg-black relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem quem já <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">viveu essa experiência</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
                <div key={idx} className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 relative">
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(star => (
                            <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">"{item.content}"</p>
                    
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full ring-2 ring-purple-500/20" />
                        <div>
                            <h4 className="font-bold text-white">{item.name}</h4>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Container>
    </Section>
  );
};
