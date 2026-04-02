export const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-foreground)] py-8 border-t border-[var(--color-background)]/5 text-center px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-display font-medium text-[var(--color-background)] tracking-wide">
          GaferoMac
        </div>
        <p className="text-white/40 text-[11px] uppercase tracking-wider text-balance">
          &copy; {new Date().getFullYear()} GaferoMac. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
