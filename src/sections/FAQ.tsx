import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { CaretDown } from '@phosphor-icons/react';
import { cn } from '../utils/cn';

const questions = [
  {
    q: "Vou precisar contratar alguém para cuidar do site?",
    a: "Não. Nosso ecossistema inclui um Agente de IA que atua 24/7. Ele cuida do atendimento inicial, qualifica as intenções de compra e responde a dúvidas técnicas detalhadas sobre os equipamentos antes de mandar a oportunidade quente para seu WhatsApp."
  },
  {
    q: "Como assim vocês desenham o projeto a custo zero?",
    a: "Nós mapeamos a sua necessidade (volume do seu estoque de maquinários, ticket médio e perfil comprador) e te entregamos um escopo do portal e fluxo de conversas da IA. Isso é um investimento nosso para você ver a tecnologia aplicada à sua realidade."
  },
  {
    q: "E se os meus clientes não gostarem de falar com o robô?",
    a: "A IA da GaferoMac possui um modelo refinado com linguagem natural focada especificamente no produtor rural. Ela conversa como um humano especializado e sabe as dores da sucata. Se notar resistência ou fricção do lead, o sistema automaticamente conecta nossa equipe ou a sua."
  },
  {
    q: "A plataforma aceita integração com meu ERP?",
    a: "Total. A estrutura conta com um CRM exclusivo para o controle de funil que também possui APIs abertas para fluir dados até o seu ERP financeiro. A autonomia da ferramenta é ampla e integrada."
  }
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section background="primary" containerSize="narrow" className="pt-0 md:pt-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <span className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-xs mb-4 block">Dúvidas Frequentes</span>
        <h2 className="text-3xl md:text-5xl font-display">Tudo o que você precisa saber.</h2>
      </motion.div>

      <div className="space-y-4">
        {questions.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className={cn(
              "border border-[var(--color-foreground)]/20 bg-transparent rounded-none overflow-hidden transition-all duration-300",
              open === idx ? "shadow-md border-[var(--color-accent)]/20" : "shadow-sm border-[var(--color-foreground)]/10"
            )}
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer group"
            >
              <h3 className="font-semibold text-lg md:text-xl font-display group-hover:text-[var(--color-accent)] transition-colors">{faq.q}</h3>
              <motion.div animate={{ rotate: open === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <CaretDown size={20} className={cn("transition-colors", open === idx ? "text-[var(--color-accent)]" : "text-[var(--color-foreground)]/50 group-hover:text-[var(--color-foreground)]")} />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.46, 0.03, 0.52, 0.96] }}
                  className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed text-[15px]"
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
