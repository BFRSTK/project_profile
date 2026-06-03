import type { ResumeData } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

export function Experience({
  experience,
}: {
  experience: ResumeData['experience']
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="experience" className="section">
      <SectionHead num="05" title="Experience" />
      <div className="experience__list reveal" ref={ref}>
        {experience.map((job) => {
          const current = job.end.toLowerCase() === 'present'
          return (
            <article className="experience__item" key={`${job.company}-${job.start}`}>
              <div className="experience__dates">
                {job.start} — {job.end}
                {current && (
                  <div>
                    <span className="experience__dates-current">Now</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="experience__role">{job.role}</h3>
                <div className="experience__company">
                  <span>{job.company}</span>
                  {job.location && (
                    <>
                      <span className="experience__company-dot" />
                      <span>{job.location}</span>
                    </>
                  )}
                </div>
                <ul className="experience__bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {job.stack && (
                  <div className="skill-tags">
                    {job.stack.map((s) => (
                      <span className="tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
