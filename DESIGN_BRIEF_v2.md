# DESIGN BRIEF v2: Clínica Exemplo (portfolio demo rebuild)

For the Geliştirme Botu. Written 22/11/2026 (BRT). This brief replaces the visual direction in DESIGN_NOTES.md; keep that file's audit as history.
**Goal:** a clinic owner in Brazil opens this on their phone and thinks *"quero um site assim"*. Today the page is either AI slop (v1) or an empty, cold text page with no photos (v1.1, see preview-desktop.png). v2 must feel like a **real, warm, well-run clinic**: people, place, proof, and one easy WhatsApp path.

---

## 1. Reference sites: what to copy

| # | Reference | URL | Copy this |
|---|---|---|---|
| 1 | Clínica Climor (Rio), case by Luven | https://luven.io/portfolio/climor/ (live: clinicaclimor.com.br) | Editorial serif headings + grotesk body; navy on cool paper; **one signature shape** (asymmetric corner) reused on photos/cards; real-doctor photo; "responsável técnico" visible; everything ends in WhatsApp. Closest to the tone we want. |
| 2 | Instituto Maset (Pirassununga/SP), case by NEMAX | https://nemaxdigital.com.br/projetos/instituto-maset.html | Credentials + Google rating **in the first viewport**; pure HTML/CSS/JS, 4 KB CSS / 9 KB JS; WebP + srcset; JSON-LD for clinic, hours, FAQ; FAQ as accordion; specialties carousel on mobile. (Skip its dark/gold + particles look.) |
| 3 | Clínica Áurea (Osasco/SP), by Flowup | https://flowup.agency/portfolio/site-clinica-aurea/ | Home order: hero with booking on top → tratamentos → especialistas → depoimentos → agende. WordPress-built, so it proves the pattern sells to WP clients. Floating WhatsApp + header CTA. |
| 4 | LAVA Dental Studio (Riga), by DigiComm | https://digicomm.lv/work/lava-dental-studio | "Premium = control": restrained UI, palette taken from the physical space, calm pacing; team with faces; FAQ for hesitation questions; **location = map + street photo of the door**. |
| 5 | Dentaristo (Kosovo), case by fdk.ai | https://fdk.ai/en/project-dentaristo.html | Conversion order with reasons: hero = message left, photo right, 3 hard stats under it; **people before services** (about/team before treatments); featured doctor large + others in 2×2; reviews after team; WhatsApp instead of forms; subtle reveal only. |
| 6 | Smile Specialists (Singapore), by Digital 9 Labs | https://digital9labs.com/portfolio/smile-specialists-dental-clinic | Address/phone/hours visible in the first screen; services grouped by the patient's goal in plain words; CTA repeated at each decision point. |
| 7 | One Page Love: dentist tag (Kinder Praxis, Six B) | https://onepagelove.com/tag/dentist | Warmth/positivity, team photos with hover detail, long-scroll storytelling with an FAQ accordion. Use for mood, not layout. |

Best-practice sources used: DigiMed "10 best practices" (2025) https://digimedhealthcare.com/blog/healthcare-website-design-best-practices/ (Lighthouse 90+, mobile-first, trust above the fold, ≤2 taps to WhatsApp); Lamanify (2025) https://www.lamanify.com/blog/from-clicks-to-consultations (sticky CTA, Google stars, authentic photos).

## 2. Page structure (single page, pt-BR, top to bottom)

Mobile first (390px). Each section has ONE job. Copy is short, concrete, in the voice of a recepção, never about "this website".

0. **Demo banner (keep).** Slim bar: "Site de demonstração · clínica fictícia criada pela DulunduZ Tec". Link "Quero um site assim" → WhatsApp DulunduZ.
1. **Header.** Wordmark "Clínica Exemplo" + small "Salvador · BA". Nav (desktop only): Especialidades, Equipe, Como agendar, Onde estamos, Dúvidas. One CTA button "Agendar pelo WhatsApp". Mobile: wordmark + CTA icon button + menu (UI SDK Drawer or native `<dialog>`).
2. **Hero (photo-led, the LCP).** Desktop: copy left ~45%, large photo right (7579831, doctor + patient laughing) with the signature corner shape. Mobile: photo on top (4:3), copy below.
   - H1 direction: specific, human, local. e.g. "Cuidado de perto, para toda a família, no coração de Salvador." (≤ 10 words, no slogan-speak.)
   - Sub: "Clínica geral, pediatria, fisioterapia e exames. Agende pelo WhatsApp e confirme em minutos."
   - CTA primary "Agendar pelo WhatsApp" + secondary text link "Ver especialidades".
   - **Trust strip directly under CTAs** (one line, not cards): ★ 4,9 · 312 avaliações no Google *(exemplo)* | Convênios e particular | Seg–Sáb, 7h–19h.
3. **Convênios strip.** Row of neutral text "chips" (NOT real insurer logos, trademarks): "Convênio A · Convênio B · Convênio C · Particular" + note "Lista de exemplo". Real client gets real logos.
4. **Sobre / quem cuida (people before services).** Photo of reception (4269203) + 3 short paragraphs: how the clinic works, the promise (pontualidade, explicação clara, retorno pelo WhatsApp). 3 inline facts in big numerals with labels (e.g. "15 anos", "6 especialidades", "Atende convênios") marked *(dados de exemplo)* in small text.
5. **Especialidades (UI SDK Tabs; Segmented Control look on mobile).** Tabs: Clínica geral · Pediatria · Fisioterapia · Exames. Each panel = photo + 2-line description + 3–4 bullet "o que tratamos" + "Agendar {especialidade}" button that prefills the WhatsApp text with that specialty. Photos: Pediatria 7653136, Fisioterapia 5793651, Clínica geral 6749777 (or 7579831 crop), Exames 8460047 (alternate). No icon grid.
6. **Equipe (example profiles).** Featured profile large + 2 smaller (Dentaristo pattern). Photos 6749777, 19596247, 6129497. Each: invented first name ("Dra. Ana", "Dra. Júlia", "Dr. Paulo"), specialty, one human line ("Atende crianças desde 2012", marked as fictitious). Badge on every card: **"Perfil de exemplo"**. **No CRM/CRO/RQE numbers at all** (decision confirmed). Instead, a note under the section: "Num site real, aqui aparecem nome, CRM e RQE de cada médico, como pede o CFM."
7. **Como agendar (3 steps, horizontal on desktop, vertical timeline on mobile, no cards).** 1 Escolha a especialidade e o dia → 2 Envie pelo WhatsApp → 3 Receba a confirmação. Next to it the **demo booking widget** (UI SDK Calendar + Segmented Control for período Manhã/Tarde, see §4): user picks a day and period; button "Enviar pedido pelo WhatsApp" builds the message `Olá! Gostaria de agendar {especialidade} no dia {dd/mm} pela {manhã/tarde}. (mensagem de demonstração)`. Sundays unavailable.
8. **Depoimentos.** 3 Google-style review blocks (stars, first name + initial, "há 2 semanas", text ≤ 3 lines), each with label **"Depoimento de exemplo"**, plus a header line "★ 4,9 no Google (exemplo)". Keep texts about atendimento/pontualidade/explicação, never about clinical results (CFM). Mobile: UI SDK Carousel with prev/next (no autoplay).
9. **Onde estamos.** Photo of facade/reception (7108329) + address "Rua Exemplo, 100 – Rio Vermelho, Salvador – BA (endereço de exemplo)", hours table, "Como chegar" button (Google Maps link) and a **static map image** (lazy, click opens Maps). Do not embed a live Google Maps iframe above the fold (kills Lighthouse); a click-to-load iframe is OK.
10. **Dúvidas (UI SDK Accordion, one open at a time).** 6–8 real hesitation questions: Atende convênio? Precisa de pedido médico para exames? Como funciona o retorno? Atende crianças de que idade? Tem estacionamento/acessibilidade? Como cancelar? + "Este site é real?" → explains demo.
11. **CTA final.** Short band with photo strip (not a gradient slab): "Agende sua consulta hoje" + WhatsApp button + phone.
12. **Footer.** Clinic data block in the format a real site needs (Razão social, CNPJ, Responsável técnico, CRM) shown as **"[preencher com dados reais]"** text, not fake numbers. Photo credits line: "Fotos: Pexels (lista)". "Criado por DulunduZ Tec" + link. Privacy note (LGPD) one line.
13. **Floating WhatsApp button** (mobile bottom-right, 56px, safe-area aware). Hide it while the hero CTA is in view (IntersectionObserver) to avoid triple CTAs.

## 3. Visual direction

**Feel:** a calm, sunny, well-kept clinic in Salvador: linen walls, wood, deep ink, one warm Bahian accent. Premium = restraint + real photos + generous but *filled* space.

- **Palette (CSS custom properties, OKLCH or hex):**
  - `--paper` #FAF7F2 (warm off-white bg), `--sand` #EFE6D8 (alt section bg), `--ink` #1E2A2F (text), `--muted` #5B6469
  - `--brand` #1D4E5F (deep petrol blue, buttons/links), `--brand-ink` #FFFFFF
  - `--accent` #C8653F (terracotta, Salvador facades; stars, small highlights, max ~5% of the page)
  - `--line` #E2D9CB (hairlines). Contrast: all text ≥ 4.5:1; check terracotta only on large text/icons.
  - No gradients. Flat colour blocks alternating paper/sand to pace sections.
- **Type:** headings **Newsreader** (or Spectral) 500–600, body **Figtree** 400/500/600. Self-host woff2 (latin + latin-ext subset), `font-display: swap`, `font-size-adjust: from-font` on body to keep fallback stable. Scale (mobile→desktop with `clamp()`): H1 2.25→3.75rem, H2 1.75→2.5rem, body 1.0625rem/1.6, small 0.875rem (never below 0.8125rem). Sentence case everywhere.
- **Photos:** large, real, people-first. Consistent warm treatment: slight warm grade via CSS is not needed; pick warm images (done) and crop with `object-fit: cover` + `object-position` per image. Aspect ratios: hero 4:5 desktop / 4:3 mobile, specialties 3:2, team 4:5. Radius 20px with ONE signature corner (e.g. `border-radius: 20px 20px 96px 20px`) used on hero photo, featured doctor, and map. Nothing else gets that shape.
- **Spacing:** 8px grid; section padding 72px mobile / 120px desktop; content max-width 1200px; text measure ≤ 65ch. The v1.1 problem was emptiness, so every viewport at 1280px must contain a photo or a dense info block; no half-empty hero.
- **Components:** buttons 48px tall, radius 12px (not pills), solid brand fill for primary, text-link style for secondary. Hairline separators instead of shadows. Max one elevation level (subtle shadow only on the floating WhatsApp and the booking widget).
- **Motion:** minimal and opt-in. Fade+8px rise on section entry via CSS scroll-driven animation (`animation-timeline: view()`) inside `@media (prefers-reduced-motion: no-preference)` and `@supports`; tab panel crossfade 150ms; no parallax, no particles, no autoplay carousels, no counters ticking up.

## 4. UI SDK (Ravi's pick): how to use it here

- What it is: **UI SDK** (https://ui-sdk.dev, source https://github.com/vercel-labs/ui), Apache-2.0, beta (npm `@ui-sdk/web` 0.1.0-beta.13; CDN currently resolves `web@0.js` → `web@0.1.0-beta.14.js`). It provides **behavior + accessibility only** (keyboard, focus, ARIA, dismissal) as unstyled custom elements (`ui-*`). **Visual style comes entirely from §3**; do not load `web.css` (generic default look).
- Agent skill: `npx skills@latest add vercel-labs/ui --skill ui-sdk`. For a no-build page, read https://ui-sdk.dev/web.md (all web-component docs in one file) before writing markup.
- **Install for GitHub Pages (no bundler, self-hosted, pinned):**
  1. `npm i -D @ui-sdk/web@0.1.0-beta.13 @ui-sdk/core@0.1.0-beta.13` (or the latest matching pair) in a scratch folder.
  2. Copy `node_modules/@ui-sdk/web/browser/` → `assets/vendor/ui-sdk/` (keep `web.js` next to its `web/` folder).
  3. Load per component, deferred as modules: `<script type="module" src="assets/vendor/ui-sdk/web/accordion.js"></script>` (likewise `tabs.js`, `calendar.js`, `segmented-control.js`, `carousel.js`, `drawer.js`). Only load what the page uses. Pin the version; don't hotlink the CDN `@0` in production.
  4. Serve over http for testing (`python3 -m http.server`); module scripts don't run from file://.
- **Component map:**
  | Section | UI SDK element | Notes |
  |---|---|---|
  | Especialidades | `ui-tabs` (`ui-tabs-list` / `ui-tabs-tab` / `ui-tabs-panel`) | `default-value="clinica-geral"`; on ≤480px style the tab list as a scrollable segmented bar. All panels' content must be in the HTML (SEO, find-in-page). |
  | Booking widget: day | `ui-calendar` | `locale="pt-BR"`, `min` = today, `max` = today+30, `unavailable` = Sundays (`{weekday:[0]}` via property); listen to `valuechange`. |
  | Booking widget: período | `ui-segmented-control` + `ui-segmented-control-indicator` | Manhã / Tarde; `aria-label="Período"`. |
  | Dúvidas | `ui-accordion` (single open) | Trigger `<button>` inside `<h3>`; panels `hidden` initially. |
  | Depoimentos (mobile) | `ui-carousel` | Prev/next buttons, no autoplay; desktop = 3-column static. |
  | Mobile menu | `ui-drawer` (or native `<dialog>`) | Close on Esc + link click. |
- Progressive enhancement: content must be readable if JS fails (tabs show all panels stacked; FAQ shows answers; booking falls back to a plain "Agendar pelo WhatsApp" link). Because it's beta, if a component breaks, fall back to native `<details name="faq">` (exclusive accordion) rather than hand-rolling ARIA.

## 5. Modern web guidance (web.dev / modern-web-guidance guides applied)

- **Core Web Vitals targets (mobile, Lighthouse + field-like):** LCP < 2.5s, CLS < 0.1, INP < 200ms; Lighthouse mobile Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- **Images:** download the chosen photos once, resize locally, export **AVIF + WebP + JPEG fallback** via `<picture>` with `srcset` widths 480/800/1200/1600 and accurate `sizes`; always set `width`/`height` (or `aspect-ratio`) to prevent CLS. Hero image: `fetchpriority="high"`, never `loading="lazy"`, preload only if discovered late. All below-the-fold images: `loading="lazy" decoding="async"`, no `fetchpriority`. Hidden tab panel / carousel images: `loading="lazy" fetchpriority="low"`. Hero ≤ 120 KB AVIF at 800w.
- **Fonts:** max 2 families, ≤ 4 woff2 files, preload the 1–2 used above the fold, `font-display: swap`, `font-size-adjust: from-font` to stop swap shift.
- **CSS/JS:** one CSS file (< 25 KB), no framework; modern CSS: custom properties, `clamp()`, container queries for the specialty/team blocks, `:has()` only as enhancement, `dvh` for mobile full-height, `content-visibility: auto` on long below-fold sections. JS: modules, deferred; total < 60 KB incl. UI SDK pieces; no third-party trackers; WhatsApp links are plain `https://wa.me/55…?text=` URLs.
- **Motion:** scroll-driven animations only inside `@media (prefers-reduced-motion: no-preference)`; nothing flashes; nothing autoplays > 5s.
- **Accessibility:** semantic landmarks (`header/nav/main/section/footer`), one H1, logical H2/H3; skip link; visible focus ring (2px brand + offset); tap targets ≥ 44×44px; alt text describes the scene ("Médica conversa com paciente no consultório"); `lang="pt-BR"`; form-free, but the booking widget announces the composed message (`aria-live="polite"`).
- **SEO / structured data:** `<title>` "Clínica Exemplo · Clínica geral e pediatria em Salvador (demonstração)"; meta description; Open Graph image (hero crop 1200×630); canonical URL. JSON-LD `MedicalClinic` with name "Clínica Exemplo (site de demonstração)", `description` stating it is fictional, example address, `openingHoursSpecification`, `medicalSpecialty` list, and `FAQPage` for the FAQ. Do **not** include `aggregateRating`/`review` in JSON-LD (fake ratings in structured data violate Google's guidelines), and add `<meta name="robots" content="noindex">` so the demo never ranks as a real clinic.

## 6. Must-have trust / conversion elements

- WhatsApp reachable in ≤ 1 tap from any scroll position (header CTA, section CTAs, floating button), prefilled with context.
- Above the fold: what, for whom, where (Salvador), hours, rating line, primary CTA, real-looking photo.
- People with faces and roles (example profiles), reception/place photos, address + map + hours.
- Google-style reviews with stars (labelled examples), convênios line, FAQ answering hesitations.
- Footer with the legal block a real clinic must show (razão social, CNPJ, responsável técnico + CRM/RQE per CFM Res. 2.336/2023 art. 4–6), left as `[preencher]` placeholders.

## 7. Avoid

- **The v1.1 emptiness:** no text-only hero, no half-empty viewports, no outlined info box as the main visual, no photo-free page.
- **AI-slop tells:** gradients, glassmorphism, blurry blobs, glow; four identical icon cards; uppercase tracked eyebrow kickers above headings; pill buttons everywhere; emoji icons; "Bem-vindo à nossa clínica" / "excelência em saúde" filler; numbered step *cards*; floating badges over photos; stock 3D illustrations; dark mode toggles.
- Fake insurer logos, fake awards, fake press logos, ticking counters.
- **CFM/CRO ethics (keep the demo exemplary):** no before/after (CFM only allows it in an educational 4-patient sequence with complications described; for odontologia the CFO forbids it on clinic/PJ sites entirely); no result promises ("sem dor", "resultado garantido", "o melhor de Salvador"); no prices as bait/discount promos; no sensationalism; no patient-identifiable images.

## 8. Demo-honesty rules (non-negotiable)

1. Keep the "Site de demonstração · clínica fictícia" banner, plus the footer line and FAQ answer.
2. Doctor cards carry a visible **"Perfil de exemplo"** badge; reviews carry **"Depoimento de exemplo"**; ratings/stats say *(exemplo)*.
3. **No CRM, CRO, RQE or CNPJ numbers anywhere**, not even placeholder digits; use the explanatory note / `[preencher com dados reais]`.
4. Stock photos are credited (footer + README) and are never claimed to be the clinic's real staff.
5. WhatsApp messages say "(mensagem de demonstração)" and go to DulunduZ Tec's number, as today.

## 9. Photos (all Pexels, verified loading 22/11/2026 via images.pexels.com)

License: Pexels License, free for commercial and personal use, no attribution required (we credit anyway); don't sell unaltered copies; don't imply the people endorse anything. Download URL pattern: `https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg?auto=compress&cs=tinysrgb&w=1600`; then self-host optimized copies in `assets/img/` (no hotlinking).

| Use | Photo page | Photographer | Scene |
|---|---|---|---|
| Hero (LCP) | https://www.pexels.com/photo/a-doctor-talking-the-patient-7579831/ | cottonbro studio | Smiling doctor at desk with patient, bright room |
| Pediatria | https://www.pexels.com/photo/7653136/ | Pavel Danilyuk | Doctor examining child with mother on sofa |
| Fisioterapia | https://www.pexels.com/photo/woman-in-white-dress-up-shirt-touching-the-back-of-knees-of-woman-in-white-t-shirt-5793651/ | Yan Krukau | Physio assessing posture, warm wooden room |
| Sobre / recepção | https://www.pexels.com/photo/4269203/ | Cedric Fauntleroy | Receptionist with tablet greeting patient |
| Onde estamos | https://www.pexels.com/photo/people-at-registration-in-a-clinic-7108329/ | Pavel Danilyuk | Diverse patients at clinic reception |
| Equipe: featured | https://www.pexels.com/photo/woman-in-blue-and-white-stethoscope-6749777/ | Antoni Shkraba | Smiling female doctor, clinic background |
| Equipe | https://www.pexels.com/photo/portrait-of-smiling-black-woman-doctor-in-medical-robe-19596247/ | MARTINS JOHN | Black female doctor portrait (grey studio bg, crop tight) |
| Equipe | https://www.pexels.com/photo/a-doctor-wearing-a-lab-coat-smiling-6129497/ | RDNE Stock project | Senior male doctor, warm smile |
| Alt: Exames/Pediatria | https://www.pexels.com/photo/a-physician-examining-her-patient-8460047/ | Los Muertos Crew | Child check-up, colourful room |
| Alt: Fisioterapia | https://www.pexels.com/photo/physiotherapist-instructing-patient-20860594/ | Funkcinės Terapijos Centras | Physio guiding stretch on treatment table |

Rejected: Pexels 6812427 (visible third-party logo), 34002026 (dark, empty room). Unsplash was not usable from the box (search/API blocked); Pexels covers every slot.

## 10. Definition of done

- [ ] Every section in §2 exists, in order, with pt-BR copy (no lorem, no English left).
- [ ] 8 photos from §9 self-hosted as AVIF/WebP/JPEG `<picture>` with width/height; credits in footer + README.
- [ ] UI SDK self-hosted and pinned; Tabs, Calendar, Segmented Control, Accordion, Carousel (mobile) work with keyboard only (Tab/arrows/Enter/Esc); page still usable with JS off.
- [ ] Booking widget builds the correct WhatsApp text for every specialty/day/period; Sundays and past days blocked.
- [ ] Demo-honesty §8 all true; grep finds no `CRM-`/`CRO-`/digit-pattern registrations; every example badge visible.
- [ ] None of the §7 "avoid" items present (run `impeccable detect` again: zero gradient/glass/eyebrow/icon-card warnings).
- [ ] Lighthouse **mobile** ≥ 90 Performance, ≥ 95 Accessibility/Best Practices/SEO; LCP < 2.5s, CLS < 0.1, TBT < 200ms in the run; screenshot the report into the repo.
- [ ] Looks finished at **390px** and **1280px** (also sanity-check 768px): no empty half-viewports, no horizontal scroll, text ≤ 65ch, photo visible in the first viewport on both. Save new preview-mobile/desktop PNGs.
- [ ] JSON-LD validates (MedicalClinic + FAQPage, demo-labelled, no ratings); `noindex` set.
- [ ] Deployed to https://ravidulundu.github.io/clinica-exemplo-demo/ and checked live on a phone-size viewport.
- [ ] Gut check: would a dentist in Salvador forward this link to their partner saying "quero assim"? If not, iterate on photos and hero copy first.
