import { useState, useEffect } from 'react';
import { Container } from './index';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../../assets/logo-prisma-brasil.png';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true);  // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Para Quem', href: '#quem-somos' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        lastScrollY > 20 ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'
      )}
    >
      <Container className="flex items-center justify-between relative">
        <a href="#" className="flex items-center gap-2 group z-50 relative">
           <img 
             src={logo} 
             alt="Prisma Brasil" 
             className="h-20 md:h-28 w-auto object-contain transition-transform group-hover:scale-105" 
           />
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

         {/* CTA Button - Right Aligned (Desktop) */}
         <div className="hidden md:block z-50">
             <Button variant="primary" size="md" className="font-bold text-base">
                 Quero Participar
             </Button>
         </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden absolute top-full left-0 right-0"
          >
            <Container className="py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
               <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
                Quero Participar
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
