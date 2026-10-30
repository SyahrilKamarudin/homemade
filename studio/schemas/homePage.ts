import { defineType, defineField } from 'sanity';

// Singleton: editable marketing copy for the Home page. Field names mirror the
// code dictionary keys so the content loader overlays them automatically.
// Any field left blank falls back to the built-in text.
const L = (name: string, title: string, fieldset: string, text = false) =>
  defineField({ name, title, type: text ? 'localeText' : 'localeString', fieldset });

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page content',
  type: 'document',
  fieldsets: [
    { name: 'hero', title: 'Hero (top banner)' },
    { name: 'who', title: 'Who we are' },
    { name: 'why', title: 'Why Homade (3 features)' },
    { name: 'cta', title: 'Call-to-action band' },
  ],
  fields: [
    L('heroBadge', 'Badge line', 'hero'),
    L('heroTitle', 'Headline', 'hero', true),
    L('heroSub', 'Sub-text', 'hero', true),
    L('whoKicker', 'Eyebrow', 'who'),
    L('whoTitle', 'Heading', 'who'),
    L('whoLead', 'Lead paragraph', 'who', true),
    L('whoPara', 'Body paragraph', 'who', true),
    L('whoTick1', 'Tick 1', 'who'),
    L('whoTick2', 'Tick 2', 'who'),
    L('whoTick3', 'Tick 3', 'who'),
    L('feat1T', 'Feature 1 — title', 'why'),
    L('feat1D', 'Feature 1 — text', 'why', true),
    L('feat2T', 'Feature 2 — title', 'why'),
    L('feat2D', 'Feature 2 — text', 'why', true),
    L('feat3T', 'Feature 3 — title', 'why'),
    L('feat3D', 'Feature 3 — text', 'why', true),
    L('ctaHomeTitle', 'CTA heading', 'cta'),
    L('ctaHomeP', 'CTA text', 'cta', true),
  ],
  preview: { prepare: () => ({ title: 'Home page content' }) },
});
