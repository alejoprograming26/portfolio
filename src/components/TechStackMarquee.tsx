import React from 'react';
import { Cpu } from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

export const TechStackMarquee: React.FC = () => {
  const marqueeItems = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <section className="py-8 border-y border-white/5 bg-zinc-950/40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-zinc-400" />
          <span className="uppercase tracking-widest text-zinc-400 font-semibold">
            Tech Stack &amp; Architectural Ecosystem
          </span>
        </div>
        <span className="text-[11px] text-zinc-600">
          Tecnologías de producción verificadas
        </span>
      </div>

      <div className="relative w-full overflow-hidden mask-fade">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-zinc-900/30 border border-zinc-800/60 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-150 group cursor-default select-none whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-lime-400 transition-colors" />
              <span className="text-xs font-mono font-medium tracking-tight">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 group-hover:text-zinc-300">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
