import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Primary domain = the host that serves 200 (www 301-redirects here on Netlify).
// Must match the live primary so canonical / hreflang / OG / sitemap URLs don't
// all point at a redirecting host. Flip to www here AND in Netlify's primary
// domain setting together if you ever prefer www as canonical.
const SITE = 'https://kabinetkajang.com';

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
