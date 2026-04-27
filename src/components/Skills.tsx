import type { ResumeData } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

export function Skills({ skills }: { skills: ResumeData['skills'] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="skills" className="section">
      <SectionHead num="03" title="Toolkit" />
      <div className="skills__grid reveal" ref={ref}>
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
