import type { ResumeData } from '../data/resume'
import { Section } from './Section'
import { ToolList, useSkillLink } from './SkillLink'

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

const joinNames = (names: string[]) =>
  names.length <= 1 ? names.join('') : `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`

/** Answers "where did he use this?" for the active tool. */
function Answer() {
  const { active, pinned, clear, rolesFor, buildsFor, isPersonal } = useSkillLink()

  if (!active) {
    return <p className="answer__hint">Pick any tool to see where I've used it.</p>
  }

  const roles = rolesFor(active).map((j) => j.company.replace(' - ', ', '))
  const builds = buildsFor(active).map((b) => b.label)

  return (
    <p className="answer__text">
      <strong>{active}</strong>
      {roles.length === 0 &&
        builds.length === 0 &&
        (isPersonal(active)
          ? ': used on my own time, outside the roles listed here.'
          : ': part of my toolkit, not tied to a role listed here.')}
      {roles.length > 0 && <>: used at {joinNames(roles)}</>}
      {builds.length > 0 && (
        <>
          {roles.length > 0 ? ', behind ' : ': behind '}
          <a href="#built">{joinNames(builds)}</a>
        </>
      )}
      {(roles.length > 0 || builds.length > 0) && '.'}
      {(roles.length > 0 || builds.length > 0) && isPersonal(active) && ' Also used on my own time.'}
      {pinned && (
        <button type="button" className="answer__clear" onClick={clear}>
          Clear
        </button>
      )}
    </p>
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
          <div className="answer" aria-live="polite">
            <Answer />
          </div>
          <dl className="toolkit">
            {skills.map((group) => (
              <div key={group.category} className="toolkit__row">
                <dt>{group.category}</dt>
                <dd>
                  <ToolList tools={group.items} label={group.category} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
