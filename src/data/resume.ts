export type Project = {
  name: string
  description: string
  stack: string[]
  link?: string
  repo?: string
  year?: string
  size?: 'sm' | 'md' | 'lg'
  accent?: string
}

export type Experience = {
  company: string
  role: string
  location?: string
  start: string
  end: string
  bullets: string[]
  stack?: string[]
}

export type Education = {
  school: string
  degree: string
  start: string
  end: string
  detail?: string
}

export type Stat = {
  label: string
  value: string
}

export type SkillRating = {
  name: string
  level: number
}

export type ResumeData = {
  name: string
  firstName: string
  lastName: string
  tagline: string
  title: string
  location: string
  available: boolean
  photo?: string
  summary: string
  stats: Stat[]
  contact: {
    email: string
    github?: string
    linkedin?: string
    website?: string
  }
  skillsSummary: SkillRating[]
  skills: { category: string; items: string[] }[]
  experience: Experience[]
  education: Education[]
}

export const resume: ResumeData = {
  name: 'Jan Edward de Nicolas',
  firstName: 'Jan Edward',
  lastName: 'de Nicolas',
  tagline: 'Software Engineer building thoughtful tools for the web.',
  title: 'Software Engineer',
  location: 'City, Country',
  available: true,
  photo: '/photo.jpg',
  summary:
    'Short, punchy summary of who you are, what you build, and what you care about. Aim for 2–3 sentences that read like the lede of a story — strong opinions, a hint of personality, and the kind of work you want more of.',
  stats: [
    { label: 'Years building software', value: '5+' },
    { label: 'Projects shipped', value: '20+' },
    { label: 'Coffees per day', value: '∞' },
  ],
  contact: {
    email: 'edwarddenicolas@gmail.com',
    linkedin: 'https://linkedin.com/in/yourhandle',
    website: 'https://www.frostarcanum.com',
  },
  skillsSummary: [
    { name: 'Coding', level: 4 },
    { name: 'Solution Design', level: 5 },
    { name: 'Team Management', level: 5 },
    { name: 'Cloud Operations', level: 4 },
    { name: 'SDLC Practices', level: 5 },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'Go', 'SQL', 'Rust'],
    },
    {
      category: 'Frameworks',
      items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'tRPC'],
    },
    {
      category: 'Infrastructure',
      items: ['AWS', 'Vercel', 'Docker', 'PostgreSQL', 'Redis', 'Kubernetes'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub Actions', 'Vite', 'Vitest', 'Playwright', 'Figma'],
    },
  ],
  experience: [
    {
      company: 'Company Name',
      role: 'Senior Software Engineer',
      location: 'Remote',
      start: '2023',
      end: 'Present',
      bullets: [
        'Led the rollout of <feature> serving <N> users, cutting <metric> by <X>%.',
        'Designed and shipped <system>, replacing <legacy> with measurable wins on latency and cost.',
        'Mentored <N> engineers; ran the on-call rotation for the platform team.',
      ],
      stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
      company: 'Previous Company',
      role: 'Software Engineer',
      location: 'City, Country',
      start: '2020',
      end: '2023',
      bullets: [
        'Built <product surface> from zero to <milestone>.',
        'Owned <area> end-to-end including design reviews, infra, and observability.',
      ],
      stack: ['Python', 'Django', 'React', 'Postgres'],
    },
  ],
  education: [
    {
      school: 'University Name',
      degree: 'B.S. Computer Science',
      start: '2016',
      end: '2020',
      detail: 'Relevant coursework, honors, or activities.',
    },
  ],
}
