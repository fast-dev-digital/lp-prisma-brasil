import YouTube, { type YouTubeProps } from 'react-youtube';
import { Section, Container } from '../layout';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const VideoSection = () => {
  // SEU_ID_DO_VIDEO aqui
  const VIDEO_ID = "rkJQQ7kG8QM"; 

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      showinfo: 0,
    },
  };

  return (
    <Section id="vsl" className="bg-black text-white py-20 border-t border-white/5">
      <Container size="md" className="flex flex-col items-center">
        
        {/* Título com o Gradiente "Prisma" */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Veja como <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">transformar sua vida</span> agora
        </h2>

        {/* Wrapper do Vídeo */}
        <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-white/10 relative group mb-10">
          {/* Efeito de brilho atrás do vídeo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
          
          <YouTube 
            videoId={VIDEO_ID} 
            opts={opts} 
            className="absolute top-0 left-0 w-full h-full relative z-10"
            iframeClassName="w-full h-full"
          />
        </div>

        {/* Botão de CTA - Agora sempre visível */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Anima quando aparece na tela (scroll)
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <Button 
            size="lg" 
            variant="primary" /* Usa o gradiente padrão do seu tema */
            className="w-full sm:w-auto px-12 py-6 text-xl shadow-xl shadow-purple-500/20 animate-pulse hover:animate-none"
            onClick={() => {
              // Exemplo: Scroll suave para a seção de Checkout ou Link externo
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            QUERO GARANTIR MINHA VAGA
          </Button>
        </motion.div>

        {/* Texto de garantia/segurança abaixo do botão (opcional, aumenta conversão) */}
        <p className="mt-4 text-gray-500 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          Ambiente 100% Seguro e Criptografado
        </p>

      </Container>
    </Section>
  );
};