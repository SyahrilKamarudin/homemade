import { defineType, defineField } from 'sanity';

// Singleton: per-page SEO title + meta description (EN / BM). Optional — any page
// or field left blank keeps the built-in, keyword-optimised default in code.
export const seoMeta = defineType({
  name: 'seoMeta',
  title: 'SEO (page titles & descriptions)',
  type: 'document',
  fields: [
    defineField({
      name: 'pages',
      title: 'Pages',
      description:
        'Override the Google title & description for a page. Keep titles ~60 chars and descriptions ~150 chars. Leave a page out to use the built-in default.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'page',
              title: 'Page',
              type: 'string',
              options: {
                list: [
                  { title: 'Home', value: 'home' },
                  { title: 'About', value: 'about' },
                  { title: 'Products', value: 'products' },
                  { title: 'Contact', value: 'contact' },
                  { title: 'Kabinet Dapur Kajang', value: 'kabinet-dapur-kajang' },
                  { title: 'For Trade', value: 'trade' },
                  { title: 'Guides / Blog hub', value: 'blog' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'title', title: 'Title tag (EN / BM)', type: 'localeString' }),
            defineField({ name: 'description', title: 'Meta description (EN / BM)', type: 'localeText' }),
          ],
          preview: { select: { title: 'page', subtitle: 'title.en' } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'SEO settings' }) },
});
