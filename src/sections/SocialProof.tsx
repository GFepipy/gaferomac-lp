import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Star } from '@phosphor-icons/react';

import carlosImg from '../assets/carlos.png';
import julianaImg from '../assets/juliana.png';
import robertoImg from '../assets/roberto.png';

const testimonials = [
  {
    name: "Carlos Eduardo Arantes",
    role: "Diretor Comercial - AgroMáquinas",
    content: "Antes da GaferoMac, perdíamos em média 35% do valor real dos tratores usados em leilões. Com o site próprio e a IA qualificando os leads, nossa margem subiu absurdamente no primeiro trimestre.",
    result: "+35% Recuperação",
    image: carlosImg
  },
  {
    name: "Juliana Mendes",
    role: "Gerente de Frota - Usina Alvorada",
    content: "Eu não tinha tempo de atender todo mundo que queria comprar nosso maquinário descontinuado. O agente virtual faz o processo inteiro: tira as dúvidas técnicas das colheitadeiras e me passa o WhatsApp só de quem vai comprar.",
    result: "120h economizadas/mês",
    image: julianaImg
  },
  {
    name: "Roberto Campos",
    role: "Proprietário - SC Tratores",
    content: "Achei que ter um site ia me dar dor de cabeça com TI. O modelo 'feito para você' cumpriu a promessa integralmente. Em semanas, tínhamos a vitrine no ar vendendo equipamentos com 40% a mais do que o sucateiro oferecia.",
    result: "+42% de Margem",
    image: robertoImg
  }
];

export const SocialProof = () => {
  return (
    <Section background="dark" className="overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/3 pt-4"
        >
          <span className="text-[var(--color-background)]/80 font-semibold tracking-widest uppercase text-xs mb-4 block">A Validação</span>
          <h2 className="text-3xl md:text-5xl text-[var(--color-background)] mb-6 text-balance">
            Resultados reais para o seu maquinário.
          </h2>
          <p className="text-white/60 mb-8 max-w-[35ch] leading-relaxed">
            Veja como empresas estão abandonando as soluções de descarte tradicionais para aumentar a liquidez dos equipamentos pesados e recuperar margens de lucro via IA.
          </p>
        </motion.div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative items-stretch">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.46, 0.03, 0.52, 0.96] }}
              className={`flex flex-col h-full ${idx === 2 ? 'md:col-span-2 w-full lg:w-4/5 mx-auto' : ''}`}
            >
              <Card hoverEffect={false} className="h-full bg-transparent border border-[var(--color-background)]/20 text-[var(--color-background)] p-8 md:p-10 shadow-none rounded-none backdrop-blur-sm">
                <div className="flex gap-1 text-[var(--color-background)]/80 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} weight="fill" size={16} />
                  ))}
                </div>
                <p className="text-white/80 text-[15px] leading-relaxed mb-8 font-medium">
                  "{test.content}"
                </p>
                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img src={test.image} alt={test.name} className="w-10 h-10 rounded-full object-cover border border-white/20" />
                    <div>
                      <div className="font-semibold text-sm text-white font-display tracking-wide">{test.name}</div>
                      <div className="text-xs text-white/50">{test.role}</div>
                    </div>
                  </div>
                  <div className="bg-transparent text-emerald-400 text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-none border border-emerald-400/50">
                    {test.result}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
