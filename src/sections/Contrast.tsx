import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { X, CheckCircle } from '@phosphor-icons/react';

const badPoints = [
  "Descarte em leilões perdendo valor real",
  "Venda para sucateiros por preço mínimo",
  "Perda de controle sobre o processo",
  "Dependência de atravessadores",
  "Muito dinheiro deixado na mesa"
];

const goodPoints = [
  "Canal direto e altamente profissional",
  "Autonomia total nas suas vendas",
  "Margens de lucro maximizadas",
  "Atendimento autônomo operando 24/7",
  "Controle total sobre seu estoque"
];

export const Contrast = () => {
  return (
    <Section background="dark" className="relative text-[var(--color-background)]">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto mb-6 text-[var(--color-background)]">
          Mude a história dos seus equipamentos. Você vai querer sair na frente ou continuar no passado?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative border border-white/10 rounded-none overflow-hidden bg-white/5">
        {/* Divider line for desktop */}
        <div className="hidden md:block absolute top-0 flex-col items-center justify-center left-1/2 w-[1px] h-full bg-white/10 z-10" />
        
        {/* Bad Side */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 md:p-12 lg:pr-20"
        >
          <div className="text-[var(--color-background)]/80 font-semibold mb-2 uppercase tracking-wide text-xs md:text-sm">O Custo do Atraso</div>
          <h3 className="text-2xl md:text-3xl mb-8 font-display text-[var(--color-background)]">O Inimigo Comum</h3>
          <ul className="space-y-6">
            {badPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 border border-[var(--color-background)]/30 p-1 rounded-none text-[var(--color-background)]/80">
                  <X weight="bold" size={16} />
                </div>
                <span className="text-white/70 leading-relaxed text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Good Side */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12 md:pl-20 lg:pl-24 bg-transparent"
        >
          <div className="text-emerald-400 font-semibold mb-2 uppercase tracking-wide text-xs md:text-sm">O Novo Padrão</div>
          <h3 className="text-2xl md:text-3xl mb-8 font-display text-[var(--color-background)]">Solução GaferoMac</h3>
          <ul className="space-y-6">
            {goodPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-emerald-400/20 p-1 rounded-full text-emerald-400">
                  <CheckCircle weight="fill" size={16} />
                </div>
                <span className="text-white/90 leading-relaxed font-medium text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};
