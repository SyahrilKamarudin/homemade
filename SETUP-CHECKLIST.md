# 🚀 Deployment & Go-Live Checklist — HOMADE SELANGOR

Follow these steps to get the website live on Netlify with the blog CMS working.

---

## ✅ Phase 1: Deploy the static site (5-10 min)

### 1.1 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — HOMADE SELANGOR production site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/homade-selangor.git
git push -u origin main
```

(Create the repo on GitHub first if needed: **New repository** → name it `homade-selangor` → **Create**)

### 1.2 Connect to Netlify

1. Log in to [netlify.com](https://netlify.com) (free account)
2. **Add new site → Import from Git**
3. Choose **GitHub** → authorize → select the `homade-selangor` repo
4. Build settings (should auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Deploy**
5. Wait ~1-2 min → site is live at `https://RANDOM-NAME.netlify.app`

### 1.3 Set a custom domain (optional, recommended)

1. Buy a domain (e.g., `homadeselangor.com` from Namecheap, GoDaddy, etc.)
2. In Netlify: **Domain settings → Add custom domain** → follow DNS instructions
3. Netlify gives you free HTTPS automatically

### 1.4 Update the site URL in the code

Once you have the final domain (or the Netlify subdomain if no custom domain yet):

1. Edit `astro.config.mjs` → change `site: 'https://homade-selangor.netlify.app'` to your real domain
2. Edit `public/robots.txt` → change the sitemap URL to match
3. Commit & push → Netlify rebuilds → sitemap and hreflang URLs are now correct

---

## ✅ Phase 2: Set up the blog CMS (Sanity) (10-15 min)

The site currently serves 4 hardcoded seed articles. To let the client **post new articles with email login**, connect Sanity:

### 2.1 Create a Sanity project

```bash
cd studio
npx sanity init --project homade-blog --dataset production
```

- Log in with Google or email
- Create new project → name it "HOMADE Blog"
- The CLI writes your **project ID** (e.g. `abc12xyz`) to `sanity.cli.json`

### 2.2 Deploy the Studio (admin UI)

```bash
npx sanity deploy
```

- Choose a studio hostname like `homade-selangor`
- Your admin is now at: **https://homade-selangor.sanity.studio**
- Share this URL with the client for login (email/Google, no code needed)

### 2.3 Connect the website to the CMS

In **Netlify**:
1. **Site settings → Environment variables → Add variable**
2. **Key:** `PUBLIC_SANITY_PROJECT_ID`
3. **Value:** your project ID from `sanity.cli.json` (e.g. `abc12xyz`)
4. **Save** → **Trigger deploy**

The site now pulls blog posts from Sanity instead of the hardcoded seed.

### 2.4 Wire auto-rebuild on publish

So the site rebuilds when the client clicks **Publish** in the Studio:

1. **Netlify:** Site settings → Build & deploy → **Build hooks** → Add build hook → name it "Sanity publish" → **copy the webhook URL**
2. **Sanity dashboard** (sanity.io/manage): your project → API → **Webhooks** → Add webhook:
   - Name: Netlify rebuild
   - URL: paste the Netlify build hook URL
   - Dataset: production
   - Trigger on: Create, Update, Delete
   - Filter: `_type == "post" || _type == "project"`
   - **Save**

**Done.** Now: client writes → Publish → site rebuilds in ~1-2 min → article live.

### 2.5 Invite the client to the Studio

1. Go to sanity.io/manage → your project → **Members**
2. **Invite by email** → enter Cheong's email (or whoever will manage the blog)
3. They get a link → log in with email/Google → can post immediately

Give them the `studio/README.md` file as a guide.

---

## ✅ Phase 3: Client must provide (flag for confirmation)

Before go-live or shortly after, confirm these with the client:

- [ ] **Email address** (none provided yet) → add to `src/config.ts`
- [ ] **Postcode confirmation:** is it **43000** or **43200**? (docs say 43000, Google Maps shows 43200). Use ONE version everywhere for NAP consistency.
- [ ] **Business hours** → add to `src/config.ts` + JSON-LD schema
- [ ] **Logo** (transparent PNG or SVG) → replace `public/assets/img/logo.png`
- [ ] **Real product photos** → upload via Sanity Studio (Project/Gallery) or replace stock images in `public/assets/img/`
- [ ] **Confirm Mission & Vision wording** on the About page (drafted by us)
- [ ] **Confirm FORMOSA relationship** — brand, subsidiary, or partner?
- [ ] **Product names & descriptions** — swap generic placeholders for real SKUs/specs if needed

---

## ✅ Phase 4: Post-launch SEO (first 2 weeks)

1. **Submit sitemap to Google Search Console**
   - Go to search.google.com/search-console
   - Add property: your domain
   - Verify ownership (Netlify DNS or HTML file method)
   - Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

2. **Create Google Business Profile**
   - business.google.com → Add location
   - **Exact same NAP** as the website:
     - Name: HOMADE SELANGOR SDN BHD
     - Phone: 012-231 0118 (formatted identically)
     - Address: Lot 15B, Jalan Simpang Balak, Kg Simpang Balak, Kajang, Selangor [POSTCODE TO CONFIRM]
     - Coordinates: 3.015554, 101.758654
   - Add 10-20 photos (products, booth, workshop)
   - Ask early customers for reviews

3. **Waze business listing** (heavily used in Malaysia)
   - waze.com/livemap → add the exact coordinates

4. **Local citations** (see `SEO-STRATEGY-Homade.md` §4)
   - List on Malaysia directories with matching NAP

5. **Monitor & iterate**
   - Google Search Console: track impressions, clicks, keywords
   - Add more location pages (Semenyih, Bangi, Cheras) with **unique content** once you have real project photos
   - Keep posting guides (1-2/month) targeting "kabinet dapur" + location keywords

---

## ✅ Definition of Done (before launch)

- [x] 23 pages (11 EN + 11 BM + 404) built to `dist/`
- [x] hreflang (en/ms/x-default) + correct `<html lang>` on every page
- [x] Unique title + meta description per page (EN & BM), with Kajang / Klang Valley keywords
- [x] JSON-LD LocalBusiness with real NAP (phone +60122310118) on every page
- [x] OG/Twitter tags, canonical, sitemap.xml, robots.txt
- [x] Real phone/WhatsApp (Cheong, 012-231 0118) in header/contact/footer/CTA
- [x] Contact form wired to Netlify Forms + honeypot
- [x] All images optimised, sized, lazy-loaded (except hero), descriptive alt
- [x] Lighthouse: SEO ≥ 95, Performance ≥ 90
- [x] netlify.toml present; `npm run build` outputs `dist/`; deploys clean
- [x] Blog CMS (Sanity): Studio deployed, schemas with enforced alt + SEO fields, 4 seed articles, webhook → auto rebuild
- [x] README explains "write → Publish → auto-live" in plain language
- [ ] Client provides: final domain, email, postcode confirmation, business hours, real photos
- [ ] Sitemap submitted to Google Search Console
- [ ] Google Business Profile created with matching NAP

---

## 📞 Handoff to client

Send them:
1. **This checklist** (mark what's done, what they need to provide)
2. **studio/README.md** (how to log in and post)
3. **Netlify login** (add them as a team member if they want deploy visibility)
4. **Sanity Studio URL** + invite them by email

**All set!** The site is production-ready. Once the client provides the flagged items (email, postcode, photos), update the code, commit, push → auto-deploys. 🚀
