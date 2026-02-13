
import { Section, Container } from '../layout';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import bookCover from '../../assets/capa-livro1-prismabrasil.png';
import heroBg from '../../assets/hero-official.webp';

export const Hero = () => {
  return (
    <Section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden isolate">
      {/* Background Image - LCP Optimized */}
      <img 
        src={heroBg} 
        alt="Prisma Brasil Oficial" 
        className="absolute inset-0 w-full h-full object-cover z-0"
        fetchPriority="high"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black/90 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-transparent z-0" />
      
      <Container className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-6">
            <span className="flex items-center gap-1 text-yellow-400 text-xs font-semibold">
              <Star size={12} fill="currentColor" /> 
              Edição Comemorativa • 45 Anos de História
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Não é apenas um devocional. <br />
            <span className="text-gray-100">
              É a história do Prisma Brasil edificando a sua fé.
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
            Descubra os bastidores espirituais das canções que marcaram gerações. 30 dias de reflexões baseadas em experiências reais de nossas turnês e fundamentadas na Palavra de Deus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto hover:scale-105" onClick={() => window.open('https://pay.kiwify.com.br/TpboKkz', '_blank')}>
              Quero Iniciar Minha Jornada
              <ChevronRight size={20} />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p>Junte-se a mais de <span className="text-gray-100 font-semibold">1.200 vidas impactadas</span></p>
          </div>
        </motion.div>
        
        {/* Abstract/Image Visual Placeholder */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative mt-12 md:mt-0"
        >
             <div className="relative w-full aspect-[3/4] md:max-w-md lg:max-w-lg">
                 {/* Decorative circles/glow */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-blue-500/20 blur-3xl rounded-full animate-pulse" />
                 
                 {/* Main Image Container */}
                 <div className="relative z-10 w-full h-full flex items-center justify-center group">
                      <img 
                        src={bookCover} 
                        alt="Capa do Livro Manual do Propósito" 
                        className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-3xl hover:scale-105 transition-transform duration-500"
                      />
                 </div>
             </div>
        </motion.div>
      </Container>
    </Section>
  );
};
