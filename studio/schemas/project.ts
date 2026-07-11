import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Project / Gallery Photo',
  type: 'document',
  description: 'Client project photos for gallery & location pages. Add real Homade installation photos here.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Description',
      type: 'localeString',
      description: 'Short description (e.g., "White kitchen cabinet, Kajang")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (Rule) => Rule.required().warning('Alt text required for SEO'),
            },
            {
              name: 'caption',
              title: 'Caption (optional)',
              type: 'localeString',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Kitchen Cabinet / Kabinet Dapur', value: 'kitchen' },
          { title: 'Cabinet Doors / Pintu Kabinet', value: 'doors' },
          { title: 'Furniture / Perabot', value: 'furniture' },
          { title: 'Stainless Steel / Keluli Tahan Karat', value: 'stainless' },
          { title: 'Other / Lain-lain', value: 'other' },
        ],
      },
      initialValue: 'kitchen',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location (if known)',
      type: 'string',
      description: 'E.g., "Kajang", "Semenyih", "Cheras" — helps with local SEO',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'category',
      media: 'images.0',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled project',
        subtitle: subtitle || 'No category',
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Published date (newest first)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
