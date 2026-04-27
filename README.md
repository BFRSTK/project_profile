# project_profile

Personal tech resume site built with Vite + React + TypeScript, deployable to Vercel.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Edit your content

All resume content lives in [`src/data/resume.ts`](src/data/resume.ts) — name, contact, summary, skills, experience, projects, and education. The components render whatever is in that file, so you only need to edit one place.

## Deploy to Vercel

Vercel auto-detects Vite. Either:

- Push this repo to GitHub and import it at https://vercel.com/new, or
- Run `npx vercel` from the project root.

No `vercel.json` is required. Vercel uses `npm run build` and serves `dist/`.
