import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import tractorImg from '../assets/tractor_hero.png';
import crmImg from '../assets/crm_mockup.png';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section className="min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden relative">
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="max-w-2xl px-4 lg:px-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-2 bg-transparent rounded-none border border-[var(--color-foreground)] text-sm font-semibold uppercase tracking-widest text-[var(--color-foreground)]"
          >
            <span className="w-2 h-2 rounded-none bg-[var(--color-foreground)] animate-pulse"></span>
            O Novo Padrão de Vendas no Agronegócio
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] lg:leading-[0.95] mb-6 text-balance">
            Pare de vender seus ativos e equipamentos a preço de sucata.
          </h1>
          
          <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed max-w-[55ch]">
            Venda seus equipamentos em um site criado por especialistas, com um sistema de vendas automatizado por Inteligência Artificial operando 24/7. Nós fazemos o trabalho pesado para você.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center">
            <Button 
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/quiz');
              }} 
              size="lg" 
              className="w-full sm:w-auto"
            >
              Montar projeto exclusivo a custo zero
            </Button>
          </div>
          <p className="text-xs text-[var(--color-muted)] flex items-center mt-4">
            Você não pode ficar de fora. As empresas que utilizam a inteligência artificial da melhor forma saem na frente.
          </p>
        </motion.div>

        {/* Right Asset/Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="relative lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
        >
          {/* Main Machinery Image */}
          <div className="absolute inset-x-0 inset-y-8 lg:inset-0 rounded-none overflow-hidden border border-[var(--color-foreground)] shadow-none">
            <div className="absolute inset-0 bg-[var(--color-foreground)]/20 z-10" />
            <img src={tractorImg} alt="Máquina Agrícola Moderna" className="w-full h-full object-cover object-center" />
          </div>
          
          {/* Floating Dashboard Overlay */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-20 bg-[var(--color-foreground)] rounded-none w-[90%] md:w-[85%] aspect-[16/9] border border-[var(--color-background)] overflow-hidden mt-32 lg:mt-48 lg:-ml-16"
          >
            <img src={crmImg} alt="CRM Dashboard Interface" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </motion.div>
          
          {/* Floating Metric Card */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 lg:-bottom-8 -left-4 sm:-left-8 bg-[var(--color-foreground)] text-[var(--color-background)] p-6 rounded-none z-30 border border-[var(--color-background)]/50 backdrop-blur-md"
          >
            <div className="text-sm font-semibold mb-1 opacity-80">CRM Focus</div>
            <div className="font-mono text-2xl font-bold tracking-tight text-white">+R$ 145.000</div>
            <div className="text-xs text-emerald-400 mt-1">Margem recuperada (vs leilão)</div>
          </motion.div>

        </motion.div>
      </div>
    </Section>
  );
};
