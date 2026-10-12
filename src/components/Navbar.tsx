import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Terminal } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Estudios', href: '#estudios' },
] as const;

const MOBILE_MENU_ID = 'mobile-menu';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu with Escape (keyboard users)
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-full transition-[background-color,border-color,box-shadow] duration-300 ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80'
            : 'bg-zinc-950/70 backdrop-blur-md border border-white/10'
        }`}
        aria-label="Navegación principal"
      >
        {/* Monogram / Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Ir al inicio"
        >
          <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-zinc-200 group-hover:border-lime-400/60 group-hover:text-lime-400 transition-colors">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
            folio<span className="text-lime-400 font-mono">.dev</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-400 animate-ping" />
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-150 rounded-full hover:bg-zinc-900/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA Button in Neon Apple Green */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-tight bg-gradient-to-r from-lime-400 to-emerald-400 text-black hover:brightness-110 shadow-lg shadow-lime-400/15 transition-[filter] duration-150"
          >
            <span>Contactar</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-900 focus-visible:ring-1 focus-visible:ring-zinc-700"
          aria-expanded={mobileMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id={MOBILE_MENU_ID}
          className="md:hidden fixed top-20 left-4 right-4 bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-5 shadow-2xl z-50 flex flex-col gap-3"
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-zinc-800 flex justify-center">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-lime-400 to-emerald-400 text-black hover:brightness-110 transition-[filter]"
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
