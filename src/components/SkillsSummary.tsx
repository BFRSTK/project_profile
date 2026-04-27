import type { SkillRating } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

const SCALE = 5

function RatingBar({ level }: { level: number }) {
  return (
    <div className="skill-rating" aria-label={`${level} out of ${SCALE}`}>
      {Array.from({ length: SCALE }, (_, i) => (
        <span
          key={i}
          className={`skill-rating__seg${i < level ? ' skill-rating__seg--on' : ''}`}
        />
      ))}
      <span className="skill-rating__label">{level}/{SCALE}</span>
    </div>
  )
}

export function SkillsSummary({ items }: { items: SkillRating[] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="skills-summary" className="section">
      <SectionHead num="02" title="Skills Summary" />
      <div className="skills-summary reveal" ref={ref}>
        {items.map((item) => (
          <div className="skills-summary__row" key={item.name}>
            <span className="skills-summary__name">{item.name}</span>
            <RatingBar level={item.level} />
          </div>
        ))}
      </div>
    </section>
  )
}
