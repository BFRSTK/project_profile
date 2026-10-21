import type { BuiltItem, Experience } from '../data/resume'
import { Section } from './Section'

export function WhatIBuilt({ items, experience }: { items: BuiltItem[]; experience: Experience[] }) {
  const companyFor = (code: string) => experience.find((j) => j.code === code)?.company.replace(' - ', ' ') ?? code

  return (
    <Section id="built" title="What I've built">
      <ul className="built">
        {items.map((item) => (
          <li key={item.code} className="built__item">
            <div className="built__head">
              <h3 className="built__label">{item.label}</h3>
              <p className="built__where">
                {item.where.map((code, i) => (
                  <span key={code}>
                    {i > 0 && ', '}
                    <a className="nowrap" href={`#exp-${code}`}>
                      {companyFor(code)}
                    </a>
                  </span>
                ))}
              </p>
            </div>
            <p className="built__detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
