import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle, ArrowLeft } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const quizQuestions = [
  {
    id: "desafio",
    question: "Qual o seu maior desafio na venda de máquinas hoje?",
    options: [
      { label: "Margens muito baixas nos leilões", value: "margem" },
      { label: "Demora excessiva para vender", value: "liquidez" },
      { label: "Falta de tempo/equipe para prospectar", value: "tempo" },
    ]
  },
  {
    id: "volume",
    question: "Quantos equipamentos pesados sua empresa renova ou descarta por ano?",
    options: [
      { label: "Até 10 equipamentos", value: "ate-10" },
      { label: "De 11 a 50 equipamentos", value: "11-50" },
      { label: "Mais de 50 equipamentos", value: "50-mais" },
    ]
  },
  {
    id: "metodo",
    question: "Como você realiza esse repasse atualmente?",
    options: [
      { label: "Exclusivamente por leilões", value: "leiloes" },
      { label: "Venda direta para revendedores", value: "revendedores" },
      { label: "Mix interno de plataformas e equipe", value: "interna" },
    ]
  }
];

export const QuizPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({ empresa: '', email: '', phone: '' });
  const [formStep, setFormStep] = useState(0);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
      setStep(s => s + 1);
    }, 400);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 2) {
      setFormStep(s => s + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  return (
    <div className="min-h-[100dvh] bg-[var(--color-foreground)] flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.05]" />
      
      {/* Quiz Header */}
      <header className="w-full p-6 sm:p-8 flex justify-between items-center relative z-20">
        <button 
          onClick={() => navigate('/')} 
          className="text-[var(--color-background)]/60 hover:text-[var(--color-background)] flex items-center gap-2 font-bold text-[11px] uppercase tracking-widest transition-colors cursor-pointer"
        >
          <ArrowLeft weight="bold" size={16} /> Voltar
        </button>
        <div className="text-[var(--color-background)] font-display font-bold text-xl tracking-tighter">GaferoMac</div>
      </header>
      
      {/* Quiz Body */}
      <div className="flex-1 max-w-5xl w-full mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10 items-center justify-center px-6 lg:px-8 py-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="md:w-[45%] flex flex-col justify-center"
        >
          <span className="text-[var(--color-background)]/80 font-semibold tracking-widest uppercase text-xs mb-4 block">Análise de Potencial</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-background)] mb-6 text-balance tracking-tighter font-display leading-[1.05]">
            Configure seu perfil de venda corporativa.
          </h1>
          <p className="text-white/60 text-lg mb-8 max-w-[35ch] leading-relaxed">
            Mapeamos o volume do seu estoque e perfil de repasse para calcular o quanto a automação pode devolver em margem líquida.
          </p>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1,2,3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-none border border-white/20 overflow-hidden bg-transparent flex items-center justify-center">
                  <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=Gafero${i}&backgroundColor=D3D1C6`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 font-semibold uppercase tracking-wider pl-4 ml-1 border-l border-white/10 leading-tight">Junte-se a dezenas<br/>de maquinarias no padrão</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.46, 0.03, 0.52, 0.96] }}
          className="md:w-[55%] w-full relative min-h-[460px]"
        >
          <div className="bg-transparent p-6 sm:p-10 border border-[var(--color-foreground)]/50 relative w-full h-full flex flex-col shadow-2xl backdrop-blur-md">
            
            {/* Progress Bar */}
            {step < quizQuestions.length && !isSuccess && (
              <div className="mb-10">
                <div className="flex justify-between items-end text-xs font-bold text-[var(--color-background)]/50 uppercase tracking-widest mb-3">
                  <span>Passo {step + 1} de {quizQuestions.length}</span>
                  <span className="text-sm text-[var(--color-background)]">{Math.round(((step + 1) / quizQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 relative overflow-hidden rounded-none">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((step + 1) / quizQuestions.length) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-[var(--color-background)]"
                  />
                </div>
              </div>
            )}

            <div className="relative flex-1">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center flex flex-col items-center justify-center h-full py-12"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-none border border-emerald-500/30 flex items-center justify-center mb-6 mx-auto">
                      <CheckCircle size={32} weight="duotone" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-display text-[var(--color-background)] mb-4">Projeto Solicitado!</h3>
                    <p className="text-[var(--color-background)]/70 leading-relaxed text-sm mb-8">
                      Nossa IA já começou a processar suas informações. Um consultor especialista da GaferoMac entrará em contato com o seu plano exclusivo de repasse estruturado.
                    </p>
                    <Button onClick={() => navigate('/')} variant="glass" magnetic={false} className="w-full py-4 text-xs font-bold uppercase tracking-widest border-none text-[var(--color-background)] bg-white/10 hover:bg-white/20 rounded-full">
                      Voltar para Início
                    </Button>
                  </motion.div>
                ) : step < quizQuestions.length ? (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full"
                  >
                    <h3 className="text-2xl md:text-[28px] font-display text-[var(--color-background)] mb-8 leading-tight text-balance">
                      {quizQuestions[step].question}
                    </h3>
                    <div className="space-y-3 mt-auto mb-4">
                      {quizQuestions[step].options.map((option, idx) => {
                        const isSelected = answers[quizQuestions[step].id] === option.value;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleAnswer(quizQuestions[step].id, option.value)}
                            className={`w-full text-left p-4 lg:p-5 border ${isSelected ? 'border-[var(--color-background)] bg-[var(--color-background)]/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'} transition-all flex items-center justify-between group cursor-pointer focus:outline-none rounded-full px-8`}
                          >
                            <span className="text-[var(--color-background)] font-medium text-sm sm:text-[15px] leading-snug">{option.label}</span>
                            <ArrowRight weight="bold" className={`transition-transform duration-300 ${isSelected ? 'opacity-100 text-[var(--color-background)] translate-x-1' : 'opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 text-[var(--color-background)]'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`form-${formStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col h-full justify-center"
                  >
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Match Confirmado</div>
                      <h3 className="text-2xl md:text-3xl font-display text-[var(--color-background)] mb-2">Para onde enviamos a análise?</h3>
                      <p className="text-[var(--color-background)]/60 text-sm leading-relaxed">
                        Seus dados confirmam que a GaferoMac pode aumentar significativamente suas margens de venda.
                      </p>
                    </div>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                      {formStep === 0 && (
                        <div>
                          <input autoFocus required type="text" value={formData.empresa} onChange={(e) => setFormData({...formData, empresa: e.target.value})} placeholder="Nome da sua empresa (Ex: AgroMaq Ltda)" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-3 sm:py-4 focus:outline-none focus:border-[var(--color-background)] focus:bg-white/10 transition-all font-medium text-[var(--color-background)] placeholder-white/40 text-sm" />
                        </div>
                      )}
                      {formStep === 1 && (
                        <div>
                          <input autoFocus required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Seu E-mail Corporativo" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-3 sm:py-4 focus:outline-none focus:border-[var(--color-background)] focus:bg-white/10 transition-all font-medium text-[var(--color-background)] placeholder-white/40 text-sm" />
                        </div>
                      )}
                      {formStep === 2 && (
                        <div>
                          <input autoFocus required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="WhatsApp / Telefone para contato" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-3 sm:py-4 focus:outline-none focus:border-[var(--color-background)] focus:bg-white/10 transition-all font-medium text-[var(--color-background)] placeholder-white/40 text-sm" />
                        </div>
                      )}
                      <Button disabled={isSubmitting} type="submit" variant="glass" magnetic={false} className="w-full py-4 text-xs font-bold uppercase tracking-widest mt-2 group flex justify-center gap-2 relative overflow-hidden border-none text-[var(--color-background)] bg-white/10 hover:bg-white/20 rounded-full cursor-pointer">
                        {formStep < 2 ? 'Continuar' : (isSubmitting ? 'Gerando plano...' : 'Receber Análise Gratuita')} 
                        {!isSubmitting && <ArrowRight weight="bold" size={16} className="group-hover:translate-x-1 transition-transform" />}
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
