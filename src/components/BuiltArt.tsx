import type { ReactNode } from 'react'
import type { BuiltItem } from '../data/resume'

/**
 * Line schematics for "What I've built": each one draws the mechanism the
 * build changed, in hairline strokes with the accent on the part delivered.
 */

function Box({ x, y, w, h, label, accent }: { x: number; y: number; w: number; h: number; label?: string; accent?: boolean }) {
  return (
    <g className={accent ? 'art__acc' : 'art__line'}>
      <rect x={x} y={y} width={w} height={h} rx="6" className={accent ? 'art__soft' : 'art__ground'} />
      {label && (
        <text x={x + w / 2} y={y + h / 2 + 3.5} textAnchor="middle" className={accent ? 'art__text art__text--acc' : 'art__text'}>
          {label}
        </text>
      )}
    </g>
  )
}

const ARTS: Record<BuiltItem['icon'], ReactNode> = {
  cicd: (
    <>
      <path className="art__line" d="M20 36c22 0 22 30 44 30M20 66h44M20 96c22 0 22-30 44-30" />
      {[36, 66, 96].map((y) => (
        <circle key={y} cx="20" cy={y} r="4" className="art__line art__ground" />
      ))}
      <path className="art__acc" d="M64 66h8M120 66h8M176 66h8M232 66h8" />
      <Box x={72} y={53} w={48} h={26} label="Build" />
      <Box x={128} y={53} w={48} h={26} label="Test" />
      <Box x={184} y={53} w={48} h={26} label="Scan" />
      <Box x={240} y={53} w={60} h={26} label="Deploy" accent />
      <text x="20" y="122" className="art__text">Teams</text>
      <text x="300" y="122" textAnchor="end" className="art__text">One standard pipeline</text>
    </>
  ),
  helmcharts: (
    <>
      <rect x="20" y="26" width="58" height="70" rx="6" className="art__line art__ground" />
      <rect x="28" y="34" width="58" height="70" rx="6" className="art__line art__ground" />
      <rect x="36" y="42" width="58" height="70" rx="6" className="art__acc art__soft" />
      <path className="art__acc" d="M46 58h30M46 68h38M46 78h24M46 88h34M46 98h20" />
      <path className="art__acc" d="M106 72h34M134 66l6 6-6 6" />
      <rect x="152" y="18" width="150" height="100" rx="10" className="art__line art__dash" />
      <text x="164" y="36" className="art__text">Cluster</text>
      {[0, 1, 2].map((c) =>
        [0, 1].map((r) => (
          <rect key={`${c}${r}`} x={168 + c * 42} y={50 + r * 32} width="30" height="22" rx="4" className="art__acc art__soft" />
        )),
      )}
    </>
  ),
  microservices: (
    <>
      <rect x="20" y="22" width="76" height="88" rx="6" className="art__line art__ground" />
      <path className="art__line" d="M20 44h76M20 66h76M20 88h76M50 22v22M68 44v22M40 66v22M76 88v22" />
      <text x="58" y="126" textAnchor="middle" className="art__text">Monolith</text>
      <path className="art__acc" d="M108 66h28M130 60l6 6-6 6" />
      <path className="art__line" d="M170 38 230 30M230 30l58 18M170 38l52 40M230 30l-8 48M288 48l-66 30M160 96l62-18M222 78l60 22M160 96l10-58M288 48l-6 52" />
      {[
        [170, 38],
        [230, 30],
        [288, 48],
        [160, 96],
        [282, 100],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="8" className="art__acc art__ground" />
      ))}
      <circle cx="222" cy="78" r="11" className="art__acc art__soft" />
      <text x="222" y="126" textAnchor="middle" className="art__text">Services</text>
    </>
  ),
  javalibs: (
    <>
      <Box x={24} y={26} w={76} h={30} label="Service" />
      <Box x={122} y={26} w={76} h={30} label="Service" />
      <Box x={220} y={26} w={76} h={30} label="Service" />
      <path className="art__acc" d="M62 56v22M160 56v22M258 56v22" />
      <Box x={24} y={78} w={272} h={32} label="Shared bootstrap library" accent />
    </>
  ),
  testsuites: (
    <>
      <rect x="20" y="40" width="80" height="52" rx="6" className="art__acc art__soft" />
      <text x="60" y="63" textAnchor="middle" className="art__text art__text--acc">AI-assisted</text>
      <text x="60" y="77" textAnchor="middle" className="art__text art__text--acc">generator</text>
      <path className="art__acc" d="M100 66h26M120 60l6 6-6 6" />
      {[24, 46, 68, 90, 112].map((y, i) => (
        <g key={y}>
          <circle cx="150" cy={y} r="7" className="art__acc art__ground" />
          <path className="art__acc" d={`m146.5 ${y}l2.5 2.5 4.5-4.5`} />
          <path className="art__line" d={`M166 ${y}h${[110, 86, 124, 70, 98][i]}`} />
        </g>
      ))}
    </>
  ),
  mvc: (
    <>
      <rect x="20" y="12" width="280" height="110" rx="8" className="art__line art__ground" />
      <path className="art__line" d="M20 30h280" />
      {[32, 42, 52].map((x) => (
        <circle key={x} cx={x} cy="21" r="2.5" className="art__line" />
      ))}
      <Box x={128} y={42} w={64} h={26} label="View" accent />
      <Box x={48} y={86} w={72} h={26} label="Model" />
      <Box x={200} y={86} w={80} h={26} label="Controller" />
      <path className="art__line" d="M120 99h80M150 68l-48 18M170 68l52 18" />
    </>
  ),
}

export function BuiltArt({ icon }: { icon: BuiltItem['icon'] }) {
  return (
    <svg className="art" viewBox="0 0 320 132" aria-hidden="true">
      {ARTS[icon]}
    </svg>
  )
}
