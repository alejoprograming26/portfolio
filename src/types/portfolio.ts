export interface Specialty {
  id: string;
  number: string; // e.g. '#01'
  title: string;
  tagline: string;
  description: string;
  coreStack: string[];
  highlights?: string[];
  metric?: string;
  icon?: 'server' | 'layout' | 'database' | 'cloud';
}

export interface TechSkill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud/DevOps' | 'Tooling';
  level?: string;
  iconName?: string;
}

export interface Project {
  id: string;
  number: string; // '#01', '#02', etc.
  title: string;
  summary: string;
  impact: string;
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
}

export interface EducationExperienceItem {
  id: string;
  period: string; // e.g. '2023 — Present'
  roleOrDegree: string;
  institutionOrCompany: string;
  type: 'experience' | 'education' | 'certification';
  location?: string;
  description: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  label: string;
  url: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail';
}
