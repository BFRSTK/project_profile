import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { flushSync } from 'react-dom'
import type { ResumeData } from '../data/resume'

/**
 * One tool selection shared by Skills, What I've built and Experience.
 * Hover previews a tool; click pins it. The pinned tool reorders the
 * build list, so that change runs inside a view transition.
 */

type SkillLinkValue = {
  /** The tool currently lighting the page: pinned, else hovered */
  active: string | null
  pinned: string | null
  setHovered: (tool: string | null) => void
  toggle: (tool: string) => void
  clear: () => void
  rolesFor: (tool: string) => ResumeData['experience']
  buildsFor: (tool: string) => ResumeData['whatIBuilt']
  isPersonal: (tool: string) => boolean
}

const SkillLinkContext = createContext<SkillLinkValue | null>(null)

export const same = (a: string, b: string) => a.toLowerCase() === b.toLowerCase()

function withTransition(update: () => void) {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown }
  if (!doc.startViewTransition || reduce) {
    update()
    return
  }
  doc.startViewTransition(() => flushSync(update))
}

export function SkillLinkProvider({ data, children }: { data: ResumeData; children: ReactNode }) {
  const [hovered, setHovered] = useState<string | null>(null)
  const [pinned, setPinned] = useState<string | null>(null)

  const toggle = useCallback(
    (tool: string) => withTransition(() => setPinned((p) => (p && same(p, tool) ? null : tool))),
    [],
  )
  const clear = useCallback(() => withTransition(() => setPinned(null)), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') clear()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [clear])

  const value = useMemo<SkillLinkValue>(
    () => ({
      active: pinned ?? hovered,
      pinned,
      setHovered,
      toggle,
      clear,
      rolesFor: (tool) => data.experience.filter((j) => j.stack?.some((s) => same(s, tool))),
      buildsFor: (tool) => data.whatIBuilt.filter((b) => b.tools.some((t) => same(t, tool))),
      isPersonal: (tool) => data.personalTools.some((t) => same(t, tool)),
    }),
    [pinned, hovered, toggle, clear, data],
  )

  return <SkillLinkContext.Provider value={value}>{children}</SkillLinkContext.Provider>
}

export function useSkillLink() {
  const ctx = useContext(SkillLinkContext)
  if (!ctx) throw new Error('useSkillLink must be used inside SkillLinkProvider')
  return ctx
}

/** A tool chip that drives the shared selection. */
export function ToolChip({ name }: { name: string }) {
  const { active, pinned, setHovered, toggle } = useSkillLink()
  const isPinned = !!pinned && same(pinned, name)
  const isActive = !!active && same(active, name)

  return (
    <button
      type="button"
      className={`tool${isActive ? ' tool--active' : ''}`}
      aria-pressed={isPinned}
      onClick={() => toggle(name)}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(name)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(null)}
    >
      {name}
    </button>
  )
}

/** A list of tool chips. */
export function ToolList({ tools, label }: { tools: string[]; label: string }) {
  return (
    <ul className="chips" aria-label={label}>
      {tools.map((t) => (
        <li key={t}>
          <ToolChip name={t} />
        </li>
      ))}
    </ul>
  )
}
