import { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_AND_EXPERIENCE } from '../data/portfolioData';
import type { EducationExperienceItem } from '../types/portfolio';

type Filter = 'all' | 'experience' | 'education';

const FILTERS: ReadonlyArray<{ value: Filter; label: string }> = [
  { value: 'all', label: 'Todo' },
  { value: 'experience', label: 'Experiencia' },
  { value: 'education', label: 'Educación' },
];

const matchesFilter = (item: EducationExperienceItem, filter: Filter) => {
  if (filter === 'experience') return item.type === 'experience';
  if (filter === 'education') return item.type === 'education' || item.type === 'certification';
  return true;
};

export const ExperienceSection = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const filteredItems = EDUCATION_AND_EXPERIENCE.filter((item) => matchesFilter(item, filter));

  return (
    <section id="estudios" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-b border-zinc-900">
      
      {/* Header with Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-lime-400 mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Trayectoria &amp; Formación</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Experiencia &amp; Estudios
          </h2>
        </div>

        {/* Filter Toggle in Geist Pill Style */}
        <div
          className="inline-flex p-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono w-full sm:w-auto justify-between sm:justify-start"
          role="group"
          aria-label="Filtrar trayectoria"
        >
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={`flex-1 sm:flex-initial text-center px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                filter === value
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabular List / Minimalist Timeline */}
      <div className="divide-y divide-zinc-900 border-y border-zinc-900">
        {filteredItems.map((item) => {
          const isExp = item.type === 'experience';
          const isCert = item.type === 'certification';

          return (
            <div
              key={item.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-zinc-950/50 -mx-4 px-4 rounded-xl transition-colors duration-150 group"
            >
              {/* Period & Type Column */}
              <div className="lg:col-span-3 flex flex-col gap-1.5">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-lime-400 font-semibold tracking-tight">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                  {isExp ? (
                    <>
                      <Briefcase className="w-3 h-3 text-zinc-500" />
                      Experiencia
                    </>
                  ) : isCert ? (
                    <>
                      <Award className="w-3 h-3 text-zinc-500" />
                      Certificación
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-3 h-3 text-zinc-500" />
                      Educación
                    </>
                  )}
                </span>
              </div>

              {/* Role and Institution Column */}
              <div className="lg:col-span-4 flex flex-col gap-1">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-lime-400 transition-colors">
                  {item.roleOrDegree}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                  {item.institutionOrCompany}
                </p>
                {item.location && (
                  <span className="text-[11px] text-zinc-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                )}
              </div>

              {/* Description and Skills Column */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
