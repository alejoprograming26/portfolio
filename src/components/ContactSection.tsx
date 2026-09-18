import React, { useState } from 'react';
import { Mail, Send, Check, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './BrandIcons';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@alexrivera.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 6000);
    }, 800);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'twitter':
        return <TwitterXIcon className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
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
          <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Email Oficial
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
                title="Copiar email al portapapeles"
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
            <p className="text-base sm:text-lg font-mono font-medium text-white mb-1">
              contact@alexrivera.dev
            </p>
            <p className="text-xs text-zinc-400">
              Tiempo estimado de respuesta: &lt; 24 horas laborables.
            </p>
          </div>

          {/* Social Links List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SOCIAL_LINKS.filter(s => s.icon !== 'mail').map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-lime-400 transition-colors">
                    {getIcon(link.icon)}
                  </span>
                  <div>
                    <span className="block text-xs font-medium text-white group-hover:text-lime-400 transition-colors">
                      {link.name}
                    </span>
                    <span className="block text-[11px] font-mono text-zinc-500">
                      {link.handle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          {/* Availability Box */}
          <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/80 text-xs font-mono text-zinc-400 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Zona horaria: UTC-4 (Caracas / Atlantic) • Remoto disponible</span>
          </div>

        </div>

        {/* Right: Direct Minimalist Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden"
          >
            {formSubmitted && (
              <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-xs text-zinc-400 max-w-sm">
                  Gracias por ponerte en contacto. Responderé a tu correo a la brevedad posible.
                </p>
              </div>
            )}

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Tu Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400/80 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Tu Correo Electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="carlos@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400/80 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Mensaje o Detalles del Proyecto
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tus objetivos técnicos, requerimientos de arquitectura o plazos..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400/80 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-mono text-xs font-bold tracking-wider uppercase hover:brightness-110 shadow-lg shadow-lime-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>

    </section>
  );
};
