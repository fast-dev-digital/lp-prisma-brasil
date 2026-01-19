
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { VideoSection } from './components/sections/VideoSection';
import { AudienceSection } from './components/sections/AudienceSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { CTASection } from './components/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-pink-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <AudienceSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
