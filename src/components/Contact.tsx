import type { ResumeData } from '../data/resume'
import { useReveal } from '../hooks/useReveal'

export function Contact({ contact }: { contact: ResumeData['contact'] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="contact" className="cta">
      <div className="reveal" ref={ref}>
        <div className="cta__label">— Let's talk</div>
        <a className="cta__email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <p className="cta__sub">
          Currently open to interesting work. The fastest way to reach me is email — I read everything.
        </p>
      </div>
    </section>
  )
}
