import type { BuiltItem } from '../data/resume'
import { SectionHead } from './SectionHead'
import { useReveal } from '../hooks/useReveal'

function MvcIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="48" height="11" rx="5.5" fill="currentColor" opacity="1" />
      <rect x="4" y="23" width="48" height="11" rx="5.5" fill="currentColor" opacity="0.6" />
      <rect x="4" y="38" width="48" height="11" rx="5.5" fill="currentColor" opacity="0.3" />
      <line x1="28" y1="19" x2="28" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="28" y1="34" x2="28" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="28" cy="19" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="28" cy="34" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function MicroservicesIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="7" fill="currentColor" />
      <circle cx="28" cy="9"  r="5" fill="currentColor" opacity="0.65" />
      <circle cx="44" cy="19" r="5" fill="currentColor" opacity="0.65" />
      <circle cx="44" cy="37" r="5" fill="currentColor" opacity="0.65" />
      <circle cx="28" cy="47" r="5" fill="currentColor" opacity="0.65" />
      <circle cx="12" cy="37" r="5" fill="currentColor" opacity="0.65" />
      <circle cx="12" cy="19" r="5" fill="currentColor" opacity="0.65" />
      <line x1="28" y1="14" x2="28" y2="21" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="39" y1="22" x2="35" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="39" y1="34" x2="35" y2="31" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="28" y1="42" x2="28" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="17" y1="34" x2="21" y2="31" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <line x1="17" y1="22" x2="21" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
    </svg>
  )
}

function CicdIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="2"  y="21" width="13" height="13" rx="3.5" fill="currentColor" opacity="1" />
      <rect x="21" y="21" width="13" height="13" rx="3.5" fill="currentColor" opacity="0.7" />
      <rect x="40" y="21" width="13" height="13" rx="3.5" fill="currentColor" opacity="0.45" />
      <path d="M15 27.5 L21 27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18.5 24.5 L21 27.5 L18.5 30.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 27.5 L40 27.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M37.5 24.5 L40 27.5 L37.5 30.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 28 L8.5 30.5 L13 25" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="27.5" cy="27.5" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M46.5 30 L46.5 24 M44 26.5 L46.5 24 L49 26.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <text x="8.5"  y="16" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.5" fontFamily="monospace">BUILD</text>
      <text x="27.5" y="16" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.5" fontFamily="monospace">TEST</text>
      <text x="46.5" y="16" textAnchor="middle" fontSize="6" fill="currentColor" opacity="0.5" fontFamily="monospace">DEPLOY</text>
    </svg>
  )
}

function TestSuitesIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="10" y="6" width="30" height="38" rx="4" fill="currentColor" opacity="0.12" />
      <rect x="10" y="6" width="30" height="38" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
      <rect x="16" y="13" width="7" height="7" rx="2" fill="currentColor" opacity="0.9" />
      <path d="M17 16.5 L18.5 18 L22 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="24" width="7" height="7" rx="2" fill="currentColor" opacity="0.9" />
      <path d="M17 27.5 L18.5 29 L22 25.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="35" width="7" height="7" rx="2" fill="currentColor" opacity="0.45" />
      <line x1="26" y1="16.5" x2="34" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <line x1="26" y1="27.5" x2="34" y2="27.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <line x1="26" y1="38.5" x2="34" y2="38.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <circle cx="43" cy="43" r="8" fill="currentColor" opacity="0.9" />
      <path d="M39.5 43 L42 45.5 L46.5 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function JavaLibsIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <rect x="8"  y="38" width="40" height="10" rx="3.5" fill="currentColor" opacity="1" />
      <rect x="12" y="26" width="32" height="10" rx="3.5" fill="currentColor" opacity="0.65" />
      <rect x="16" y="14" width="24" height="10" rx="3.5" fill="currentColor" opacity="0.35" />
      <line x1="14" y1="38" x2="14" y2="48" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <line x1="18" y1="26" x2="18" y2="36" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <line x1="22" y1="14" x2="22" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
    </svg>
  )
}

function HelmChartsIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="21" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.35" />
      <circle cx="28" cy="28" r="8"  stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.85" />
      <circle cx="28" cy="28" r="3.5" fill="currentColor" />
      <line x1="28" y1="20" x2="28" y2="7"  stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="36" x2="28" y2="49" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="28" x2="7"  y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="28" x2="49" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="22" x2="13" y2="13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="34" x2="43" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="22" x2="43" y2="13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="34" x2="13" y2="43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

const ICON_MAP: Record<BuiltItem['icon'], React.FC> = {
  mvc: MvcIcon,
  microservices: MicroservicesIcon,
  cicd: CicdIcon,
  testsuites: TestSuitesIcon,
  javalibs: JavaLibsIcon,
  helmcharts: HelmChartsIcon,
}

export function WhatIBuilt({ items }: { items: BuiltItem[] }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="what-i-built" className="section">
      <SectionHead num="02" title="What I Have Built So Far" />
      <div className="built-grid reveal" ref={ref}>
        {items.map((item) => {
          const Icon = ICON_MAP[item.icon]
          return (
            <div
              key={item.label}
              className="built-card"
              style={{ '--built-color': item.color } as React.CSSProperties}
            >
              <div className="built-card__icon-wrap">
                <div className="built-card__glow" />
                <div className="built-card__icon">
                  <Icon />
                </div>
              </div>
              <span className="built-card__label">{item.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
