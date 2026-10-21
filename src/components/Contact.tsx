import type { ResumeData } from '../data/resume'
import { Section } from './Section'
import { ArrowIcon, MailIcon } from './Icons'

export function Contact({ contact }: { contact: ResumeData['contact'] }) {
  const [user, domain] = contact.email.split('@')
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p className="contact__lede">
          Hiring for a DevOps lead or platform role? Email is the quickest way to reach me.
        </p>
        <a className="contact__email" href={`mailto:${contact.email}`}>
          {user}@<wbr />
          {domain}
        </a>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            <MailIcon />
            Email me
          </a>
          {contact.linkedin && (
            <a className="btn btn--secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowIcon />
            </a>
          )}
          {contact.github && (
            <a className="btn btn--secondary" href={contact.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowIcon />
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}
