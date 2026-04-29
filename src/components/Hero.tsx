import { useState } from 'react'
import type { ResumeData } from '../data/resume'

function PhotoCard({ photo, name }: { photo?: string; name: string }) {
  const [imgError, setImgError] = useState(false)
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const showFallback = !photo || imgError

  return (
    <div className="hero__photo-wrap">
      <div className="hero__photo-card">
        {showFallback ? (
          <div className="hero__photo-fallback">
            <span>{initials}</span>
          </div>
        ) : (
          <img
            className="hero__photo-img"
            src={photo}
            alt={name}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="hero__photo-blob" aria-hidden="true" />
    </div>
  )
}

export function Hero({ data }: { data: ResumeData }) {
  const { name, firstName, lastName, tagline, summary, location, contact, photo } = data

  return (
    <section id="top" className="hero">
      <div className="hero__grid">
        {/* ── Left: all text ── */}
        <div className="hero__content">
          <div className="hero__top">
            <span className="hero__location">↳ {location}</span>
          </div>

          <h1 className="hero__name">
            {firstName}
            {lastName && (
              <>
                <br />
                <span className="hero__name-accent">{lastName}</span>
              </>
            )}
          </h1>

          <p className="hero__tagline">{tagline}</p>
          <p className="hero__summary">{summary}</p>

          <div className="hero__contact">
            <a className="hero__link hero__link--primary" href={`mailto:${contact.email}`}>
              Get in touch ↗
            </a>
            {contact.github && (
              <a className="hero__link" href={contact.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            )}
            {contact.linkedin && (
              <a className="hero__link" href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            )}
            {contact.website && (
              <a className="hero__link" href={contact.website} target="_blank" rel="noreferrer">
                Website ↗
              </a>
            )}
          </div>

        </div>

        {/* ── Right: photo ── */}
        <PhotoCard photo={photo} name={name} />
      </div>
    </section>
  )
}
