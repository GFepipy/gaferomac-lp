import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';

const steps = [
  {
    number: "01",
    title: "Projeto Sob Medida",
    desc: "Preencha o formulário e nossa equipe desenha um modelo exclusivo para a sua empresa a custo zero."
  },
  {
    number: "02",
    title: "Implementação Completa",
    desc: "Nós criamos o seu site e integramos com nosso CRM focado em máquinas. Trabalho zero para você."
  },
  {
    number: "03",
    title: "Vendas 24/7 com IA",
    desc: "A inteligência artificial assume o primeiro atendimento, qualificando contatos e agendando visitas automaticamente."
  }
];

export const HowItWorks = () => {
  return (
    <Section background="primary" className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <span className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-xs mb-4 block">Delegação Total</span>
        <h2 className="text-3xl md:text-5xl text-balance">
          Meu amigo, site de venda não é o seu negócio. É o nosso. Deixe que nós criemos para você.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[1px] bg-[var(--color-foreground)]/10 z-0" />
        {steps.map((step, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.46, 0.03, 0.52, 0.96] }}
            key={index} 
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="w-20 h-20 bg-transparent border border-[var(--color-foreground)] text-[var(--color-foreground)] rounded-none flex items-center justify-center text-2xl font-display font-medium mb-6">
              {step.number}
            </div>
            <h3 className="text-xl md:text-2xl mb-3 font-display">{step.title}</h3>
            <p className="text-[var(--color-muted)] text-[15px] leading-relaxed max-w-[30ch]">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
