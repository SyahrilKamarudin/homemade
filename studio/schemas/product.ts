import { defineType, defineField } from 'sanity';

// A showcase catalog item on the Products page. The client adds, edits, reorders
// and removes these — each one becomes a product card under its category section.
// No price / cart — the "Enquire" button is wired automatically on the website.
export const product = defineType({
  name: 'product',
  title: 'Product (catalog item)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product name (EN / BM)',
      type: 'localeString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short description (EN / BM)',
      type: 'localeText',
      description: 'One line shown under the product name.',
    }),
    defineField({
      name: 'category',
      title: 'Category section',
      type: 'string',
      description: 'Which section of the Products page this appears under.',
      options: {
        list: [
          { title: 'Cabinet Doors / Pintu Kabinet', value: 'cabinet-doors' },
          { title: 'Kitchen Cabinets / Kabinet Dapur', value: 'kitchen' },
          { title: 'Furniture & Fittings / Perabot', value: 'furniture' },
          { title: 'Appliances & Accessories / Perkakas', value: 'appliances' },
        ],
        layout: 'radio',
      },
      initialValue: 'kitchen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a real product photo. If left empty, the fallback filename below is used.',
      fields: [
        {
          name: 'alt',
          title: 'Alt text (describe the photo, EN)',
          type: 'string',
          description: 'For SEO & accessibility, e.g. "White kitchen cabinet — HOMADE Kajang".',
          validation: (Rule) => Rule.required().warning('Alt text strongly recommended for SEO'),
        },
      ],
    }),
    defineField({
      name: 'imageFallback',
      title: 'Fallback image filename (advanced)',
      type: 'string',
      description:
        'Only used when no photo is uploaded above. A filename already in the site, e.g. "kitchen-premium.jpg". Leave as-is.',
    }),
    defineField({
      name: 'badge',
      title: 'Badge (optional)',
      type: 'string',
      description: 'Small label on the card, e.g. "FORMOSA". Leave empty for none.',
    }),
    defineField({
      name: 'order',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers show first within the category.',
      initialValue: 100,
    }),
  ],
  preview: {
    select: { title: 'title.en', subtitle: 'category', media: 'image' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Untitled product', subtitle: subtitle || 'No category', media };
    },
  },
  orderings: [
    { title: 'Sort order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
});
