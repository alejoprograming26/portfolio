import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { TechStackMarquee } from './components/TechStackMarquee.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

// Portfolio root application
export function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-lime-400/30 selection:text-lime-200">
      {/* Background ambient technical grid */}
      <div className="fixed inset-0 bg-grid-lines opacity-15 pointer-events-none" />

      {/* Floating navigation */}
      <Navbar />

      <main className="relative z-10 flex flex-col">
        {/* 1. Hero with portrait, back-glow halo and #01-#04 specialty selectors */}
        <HeroSection />

        {/* 2. Grayscale Marquee of core tech stack */}
        <TechStackMarquee />

        {/* 3. Quién Soy (About Me) with editorial headline and active status */}
        <AboutSection />

        {/* 4. Proyectos (Projects) vertical cards with tech tags and links */}
        <ProjectsSection />

        {/* 5. Estudios y Experiencia (Education & Experience) tabular timeline */}
        <ExperienceSection />

        {/* 6. Contáctame (Contact form and channels) */}
        <ContactSection />
      </main>

      {/* 7. Minimalist Footer with mono telemetry */}
      <Footer />
    </div>
  );
}

export default App;
