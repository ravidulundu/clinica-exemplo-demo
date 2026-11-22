# Clínica Exemplo Salvador (demo)

A one-page, static demo landing for a **fictional** neighborhood clinic in Salvador, Bahia. It is a DulunduZ Tec portfolio piece, not a real health service.

Visible copy is in Brazilian Portuguese. A banner and a footer badge state that the business is fictional.

## Deploy layout

The site is **static files on the `main` branch root**. There is no bundler and no build step to publish.

- GitHub Pages should be set to **Deploy from a branch → `main` / root** (or `/docs` is not used).
- The public URL is `https://ravidulundu.github.io/clinica-exemplo-demo/`.
- Asset paths are **relative** (`assets/...`, `styles.css`), so the project-site base path works without a rewrite.
- `.nojekyll` is present so GitHub Pages does not process the files with Jekyll.

This repo is not published in the current pass (no push, no Pages deploy). When it is published, enable Pages on `main` as above and check the live URL.

## UI SDK

[@ui-sdk/web](https://github.com/vercel-labs/ui) and `@ui-sdk/core` are pinned to **0.1.0-beta.14** (Apache-2.0) and self-hosted in `assets/vendor/ui-sdk/`. The official `web.css` theme is **not** loaded; only behavior and accessibility of the custom elements are used, with project styles.

Components used: **Tabs**, **Calendar**, **Segmented Control**, **Accordion**, **Carousel** (viewport under 64rem), **Drawer** (mobile menu).

`assets/js/main.js` loads each component as an ES module when its section is near the viewport, so first paint does not wait on the full library. With JavaScript off, tab panels and FAQ answers stay visible, the menu uses a native `details` element, and booking falls back to a plain WhatsApp link.

A Vite bundle was considered to tree-shake the SDK. The six components still compiled to ~310 KB minified (~91 KB gzip), so a no-build copy of the official `browser/` folder was kept instead, with per-component dynamic imports.

## Fonts and photos

- **Newsreader** (500–600) and **Figtree** (400–600), self-hosted as four WOFF2 files (latin + latin-ext), `font-display: swap`.
- Photos are from [Pexels](https://www.pexels.com/license/), downloaded once, cropped, and served as AVIF + WebP + JPEG with `srcset` (`480/800/1200/1600` where useful). The hero uses art-direction (`4:3` mobile, `4:5` desktop) and `fetchpriority="high"`. Credits (photographer + Pexels link) are in the footer.

## Local preview

```bash
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

Validate markup:

```bash
npx html-validate --config .htmlvalidate.json index.html
```

Lighthouse (against the same local server, production files):

```bash
npx lighthouse http://127.0.0.1:8765/ --preset=desktop --output html --output-path reports/lighthouse-desktop.html
npx lighthouse http://127.0.0.1:8765/ --form-factor=mobile --screenEmulation.mobile --output html --output-path reports/lighthouse-mobile.html
```

The page is `noindex` because this is a fictional demo; the SEO category may drop because of that.

## Honesty

- Banner: “Site de demonstração · clínica fictícia criada pela DulunduZ Tec”.
- Footer badge: “Site de demonstração — empresa fictícia”.
- Doctor cards: “Perfil de exemplo”. Reviews: “Depoimento de exemplo”.
- No CRM, CRO, CNPJ, or other official numbers; legal fields say “[preencher com dados reais]”.
- Text wordmark only. Address is labeled “endereço de exemplo”.
- Insurers are a text list of examples, without real logos.
- “Criado por DulunduZ Tec” links to https://dulunduztec.com.br.
- WhatsApp CTAs use https://wa.me/5571981587532. “Quero um site assim” is a DulunduZ lead message; appointment CTAs include “(mensagem de demonstração)”.

## License notes

Site code is for the DulunduZ Tec portfolio. Pexels photos remain under the Pexels License. UI SDK remains under Apache-2.0 (see `assets/vendor/ui-sdk/`).
