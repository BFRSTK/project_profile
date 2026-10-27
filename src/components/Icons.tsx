import type { ReactNode } from 'react'

export function ArrowIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.5 11.5 L11.5 4.5 M5.5 4.5 H11.5 V10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 4.25 L8 8.5 L13.5 4.25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

const ICON_PATHS: Record<string, ReactNode> = {
  cicd: (
    <>
      <circle cx="4" cy="4.5" r="2" />
      <circle cx="4" cy="15.5" r="2" />
      <circle cx="16" cy="10" r="2" />
      <path d="M4 6.5v7M6 4.5c5 0 4 5.5 8 5.5" />
    </>
  ),
  helmcharts: (
    <>
      <path d="M10 2.5 17 6.25v7.5L10 17.5l-7-3.75v-7.5Z" />
      <path d="M3 6.25 10 10l7-3.75M10 10v7.5" />
    </>
  ),
  microservices: (
    <>
      <circle cx="10" cy="10" r="2.5" />
      <circle cx="4" cy="4" r="1.75" />
      <circle cx="16" cy="4" r="1.75" />
      <circle cx="4" cy="16" r="1.75" />
      <circle cx="16" cy="16" r="1.75" />
      <path d="m5.3 5.3 2.9 2.9M14.7 5.3l-2.9 2.9M5.3 14.7l2.9-2.9M14.7 14.7l-2.9-2.9" />
    </>
  ),
  javalibs: (
    <>
      <path d="M10 3 17 6.5 10 10 3 6.5Z" />
      <path d="m3 10 7 3.5 7-3.5M3 13.5 10 17l7-3.5" />
    </>
  ),
  testsuites: (
    <>
      <rect x="3" y="3" width="14" height="14" rx="3" />
      <path d="m6.5 10 2.25 2.25L13.5 7.5" />
    </>
  ),
  mvc: (
    <>
      <rect x="2.5" y="3.5" width="15" height="13" rx="2" />
      <path d="M2.5 7h15M8 7v9.5" />
    </>
  ),
  assess: (
    <>
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="m12.5 12.5 4.5 4.5M7 6.75 5.5 8.5 7 10.25M10 6.75l1.5 1.75L10 10.25" />
    </>
  ),
  automate: (
    <>
      <path d="M16.25 8.5A6.5 6.5 0 0 0 4.4 6.25M3.75 11.5a6.5 6.5 0 0 0 11.85 2.25" />
      <path d="M16.5 3.5v5h-5M3.5 16.5v-5h5" />
    </>
  ),
  frontend: (
    <>
      <path d="M13.5 3.5 16.5 6.5 8 15H5v-3Z" />
      <path d="m11.5 5.5 3 3M3 17.5h14" />
    </>
  ),
  amplify: (
    <>
      <path d="M3 14.5 8 9.5l3 3 6-6" />
      <path d="M13 6.5h4v4" />
    </>
  ),
}

/** Stroke icon for a build or an AI practice, keyed by its data `icon`. */
export function TopicIcon({ name }: { name: string }) {
  return (
    <svg className="topic-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  )
}

export function FlowArrowIcon() {
  return (
    <svg className="flow__arrow-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}
