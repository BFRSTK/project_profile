import type { ResumeData } from '../data/resume'
import { Section } from './Section'

export function Education({ education }: { education: ResumeData['education'] }) {
  return (
    <Section id="education" title="Education">
      <div className="roles">
        {education.map((e) => (
          <article className="role" key={e.code}>
            <p className="role__dates">
              <time>{e.start}</time> – <time>{e.end}</time>
            </p>
            <div className="role__body">
              <h3 className="role__title">{e.degree}</h3>
              <p className="role__company">
                {e.school}
                {e.detail && <span className="role__location"> · {e.detail}</span>}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
