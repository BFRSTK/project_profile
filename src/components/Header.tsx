import type { ResumeData } from '../data/resume'

export function Header({ data }: { data: ResumeData }) {
  const { name, title, location, contact } = data
  return (
    <section id="top" className="header">
      <h1>{name}</h1>
      <p className="header__title">{title}</p>
      <p className="header__location">{location}</p>
      <div className="header__contact">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {contact.website && (
          <a href={contact.website} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
      </div>
    </section>
  )
}
