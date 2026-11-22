# Design notes: Clínica Exemplo Salvador

Audit and critique of the incumbent landing, run before the Impeccable redesign. Written in English as a working record.

**Run notes.** This is a delegated subagent pass, so Assessment A and B ran in a single context (no isolated sub-agents, no critique snapshot). `Questions skipped: delegated run`. Product context was inferred from the existing brief and constraints; there was no interview with Ravi.

**Sources.** Impeccable 4.10.0 (`github.com/pbakaus/impeccable`), cloned to `/workspace/tools/impeccable`. Guidance used: `SKILL.md`, `craft-floor.md`, `new-work.md`, `new-work-world.md`, `mode-persuade.md`, `critique.md`, `critique-rubric.md`, `audit.md`, `polish.md`, `distill.md`, `typeset.md`, `layout.md`, `clarify.md`, and the 62-rule detector catalog (typography, color, spatial, motion, interaction, UX writing, anti-patterns). Mechanical scan: `impeccable detect` on `index.html` and on `http://127.0.0.1:8765/` at 1280×800 and 390×844.

The page is a **Persuade** surface: a portfolio demo that must also read as a neighbourhood clinic in Salvador.

---

## Assessment A: design critique (before detector synthesis)

**Design specificity: low.** The composition could be reused, with a colour swap, for almost any local-service landing. It follows the current default: cream ground, split hero (copy left, decorative panel right), pill buttons, four identical icon-tile cards, numbered step cards, a rounded marketing CTA slab, and a glowing floating WhatsApp chip. Nothing in the layout comes from a Salvador consulting room, a painted façade, or a door notice.

**Strengths**

1. The demo disclosure is honest and visible (banner, about, FAQ, footer).
2. The information architecture is complete and findable: services, booking, place, hours, contact.
3. The WhatsApp path is consistent, and the prefilled message does not pretend to book a real appointment.

**Priority issues**

1. **Category costume, not a place.** Teal-on-cream, glass card on a gradient panel, and a shape-assembled SVG “illustration” are the AI clinic template. They do not feel like a casarão entrance, a waiting room, or a paper hours sheet on the door.
2. **Same-size icon cards as the page structure.** Serviços is four rounded tiles, each with a rounded-square icon above a heading and a paragraph: the craft-floor default that should not carry a landing page.
3. **Hero kicker.** “Saúde e bem-estar em Salvador” is an uppercase, tracked eyebrow above a large headline: banned by the craft floor and a known SaaS/AI tell.
4. **Copy talks about the website, not the clinic.** The hero and section intros keep explaining that this is “um modelo de site.” That is portfolio self-consciousness, not the language of a recepção in Salvador. The disclosure already lives in the banner; the body should be specific and short.
5. **Too many competing chrome layers.** Pill CTAs in the header, hero, mid-page, contact band, and a floating chip; card shadows on services, steps, and info tiles; a decorative hero panel that nests a glass card. Distill would keep one primary action, typographic structure, and a single distinctive object (a door plaque), not a deck of cards.

**Nielsen heuristics (0–4, Persuade mode)**

| Heuristic | Score | Note |
|---|---|---|
| Visibility of system status | 3 | Demo state is clear; booking vs. lead-gen is only partly explained next to the first CTA. |
| Match between system and real world | 2 | Clinic words mixed with “modelo de site” and generic wellness phrasing. |
| User control and freedom | 3 | In-page nav and skip link work; mobile menu is simple. |
| Consistency and standards | 3 | Patterns repeat, but they are template patterns. |
| Error prevention | n/a | No forms. |
| Recognition rather than recall | 3 | Labels are plain. |
| Flexibility and efficiency | 2 | One path (WhatsApp), which is right; it is visually over-announced. |
| Aesthetic and minimalist design | 1 | Decoration and repeated cards outrun the content. |
| Help users recognize errors | n/a | No forms. |
| Help and documentation | 3 | FAQ is frank about the fiction. |

**Cognitive load.** The primary action is obvious, but it is offered too many times in the first viewport (header CTA, hero primary, floating chip). Service cards and step cards present four and three equivalent options with no typographic hierarchy between them.

**Emotional journey.** The banner is reassuringly honest, then the hero illustration and “modelo de site” copy deflate the sense of a real place. The end (footer disclosure) is consistent; the middle feels like a theme demo.

**Persona red flags**

- A parent in Salvador trying to book paediatrics: cannot tell if this clinic is real; the WhatsApp message is about buying a website.
- A clinic owner (the actual lead): can see the work, but the look is interchangeable with every other AI landing, which is exactly the complaint (“AI slop”).
- A low-vision or small-phone visitor: 10.88px “SALVADOR” label; a hover colour pair that fails contrast; hero panel text on a mid-tone gradient.

---

## Assessment B: mechanical detector

Primary findings (warnings) across file and URL scans:

| Rule | Evidence |
|---|---|
| `cream-palette` | Body background `rgb(244, 241, 235)`: the default “tasteful” AI cream. |
| `ai-color-palette` | Hero panel: “Cyan gradient background” on `div.hero-art`. |
| `radial-spotlight-glow` | Gold radial wash on the hero art (`#e2b45c` fading to transparent). |
| `hero-eyebrow-chip` | Tracked-caps “Saúde e bem-estar em Salvador” above the h1. |
| `kicker-above-heading` | Same kicker, confirmed on the 390×844 pass. |
| `icon-tile-stack` | 44×44 icon tile above each of the four service headings. |
| `nested-cards` | `div.art-card` sitting inside the hero art panel. |
| `dark-glow` | File scan: glowing shadow accents (floating chip / art shadows). |
| `low-contrast` | Hero art text ~4.3:1 on the gradient; wordmark `:hover` 2.1:1 (`#0c5c58` on `#162321`). |
| `undersized-ui-text` | Wordmark “Salvador” at 10.88px. |
| `cramped-padding` | Several sections reported as flush to their background (file scan). |

Advisories: `shape-assembled-illustration` (10 primitive shapes in a ~520×360 hero SVG), `em-dash-overuse` (9 em dashes in body copy), a few `straggler` heading wraps.

---

## Technical audit (incumbent)

| Dimension | Score | Key finding |
|---|---|---|
| 1. Accessibility | 2 | Hover contrast failure; hero-on-gradient contrast; 10.88px functional text; otherwise semantic landmarks, skip link, and visible focus are in place. |
| 2. Performance | 3 | Static page, tiny JS, no images; render-blocking Google Fonts CSS; unused decorative SVG. |
| 3. Theming | 2 | CSS custom properties exist, but several literal colours and a hard-coded WhatsApp/hero treatment sit outside a deliberate system. No dark mode (not required). |
| 4. Responsive design | 3 | Mobile-first and usable; header CTA used to crowd the 390px bar (later patched); floating control overlaps the hero fold. |
| 5. Implementation integrity | 2 | Detector confirms a cluster of slop tells, not isolated defects. |

---

## Direction for the redesign (new visual world)

The old look is **anti-reference**. Product truth stays: fictional Salvador clinic, demo banner and footer badge, text wordmark only, no testimonials or invented CRM, example address and hours, WhatsApp lead URLs, DulunduZ Tec credit, `og:url`.

**World: “Cal e persiana.”** The page is the clinic’s limewashed wall and the painted plaque on the door, not a SaaS marketing template.

Cultural candidates considered (façade pigmentation and house numbers; the paper hours sheet taped to the glass; azulejo cobalt and terracotta; a Brazilian receituário letterhead; Bahian newspaper nameplates). The first surface uses the façade + door plaque: typographic inscription, a single hours-and-address plate, and a shutter-blue action, on mineral plaster rather than cream.

**Type.** Ibarra Real Nova for the wordmark and headings (inscription / Iberian lettering, self-hosted). Source Sans 3 for body and UI (humanist, Latin-ext, not on the overused-font list). Two families, self-hosted WOFF2, `font-display: swap`.

**Colour.** OKLCH. Ground is cool lime plaster (a slight mineral green, not beige). Ink is a warm brown-black, and muted text is a lighter step of the same hue (no gray-on-color). Actions and banner use a deep solid azulejo / shutter blue. A terracotta “massa” accent is reserved for rules and the demo stamp, never as a gradient. WhatsApp buttons use a dark, accessible green. No purple or cyan gradients, no glass, no radial halos.

**Layout.** One typographic column in the hero, not copy-plus-illustration. Services as a ruled typographic index, not icon-tile cards. Booking as a short numbered list, not step cards. Location as a door plaque (address + hours), not a fake map or a card grid. No eyebrows. No shape-assembled hero art. Pill buttons give way to slightly squared “placa” actions. Motion is limited (link and button transitions, menu), with `prefers-reduced-motion` respected.

**Copy.** Brazilian Portuguese, short and concrete, in the voice of a neighbourhood clinic. Disclosure stays in the banner, a single hero note, the about paragraph, one FAQ, and the footer. No em dashes, no filler of the “sua saúde em primeiro lugar” kind.

After the rebuild: re-run `detect`, retake mobile and desktop screenshots, and iterate at least twice against these rules.

---

## After the redesign (two visual iterations)

Rebuilt from scratch in the “Cal e persiana” world. Then: screenshots at 390×844, 1280×800, and full-page mobile; `impeccable detect` on the file and both viewports; a second pass for header CTA overflow, kickers on the plaque, the contact-band button contrast, hero text flush to the viewport, heading scale, and hover colour leaking onto dark surfaces.

**Detector, second look**

- URL scans at 1280×800 and 390×844: no findings.
- File scan: only `cramped-padding` on sections and lists that use a hairline rule. Those elements already have 1–4.5rem of CSS padding; the live viewports do not flag them. Treated as static-scan noise, not a visual defect.
- All original slop tells (cream palette, cyan hero gradient, radial glow, eyebrow, icon-tile stack, nested cards, shape-assembled illustration, dark-glow, undersized “Salvador” label) are gone.

**What changed, in short**

- Type: Ibarra Real Nova + Source Sans 3, self-hosted.
- Colour: mineral lime plaster, warm ink, shutter blue, terracotta, no cream field and no gradients.
- Layout: typographic hero and door plaque; ruled service index; no card grid, no hero illustration, no pill-only chrome.
- Copy: short clinic Portuguese; disclosure kept to the banner, one hero note, about, one FAQ, and the footer.
