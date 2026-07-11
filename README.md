# HOMADE SELANGOR SDN BHD — website

Static, bilingual (EN/BM), SEO-optimised website for a cabinet door panel & kitchen
cabinet manufacturer in Kajang, Selangor. Built with [Astro](https://astro.build) →
outputs pure static HTML to `dist/`. Deploy target: **Netlify (free tier)**.

## Build & run

```bash
npm install       # install dependencies
npm run dev       # local dev server → http://localhost:4321
npm run build     # production build → ./dist
npm run preview   # preview the built ./dist locally
```

Deploy = push to GitHub → connect the repo in Netlify. `netlify.toml` already sets
`build command = npm run build` and `publish = dist`. Every push auto-builds.

## Pages (22 URLs = 11 pages × EN/BM)

| Page | EN | BM |
|---|---|---|
| Home | `/` | `/ms/` |
| About | `/about/` | `/ms/about/` |
| Products | `/products/` | `/ms/products/` |
| Contact | `/contact/` | `/ms/contact/` |
| Kajang (money page) | `/kabinet-dapur-kajang/` | `/ms/kabinet-dapur-kajang/` |
| For Trade / Pembekal | `/trade/` | `/ms/trade/` |
| Guides hub | `/blog/` | `/ms/blog/` |
| Guide: materials | `/blog/material-kabinet-dapur/` | `/ms/blog/material-kabinet-dapur/` |
| Guide: melamine vs plywood | `/blog/melamine-vs-plywood/` | `/ms/blog/melamine-vs-plywood/` |
| Guide: price | `/blog/cara-kira-harga-kabinet-dapur/` | `/ms/…` |
| Guide: design ideas | `/blog/rekaan-kabinet-dapur-terkini/` | `/ms/…` |

Plus: `sitemap-index.xml`, `robots.txt`, `404`.

## SEO built in
Unique title + meta description per page (EN & BM) · `hreflang` en/ms/x-default ·
canonical · Open Graph + Twitter cards · `LocalBusiness` (HomeGoodsStore) JSON-LD on
every page · `FAQPage` JSON-LD on guide articles · sitemap with locale alternates ·
descriptive alt text · semantic HTML, single `<h1>`/page · lazy-loaded sized images ·
preconnect fonts · minimal JS (mobile nav only).

## Source of truth / where to edit
- Business facts + WhatsApp/phone: `src/config.ts`
- UI copy (EN/BM): `src/i18n/strings.ts`
- Titles / meta descriptions: `src/i18n/routes.ts`
- Product cards: `src/data/products.ts`
- Guide articles: `src/data/blog.ts`
- Theme / styles: `src/styles/global.css`
- Final domain: `astro.config.mjs` (`SITE`) + `public/robots.txt`

## 🚩 Draft flags — confirm before go-live (visible on the site + in code)
1. Mission & Vision (About) — drafted by us, not client-supplied.
2. FORMOSA relationship (About) — brand / subsidiary / partner?
3. Product names & one-line descriptions — generic placeholders.
4. Product photos — currently stock; swap for real Homade photos (+ licensing).
5. Email — none provided; row shows "to confirm".
6. Map pin + opening hours + geo coords — approximate (Kajang area).
7. Logo — request a transparent PNG/SVG.

## What the client must provide
- **Final domain** → set in `astro.config.mjs` + `robots.txt`, then add in Netlify.
- **Email address** (or confirm none) → add to `src/config.ts`.
- **Geo coordinates + opening hours** of the Kajang workshop → to enrich JSON-LD.
- **Real product photos** + confirmed product names/specs.
- Confirmation of the FORMOSA relationship and Mission/Vision wording.
- Transparent logo file.

## Post-launch (see SEO-STRATEGY)
Submit `sitemap-index.xml` to Google Search Console · create a Google Business
Profile with identical NAP (Cheong, 012-231 0118) + 20 photos · Waze pin ·
Malaysia directory citations · collect GBP reviews.
