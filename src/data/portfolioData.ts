import type {
  Specialty,
  TechSkill,
  Project,
  EducationExperienceItem,
  SocialLink,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Alejandro Alvarez',
  titlePrefix: "Hola, soy",
  headlineMain: 'Alejandro',
  headlineSub: 'Alvarez',
  role: 'Software Engineer & Full-Stack Developer',
  quoteTitle: 'Great software should feel invisible.',
  quoteDescription:
    'Desde arquitecturas backend de baja latencia hasta interfaces con atención milimétrica al detalle, desarrollo productos digitales resistentes que escalan.',
  status: 'Available for hire / Disponible para proyectos',
  statusAvailable: true,
  aboutEditorial: 'Construyendo experiencias digitales que reducen la complejidad a su máxima elegancia.',
  aboutBio:
    'Ingeniero de software enfocado en la convergencia entre rendimiento crítico, código tipado estrictamente y experiencias de usuario fluidas. Mi enfoque combina pragmatismo arquitectónico con una estética minimalista "developer-first".',
  location: 'Remoto / Global',
  experienceYears: '+5 años de experiencia',
  avatarImage: '/alejandro-alvarez.jpg',
  email: 'joseale260403@gmail.com',
  githubUrl: 'https://github.com/alejoprograming26',
  githubHandle: 'github.com/alejoprograming26',
};

export const SPECIALTIES: Specialty[] = [
  {
    id: 'backend',
    number: '#01',
    title: 'Arquitectura Backend',
    tagline: 'Sistemas distribuidos y APIs resilientes',
    description:
      'Diseño de servicios desacoplados, pipelines de datos en tiempo real y microservicios orientados a alto rendimiento y tolerancia a fallos.',
    coreStack: ['Node.js', 'Go', 'Express / Fastify', 'gRPC', 'REST APIs'],
    highlights: [
      'Microservicios desacoplados de alto rendimiento',
      'Protocolos REST y gRPC con tipado estricto',
      'Control de concurrencia y tolerancia a fallos',
    ],
    metric: 'Latencia p99 < 15ms',
    icon: 'server',
  },
  {
    id: 'frontend',
    number: '#02',
    title: 'Frontend & UI Craft',
    tagline: 'Interfaces de precisión y micro-interacciones',
    description:
      'Desarrollo de aplicaciones web ultra-rápidas con React 19, TypeScript y Tailwind CSS con accesibilidad WCAG e interactividad pulida.',
    coreStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
    highlights: [
      'Renderizado a 60 FPS con componentes modulares',
      'Sistemas de diseño basados en tokens de color',
      'Cumplimiento de estándares de accesibilidad WCAG 2.2 AA',
    ],
    metric: '100% Type-Safe & 60 FPS',
    icon: 'layout',
  },
  {
    id: 'databases',
    number: '#03',
    title: 'Bases de Datos & Cache',
    tagline: 'Modelado relacional y capas de memoria',
    description:
      'Esquemas optimizados, indexación avanzada, transacciones atómicas seguras y estrategias de caching distribuido con Redis.',
    coreStack: ['PostgreSQL', 'Redis', 'Prisma / Drizzle', 'MongoDB'],
    highlights: [
      'Modelado de datos normalizado con integridad referencial',
      'Caché distribuida de baja latencia con Redis',
      'Optimización de consultas complejas y pools de conexiones',
    ],
    metric: 'Consultas sub-milisegundo',
    icon: 'database',
  },
  {
    id: 'cloud-apis',
    number: '#04',
    title: 'Cloud & DevOps',
    tagline: 'Infraestructura contenerizada y CI/CD',
    description:
      'Automatización de despliegues, observabilidad continua, containerización con Docker y arquitecturas serverless en la nube.',
    coreStack: ['Docker', 'AWS / Vercel', 'GitHub Actions', 'Linux', 'Cloudflare'],
    highlights: [
      'Pipelines CI/CD automatizados y reproducibles',
      'Contenedores optimizados multi-stage con Docker',
      'Despliegues en el edge con cero tiempo de inactividad',
    ],
    metric: 'Zero-Downtime Deployments',
    icon: 'cloud',
  },
];

export const TECH_STACK: TechSkill[] = [
  { name: 'React 19', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'Cloud/DevOps' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'Go', category: 'Backend' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Linux', category: 'Cloud/DevOps' },
];

export const PROJECTS: Project[] = [
  {
    id: 'apigateway',
    number: '#01',
    title: 'HyperScale Edge Gateway',
    summary: 'Reverse proxy y API gateway de alta concurrencia con limitador de tasa adaptativo.',
    impact: 'Reducción de latencia p99 en un 42% y soporte para +15k solicitudes simultáneas.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    tags: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 'chronoflow',
    number: '#02',
    title: 'Chrono Flow Studio',
    summary: 'Sistema de diseño y canvas interactivo para modelado de flujos de trabajo de ingeniería.',
    impact: 'Adoptado por equipos de producto con renderizado a 60 FPS sobre WebGL/Canvas.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 'datapulse',
    number: '#03',
    title: 'DataPulse Metric Engine',
    summary: 'Motor analítico en tiempo real para observabilidad de microservicios y métricas de infraestructura.',
    impact: 'Procesamiento de 2.5M de eventos por minuto con retención y agregación en caliente.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    tags: ['PostgreSQL', 'Node.js', 'Redis', 'WebSockets'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.example.com',
    featured: true,
  },
  {
    id: 'cloudvault',
    number: '#04',
    title: 'KubeVault Deploy Orchestrator',
    summary: 'CLI y dashboard minimalista para sincronización declarativa de variables de entorno y secrets.',
    impact: 'Cero filtraciones en CI/CD y despliegues criptográficamente firmados.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    tags: ['Go', 'Docker', 'AWS', 'Security'],
    githubUrl: 'https://github.com',
    liveDemoUrl: 'https://demo.example.com',
    featured: false,
  },
];

export const EDUCATION_AND_EXPERIENCE: EducationExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 — Presente',
    roleOrDegree: 'Senior Full-Stack Engineer',
    institutionOrCompany: 'Vortex Cloud Technologies',
    type: 'experience',
    location: 'Remoto',
    description:
      'Liderazgo en la modernización de servicios centrales, migración a arquitectura distribuida con TypeScript y optimización de latencias p95 en APIs críticas.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-2',
    period: '2021 — 2023',
    roleOrDegree: 'Frontend Engineer & UI Specialist',
    institutionOrCompany: 'Nexus Software Labs',
    type: 'experience',
    location: 'Híbrido',
    description:
      'Desarrollo de un sistema de diseño modular utilizado por más de 12 equipos internos. Creación de componentes accesibles y dashboards interactivos.',
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Web Performance'],
  },
  {
    id: 'edu-1',
    period: '2017 — 2021',
    roleOrDegree: 'Grado en Ingeniería de Software',
    institutionOrCompany: 'Universidad Política',
    type: 'education',
    location: 'Facultad de Informática',
    description:
      'Especialización en sistemas distribuidos, estructuras de datos avanzadas, algoritmia y bases de datos relacionales.',
    skills: ['Algoritmos', 'Estructuras de Datos', 'Redes', 'Sistemas Operativos'],
  },
  {
    id: 'cert-1',
    period: '2023',
    roleOrDegree: 'AWS Certified Solutions Architect & Cloud Security',
    institutionOrCompany: 'Amazon Web Services',
    type: 'certification',
    description:
      'Validación en diseño de arquitecturas cloud tolerantes a fallos, redes VPC privadas y automatización de infraestructura.',
    skills: ['AWS', 'Cloud Architecture', 'Security', 'Scalability'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    label: 'github.com/alejoprograming26',
    url: 'https://github.com/alejoprograming26',
    handle: '@alejoprograming26',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    label: 'linkedin.com/in/developer',
    url: 'https://linkedin.com',
    handle: 'in/developer',
    icon: 'linkedin',
  },
  {
    name: 'X (Twitter)',
    label: 'x.com/developer',
    url: 'https://twitter.com',
    handle: '@developer_dev',
    icon: 'twitter',
  },
  {
    name: 'Email Directo',
    label: 'joseale260403@gmail.com',
    url: 'mailto:joseale260403@gmail.com',
    handle: 'joseale260403@gmail.com',
    icon: 'mail',
  },
];
