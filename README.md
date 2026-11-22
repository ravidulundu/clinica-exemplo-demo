# Clínica Exemplo Salvador — demo landing page

A one-page, static portfolio site for **DulunduZ Tec** ([dulunduztec.com.br](https://dulunduztec.com.br)). It shows how a health and wellness clinic in Salvador, Bahia could look on the web: clear services, WhatsApp as the main call to action, and a mobile-first layout.

The business is **fictional**. The page is marked “Site de demonstração — empresa fictícia” in the banner and footer. There are no fake logos, testimonials, doctor names, or professional registrations.

All visible copy is in Brazilian Portuguese (`pt-BR`).

## What’s on the page

- Hero with a direct WhatsApp call to action
- Services: Clínica geral, Pediatria, Exames, Fisioterapia
- About (states clearly that the clinic is fictional)
- How to book (three steps)
- Location and hours, with a placeholder address labelled “Endereço de exemplo”
- FAQ
- Contact
- Footer credit: “Criado por DulunduZ Tec”

WhatsApp buttons (including the floating button) open a pre-filled message to DulunduZ Tec’s number: +55 71 98158-7532.

## Stack

- Plain `index.html` and `styles.css`
- No build step, no JavaScript framework
- A few lines of vanilla JS close the mobile menu after a link is clicked
- Art direction: limewashed wall and door plaque (“Cal e persiana”), documented in DESIGN_NOTES.md
- Two self-hosted Google Fonts: [Ibarra Real Nova](https://fonts.google.com/specimen/Ibarra+Real+Nova) (headings) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (body)
- Inline SVG favicon (no stock photos)

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python3 -m http.server 8080 --directory .

# or Node
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy on GitHub Pages

1. Create a GitHub repository (for example `clinica-exemplo-demo`).
2. Upload `index.html`, `styles.css`, and this `README.md` to the default branch (usually `main`). Screenshots are optional.
3. In the repo, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder, then save.
6. After a minute or two, the site will be available at `https://<user>.github.io/clinica-exemplo-demo/`.

If the repo is named `<user>.github.io`, the site will be served from the root of that domain instead.

No GitHub Action or bundler is required. After you have a public URL, you can add `og:url` and `og:image` (for example a desktop screenshot) to the `<head>` of `index.html`.

## Notes

- The address, opening hours, and map block are clearly labelled as examples and do not point to a real place.
- This folder is a static snapshot only. Publishing it is a separate step and is not part of the local files.
