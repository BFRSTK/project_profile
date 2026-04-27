import { useState, useEffect, useRef, useCallback } from 'react'
import profileImg from './assets/profile.png'
import './App.css'

/* ─── Data ─── */
const EXPERIENCES = [
  {
    period: '2022 — Present',
    role: 'Senior Product Designer',
    company: 'Stellar Digital',
    desc: 'Leading design systems and product strategy for a SaaS platform serving 2M+ users. Driving a 34% increase in user engagement through data-informed redesigns and rapid prototyping.',
    tags: ['Design Systems', 'Figma', 'User Research', 'A/B Testing'],
  },
  {
    period: '2020 — 2022',
    role: 'Product Designer',
    company: 'Neon Labs',
    desc: 'Designed end-to-end experiences for a fintech mobile app, from onboarding flows to complex dashboard interfaces. Reduced churn by 18% with improved UX patterns.',
    tags: ['Mobile Design', 'Prototyping', 'React Native', 'Analytics'],
  },
  {
    period: '2018 — 2020',
    role: 'UI/UX Designer',
    company: 'Craft Studio',
    desc: 'Created responsive web experiences for clients across e-commerce, healthcare, and education. Built and maintained a shared component library used across 12+ projects.',
    tags: ['Web Design', 'CSS', 'Component Libraries', 'Accessibility'],
  },
  {
    period: '2016 — 2018',
    role: 'Junior Designer',
    company: 'PixelForge Agency',
    desc: 'Started my design career crafting brand identities, marketing sites, and pitch decks for early-stage startups. Developed a strong foundation in visual design and typography.',
    tags: ['Branding', 'Visual Design', 'Typography', 'Illustration'],
  },
]

const SKILLS = [
  {
    icon: '✦',
    title: 'Design',
    items: [
      { name: 'Figma & Sketch', level: 96 },
      { name: 'Design Systems', level: 92 },
      { name: 'Prototyping', level: 90 },
      { name: 'Visual Design', level: 94 },
    ],
  },
  {
    icon: '⚡',
    title: 'Development',
    items: [
      { name: 'HTML / CSS', level: 93 },
      { name: 'JavaScript / React', level: 85 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Motion / Animation', level: 80 },
    ],
  },
  {
    icon: '◈',
    title: 'Strategy',
    items: [
      { name: 'User Research', level: 88 },
      { name: 'Information Architecture', level: 86 },
      { name: 'Data Analysis', level: 78 },
      { name: 'Workshop Facilitation', level: 82 },
    ],
  },
]

const PROJECTS = [
  {
    emoji: '🚀',
    bg: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)',
    type: 'SaaS Platform',
    name: 'Orbit Analytics',
    desc: 'A real-time analytics dashboard helping teams visualise user behaviour with intuitive data storytelling.',
    stack: ['React', 'D3.js', 'Figma', 'Storybook'],
  },
  {
    emoji: '💳',
    bg: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    type: 'Fintech App',
    name: 'Vault Finance',
    desc: 'A mobile banking experience focused on Gen-Z users with gamified savings goals and social features.',
    stack: ['React Native', 'Lottie', 'Plaid API', 'Figma'],
  },
  {
    emoji: '🎨',
    bg: 'linear-gradient(135deg, #1a0a2e 0%, #3d1a78 100%)',
    type: 'Design System',
    name: 'Prisma UI',
    desc: 'An open-source design system with 80+ accessible components, tokens, and comprehensive documentation.',
    stack: ['Figma', 'Storybook', 'TypeScript', 'Chromatic'],
  },
  {
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
    type: 'Healthcare',
    name: 'MedFlow',
    desc: 'A patient management portal simplifying appointment booking, records, and telehealth for rural clinics.',
    stack: ['Next.js', 'Tailwind', 'WCAG 2.1', 'Figma'],
  },
]

const TESTIMONIALS = [
  {
    text: "Alex is one of those rare designers who truly understands both the craft and the business. Every pixel has a purpose.",
    name: 'Sarah Chen',
    role: 'VP Product, Stellar Digital',
    initials: 'SC',
  },
  {
    text: "Working with Alex transformed our product. They brought a level of thoughtfulness and polish that elevated everything we shipped.",
    name: 'Marcus Rivera',
    role: 'CTO, Neon Labs',
    initials: 'MR',
  },
]

const STATS = [
  { number: '8+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Delivered' },
  { number: '2M+', label: 'Users Impacted' },
  { number: '12', label: 'Design Awards' },
]

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
]

/* ─── Intersection Observer Hook ─── */
function useInView(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(el)
      }
    }, { threshold: 0.15, ...options })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({ children, className = '', id, style }) {
  const [ref, isVisible] = useInView()
  return (
    <section
      ref={ref}
      id={id}
      className={`${className} animate-on-scroll ${isVisible ? 'visible' : ''}`}
      style={{ ...style, transitionDelay: '0.1s' }}
    >
      {children}
    </section>
  )
}

/* ─── Skill Bar Component ─── */
function SkillBar({ name, level, animate }) {
  return (
    <div className="skill-row">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className={`skill-fill ${animate ? 'animate' : ''}`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

/* ─── Main App ─── */
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [skillsVisible, setSkillsVisible] = useState(false)
  const skillsRef = useRef(null)

  /* Scroll listener for navbar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Skills section observer */
  useEffect(() => {
    const el = skillsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <a href="#" className="navbar-logo">
          alex<span className="accent-dot">.</span>morgan
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
          {menuOpen && (
            <li>
              <a href="#contact" className="navbar-cta" onClick={closeMenu}>
                Get in Touch
              </a>
            </li>
          )}
        </ul>

        <a href="#contact" className="navbar-cta" style={{ textDecoration: 'none' }}>
          Get in Touch
        </a>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="hero">
        <div className="hero-profile">
          <img src={profileImg} alt="Alex Morgan — Profile photo" />
          <span className="status-badge" title="Available for work" />
        </div>

        <div className="hero-tag">
          <span className="dot" />
          Available for new projects
        </div>

        <h1 className="hero-name">
          <span className="gradient-text">Alex Morgan</span>
        </h1>

        <p className="hero-title">Product Designer &amp; Creative Technologist</p>

        <p className="hero-desc">
          I craft thoughtful digital experiences at the intersection of design and technology — turning complex problems into elegant, user-centered solutions.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            <span>✉</span> Let's Talk
          </a>
          <a href="#projects" className="btn-secondary" style={{ textDecoration: 'none' }}>
            <span>◎</span> View Work
          </a>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      <hr className="section-divider" />

      {/* ── About ── */}
      <AnimatedSection className="section" id="about">
        <div className="section-header">
          <div className="section-label">
            <span className="line" />
            About
          </div>
          <h2 className="section-title">A bit about me</h2>
          <p className="section-subtitle">
            Designer by craft, engineer by curiosity, storyteller at heart.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              With over 8 years of experience spanning product design, brand identity, and front-end development, I bring a holistic perspective to every project. I believe the best digital experiences are born from deep empathy, rigorous craft, and fearless experimentation.
            </p>
            <p>
              I've had the privilege of working with startups and established companies alike — from fintech and healthcare to creative agencies and SaaS platforms. My approach combines strategic thinking with meticulous execution, ensuring every design decision is purposeful.
            </p>
            <p>
              When I'm not pushing pixels, you'll find me contributing to open-source design tools, mentoring junior designers, or exploring the latest in generative AI and creative coding.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <hr className="section-divider" />

      {/* ── Experience ── */}
      <AnimatedSection className="section" id="experience">
        <div className="section-header">
          <div className="section-label">
            <span className="line" />
            Experience
          </div>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            A journey through design, technology, and product thinking.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCES.map((exp, i) => (
            <div className="experience-item" key={i}>
              <div className="exp-period">{exp.period}</div>
              <div className="exp-content">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">{exp.company}</div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span className="exp-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <hr className="section-divider" />

      {/* ── Skills ── */}
      <AnimatedSection className="section" id="skills" style={{ overflow: 'visible' }}>
        <div className="section-header">
          <div className="section-label">
            <span className="line" />
            Skills
          </div>
          <h2 className="section-title">What I bring</h2>
          <p className="section-subtitle">
            A blend of design mastery, technical fluency, and strategic acumen.
          </p>
        </div>

        <div className="skills-grid" ref={skillsRef}>
          {SKILLS.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-icon">{cat.icon}</div>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-list">
                {cat.items.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={skillsVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <hr className="section-divider" />

      {/* ── Projects ── */}
      <AnimatedSection className="section" id="projects">
        <div className="section-header">
          <div className="section-label">
            <span className="line" />
            Projects
          </div>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A curated selection of projects I'm most proud of.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-visual" style={{ background: project.bg }}>
                <span>{project.emoji}</span>
              </div>
              <div className="project-body">
                <div className="project-type">{project.type}</div>
                <div className="project-name">{project.name}</div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-stack">
                  {project.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <hr className="section-divider" />

      {/* ── Testimonials ── */}
      <AnimatedSection className="section" id="testimonials">
        <div className="section-header">
          <div className="section-label">
            <span className="line" />
            Testimonials
          </div>
          <h2 className="section-title">Kind words</h2>
          <p className="section-subtitle">
            What collaborators and clients have to say.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="testimonial-info">
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <hr className="section-divider" />

      {/* ── Contact CTA ── */}
      <AnimatedSection className="contact-section" id="contact">
        <div className="contact-inner">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span className="line" />
            Contact
          </div>
          <h2 className="contact-title">Let's build<br />something great</h2>
          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a href="mailto:hello@alexmorgan.design" className="contact-email">
            ✉&nbsp; hello@alexmorgan.design
          </a>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Dribbble">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.143 10.143 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702A10.15 10.15 0 0012 1.822c-.83 0-1.634.1-2.4.23zm10.335 3.483c-.218.29-1.89 2.478-5.64 4.023.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.4-6.37z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X / Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Footer ── */}
      <footer className="footer">
        <span>© 2026 Alex Morgan. All rights reserved.</span>
        <div className="footer-right">
          <span>Built with</span>
          <span style={{ color: 'var(--accent)' }}>♥</span>
          <span>and React</span>
        </div>
      </footer>
    </>
  )
}

export default App
