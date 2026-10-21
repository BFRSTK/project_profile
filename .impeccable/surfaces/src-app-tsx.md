---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["src/components"]
---

# Resume page — surface brief

Scope: the single-page resume (src/App.tsx and components). Mode: Persuade. Visitor: recruiter or hiring manager scanning for DevOps Tech Lead fit; the action is email or LinkedIn. User asks: highlight skills, what he has built, and experience; "more straightforward and professional"; dark by default with light toggle; full-width scroll, no pinned profile; keep the blue accent. Standing exit taken: the category standard, executed at full craft.

## Direction contract

THESIS: A calm, senior developer portfolio that reads like a well-set résumé: facts first, nothing themed. Refuses metaphors, costume and decorative chrome; the content is the design.

OWN-WORLD: Dark slate ground (#0b1120 range) with one raised surface tone and hairline borders; slate ink and muted slate secondary; one blue accent (#60a5fa on dark, #2563eb on light) for links, active nav, meters and the primary button. Geist for everything, Geist Mono only for dates and small data. Section grid: heading in a narrow left column, content right. Hairline-divided rows, small rounded chips, 8px radii.

STORY: First viewport gives name, role, Melbourne, open to work, photo and the two contact actions. Then a short About, Skills (ratings + toolkit), What I've built (where each was built), Experience (scannable, expandable bullets), Education, Contact.

FIRST VIEWPORT: Sticky top bar (name left; section links, theme toggle, Email button right). Hero two-column: left the name at clamp(2.75rem, 6vw, 4.5rem) weight 600, title + location, tagline, Email (primary blue) and LinkedIn (secondary) buttons with the open-to-work status beside them, then a single muted facts line (8 years SWE · 5 DevOps · 8 mentoring); right the headshot, 4:5, rounded.

FORM: The standing exit (category standard), chosen in plain words by the user; benchmark brittanychiang.com / leerob.com. seed:e60ec1a4c7dd29b7 (canon card taken by the user; roll not built). Signature interaction: section-aware nav (active link follows scroll) and experience roles that show four bullets with an inline "Show all" expand. Motion: 200ms colour/underline transitions, a 320ms height ease on expand; nothing on load.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
