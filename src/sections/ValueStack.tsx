import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Globe, Robot, ChartLineUp } from '@phosphor-icons/react';

export const ValueStack = () => {
  return (
    <Section background="primary">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 max-w-2xl"
      >
        <span className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-xs mb-4 block">Seu Desempenho Maximizato</span>
        <h2 className="text-3xl md:text-5xl mb-6 text-balance">
          Transforme seu negócio em um sistema de vendas automatizado.
        </h2>
        <p className="text-lg text-[var(--color-muted)]">
          Tecnologia + Estratégia + Automação = Lucro sem esforço.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px] md:auto-rows-[400px]">
        {/* Big Card - spans 2 cols on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="md:col-span-2 relative h-full"
        >
          <Card className="h-full flex flex-col justify-center pt-10 px-6 md:px-12 overflow-hidden relative group border-[var(--color-foreground)] border-t-[var(--color-foreground)] rounded-none">
            <div className="relative z-10 w-full md:w-2/3">
              <div className="w-12 h-12 bg-transparent rounded-none flex items-center justify-center border border-[var(--color-foreground)] mb-6 text-[var(--color-foreground)]">
                <Robot size={24} weight="duotone" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-4 font-display">Agentes de Inteligência Artificial</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Atendentes virtuais que não dormem, fazendo a jornada completa, do contato ao agendamento de visita, com linguagem natural especializada no agro.
              </p>
            </div>
            
            <div className="hidden md:block absolute right-0 bottom-0 top-0 w-1/2 transition-transform group-hover:scale-[1.03] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden scale-100">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-[var(--color-background)]/90 to-transparent z-10" />
              <img src="network.png" alt="Motor e Máquina Conectados" className="w-full h-full object-cover object-left" />
            </div>
          </Card>
        </motion.div>

        {/* Square Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="h-full"
        >
          <Card className="h-full flex flex-col justify-center px-6 md:px-10 group rounded-none border-[var(--color-foreground)]">
            <div className="w-12 h-12 bg-transparent rounded-none flex items-center justify-center border border-[var(--color-foreground)] mb-6 text-[var(--color-foreground)]">
              <Globe size={24} weight="duotone" />
            </div>
            <h3 className="text-xl md:text-2xl mb-3 font-display">Site Próprio Exclusivo</h3>
            <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
              Uma vitrine digital só sua, sem concorrência direta como nos leilões. Plataforma super rápida focada em conversão e autonomia.
            </p>
          </Card>
        </motion.div>

        {/* Wide Card spanning full width, or 3 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="md:col-span-3 h-[400px]"
        >
          <Card className="h-full relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group px-6 md:px-12 py-10 rounded-none border-[var(--color-foreground)]">
            <div className="md:w-[45%] relative z-10 p-0 md:py-8">
               <div className="w-12 h-12 bg-transparent rounded-none flex items-center justify-center border border-[var(--color-foreground)] mb-6 text-[var(--color-foreground)]">
                <ChartLineUp size={24} weight="duotone" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-4 font-display">CRM Focado em Conversão</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Centralização e visibilidade total do funil – nunca mais perca o controle do relacionamento com os clientes. Visualize negociações ativas sendo geradas pela IA e equipe comercial.
              </p>
            </div>
            
            <div className="hidden md:flex flex-1 h-full relative items-center justify-end pr-4 pl-12 pt-0 pb-0">
              <div className="w-full max-w-[400px] aspect-square rounded-none border border-[var(--color-foreground)] overflow-hidden">
                {/* Abstract CRM lines animated */}
                <div className="flex flex-col gap-4 p-8 pt-10">
                  <motion.div animate={{ width: ['70%', '80%', '70%'] }} transition={{ duration: 5, repeat: Infinity }} className="h-6 bg-[var(--color-background)] bg-opacity-80 rounded"></motion.div>
                  <motion.div animate={{ width: ['40%', '50%', '40%'] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="h-6 bg-[var(--color-background)] bg-opacity-80 rounded"></motion.div>
                  <motion.div animate={{ width: ['90%', '95%', '90%'] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }} className="h-6 bg-[var(--color-background)] bg-opacity-80 rounded"></motion.div>
                  <motion.div animate={{ width: ['60%', '65%', '60%'] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }} className="h-6 bg-[var(--color-accent)]/20 rounded mt-4"></motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </Section>
  );
};
