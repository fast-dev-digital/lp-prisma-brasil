
import { Section, Container } from '../layout';
import { Play } from 'lucide-react';

export const VideoSection = () => {
  return (
    <Section id="sobre" className="bg-surface border-y border-white/5">
      <Container size="md" className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Entenda como esse método pode <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">transformar sua vida</span> em 30 dias
        </h2>
        
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group cursor-pointer">
            {/* Placeholder for video file or embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 group-hover:bg-gray-900/60 transition-colors">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="ml-1 text-white fill-white" />
                 </div>
            </div>
            
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-left">
                <p className="text-white font-medium">Assista à apresentação completa</p>
                <p className="text-sm text-gray-400">Duração: 05:32</p>
            </div>
        </div>
      </Container>
    </Section>
  );
};
