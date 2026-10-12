import { useState } from 'react';
import {
  Layers,
  Server,
  Layout,
  Database,
  Cloud,
  Check,
  Cpu,
  Terminal,
  type LucideIcon,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons.tsx';
import type { Specialty } from '../types/portfolio';
import { PERSONAL_INFO, SPECIALTIES } from '../data/portfolioData';
import { VgpuBlackHole } from './black-hole/index.tsx';

const SPECIALTY_ICONS: Record<NonNullable<Specialty['icon']>, LucideIcon> = {
  server: Server,
  layout: Layout,
  database: Database,
  cloud: Cloud,
};

export const HeroSection = () => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState(SPECIALTIES[0].id);
  const activeSpecialty =
    SPECIALTIES.find((spec) => spec.id === activeSpecialtyId) ?? SPECIALTIES[0];

  return (
    <section id="inicio" className="relative pt-24 sm:pt-36 pb-12 sm:pb-16 px-3.5 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Outer rounded container with subtle border and ambient glow */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-zinc-950/85 border border-white/10 shadow-2xl shadow-black overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-dot-grid-subtle opacity-30 pointer-events-none" />

        {/* Ambient Neon Apple Glow positioned subtly in bottom-left */}
        <div 
          className="absolute bottom-1/3 -left-20 w-[380px] sm:w-[500px] h-[260px] sm:h-[340px] rounded-full pointer-events-none blur-3xl opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.25) 0%, rgba(34, 197, 94, 0.1) 40%, transparent 75%)',
          }}
          aria-hidden="true"
        />

        {/* ============================================================ */}
        {/* 1. TOP HERO BLOCK: Alejandro Alvarez + Seamless VGPU Black Hole */}
        {/* ============================================================ */}
        <div className="relative z-10 min-h-[580px] sm:min-h-[540px] px-5 sm:px-12 pt-14 sm:pt-20 pb-8 sm:pb-20 border-b border-white/5 overflow-hidden flex flex-col justify-end sm:justify-center">
          
          {/* Official VGPU Black Hole Canvas integrated seamlessly across hero background without any box/frame */}
          <div className="absolute inset-0 z-0 pointer-events-auto">
            <VgpuBlackHole 
              className="w-full h-full"
              centerX={0.52}
              centerY={0.02}
              distance={15.5}
            />
          </div>

          {/* Mobile bottom readability shadow (allows black hole to shine at the top while keeping text crisp) */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/85 to-transparent sm:hidden pointer-events-none z-[5]" aria-hidden="true" />

          {/* Typography sitting cleanly in front of the cosmic accretion disk */}
          <div className="relative z-10 max-w-2xl flex flex-col text-left pointer-events-none">
            {/* Status Pill with live pulse */}
            <div className="pointer-events-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-mono mb-3 w-fit shadow-lg shadow-black/60 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
              </span>
              <span className="text-zinc-300 font-medium text-[11px] sm:text-xs">Software Engineer</span>
              <span className="text-zinc-600">•</span>
              <span className="text-lime-400 font-semibold text-[11px] sm:text-xs">Full-Stack Architect</span>
            </div>

            {/* Display Name - Modern, authoritative tech typography */}
            <div className="relative mb-3">
              <h1 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.02] select-none tracking-[-0.035em]">
                <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                  {PERSONAL_INFO.headlineMain}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-400 to-lime-500 drop-shadow-[0_0_30px_rgba(163,230,53,0.35)]">
                  {PERSONAL_INFO.headlineSub}
                </span>
              </h1>
            </div>

            {/* Core Skills Badge Deck under the name */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 pointer-events-auto">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/85 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" aria-hidden="true" />
                React 19 &amp; TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/85 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                Node.js Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/85 border border-zinc-800 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400" aria-hidden="true" />
                High-Performance APIs
              </span>
            </div>

            {/* Action buttons: GitHub link */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 pointer-events-auto">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/90 border border-zinc-800 hover:border-lime-400/60 hover:text-lime-300 transition-[color,border-color,box-shadow] shadow-md hover:shadow-lime-500/10 group cursor-pointer backdrop-blur-md"
                aria-label={`Perfil de GitHub: ${PERSONAL_INFO.githubHandle} (se abre en una pestaña nueva)`}
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-lime-400 transition-colors" />
                <span className="tracking-tight">{PERSONAL_INFO.githubHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. DEDICATED & REDESIGNED SPECIALTIES SECTION                */}
        {/* ============================================================ */}
        <div id="especialidades" className="relative z-10 px-4 sm:px-12 py-8 sm:py-14 bg-black/40 backdrop-blur-md">
          
          {/* Section Sub-header with generous separation */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-lime-400 mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>#01 — #04 Áreas de Especialización</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white">
                Dominio Técnico &amp; Arquitectura
              </h2>
            </div>
            <p className="text-xs text-zinc-400 font-mono max-w-sm">
              Selecciona cualquier especialidad para inspeccionar capacidades clave, stack y estándares de ingeniería.
            </p>
          </div>

          {/* 4 Cards Grid with Elevated Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
            {SPECIALTIES.map((spec) => {
              const isSelected = activeSpecialty.id === spec.id;
              const SpecIcon = (spec.icon && SPECIALTY_ICONS[spec.icon]) || Cpu;
              return (
                <button
                  key={spec.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveSpecialtyId(spec.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-[background-color,border-color,box-shadow,translate] duration-200 relative group cursor-pointer flex flex-col justify-between min-h-[125px] sm:min-h-[140px] ${
                    isSelected
                      ? 'bg-zinc-900/95 border-lime-400/80 shadow-xl shadow-lime-400/10 -translate-y-0.5'
                      : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/50 hover:border-zinc-700'
                  }`}
                >
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <span className={`font-mono text-xs font-bold tracking-widest ${
                      isSelected ? 'text-lime-400' : 'text-zinc-500 group-hover:text-zinc-400'
                    }`}>
                      {spec.number}
                    </span>

                    <span className={`p-2 rounded-xl transition-colors ${
                      isSelected 
                        ? 'bg-lime-400/15 text-lime-400 border border-lime-400/30' 
                        : 'bg-zinc-900 text-zinc-400 group-hover:text-zinc-200 border border-zinc-800'
                    }`}>
                      <SpecIcon className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <span className="block text-sm sm:text-base font-bold tracking-tight text-white">
                      {spec.title}
                    </span>
                    <span className="block text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {spec.tagline}
                    </span>
                  </div>

                  {/* Active bottom line indicator */}
                  {isSelected && (
                    <span className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Expanded Rich Details Panel for Active Specialty */}
          <div
            className="p-5 sm:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl relative overflow-hidden"
            aria-live="polite"
          >
            
            {/* Ambient accent inside card */}
            <div 
              className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left Column: Deep Focus & Engineering Highlights */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-lime-400 px-2.5 py-0.5 rounded bg-lime-400/10 border border-lime-400/30">
                    {activeSpecialty.number} Enfoque Arquitectónico
                  </span>
                  {activeSpecialty.metric && (
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                      {activeSpecialty.metric}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  {activeSpecialty.description}
                </p>

                {/* Highlights List */}
                {activeSpecialty.highlights && (
                  <ul className="space-y-2 pt-2">
                    {activeSpecialty.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                        <span className="w-4 h-4 rounded-full bg-zinc-900 border border-lime-400/40 flex items-center justify-center text-lime-400 shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right Column: Core Tech Stack Pills */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-lime-400" />
                    Stack Tecnológico Central
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {activeSpecialty.coreStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-lime-400/50 hover:text-lime-300 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>Arquitectura Modular</span>
                  <span>Escalabilidad de Producción</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
