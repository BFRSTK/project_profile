---
name: Jan Edward de Nicolas
description: A calm, senior developer portfolio set like a well-typeset résumé on a dark slate ground.
colors:
  slate-ground: "#0b1120"
  slate-surface: "#111a2e"
  hairline: "#1e293d"
  hairline-strong: "#2c3a54"
  ink: "#e6eaf1"
  ink-secondary: "#c2cad7"
  muted: "#8c98ad"
  signal-blue: "#6aa9ff"
  signal-blue-wash: "rgb(96 165 250 / 0.12)"
  action-blue: "#2563eb"
  action-blue-deep: "#1d4ed8"
  open-green: "#34d399"
  paper-ground: "#fbfcfd"
  paper-surface: "#f1f4f8"
  hairline-light: "#e2e7ee"
  hairline-strong-light: "#cdd5e0"
  ink-light: "#0f172a"
  ink-secondary-light: "#334155"
  muted-light: "#5b6678"
  signal-blue-light: "#1d4ed8"
  signal-blue-wash-light: "rgb(37 99 235 / 0.09)"
  open-green-light: "#059669"
  on-action: "#ffffff"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 3.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  title-sm:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body-lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  body-sm:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
  data:
    fontFamily: "Geist Mono Variable, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  meter: "3px"
  chip: "6px"
  control: "8px"
  photo: "12px"
  dot: "50%"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  section-gap: "48px"
  gutter: "clamp(16px, 4vw, 32px)"
  section-block: "clamp(48px, 7vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.action-blue}"
    textColor: "{colors.on-action}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "42px"
  button-primary-hover:
    backgroundColor: "{colors.action-blue-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "42px"
  button-secondary-hover:
    backgroundColor: "{colors.slate-surface}"
  button-sm:
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "34px"
  chip:
    backgroundColor: "{colors.slate-surface}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.chip}"
    padding: "3px 9px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    padding: "6px 0"
  nav-link-active:
    textColor: "{colors.ink}"
  theme-toggle:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    size: "34px"
  inline-action:
    textColor: "{colors.signal-blue}"
    typography: "{typography.label}"
    padding: "4px 0"
---

# Design System: Jan Edward de Nicolas

## Overview

**Creative North Star: "The Well-Set Résumé"**

A single full-width column on a dark slate ground, read top to bottom like a carefully typeset CV. The content is the design: one sans family, one blue, hairline rules between rows, and nothing themed or costumed around it. Structure comes from a consistent two-column section grid (heading left, content right) and from typographic weight, not from cards, panels or ornament.

Density is moderate and scannable. Rows are divided by 1px hairlines; data (dates, rating values) drops into Geist Mono at a small size so it reads as record, not prose. Dark is the default; a light "paper" theme mirrors every role token one-for-one through `[data-theme='light']`. Motion is restrained to colour and underline transitions and one height ease; nothing animates on load.

The benchmark is the polished developer portfolio category (brittanychiang.com, leerob.com) executed at full craft. Conceptual or themed worlds were tried and set aside for this product.

**Key Characteristics:**
- One sans family (Geist) for everything; Geist Mono only for dates and small numeric data.
- One blue accent family: a light signal blue for links, active nav, meters and focus; a saturated action blue for filled buttons.
- Flat surfaces separated by hairlines; a single raised surface tone for chips, photo backing and hover fills.
- Heading-left, content-right section grid that collapses to one column on narrow screens.
- Dark by default, light theme as a token swap, print stylesheet that strips to black on white.

## Colors

A cool slate neutral ramp carrying a single blue accent, with one green reserved for the availability signal.

### Primary
- **Signal Blue** (dark `signal-blue`, light `signal-blue-light`): links on hover, the active-nav underline, filled meter segments, the "Show all" inline action and the focus ring. The interactive voice of the page in text and line form.
- **Action Blue** (`action-blue`, hover `action-blue-deep`): the fill of primary buttons and the skip link, with white text. Shared by both themes so the main call to action looks the same everywhere.
- **Signal Blue Wash** (`signal-blue-wash` / `signal-blue-wash-light`): text selection background only.

### Tertiary
- **Open Green** (`open-green` / `open-green-light`): the 8px availability dot beside "Open to new roles". Nowhere else.

### Neutral
- **Slate Ground** (`slate-ground`; light `paper-ground`): page and sticky nav background. Also the `theme-color` meta.
- **Slate Surface** (`slate-surface`; light `paper-surface`): the single raised tone: chips, photo backing, secondary-button hover fill.
- **Hairline** (`hairline`; light `hairline-light`): every row divider, section top rule, nav bottom rule, chip and photo borders.
- **Hairline Strong** (`hairline-strong`; light `hairline-strong-light`): control borders (secondary button, theme toggle), unfilled meter segments, inline separators ("/" and "·"), resting link underlines, scrollbar thumb.
- **Ink** (`ink`; light `ink-light`): headings, names, role titles, the contact email.
- **Ink Secondary** (`ink-secondary`; light `ink-secondary-light`): body copy, bullets, company lines, chip text.
- **Muted** (`muted`; light `muted-light`): nav links at rest, dates, subheads, metadata, footer.

### Named Rules
**The One Blue Rule.** Blue is the only hue that signals interaction. Signal blue for text and lines, action blue for fills. No second accent colour; green exists only as the status dot.

**The Paired Token Rule.** Every neutral and accent role has a dark and a light value and changes only through `[data-theme]`. Never hard-code a colour in a component; the one exception is white text on action blue.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui fallback), self-hosted via @fontsource-variable
**Body Font:** Geist Variable
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, SFMono-Regular, Menlo fallback)

**Character:** A single neutral grotesk carries the whole page; hierarchy is made by size, weight 600 against 400, and tight negative tracking on large sizes. Mono is a data voice, never a decorative one.

### Hierarchy
- **Display** (600, clamp(2.6rem, 6.2vw, 4.5rem), 1.02, -0.035em): the name in the hero. Once per page.
- **Headline** (600, clamp(1.4rem, 3.6vw, 2.25rem), 1.2, -0.025em): the contact email address, the one large closing action.
- **Title** (600, 1.25rem, 1.3, -0.015em): section headings in the left column (1.35rem when the grid collapses).
- **Title Small** (600, 1.125rem, 1.4): role titles; built-item labels use the same weight at 1rem.
- **Body Lead** (400, 1.0625rem, 1.75): the About summary, hero tagline and contact lede. Max 68ch.
- **Body** (400, 16px, 1.6, tabular numerals): page default.
- **Body Small** (400, 15px, 1.65): experience bullets, built-item details, facts line. Max 68-72ch.
- **Label** (500, 14px): nav links, subheads ("Core strengths", "Toolkit"), inline actions, metadata. Sentence case, no tracking.
- **Data** (Geist Mono 400, 13px): date ranges and rating values ("4/5"). Chips sit at 13px in Geist, not mono.

### Named Rules
**The Mono Is Data Rule.** Geist Mono appears only on dates and numeric values. Never on headings, labels or body copy.

**The Sentence Case Rule.** All labels and headings are sentence case at normal tracking. No uppercase tracked labels above headings.

## Layout

A single centred column, max width 1040px, with fluid side gutters (clamp(16px, 4vw, 32px)) shared by the nav, main and footer. Sections stack with a 1px hairline on top and fluid block padding (clamp(48px, 7vw, 80px)).

Each section is a two-column grid: a 180px heading column and a fluid content column, 48px apart. Below 860px it becomes one column with a 20px gap. Inside sections, record rows reuse the same pattern at smaller scale: a fixed key column (dates 8.5rem, built labels 14rem, toolkit categories 7.5rem) beside fluid content, collapsing to stacked at 640px (480px for the toolkit). Rows separate by hairline and 12-28px block padding; the first and last rows drop their outer padding and the last drops its rule.

The hero is a two-column grid (text, then a photo at clamp(220px, 28vw, 300px) in 4:5). Below 720px the photo shrinks to a 96px thumbnail beside the name and the remaining text spans the full width. Skills splits into ratings and toolkit columns (0.9fr / 1.1fr) above 960px.

The nav is sticky, 60px tall, bottom hairline; below 760px the section links wrap onto their own horizontally scrolling row. Spacing steps observed: 6, 8, 12, 16, 24, 32, 48px.

## Elevation & Depth

Fully flat. No box-shadows anywhere. Depth is tonal: the slate surface tone sits one step above the ground, and hairline borders define every edge. The sticky nav is separated by its bottom hairline, not a shadow or blur.

### Named Rules
**The Hairline Rule.** Separation is a 1px hairline or a one-step surface tone. No shadows, no glass, no gradients.

## Shapes

Gently rounded, small radii throughout: 8px for every control (buttons, theme toggle, skip link), 6px for chips, 12px for the hero photo (10px at thumbnail size), 3px for meter segments, full circles for the status dot and bullet markers. Borders are always 1px, except the 2px active-nav underline and the 2px contact-email underline. Bullets are 5px muted circles, not glyphs. Icons are inline 16px stroke SVGs at 1.5-2px stroke, sized to 1em beside text.

## Components

### Buttons
Quiet, compact and solid.
- **Shape:** gently rounded (8px), 42px tall, 18px side padding, 15px weight 500, 8px icon gap.
- **Primary:** action-blue fill, white text, leading mail icon. Used for "Email me" and the nav "Email".
- **Hover / Focus:** fill deepens to action-blue-deep over 200ms; focus is the global 2px signal-blue outline at 2px offset.
- **Secondary:** transparent with a 1px hairline-strong border and ink text, trailing external-arrow icon. Hover fills with slate surface and the border lifts to muted.
- **Small:** 34px tall, 12px padding, 14px text (nav Email).

### Chips
- **Style:** slate-surface fill, 1px hairline border, 6px radius, 13px ink-secondary text, 3px 9px padding, 6px gap, wrapping.
- **State:** static; chips are tags (toolkit items, role stacks), not filters.

### Navigation
- **Style:** sticky bar on slate ground, name left (15px, 600, -0.01em), section links right at 14px muted, then the theme toggle and a small primary Email button.
- **States:** hover and active turn the link ink; the active link (tracked by scroll position) gets a 2px signal-blue underline that scales in from 0 over 240ms.
- **Mobile:** links move to a full-width, horizontally scrollable row beneath name and toggle.
- **Theme toggle:** 34px square, 1px hairline-strong border, 8px radius, muted 16px sun/moon icon; hover to ink.

### Rating Meter (signature)
Five 16 x 6px segments, 3px radius, 4px gap; filled segments signal blue, empty segments hairline-strong, always followed by a mono "n/5" value so the meter never carries meaning alone. Rows are hairline-divided.

### Experience Role (signature)
Mono date column left; role title, company line with muted location, then up to four bullets visible. Remaining bullets sit in a collapsed region that opens with a 320ms grid-row height ease, toggled by a signal-blue text action ("Show all N highlights" / "Show fewer"). Stack chips follow.

### Text Links
Inherit colour with a 1px underline at 0.2em offset. Underlines rest in hairline-strong and turn signal blue with the text on hover (200ms). The contact email is the one oversized link: headline type with a 2px underline.

### Schematic Plates (What I've built)
Each build shows a 320x132 line schematic of the mechanism it changed (pipeline stages, monolith to services, chart to cluster pods, shared library under services, AI-generated test runs, MVC in a browser frame). Plates use the photo frame: slate-surface fill, 1px hairline, 12px radius. Strokes are 1.25px: hairline-strong for context, signal blue (with signal-blue-wash fill) on the part delivered; 10.5px Geist labels in muted. Builds sit in a two-column grid (one column below 640px); a tool match lights the plate border signal blue.

### Icon Tile
40px square, 8px radius, slate-surface fill, 1px hairline, holding a 20px signal-blue stroke icon (1.5px). Leads each build and AI practice beside its title.

### AI Workflow Diagram
Three stages (drafts, I refine, the team receives) as surface-tone panels with 12px radius joined by muted arrows; the human stage alone takes the signal-blue border and wash. A dashed hairline-strong band beneath holds the background agents. Stacks vertically below 720px with arrows turned down. Practices follow in a two-column grid of hairline-topped entries with icon tiles.

## Do's and Don'ts

### Do:
- **Do** use the paired dark/light role tokens for every colour; add both values when introducing a role.
- **Do** separate content with 1px hairlines and the single slate surface tone.
- **Do** use the heading-left, content-right section grid (180px / fluid, 48px gap) for any new section.
- **Do** keep Geist Mono to dates and numeric values at 13px.
- **Do** keep motion to 200ms colour/underline transitions on the shared ease (cubic-bezier(0.22, 1, 0.36, 1)), with nothing animating on load.
- **Do** pair any graphical indicator (meter, dot) with text that carries the same meaning.

### Don't:
- **Don't** add a second accent hue; blue is the only interactive colour.
- **Don't** use box-shadows, glows, gradients or glass blur for depth.
- **Don't** put uppercase tracked labels or kickers above headings; section titles stand alone.
- **Don't** wrap sections or rows in bordered cards; rows are hairline-divided, not boxed.
- **Don't** use text glyphs or emoji as icons; icons are inline stroke SVGs.
- **Don't** reintroduce themed or metaphorical chrome around the content.
