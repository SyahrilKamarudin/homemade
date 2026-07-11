# HOMADE SELANGOR — Blog Admin (Sanity Studio)

This is the **blog CMS** where you post articles and upload photos **with email login — no code, no GitHub**. The site rebuilds automatically when you publish.

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
   - **Filter (optional):** `_type == "post" || _type == "project"`
   - **Save**

Now: **Write → Publish in Studio → site rebuilds in ~1-2 min → article live.**

---

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
