import { useState } from 'react'
import type { Experience as Job, ResumeData } from '../data/resume'
import { Section } from './Section'

const VISIBLE = 4

function Role({ job }: { job: Job }) {
  const [expanded, setExpanded] = useState(false)
  const shown = job.bullets.slice(0, VISIBLE)
  const rest = job.bullets.slice(VISIBLE)
  const restId = `exp-more-${job.code}`

  return (
    <article className="role" id={`exp-${job.code}`}>
      <p className="role__dates">
        <time>{job.start}</time> – <time>{job.end}</time>
      </p>
      <div className="role__body">
        <h3 className="role__title">{job.role}</h3>
        <p className="role__company">
          {job.company.replace(' - ', ', ')}
          {job.location && <span className="role__location"> · {job.location}</span>}
        </p>
        <ul className="role__bullets">
          {shown.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {rest.length > 0 && (
          <>
            <div className={`role__more${expanded ? ' role__more--open' : ''}`} id={restId} {...(expanded ? {} : { inert: '' })}>
              <ul className="role__bullets">
                {rest.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <button
              className="role__toggle"
              aria-expanded={expanded}
              aria-controls={restId}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show fewer' : `Show all ${job.bullets.length} highlights`}
            </button>
          </>
        )}
        {job.stack && (
          <ul className="chips role__stack" aria-label="Stack">
            {job.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export function Experience({ experience }: { experience: ResumeData['experience'] }) {
  return (
    <Section id="experience" title="Experience">
      <div className="roles">
        {experience.map((job) => (
          <Role key={job.code} job={job} />
        ))}
      </div>
    </Section>
  )
}
