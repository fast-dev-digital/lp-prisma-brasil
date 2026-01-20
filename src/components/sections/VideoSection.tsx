import { useState } from 'react';
import YouTube, { type YouTubeProps } from 'react-youtube';
import { Section, Container } from '../layout';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export const VideoSection = () => {
  // Estado para controlar se o botão de compra aparece
  const [showButton, setShowButton] = useState(false);

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

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    // 0 = Ended (Vídeo terminou)
    if (event.data === 0) {
      setShowButton(true);
    }
  };

  return (
    <Section id="vsl" className="bg-black text-white py-20 border-t border-white/5">
      <Container size="md" className="flex flex-col items-center">
        
        {/* Título com o Gradiente "Prisma" (Pink -> Purple -> Blue) */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Veja como <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">transformar sua vida</span> agora
        </h2>

        {/* Wrapper do Vídeo */}
        <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-white/10 relative group">
          {/* Efeito de brilho atrás do vídeo (opcional, para dar destaque) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
          
          <YouTube 
            videoId={VIDEO_ID} 
            opts={opts} 
            onStateChange={onStateChange}
            className="absolute top-0 left-0 w-full h-full relative z-10"
            iframeClassName="w-full h-full"
          />
        </div>

        {/* Botão com Delay - Agora usando o gradiente padrão do tema */}
        {showButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <Button 
              size="lg" 
              variant="primary" /* Usa o gradiente definido no seu Button.tsx */
              className="px-12 py-6 text-xl shadow-xl shadow-purple-500/20 animate-pulse hover:animate-none"
            >
              QUERO GARANTIR MINHA VAGA
            </Button>
          </motion.div>
        )}

      </Container>
    </Section>
  );
};