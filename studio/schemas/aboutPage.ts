import { defineType, defineField } from 'sanity';

// Singleton: editable copy for the About page. Field names mirror the code
// dictionary keys so the content loader overlays them automatically.
const L = (name: string, title: string, fieldset: string, text = false) =>
  defineField({ name, title, type: text ? 'localeText' : 'localeString', fieldset });

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page content',
  type: 'document',
  fieldsets: [
    { name: 'story', title: 'Our story' },
    { name: 'mission', title: 'Mission & Vision' },
    { name: 'brand', title: 'FORMOSA brand' },
    { name: 'cta', title: 'Call-to-action band' },
  ],
  fields: [
    L('storyTitle', 'Heading', 'story'),
    L('storyP1', 'Paragraph 1', 'story', true),
    L('storyP2', 'Paragraph 2', 'story', true),
    L('storyP3', 'Paragraph 3', 'story', true),
    L('missionTitle', 'Mission — heading', 'mission'),
    L('missionP', 'Mission — text', 'mission', true),
    L('visionTitle', 'Vision — heading', 'mission'),
    L('visionP', 'Vision — text', 'mission', true),
    L('brandTitle', 'FORMOSA — heading', 'brand'),
    L('brandP1', 'FORMOSA — paragraph 1', 'brand', true),
    L('brandP2', 'FORMOSA — paragraph 2', 'brand', true),
    L('ctaAboutTitle', 'CTA heading', 'cta'),
    L('ctaAboutP', 'CTA text', 'cta', true),
  ],
  preview: { prepare: () => ({ title: 'About page content' }) },
});
