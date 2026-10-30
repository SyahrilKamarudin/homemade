import { defineType, defineField } from 'sanity';

// Singleton: the "important info" the client can edit without touching code —
// contact numbers, email, Facebook, and an optional site-wide announcement banner.
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings (contact info & announcement)',
  type: 'document',
  fields: [
    defineField({
      name: 'contacts',
      title: 'Enquiry phone numbers',
      description:
        'The numbers shown everywhere on the site. Every "Enquire / WhatsApp" button lets the visitor pick one of these. Add, remove or reorder — the first one is the primary.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'display',
              title: 'Display (as shown)',
              type: 'string',
              description: 'e.g. 010-860 7845',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'intl',
              title: 'WhatsApp / international number',
              type: 'string',
              description: 'Digits only, with country code, no + or spaces. e.g. 60108607845',
              validation: (Rule) =>
                Rule.required().regex(/^[0-9]{8,15}$/, { name: 'digits only (with country code)' }),
            }),
          ],
          preview: { select: { title: 'display', subtitle: 'intl' } },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
      description: 'Leave blank if none — the email row is hidden when empty.',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook page URL',
      type: 'url',
    }),
    defineField({
      name: 'announcementActive',
      title: 'Show announcement banner?',
      type: 'boolean',
      description: 'Turn on to show a banner across the top of every page (e.g. promo, holiday hours).',
      initialValue: false,
    }),
    defineField({
      name: 'announcement',
      title: 'Announcement text (EN / BM)',
      type: 'localeString',
      description: 'Short message shown in the top banner when the toggle above is on.',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
