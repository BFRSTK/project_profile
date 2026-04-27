import './App.css'
import { resume } from './data/resume'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { SkillsSummary } from './components/SkillsSummary'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <>
      <Nav name={resume.name} />
      <main className="app">
        <Hero data={resume} />
        <About summary={resume.summary} stats={resume.stats} />
        <SkillsSummary items={resume.skillsSummary} />
        <Skills skills={resume.skills} />
        <Experience experience={resume.experience} />
        <Education education={resume.education} />
        <Contact contact={resume.contact} />
        <footer className="footer">
          <span>© {new Date().getFullYear()} {resume.name}</span>
          <div className="footer__links">
            {resume.contact.github && (
              <a href={resume.contact.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {resume.contact.linkedin && (
              <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            <a href={`mailto:${resume.contact.email}`}>Email</a>
          </div>
        </footer>
      </main>
    </>
  )
}
