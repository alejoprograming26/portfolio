import { ArrowUpRight, ShieldCheck, Terminal, Zap, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-900">
      
      {/* Section Header Tag */}
      <div className="flex items-center justify-between mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-lime-400">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" aria-hidden="true" />
          <span>Perfil Técnico &amp; Filosofía de Ingeniería</span>
        </div>
        <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
          System Identity // v2.4
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Developer Portrait Photo with Neon Apple Backlight & Telemetry Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 p-2 shadow-2xl group">
            
            {/* Subtle Neon Apple Glow behind photo frame */}
            <div 
              className="absolute -inset-1 rounded-3xl pointer-events-none blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(74, 222, 128, 0.45) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 80%)'
              }}
              aria-hidden="true"
            />

            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-900">
              <img
                src={PERSONAL_INFO.avatarImage}
                alt={`Retrato de ${PERSONAL_INFO.name}`}
                width={384}
                height={512}
                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-[filter] duration-700"
                loading="lazy"
                decoding="async"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Float badge over image */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="block text-[11px] font-mono text-lime-400">
                    {PERSONAL_INFO.role}
                  </span>
                </div>
                <span className="p-2 rounded-lg bg-zinc-900 text-lime-400 border border-zinc-800">
                  <Terminal className="w-4 h-4" />
                </span>
              </div>
            </div>

          </div>

          {/* Quick Location info underneath photo */}
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-lime-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Right Column: Editorial Value Proposition, Deep Bio, Core Metrics & CTA */}
        <div className="lg:col-span-7 space-y-6">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {PERSONAL_INFO.aboutEditorial}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
            {PERSONAL_INFO.aboutBio}
          </p>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Priorizo arquitecturas limpias y desacopladas, cero dependencias innecesarias, cobertura de tipos estricta y micro-interacciones que refuercen la usabilidad sin sobrecargar el navegador.
          </p>

          {/* 4 Technical Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-lime-500/30 transition-colors">
              <div className="flex items-center gap-2 text-lime-400 mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono font-semibold uppercase">Rendimiento</span>
              </div>
              <span className="text-sm font-bold text-white tracking-tight">Latencias p99 &lt; 15ms</span>
              <span className="block text-[11px] text-zinc-500 font-mono mt-0.5">Optimización en API &amp; DB</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-lime-500/30 transition-colors">
              <div className="flex items-center gap-2 text-lime-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono font-semibold uppercase">Fiabilidad</span>
              </div>
              <span className="text-sm font-bold text-white tracking-tight">100% Strict Type Safety</span>
              <span className="block text-[11px] text-zinc-500 font-mono mt-0.5">TypeScript en todo el stack</span>
            </div>
          </div>

          {/* Status badge with pulsating neon green light + Direct CTA */}
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500" />
              </span>
              <div>
                <span className="block text-xs font-mono text-lime-400 font-semibold uppercase tracking-wider">
                  Status: Available for hire
                </span>
                <span className="block text-xs text-zinc-400">
                  Abierto a proyectos de alto impacto y roles senior
                </span>
              </div>
            </div>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-tight bg-gradient-to-r from-lime-400 to-emerald-400 text-black hover:brightness-110 shadow-md shadow-lime-400/20 transition-[filter] duration-150 whitespace-nowrap cursor-pointer"
            >
              <span>Iniciar Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
