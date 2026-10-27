import type { CSSProperties } from 'react'
import type { BuiltItem, Experience } from '../data/resume'
import { Section } from './Section'
import { ToolList, same, useSkillLink } from './SkillLink'
import { BuiltArt } from './BuiltArt'
import { TopicIcon } from './Icons'

export function WhatIBuilt({ items, experience }: { items: BuiltItem[]; experience: Experience[] }) {
  const { active, pinned, clear } = useSkillLink()
  const companyFor = (code: string) => experience.find((j) => j.code === code)?.company.replace(' - ', ' ') ?? code
  const uses = (item: BuiltItem, tool: string | null) => !!tool && item.tools.some((t) => same(t, tool))

  // Only a pinned tool reorders; hovering just lights matches in place.
  const ordered = pinned
    ? [...items.filter((i) => uses(i, pinned)), ...items.filter((i) => !uses(i, pinned))]
    : items
  const matches = pinned ? items.filter((i) => uses(i, pinned)).length : 0

  return (
    <Section id="built" title="What I've built">
      <p className="built__filter" aria-live="polite">
        {pinned && (
          <>
            {matches === 0 ? 'None of these use ' : `${matches} of ${items.length} use `}
            <strong>{pinned}</strong>.
            <button type="button" className="answer__clear" onClick={clear}>
              Show all
            </button>
          </>
        )}
      </p>
      <ul className="built">
        {ordered.map((item) => {
          const state = !active ? '' : uses(item, active) ? ' built__item--match' : ' built__item--dim'
          return (
            <li
              key={item.code}
              className={`built__item${state}`}
              style={{ viewTransitionName: `built-${item.code}` } as CSSProperties}
            >
              <div className="built__art">
                <BuiltArt icon={item.icon} />
              </div>
              <div className="built__head">
                <span className="icon-tile">
                  <TopicIcon name={item.icon} />
                </span>
                <div>
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
              </div>
              <p className="built__detail">{item.detail}</p>
              <ToolList tools={item.tools} label={`Tools behind ${item.label}`} />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
