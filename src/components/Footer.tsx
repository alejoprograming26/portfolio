import { ArrowUp, Terminal } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
};

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
            <Terminal className="w-3 h-3 text-lime-400" />
          </span>
          <p className="text-xs font-mono text-zinc-500">
            © {CURRENT_YEAR} Alejandro Alvarez. Diseñado con estética Geist &amp; Linear.
          </p>
        </div>

        {/* Center: System Telemetry / Technical Metadata in Mono */}
        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Vercel Edge Ready
          </span>
          <span>•</span>
          <span>React 19 + TS</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>

        {/* Right: Back to top button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          aria-label="Volver arriba"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>

      </div>
    </footer>
  );
};
