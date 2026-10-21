import './App.css'
import { resume } from './data/resume'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { WhatIBuilt } from './components/WhatIBuilt'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { ArrowIcon } from './components/Icons'
import { SkillLinkProvider } from './components/SkillLink'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#experience">
        Skip to experience
      </a>
      <Nav name={resume.name} email={resume.contact.email} />
      <SkillLinkProvider data={resume}>
        <main>
          <Hero data={resume} />
          <div className="app">
            <About summary={resume.summary} />
            <Skills ratings={resume.skillsSummary} skills={resume.skills} />
            <WhatIBuilt items={resume.whatIBuilt} experience={resume.experience} />
            <Experience experience={resume.experience} />
            <Education education={resume.education} />
            <Contact contact={resume.contact} />
          </div>
        </main>
      </SkillLinkProvider>
      <footer className="footer">
        <div className="footer__inner">
          <span>
            © {new Date().getFullYear()} {resume.name} · {resume.location}
          </span>
          {resume.contact.website && (
            <a href={resume.contact.website} target="_blank" rel="noreferrer">
              {resume.contact.website.replace(/^https?:\/\/(www\.)?/, '')}
              <ArrowIcon />
            </a>
          )}
        </div>
      </footer>
    </>
  )
}
