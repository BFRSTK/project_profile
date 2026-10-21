import type { ResumeData } from '../data/resume'
import { Section } from './Section'

const SCALE = 5

function Meter({ level }: { level: number }) {
  return (
    <span className="meter" role="img" aria-label={`${level} out of ${SCALE}`}>
      {Array.from({ length: SCALE }, (_, i) => (
        <span key={i} className={`meter__seg${i < level ? ' meter__seg--on' : ''}`} />
      ))}
    </span>
  )
}

export function Skills({
  ratings,
  skills,
}: {
  ratings: ResumeData['skillsSummary']
  skills: ResumeData['skills']
}) {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        <div>
          <h3 className="subhead">Core strengths</h3>
          <ul className="ratings">
            {ratings.map((r) => (
              <li key={r.name} className="ratings__row">
                <span className="ratings__name">{r.name}</span>
                <Meter level={r.level} />
                <span className="ratings__value">
                  {r.level}/{SCALE}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="subhead">Toolkit</h3>
          <dl className="toolkit">
            {skills.map((group) => (
              <div key={group.category} className="toolkit__row">
                <dt>{group.category}</dt>
                <dd>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
