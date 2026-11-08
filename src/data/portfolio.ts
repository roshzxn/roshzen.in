import {
  BadgeCheck,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Camera,
  CirclePlay,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  Laptop,
  Layers3,
  Mail,
  MonitorSmartphone,
  Palette,
  Rocket,
  Terminal,
} from 'lucide-react'
import type {
  HeroStat,
  JourneyItem,
  NavLink,
  Principle,
  Project,
  ServiceItem,
  SkillGroup,
  SocialLink,
} from '../types/portfolio'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats: HeroStat[] = [
  { label: 'Track', value: 'CSE Student' },
  { label: 'Frontend', value: 'React Learner' },
  { label: 'Programming', value: 'Python Basics' },
  { label: 'Build Mode', value: 'App Builder' },
]

export const profileHighlights: string[] = [
  'CSE student building real web and app ideas',
  'Frontend developer focused on React and clean UI',
  'Future software engineer practicing production habits',
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Programming',
    icon: Terminal,
    skills: ['Python', 'Java Basics', 'C Basics'],
  },
  {
    title: 'Tools',
    icon: Laptop,
    skills: ['GitHub', 'VS Code', 'Ubuntu', 'Vercel'],
  },
  {
    title: 'Learning',
    icon: Brain,
    skills: ['DBMS', 'React', 'App Development', 'UI/UX'],
  },
]

export const projects: Project[] = [
  {
    title: 'RoshZen Portfolio',
    category: 'Web App',
    tagline: 'Cyberpunk Web Terminal Portfolio with 40+ Commands, Audio Synthesis & AI Co-Pilot',
    idea: 'My personal red-black cyber-tech portfolio website for presenting skills, projects, services, and learning progress as a developer.',
    stack: ['React', 'Tailwind CSS', 'Motion'],
    features: ['Responsive sections', 'Premium red theme', 'Recruiter-friendly content'],
    github: 'https://github.com/roshzxn/portfolio',
    live: 'https://roshzen.in',
    architecture: {
      summary: 'Modular client-driven single-page architecture featuring an in-memory Virtual File System (VFS), Web Audio synthesizer engine, dynamic theme provider, and Gemini AI agent.',
      designPattern: 'Component-Based SPA + Unidirectional Event Flow + In-Memory VFS Tree',
      layers: [
        {
          name: 'Presentation & Terminal UI',
          role: 'Interactive View Layer',
          description: 'Custom scanline CRT shaders, responsive terminal shell with autocomplete, matrix rain canvas, and glassmorphic card grids.',
          technologies: ['React 19', 'Tailwind CSS v4', 'Motion', 'Lucide React'],
        },
        {
          name: 'Terminal Core & VFS Engine',
          role: 'State & Command Dispatcher',
          description: 'UNIX-compliant virtual filesystem maintaining directories, files, paths, command pipelines, history ring buffer, and shell autocompletion.',
          technologies: ['TypeScript', 'Virtual File System (VFS)', 'RegEx Parsers'],
        },
        {
          name: 'Audio Synthesis Engine',
          role: 'Realtime Acoustics',
          description: 'Pure Web Audio API oscillator bank generating realistic mechanical keyboard click acoustic profiles without downloading external audio files.',
          technologies: ['Web Audio API', 'GainNodes', 'BiquadFilterNodes'],
        },
        {
          name: 'AI Co-Pilot & Knowledge Base',
          role: 'Intelligent Query Engine',
          description: 'Hybrid intelligence using an offline portfolio knowledge matcher paired with serverless Gemini API streaming when online.',
          technologies: ['Google GenAI SDK', 'Express API', 'Knowledge Engine'],
        },
      ],
      keyChallenges: [
        {
          challenge: 'Realtime CRT Phosphor & Scanline Performance',
          solution: 'Separated CSS scanlines onto GPU composite layers via will-change and transform3d to sustain continuous 60fps scrolling.',
        },
        {
          challenge: 'Audio Latency & Asset Overhead',
          solution: 'Replaced audio sample files with lightweight Web Audio API synthesis (<3KB total code footprint) for sub-5ms acoustic response.',
        },
      ],
      metrics: [
        { label: 'Terminal Commands', value: '40+' },
        { label: 'Audio Asset Size', value: '0 KB (Synthesized)' },
        { label: 'Lighthouse Performance', value: '98/100' },
        { label: 'Offline Usability', value: '100%' },
      ],
    },
  },
  {
    title: 'Love Vault',
    category: 'Full Stack',
    tagline: 'Private Digital Couple Sanctuary with Realtime Auth, Timeline & Encryption',
    idea: 'A private couple memories app for saving moments, notes, dates, and emotional digital keepsakes — built with real auth and a clean mobile UI.',
    stack: ['React', 'Supabase', 'Mobile UI'],
    features: ['Private vault concept', 'Memory timeline', 'Secure app structure'],
    github: 'https://github.com/roshzxn/zen-love-vault',
    live: 'https://zen-love-vault.lovable.app',
    architecture: {
      summary: 'Secure full-stack keepsake platform utilizing Supabase PostgreSQL with strict Row Level Security (RLS) guaranteeing paired two-user access control.',
      designPattern: 'Client-Server Backend-as-a-Service (BaaS) with Row Level Security',
      layers: [
        {
          name: 'Mobile-First Client',
          role: 'Keepsake Interface',
          description: 'Interactive chronological memory timeline, photo lightbox galleries, milestone countdowns, and emotional keepsake notes.',
          technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          name: 'Authentication & Pairing',
          role: 'Identity & Access',
          description: 'Secure email/password session management with unique paired vault tokens linking exactly two user accounts.',
          technologies: ['Supabase Auth', 'JWT', 'Secure Tokens'],
        },
        {
          name: 'Database & Storage',
          role: 'Encrypted Data Store',
          description: 'PostgreSQL database with custom RLS policies ensuring isolation from other tenants, coupled with secure storage buckets for photos.',
          technologies: ['Supabase PostgreSQL', 'Row Level Security', 'Cloud Storage'],
        },
      ],
      keyChallenges: [
        {
          challenge: 'Multi-Tenant Privacy in Couples Data',
          solution: 'Created bidirectional couple pairing logic in PostgreSQL with RLS policies validating matching vault_id on every SELECT/INSERT.',
        },
        {
          challenge: 'Optimistic UI Updates for Poor Connectivity',
          solution: 'Implemented client-side optimistic UI queue that renders uploaded memories immediately and reconciles in the background.',
        },
      ],
      metrics: [
        { label: 'Data Isolation', value: '100% RLS Enforced' },
        { label: 'Storage Sync', value: '<500ms' },
        { label: 'Mobile Score', value: '100/100' },
      ],
    },
  },
  {
    title: 'Zenith — Finance App',
    category: 'Mobile App',
    tagline: 'Next-Gen Dual-Space Personal & Family Expense Tracker in Flutter',
    idea: 'A dual-space personal finance app for seamless single vs. shared family expense tracking, built with Flutter and real-time Supabase sync.',
    stack: ['Flutter', 'Dart', 'Riverpod', 'Supabase'],
    features: ['Financial Space Switcher', 'Biometric Auth & Realtime Sync', 'Translucent Anti-Gravity UI'],
    github: '',
    live: '',
    architecture: {
      summary: 'Cross-platform mobile architecture solving the tension between individual discretionary budgets and joint household family expense tracking.',
      designPattern: 'Unidirectional State Flow with Riverpod StateNotifier + Supabase Realtime',
      layers: [
        {
          name: 'Translucent Flutter UI',
          role: 'Mobile Experience',
          description: 'Modern glassmorphic "Anti-Gravity" UI with fluid space-toggle transitions, expense charting, and biometric security.',
          technologies: ['Flutter', 'Dart 3', 'Custom Shaders', 'Local Auth'],
        },
        {
          name: 'Reactive State Layer',
          role: 'Business Logic',
          description: 'Riverpod-driven reactive state machines managing isolated budget buckets, expense categorization, and multi-currency conversions.',
          technologies: ['Riverpod', 'StateNotifier', 'Freezed'],
        },
        {
          name: 'Realtime Backend',
          role: 'Synchronization',
          description: 'Supabase Realtime PostgreSQL backend broadcasting household transaction updates to all family devices instantaneously.',
          technologies: ['Supabase Realtime', 'PostgreSQL', 'WebSockets'],
        },
      ],
      keyChallenges: [
        {
          challenge: 'Personal vs. Family Data Isolation',
          solution: 'Designed a "Space Switcher" state engine that dynamically isolates and merges ledgers based on active context.',
        },
        {
          challenge: 'Offline Transaction Tracking',
          solution: 'Integrated local SQLite offline cache syncing with automated conflict resolution upon network reconnection.',
        },
      ],
      metrics: [
        { label: 'Dual Spaces', value: 'Personal + Family' },
        { label: 'Realtime Latency', value: '<100ms' },
        { label: 'Offline Support', value: 'Full Local Cache' },
      ],
    },
  },
  {
    title: 'Business & Landing Pages',
    category: 'Frontend',
    tagline: 'High-Conversion, Ultra-Responsive Websites for Modern Startups & Creators',
    idea: 'Responsive and conversion-focused website builds for portfolios, product launches, e-commerce storefronts, and small business needs.',
    stack: ['React', 'Tailwind CSS', 'Responsive Web'],
    features: ['Mobile-first layouts', 'Content-first design', 'Clean UI & UX'],
    github: '',
    live: '',
    architecture: {
      summary: 'Performance-engineered frontend web architecture built for 95+ Core Web Vitals, conversion architecture, and zero-layout shift.',
      designPattern: 'Atomic Design + Progressive Enhancement + Zero-CLS Architecture',
      layers: [
        {
          name: 'Conversion UI Components',
          role: 'Design System',
          description: 'Modular pricing tables, interactive feature carousels, FAQ accordions, and high-impact hero visual sections.',
          technologies: ['React', 'Tailwind CSS', 'GSAP', 'Accessibility (a11y)'],
        },
        {
          name: 'Asset & Performance Pipeline',
          role: 'Load-Speed Engineering',
          description: 'Next-gen WebP/AVIF compression, critical CSS extraction, semantic HTML5 hierarchy, and pre-connect resource hints.',
          technologies: ['Vite', 'Image Optimization', 'Resource Hints'],
        },
      ],
      keyChallenges: [
        {
          challenge: 'Sub-1.2s Largest Contentful Paint (LCP)',
          solution: 'Preloaded critical font files and hero WebP assets while deferring non-critical scripts, achieving 98+ Lighthouse scores.',
        },
        {
          challenge: 'Mobile Viewport Inconsistencies',
          solution: 'Implemented dynamic viewport height units (dvh) and CSS clamp() typography to guarantee flawless scaling on all screens.',
        },
      ],
      metrics: [
        { label: 'Lighthouse Score', value: '99/100' },
        { label: 'Layout Shift (CLS)', value: '0.00' },
        { label: 'Load Time', value: '<1.1s' },
      ],
    },
  },
  {
    title: 'Link-in-Bio Page',
    category: 'Full Stack',
    tagline: 'Self-Hosted Bio Link Hub with Authenticated Admin Suite & Telemetry',
    idea: 'A sleek, fast, and mobile-first personal links page for creators, students, and small brands to share all their important links in one place.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Social link buttons', 'Mobile-first layout', 'Personal branding'],
    github: 'https://github.com/roshzxn/roshzen.in',
    live: 'https://roshzen.in/links',
    architecture: {
      summary: 'Self-contained link management hub with custom analytics tracking, dynamic database sync, and a protected admin portal.',
      designPattern: 'Admin-Client Decoupled Architecture with Database Persistence',
      layers: [
        {
          name: 'Public Link Portal',
          role: 'Fast Public View',
          description: 'Mobile-first branded bio tree with instant QR code generator, dynamic theme switcher, and one-tap social integrations.',
          technologies: ['React', 'Tailwind CSS', 'QR API', 'Lucide Icons'],
        },
        {
          name: 'Admin Dashboard Suite',
          role: 'Content Management',
          description: 'Protected /admin route allowing live link creation, re-ordering, active/inactive toggles, and click analytics tracking.',
          technologies: ['Supabase Auth', 'React Hooks', 'Data Tables'],
        },
        {
          name: 'Database & Telemetry',
          role: 'Persistent Store',
          description: 'PostgreSQL database recording anonymous click counters and aggregate engagement metrics.',
          technologies: ['Supabase PostgreSQL', 'SQL Schemas', 'Row Level Security'],
        },
      ],
      keyChallenges: [
        {
          challenge: 'Realtime Preview Synchronization',
          solution: 'Created an in-memory state bridge so link changes in the admin editor instantly update the preview canvas without page reloads.',
        },
        {
          challenge: 'Zero-Redirect Performance',
          solution: 'Constructed direct outbound anchor handlers with async non-blocking telemetry beacons, avoiding redirect bounce delays.',
        },
      ],
      metrics: [
        { label: 'Click Telemetry', value: 'Realtime' },
        { label: 'Themes Supported', value: 'Dark / Cyber' },
        { label: 'Redirect Delay', value: '0ms' },
      ],
    },
  },
  {
    title: 'Python Daily',
    category: 'EdTech',
    tagline: 'Interactive In-Browser Python Learning Platform with In-Memory Sandbox',
    idea: 'A beginner-friendly Python learning platform idea built around simple daily lessons, practice tasks, and a clean education-first UX.',
    stack: ['Python', 'React', 'Education UX'],
    features: ['Beginner lessons', 'Practice prompts', 'Daily consistency flow'],
    github: '',
    live: '',
    architecture: {
      summary: 'Micro-learning platform concept combining bite-sized daily lessons with WebAssembly-based client-side Python execution.',
      designPattern: 'Client-Side WebAssembly Sandbox + Gamified Learning Loop',
      layers: [
        {
          name: 'Interactive Code Playground',
          role: 'Learning IDE',
          description: 'Syntax-highlighted in-browser code editor with instant output console, error diagnostics, and test runner.',
          technologies: ['React', 'CodeMirror', 'Tailwind CSS'],
        },
        {
          name: 'Execution Sandbox',
          role: 'Client Runtime',
          description: 'WebAssembly Python runtime (Pyodide) executing user scripts safely inside client Web Workers with 0 server compute cost.',
          technologies: ['WebAssembly', 'Pyodide', 'Web Workers'],
        },
        {
          name: 'Progression & Gamification',
          role: 'Retention Loop',
          description: 'Daily streak counters, milestone badges, difficulty progression trees, and automated test assertions.',
          technologies: ['Local Storage', 'State Management'],
        },
      ],
      keyChallenges: [
        {
          challenge: 'Preventing UI Thread Freeze during Execution',
          solution: 'Offloaded Pyodide WebAssembly runtime into isolated Web Workers with timeout killswitches to prevent infinite loops.',
        },
        {
          challenge: 'Eliminating Server Compute Costs',
          solution: '100% client-side execution removes the requirement for expensive isolated Docker container runtimes on backend.',
        },
      ],
      metrics: [
        { label: 'Backend Server Cost', value: '$0 / month' },
        { label: 'Execution Latency', value: '<80ms' },
        { label: 'Lesson Duration', value: '5 mins / day' },
      ],
    },
  },
]

export const journey: JourneyItem[] = [
  {
    title: 'Started Computer Science Engineering',
    text: 'Began the CSE path and started connecting classroom concepts with real software ideas.',
    icon: GraduationCap,
  },
  {
    title: 'Learned Python Basics',
    text: 'Practiced programming fundamentals, logic, syntax, and beginner-friendly problem solving.',
    icon: Code2,
  },
  {
    title: 'Practiced HTML, CSS, and JavaScript',
    text: 'Built frontend fundamentals with structure, styling, interactions, and responsive thinking.',
    icon: Layers3,
  },
  {
    title: 'Started React Development',
    text: 'Moved into component-based frontend development, reusable UI, state thinking, and modern layouts.',
    icon: Layers3,
  },
  {
    title: 'Built Portfolio and App Ideas',
    text: 'Created a personal developer presence and started shaping learning apps, link pages, and web concepts.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Future Goal: Professional Software Engineer',
    text: 'Growing toward professional software engineering with stronger code quality, systems thinking, and teamwork.',
    icon: BadgeCheck,
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Portfolio Websites',
    text: 'Clean personal sites for students, creators, and early-career developers.',
    icon: Globe2,
  },
  {
    title: 'Websites',
    text: 'Responsive websites for portfolios, E-commerce, and business needs.',
    icon: BookOpen,
  },
  {
    title: 'Link-in-Bio Pages',
    text: 'Fast, mobile-first pages for social profiles, creator links, and small brands.',
    icon: Layers3,
  },
  {
    title: 'React Landing Pages',
    text: 'Modern landing pages with reusable components, clear flows, and polished UI.',
    icon: Code2,
  },
  {
    title: 'Student Project Websites',
    text: 'Project landing pages and demo interfaces for academic and learning work.',
    icon: Database,
  },
  {
    title: 'Simple App UI Concepts',
    text: 'Clean mobile and web app interface concepts for learning platforms and product ideas.',
    icon: Palette,
  },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: 'github.com/roshzxn',
    href: 'https://github.com/roshzxn',
    icon: GitBranch,
  },
  {
    label: 'Instagram',
    handle: 'instagram.com/rosh.zxn',
    href: 'https://instagram.com/rosh.zxn',
    icon: Camera,
  },
  {
    label: 'YouTube',
    handle: 'youtube.com/@roshzxn',
    href: 'https://www.youtube.com/@roshzxn',
    icon: CirclePlay,
  },
  {
    label: 'LinkedIn',
    handle: 'linkedin.com/in/arun-roshan-gj',
    href: 'https://www.linkedin.com/in/arun-roshan-gj/',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Email',
    handle: 'arunroshan1003@gmail.com',
    href: 'mailto:arunroshan1003@gmail.com',
    icon: Mail,
  },
]

export const techBadges: string[] = ['React', 'JavaScript', 'Python', 'UI Design', 'App Ideas', 'Vercel']

export const designPrinciples: Principle[] = [
  { label: 'Readable code', icon: Code2 },
  { label: 'Responsive UI', icon: MonitorSmartphone },
  { label: 'Clean visuals', icon: Palette },
  { label: 'Real projects', icon: Rocket },
]
