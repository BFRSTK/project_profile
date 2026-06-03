import type { ResumeData } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

export function Skills({ skills }: { skills: ResumeData['skills'] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="skills" className="section">
      <SectionHead num="04" title="Toolkit" />
      <div className="skills__grid reveal" ref={ref}>
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-list__item" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
