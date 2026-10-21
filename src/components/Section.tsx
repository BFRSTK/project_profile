import type { ReactNode } from 'react'

/** A résumé section: heading in the left column, content on the right. */
export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 className="section__title" id={`${id}-title`}>
        {title}
      </h2>
      <div className="section__body">{children}</div>
    </section>
  )
}
