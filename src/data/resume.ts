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
  /** Short strip designator, e.g. NAB */
  code: string
  company: string
  role: string
  location?: string
  start: string
  end: string
  bullets: string[]
  stack?: string[]
}

export type Education = {
  code: string
  school: string
  degree: string
  start: string
  end: string
  detail?: string
}

export type YearsSummary = {
  total: string
  /** How the total splits by discipline */
  split: { years: string; area: string }[]
  /** Years, within the total, spent mentoring engineering teams */
  mentoring: string
}

export type SkillRating = {
  name: string
  level: number
}

export type BuiltItem = {
  label: string
  icon: 'mvc' | 'microservices' | 'cicd' | 'testsuites' | 'javalibs' | 'helmcharts'
  /** Short type code printed on the strip */
  code: string
  /** Experience codes where this was built */
  where: string[]
  /** One outcome, taken from the experience bullets */
  detail: string
  /** Tools behind it; names match the toolkit and role stacks */
  tools: string[]
}

export type AIPractice = {
  label: string
  icon: 'assess' | 'automate' | 'frontend' | 'amplify'
  /** Where it's used, e.g. a role or personal time */
  context: string
  /** Optional in-page link for the context, e.g. #exp-NAB */
  href?: string
  detail: string
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
  years: YearsSummary
  contact: {
    email: string
    github?: string
    linkedin?: string
    website?: string
  }
  skillsSummary: SkillRating[]
  whatIBuilt: BuiltItem[]
  /** How AI tools fit into day-to-day engineering */
  aiWorkflow: {
    summary: string
    /** Draft → refine → hand-off, drawn as the section's diagram */
    flow: { who: string; steps: string[]; mine?: boolean }[]
    /** Work agents run alongside the flow */
    background: { who: string; steps: string[] }
    practices: AIPractice[]
  }
  skills: { category: string; items: string[] }[]
  /** Toolkit items used on personal time rather than in a listed role */
  personalTools: string[]
  experience: Experience[]
  education: Education[]
}

export const resume: ResumeData = {
  name: 'Jan Edward de Nicolas',
  firstName: 'Jan Edward',
  lastName: 'de Nicolas',
  tagline: 'Engineering the code. Automating the chaos.',
  title: 'DevOps Technical Lead',
  location: 'Melbourne, Australia',
  available: true,
  photo: '/photo-900.jpg',
  summary:
    "With 8 years in software engineering and 6 years of specialized DevOps experience, I bring a rare combination of full-stack technical depth and operational excellence — spanning everything from front-end interfaces to the pipelines and infrastructure that power them. I have a proven track record of designing and implementing CI/CD systems, driving automation initiatives, and ensuring system reliability at scale, all grounded in a strong Computer Engineering foundation in C/C++ and Java. Beyond the technical, I've built and mentored high-performing engineering teams across diverse roles and career levels, earning a reputation as a fast-moving, analytical problem-solver who delivers with clarity and composure.",
  years: {
    total: '14',
    split: [
      { years: '8', area: 'software engineering' },
      { years: '6', area: 'DevOps' },
    ],
    mentoring: '8',
  },
  contact: {
    email: 'edwarddenicolas@gmail.com',
    linkedin: 'https://www.linkedin.com/in/jan-edward-de-nicolas/',
    website: 'https://www.rimebound.com',
  },
  skillsSummary: [
    { name: 'Coding', level: 4 },
    { name: 'Solution Design', level: 5 },
    { name: 'Team Management', level: 5 },
    { name: 'Cloud Operations', level: 4 },
    { name: 'SDLC Practices', level: 5 },
  ],
  whatIBuilt: [
    {
      label: 'CI/CD Pipelines',
      icon: 'cicd',
      code: 'CICD',
      where: ['NAB', 'ACN-AU'],
      detail: 'Standardized enterprise CI/CD pipelines using Jenkins and Harness, accelerating release cycles and improving deployment consistency across multiple teams.',
      tools: [
        'Jenkins',
        'Harness',
        'Git',
        'Cursor',
        'Python',
        'Shell/Bash',
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Terraform',
        'Ansible',
      ],
    },
    {
      label: 'Helm Charts',
      icon: 'helmcharts',
      code: 'HELM',
      where: ['NAB'],
      detail: 'Converted legacy infrastructure-as-code to Helm charts, improving Kubernetes deployment standardization and accelerating release readiness.',
      tools: ['Kubernetes'],
    },
    {
      label: 'Microservices',
      icon: 'microservices',
      code: 'MSVC',
      where: ['ACN-AU'],
      detail: 'Contributed to large-scale modernization at a major Australian bank, transitioning monolithic systems to a microservices architecture.',
      tools: ['Java', 'Spring', 'SQL', 'Gradle', 'Node', 'Git'],
    },
    {
      label: 'Java Libraries',
      icon: 'javalibs',
      code: 'JLIB',
      where: ['ACN-AU'],
      detail: 'Developed standardized Java bootstrapping frameworks and coding patterns, improving consistency, maintainability, and developer onboarding efficiency.',
      tools: ['Java', 'Maven', 'Gradle', 'Node', 'Git'],
    },
    {
      label: 'Application Test Suites',
      icon: 'testsuites',
      code: 'TEST',
      where: ['NAB', 'ACN-PH'],
      detail: 'Developed AI-assisted test case applications adopted organization-wide, increasing test coverage and reducing manual testing effort.',
      tools: ['JUnit', 'Selenium', 'Jasmine', 'Git', 'Cursor'],
    },
    {
      label: 'MVC Applications',
      icon: 'mvc',
      code: 'MVC',
      where: ['ACN-PH'],
      detail: 'Modernized a legacy web application by migrating from Dojo Toolkit to jQuery, Bootstrap, and Kendo UI within an MVC architecture, improving usability and maintainability.',
      tools: ['JavaScript', 'jQuery', 'Bootstrap', 'Kendo UI'],
    },
  ],
  aiWorkflow: {
    summary:
      'AI is built into how I work every day. I use it to get to a strong first draft faster and to take repetitive work off my plate, while the judgement, refinement and final decisions stay with me. The result is more time on architecture, quality and the people I lead.',
    flow: [
      { who: 'Cursor drafts', steps: ['Codebase assessment', 'Software design', 'Rough delivery timeline'] },
      { who: 'I refine', steps: ['Review and challenge', 'Polish and decide'], mine: true },
      { who: 'The team receives', steps: ['Reviewed designs', 'Plans with timelines'] },
    ],
    background: { who: 'Agents in the background', steps: ['Recurring reports', 'Repetitive task automation'] },
    practices: [
      {
        label: 'Assessment & planning',
        icon: 'assess',
        context: 'Cursor · National Australia Bank',
        href: '#exp-NAB',
        detail:
          'I use Cursor to assess codebases quickly, mapping structure, dependencies and risk, then draft software designs and rough delivery timelines for planning. Those drafts are a starting point: I review, challenge and refine each one myself before it goes to the team or stakeholders.',
      },
      {
        label: 'Background automation',
        icon: 'automate',
        context: 'Cursor · National Australia Bank',
        href: '#exp-NAB',
        detail:
          'While I focus on design and review, I run agents in the background to generate recurring reports and automate repetitive operational tasks, freeing hours each week for higher-value engineering work.',
      },
      {
        label: 'Personal projects',
        icon: 'frontend',
        context: 'Claude · Personal time',
        detail:
          'My depth is in back-end, infrastructure and DevOps, and I am actively refreshing my front-end skills. On personal projects, Claude complements that gap, helping with modern UI frameworks, layout, styling and accessibility so I can ship complete, polished products while I rebuild that expertise. This site was built that way.',
      },
      {
        label: 'How it amplifies me',
        icon: 'amplify',
        context: 'Across both',
        detail:
          'AI speeds up the work; 14 years of engineering judgement decides what ships. I hold everything it produces to the same standards as any code review, which lets me move faster without lowering the bar.',
      },
    ],
  },
  personalTools: ['C/C++', 'Ruby', 'Django', 'Rails'],
  skills: [
    {
      category: 'Languages',
      items: ['Java', 'C/C++', 'SQL', 'Ruby', 'Python', 'Shell/Bash', 'JavaScript'],
    },
    {
      category: 'Frameworks',
      items: ['Spring', 'Django', 'Rails', 'Maven', 'Gradle', 'Node'],
    },
    {
      category: 'Infrastructure',
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Jenkins', 'Harness', 'Cursor'],
    },
  ],
  experience: [
    {
      code: 'NAB',
      company: 'National Australia Bank',
      role: 'DevOps Tech Lead',
      location: 'Melbourne, Australia',
      start: '2021',
      end: 'Present',
      bullets: [
        'Standardized enterprise CI/CD pipelines using Jenkins and Harness, accelerating release cycles and improving deployment consistency across multiple teams.',
        'Led end-to-end migration of CI/CD pipelines from Jenkins to Harness, enhancing scalability, governance, and operational efficiency.',
        'Directed legacy application migrations from on-premises infrastructure to cloud environments, improving system reliability and reducing infrastructure overhead.',
        'Spearheaded modernization and cloud enablement of COTS applications, increasing maintainability and performance.',
        'Implemented security controls within CI/CD workflows, strengthening application and infrastructure compliance across environments.',
        'Developed AI-assisted test case applications adopted organization-wide, increasing test coverage and reducing manual testing effort.',
        'Converted legacy infrastructure-as-code to Helm charts, improving Kubernetes deployment standardization and accelerating release readiness.',
        'Supported containerized Docker deployments across production and non-production environments, ensuring high availability and operational stability.',
        'Partnered with development teams to provision and configure infrastructure on AWS and Microsoft Azure, enabling scalable cloud-native solutions.',
        'Mentored engineers and cross-functional teams, driving DevOps adoption and continuous improvement initiatives.',
      ],
      stack: ['Shell/Bash', 'Python', 'Terraform', 'Kubernetes', 'Docker', 'Jenkins', 'Harness', 'AWS', 'Azure', 'Google Cloud', 'Git', 'Gradle', 'Node', 'Cursor', 'Ansible'],
    },
    {
      code: 'ACN-AU',
      company: 'Accenture - Australia',
      role: 'Application Development Specialist',
      location: 'Melbourne, Australia',
      start: '2016',
      end: '2021',
      bullets: [
        'Designed and developed reusable frameworks and shared libraries, accelerating development velocity and enforcing architectural standards across teams.',
        'Implemented automated CI/CD pipelines in Jenkins, streamlining build, test, and deployment processes.',
        'Contributed to large-scale modernization at a major Australian bank, transitioning monolithic systems to a microservices architecture.',
        'Conducted performance and load testing to validate scalability and ensure system readiness for increased daily active users.',
        'Translated functional requirements into detailed technical designs and robust implementations aligned with enterprise standards.',
        'Mentored and upskilled junior engineers in modern frameworks, coding best practices, and DevOps principles.',
        'Managed production support and change requests in compliance with structured change management processes.',
        'Developed standardized Java bootstrapping frameworks and coding patterns, improving consistency, maintainability, and developer onboarding efficiency.',
      ],
      stack: ['Java', 'Spring', 'Maven', 'Gradle', 'Node', 'Jenkins', 'SQL', 'Git'],
    },
    {
      code: 'ACN-PH',
      company: 'Accenture - Philippines',
      role: 'Senior Software Engineer',
      location: 'Manila, Philippines',
      start: '2012',
      end: '2016',
      bullets: [
        'Modernized a legacy web application by migrating from Dojo Toolkit to jQuery, Bootstrap, and Kendo UI within an MVC architecture, improving usability and maintainability.',
        'Delivered end-to-end web solutions based on client requirements, from design through production deployment.',
        'Provided multi-phase application support across development, QA, UAT, and production environments.',
        'Designed and executed comprehensive test strategies using JUnit, Selenium, and Jasmine, ensuring code quality and functional reliability.',
        'Conducted performance, stress, and penetration testing to optimize system performance and strengthen application security.',
        'Presented front-end framework upgrade recommendations through proof-of-concept demonstrations to senior leadership.',
        'Deployed a full-stack web application to production using AngularJS and Bootstrap on the front-end and EJB-based services on the back-end.',
      ],
      stack: ['JavaScript', 'Dojo', 'jQuery', 'Bootstrap', 'Kendo UI', 'Java', 'SQL', 'JUnit', 'Selenium', 'Jasmine'],
    },
  ],
  education: [
    {
      code: 'USLS',
      school: 'University of St. La Salle',
      degree: 'B.S. Computer Engineering',
      start: '2007',
      end: '2012',
      detail: 'Bacolod City, Negros Occidental, Philippines 6100',
    },
  ],
}
