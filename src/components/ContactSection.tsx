import { useEffect, useState, type ComponentType } from 'react';
import { Mail, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './BrandIcons';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import type { SocialLink } from '../types/portfolio';
import { ContactForm } from './ContactForm';

const COPY_FEEDBACK_MS = 2500;

const SOCIAL_ICONS: Record<SocialLink['icon'], ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterXIcon,
  mail: Mail,
};

const EXTERNAL_SOCIAL_LINKS = SOCIAL_LINKS.filter((link) => link.icon !== 'mail');

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (!copiedEmail) return;
    const timer = window.setTimeout(() => setCopiedEmail(false), COPY_FEEDBACK_MS);
    return () => window.clearTimeout(timer);
  }, [copiedEmail]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-lime-400 mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Iniciar Colaboración</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Hablemos de tu próximo proyecto
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 font-mono">
          Disponible para roles de ingeniería senior, consultoría técnica y desarrollo de productos web escalables.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Direct Contact Cards (Geist 1px borders) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Copy Card */}
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Email Oficial
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
                aria-label="Copiar email al portapapeles"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block text-base sm:text-lg font-mono font-medium text-white mb-1 hover:text-lime-300 transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
            <p className="text-xs text-zinc-400">
              Tiempo estimado de respuesta: &lt; 24 horas laborables.
            </p>
            <span className="sr-only" role="status" aria-live="polite">
              {copiedEmail ? 'Email copiado al portapapeles' : ''}
            </span>
          </div>

          {/* Social Links List */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EXTERNAL_SOCIAL_LINKS.map((link) => {
              const SocialIcon = SOCIAL_ICONS[link.icon];
              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 transition-colors flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-lime-400 transition-colors">
                        <SocialIcon className="w-4 h-4" />
                      </span>
                      <div>
                        <span className="block text-xs font-medium text-white group-hover:text-lime-400 transition-colors">
                          {link.name}
                        </span>
                        <span className="block text-[11px] font-mono text-zinc-400">
                          {link.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,translate]" />
                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Availability Box */}
          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 text-xs font-mono text-zinc-400 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" aria-hidden="true" />
            <span>Zona horaria: UTC-4 (Caracas / Atlantic) • Remoto disponible</span>
          </div>
        </div>

        {/* Right: Direct Minimalist Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
