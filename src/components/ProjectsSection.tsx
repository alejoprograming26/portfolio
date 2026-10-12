import { ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-lime-400 mb-2">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Proyectos Seleccionados
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-mono">
          Soluciones de software de extremo a extremo construidas con arquitecturas de alto rendimiento, código limpio y tipado estricto.
        </p>
      </div>

      {/* Grid of Vertical Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-[border-color,box-shadow] duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-lime-400/5"
          >
            {/* Top Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
              <img
                src={project.imageUrl}
                alt={`Vista previa del proyecto ${project.title}`}
                width={900}
                height={675}
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-[filter,scale] duration-500"
                loading="lazy"
                decoding="async"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" aria-hidden="true" />

              <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-lime-400">
                {project.number}
              </div>

              <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${project.title} en GitHub (se abre en una pestaña nueva)`}
                  className="p-2 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver demo de ${project.title} (se abre en una pestaña nueva)`}
                    className="p-2 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold tracking-tight text-white mb-2 group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {project.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                <div className="text-[11px] font-mono text-zinc-400">
                  <span className="text-lime-400 font-semibold">Impacto: </span>
                  {project.impact}
                </div>
              </div>
            </div>

          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors duration-150"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explorar más repositorios en GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </section>
  );
};
