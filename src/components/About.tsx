import { Section } from './Section'

export function About({ summary }: { summary: string }) {
  return (
    <Section id="about" title="About">
      <p className="about__summary">{summary}</p>
    </Section>
  )
}
