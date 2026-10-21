import { Fragment, useState } from 'react'
import type { ResumeData } from '../data/resume'
import { ArrowIcon, MailIcon } from './Icons'

function Photo({ photo, name }: { photo?: string; name: string }) {
  const [imgError, setImgError] = useState(false)
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  return (
    <figure className="hero__photo">
      {!photo || imgError ? (
        <div className="hero__photo-fallback" aria-hidden="true">
          {initials}
        </div>
      ) : (
        <img src={photo} alt={name} width={900} height={1130} onError={() => setImgError(true)} />
      )}
    </figure>
  )
}

export function Hero({ data }: { data: ResumeData }) {
  const { name, title, tagline, location, contact, photo, available, years } = data

  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <h1 className="hero__name">{name}</h1>
        <p className="hero__title">
          <span className="nowrap">{title}</span>{' '}
          <span className="hero__sep" aria-hidden="true">
            /
          </span>{' '}
          <span className="nowrap">{location}</span>
        </p>
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${contact.email}`}>
            <MailIcon />
            Email me
          </a>
          {contact.linkedin && (
            <a className="btn btn--secondary" href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowIcon />
            </a>
          )}
          {available && (
            <p className="hero__status">
              <span className="hero__status-dot" aria-hidden="true" />
              Open to new roles
            </p>
          )}
        </div>

        <p className="hero__facts">
          <strong>{years.total} years</strong> of experience:{' '}
          {years.split.map((s, i) => (
            <Fragment key={s.area}>
              {i > 0 && ' and '}
              <span className="nowrap">
                <strong>{s.years}</strong> in {s.area}
              </span>
            </Fragment>
          ))}
          , with <strong>{years.mentoring}</strong> of those years mentoring engineering teams.
        </p>
      </div>
      <Photo photo={photo} name={name} />
    </section>
  )
}
