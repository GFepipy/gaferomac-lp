import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Handshake } from '@phosphor-icons/react';

export const Guarantee = () => {
  return (
    <Section background="primary">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.46, 0.03, 0.52, 0.96] }}
        className="max-w-4xl mx-auto text-center bg-transparent rounded-none p-10 md:p-20 border border-[var(--color-foreground)] shadow-none relative overflow-hidden"
      >
        <div className="w-16 h-16 bg-transparent rounded-none flex items-center justify-center mx-auto mb-8 text-[var(--color-foreground)] border border-[var(--color-foreground)]" >
          <Handshake size={32} weight="duotone" />
        </div>
        <h2 className="text-3xl md:text-5xl font-display mb-6 tracking-tight text-balance">
          Nosso compromisso é ganhar dinheiro <span className="text-[var(--color-accent)] block mt-2">com você, e não de você.</span>
        </h2>
        <p className="text-lg text-[var(--color-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
          Preencha o formulário e vamos montar um projeto exclusivo para a sua empresa a custo zero. Sem fricção. Sem amarras tecnológicas complicadas.
        </p>
        <div className="inline-block border border-[var(--color-foreground)]/20 bg-transparent px-6 py-4 rounded-none font-semibold text-[var(--color-foreground)] text-sm md:text-base">
          Devolvemos seu dinheiro em até 15 dias. Se não fizer sentido, nos avise.
        </div>
      </motion.div>
    </Section>
  );
};
