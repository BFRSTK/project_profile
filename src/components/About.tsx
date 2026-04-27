import type { ResumeData } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

export function About({ summary, stats }: { summary: string; stats: ResumeData['stats'] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="about" className="section">
      <SectionHead num="01" title="About" />
      <div className="about reveal" ref={ref}>
        <p className="about__text">{summary}</p>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
