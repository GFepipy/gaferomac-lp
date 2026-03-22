import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { ArrowRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <Section background="dark" className="border-t border-white/5 relative py-20 pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.05]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="text-[var(--color-background)]/80 font-semibold tracking-widest uppercase text-xs mb-4 block">A Validação do seu Modelo</span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl text-[var(--color-background)] mb-6 tracking-tighter font-display leading-[1.05]">
          Descubra quanto dinheiro está deixando na mesa.
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Responda a três rápidas perguntas e receba uma análise de viabilidade detalhada de quanto a nossa Inteligência Artificial pode maximizar os lucros da sua frota.
        </p>
        <Button 
          onClick={() => {
            window.scrollTo(0, 0);
            navigate('/quiz');
          }} 
          magnetic={false} 
          variant="glass" 
          className="py-5 px-10 text-sm md:text-base uppercase tracking-widest group inline-flex items-center justify-center gap-3 border border-white/20 text-[var(--color-background)] bg-white/5 hover:bg-white/10 rounded-full w-full md:w-auto"
        >
          Iniciar Análise Gratuita <ArrowRight weight="bold" size={20} className="group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Section>
  );
};
