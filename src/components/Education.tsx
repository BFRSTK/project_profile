import type { ResumeData } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

export function Education({
  education,
}: {
  education: ResumeData['education']
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="education" className="section">
      <SectionHead num="06" title="Education" />
      <div className="education__list reveal" ref={ref}>
        {education.map((e) => (
          <div className="education__item" key={`${e.school}-${e.start}`}>
            <div className="education__dates">
              {e.start} — {e.end}
            </div>
            <div>
              <div className="education__school">{e.school}</div>
              <div className="education__degree">{e.degree}</div>
              {e.detail && <div className="education__detail">{e.detail}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
