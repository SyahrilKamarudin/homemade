import { defineType, defineField } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog Post / Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localeString',
      description: 'Article title (EN & BM)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "melamine-vs-plywood"). Same for both languages.',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'localeText',
      description: 'Short summary for the listing page (~150 chars)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt text (for SEO & accessibility)',
          type: 'string',
          validation: (Rule) => Rule.required().warning('Alt text is strongly recommended for SEO'),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body / Content',
      type: 'localePortableText',
      description: 'Full article content (EN & BM)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author name',
      type: 'string',
      initialValue: 'HOMADE SELANGOR',
    }),
    defineField({
      name: 'metaTitle',
      title: 'SEO: Meta Title (override)',
      type: 'localeString',
      description: 'Optional. If empty, uses the main title. Max ~60 chars.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO: Meta Description',
      type: 'localeText',
      description: 'Important for Google snippet. ~150-160 chars. Include keywords naturally.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faq',
      title: 'FAQ (for structured data)',
      type: 'array',
      of: [{ type: 'faqItem' }],
      description: 'Optional. Adds FAQPage JSON-LD → Google may show FAQ rich results.',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Guide / Panduan', value: 'guide' },
          { title: 'Tips & Ideas', value: 'tips' },
          { title: 'News / Berita', value: 'news' },
        ],
      },
      initialValue: 'guide',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'publishedAt',
      media: 'coverImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled',
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('en-MY') : 'No date',
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
