# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers deciding whether Jan Edward de Nicolas fits a DevOps Tech Lead (or similar senior DevOps/platform) role. They usually arrive from a LinkedIn profile, a job application or a shared link. They scan fast, often between other candidates, and need to judge seniority, domain fit and leadership experience quickly before reaching out.

## Product Purpose

A personal resume site that presents Jan's engineering and DevOps career as one credible, scannable page. It succeeds when a recruiter or hiring manager understands the fit within a short visit and makes contact by email or LinkedIn.

## Positioning

Rare combination: 14 years in total, 8 of software engineering plus 6 of specialised DevOps, so he covers both full-stack application work and the pipelines and infrastructure behind it. Enterprise banking delivery (National Australia Bank, Accenture for a major Australian bank), a Computer Engineering foundation in C/C++ and Java, and a long record of building and mentoring engineering teams. Tagline: "Engineering the code. Automating the chaos."

## Operating Context

- Visitors evaluate it next to LinkedIn and a traditional CV, so it has to stand on its own and also agree with them.
- Primary actions: email (`mailto:`) and LinkedIn. Rimebound (rimebound.com) is his personal project/blog and is a secondary outbound link, not part of the hiring pitch.
- No GitHub link is currently listed.

## Capabilities and Constraints

- Single-page Vite + React + TypeScript site, statically built and deployed to Vercel.
- **All content lives in `src/data/resume.ts`**: name, tagline, summary, stats, contact, skill ratings, "What I built", AI workflow, skills, experience and education. Components only render that data. Future work must keep this single source of truth; don't hardcode content in components.
- Sections in order: Hero, About (summary + stats), Skills Summary (1–5 ratings), Skills, What I Built, My AI Workflow, Experience, Education, Contact, footer.
- `available: true` flag shows open-to-work status.

## Brand Commitments

- Name as written: Jan Edward de Nicolas (first name "Jan Edward", last name "de Nicolas").
- **The real headshot (`public/photo.jpg`) stays part of the identity.** The initials fallback is only for load failure.
- Voice: first-person, confident and plain-spoken; an enterprise DevOps lead, not a startup hype voice.
- **Visual standing preference (2026-10-21):** straightforward and professional, the category standard executed well. Benchmark: polished developer portfolios such as brittanychiang.com and leerob.com. Dark theme by default with a light toggle; one full-width scrolling column, no pinned side profile. Conceptual or themed worlds (the earlier flight-strip design) were tried and set aside.

## Evidence on Hand

- Career history, bullets and stacks for National Australia Bank (2021–present), Accenture Australia (2016–2021) and Accenture Philippines (2012–2016) in `src/data/resume.ts`.
- Headline stats: 14 years total experience (8 in software engineering, 6 in DevOps); 8 of those 14 years spent mentoring engineering teams.
- Education: B.S. Computer Engineering, University of St. La Salle (2007–2012).
- Headshot: `public/photo.jpg`. Favicon: `public/favicon.svg`.
- Not on hand: testimonials, employer logos, quantified outcome metrics, public repos or case studies. Do not fabricate them.

## Product Principles

1. **Fit at a glance.** A recruiter should get role, seniority and location in the first viewport.
2. **Contact is never far away.** Email and LinkedIn stay easy to reach from anywhere on the page.
3. **Credibility over flourish.** Every claim comes from the real resume data; nothing is embellished.
4. **One source of truth.** Updating `resume.ts` updates the whole site.
