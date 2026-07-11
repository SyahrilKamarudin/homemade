import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 🚩 TODO(client): swap this to the final custom domain once provided.
// Everything (sitemap, hreflang, canonical, OG absolute URLs) derives from it.
const SITE = 'https://homade-selangor.netlify.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ms'],
    routing: {
      prefixDefaultLocale: false, // EN at root, BM under /ms/
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-MY', ms: 'ms-MY' },
      },
    }),
  ],
});
