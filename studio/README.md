# HOMADE SELANGOR — Content Admin (Sanity Studio)

This is the **admin panel** where you edit the website **with email login — no code, no GitHub**. The site rebuilds automatically when you publish.

**What you can edit from here:**
- **Products** — add / edit / reorder / remove catalog items and upload real photos
- **Home / About / Products page copy** — the headlines and paragraphs on those pages
- **Site Settings** — enquiry phone numbers, email, Facebook, announcement banner
- **Blog posts** — write guide articles (EN & BM) with photos and FAQ
- **SEO** — the Google title & description for each page
- **Project / Gallery photos** — real installation photos

Anything you leave blank falls back to the built-in text, so the site never breaks.

## First-time setup (one person does this, then invites others)

### 1. Create a free Sanity project

```bash
cd studio
npx sanity init --project homade-blog --dataset production
```

Follow the prompts:
- **Login** with your Google or email account
- **Create new project** → name it "HOMADE Blog" (or anything you like)
- The CLI will write your **project ID** into `sanity.cli.json` automatically

### 2. Deploy the Studio (admin UI) to the web

```bash
npx sanity deploy
```

Choose a name like `homade-selangor` → your admin will be at:
```
https://homade-selangor.sanity.studio
```

Save that URL. Anyone you invite logs in there with email/Google — no GitHub needed.

### 2b. Import the starter content (one time)

So the Studio opens pre-filled with the current website content (all products,
page copy, SEO and the 4 guide articles) — ready for you to edit instead of
starting from a blank page:

```bash
npm run import-seed
```

(Run this from the `studio/` folder, after step 1. It imports
`studio/seed/*.ndjson`. Safe to re-run.)

### 3. Connect the website to the CMS

Copy your **project ID** from `sanity.cli.json` (looks like `abc12xyz`) and set it as an environment variable in **Netlify**:

1. Go to your Netlify site dashboard → **Site settings → Environment variables**
2. Add a new variable:
   - **Key:** `PUBLIC_SANITY_PROJECT_ID`
   - **Value:** your project ID (e.g. `abc12xyz`)
3. **Save** → trigger a new deploy

The site will now pull blog posts from Sanity at build time instead of the hardcoded seed articles.

### 4. Set up auto-rebuild on publish

When you click **Publish** in the Studio, the site should rebuild automatically. Wire this up:

1. In **Netlify**, go to **Site settings → Build & deploy → Build hooks**
2. **Add build hook** → name it "Sanity publish" → copy the webhook URL (looks like `https://api.netlify.com/build_hooks/abc...`)
3. In your **Sanity project dashboard** (sanity.io/manage), go to **API → Webhooks**
4. **Add webhook**:
   - **Name:** Netlify rebuild
   - **URL:** paste the Netlify build hook URL
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **Filter (optional):** `_type in ["post","project","product","siteSettings","homePage","aboutPage","productsPage","seoMeta"]`
   - **Save**

Now: **Write → Publish in Studio → site rebuilds in ~1-2 min → article live.**

---

## Site Settings — edit important info without code

In the Studio sidebar there is a **Site Settings** entry (single page). Open it to edit, and **Publish** — the whole site updates in ~1-2 min:

- **Enquiry phone numbers** — the list of numbers shown everywhere. Every "Enquire / WhatsApp" button lets the visitor pick one of these. Add, remove, reorder (the first is the primary). Each has a **Display** (e.g. `010-860 7845`) and a **WhatsApp number** (digits only with country code, e.g. `60108607845`).
- **Email** — leave blank to hide the email row; fill it to show it on the contact page.
- **Facebook page URL**.
- **Announcement banner** — turn the toggle on + type a short message (EN & BM) to show a green strip across the top of every page (e.g. a promo or holiday-hours notice). Toggle off to hide it.

If Site Settings is left empty, the site uses the built-in defaults in `src/config.ts`, so nothing ever breaks.

## Products — edit the catalog

**Product (catalog item)** in the sidebar holds every card on the Products page.

- **Create new** to add a product; choose its **Category section** (Cabinet Doors / Kitchen / Furniture / Appliances), write the **name** and **description** (EN & BM), and upload a **photo** (+ alt text).
- **Reorder** within a category with the **Sort order** number (lower = first).
- **Delete** or edit any item → Publish → the Products page updates in ~1-2 min.
- The **Enquire / WhatsApp** button is added automatically — no price, no cart.

Seeded products start with the existing stock photos (via a fallback filename); upload a real photo on any product to replace it.

## Page content — edit the words on each page

Three single pages hold the editable copy:

- **Home page content** — hero headline, "who we are", the 3 feature blocks, and the call-to-action.
- **About page content** — story, mission, vision, and the FORMOSA section.
- **Products page intro** — the heading and intro paragraph above the catalog.

Open one, change any field (EN & BM), **Publish**. Leave a field blank to keep the built-in text.

## SEO — Google titles & descriptions

**SEO (page titles & descriptions)** lets you fine-tune the Google title and description per page. Keep titles ~60 characters and descriptions ~150, and weave in keywords like "kabinet dapur Kajang". Any page you don't list keeps its built-in, keyword-optimised default.

## Daily use (writing & publishing)

1. **Go to** https://homade-selangor.sanity.studio (or wherever you deployed it)
2. **Log in** with your email/Google (no password to remember if you use Google)
3. **Blog Post / Article** (left sidebar) → **Create new**
4. Fill in:
   - **Title** (EN & BM) — the article headline
   - **Slug** — the URL bit (e.g. `my-new-guide` → `/blog/my-new-guide/`)
   - **Excerpt** — short summary for the listing page (~150 chars)
   - **Cover Image** — upload a photo + write **alt text** (required for SEO)
   - **Body** — your article content (EN & BM). Use headings, bold, lists, add images.
   - **Published at** — the date (defaults to today)
   - **SEO: Meta Description** (EN & BM) — important! This appears in Google search results (~150 chars, include keywords like "kabinet Kajang")
   - **FAQ (optional)** — add Q&A pairs if your article answers common questions → Google may show these in search
   - **Publish** (top right)
5. Wait ~1-2 minutes → your article is live on the site in both EN and BM

### Editing / unpublishing

- **Edit** any post → change it → **Publish** again → site rebuilds with the update
- **Unpublish** (3 dots menu) → removes it from the site on next build (it stays in the Studio, just hidden)

### Photos / project gallery

The **Project / Gallery Photo** section is for real Homade installation photos (replaces the stock images). Upload images, add:
- **Title/description** (EN & BM)
- **Alt text** on each image (for SEO)
- **Category** (kitchen, doors, furniture, stainless)
- **Location** if known (e.g., "Kajang") — helps local SEO

These photos feed the gallery and can appear on location pages like `/kabinet-dapur-kajang/`.

---

## Inviting team members

1. Go to sanity.io/manage → your project → **Members**
2. **Invite by email** → they get an invite link
3. They log in with email/Google → can write & publish immediately (no code access)

---

## Technical notes (for developers)

- **Studio** = this folder (`studio/`) — a React app built with Sanity's SDK
- **Schemas** are in `studio/schemas/` — defines what fields editors see (title, body, image, etc.)
- The **Astro site** (`src/lib/posts.ts`) fetches published posts at **build time** via `@sanity/client` → output is static HTML (great SEO, no server needed)
- Images are served via Sanity's CDN with auto width/format optimisation
- If `PUBLIC_SANITY_PROJECT_ID` is not set, the site falls back to the 4 seed articles in `src/data/blog.ts` (so the build never breaks)

### Local Studio dev (optional, for schema changes)

```bash
cd studio
npm install
npm run dev
```

Studio runs at http://localhost:3333. Schema changes need a dev redeploy (`npx sanity deploy`).

---

## Troubleshooting

**"I published but the site hasn't updated"**
- Check the **Netlify build log** (Deploys tab) — the webhook should have triggered a build
- Verify the `PUBLIC_SANITY_PROJECT_ID` env var is set in Netlify
- Sanity webhook may need a few seconds to fire; wait 2-3 min

**"Images not showing"**
- Make sure you wrote **alt text** for every image (enforced by the schema for SEO)
- Check the image uploaded successfully in the Studio (you should see a thumbnail)

**"Can't log in to Studio"**
- Clear browser cache or try incognito
- Make sure you're using the email/Google account that was invited to the project

**"Need help with keywords / SEO"**
- See the main project `SEO-STRATEGY-Homade.md` for the keyword clusters (kabinet Kajang, Lembah Klang, etc.)
- Weave them naturally into your title, h1, body and meta description — don't stuff

---

**Ready?** Open https://homade-selangor.sanity.studio (or your deployed URL), log in, and start writing. 🚀
