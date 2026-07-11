import { defineType, defineField } from 'sanity';

// Bilingual helpers — each field shows an English (BI) and a Malay (BM) box.
export const localeString = defineType({
  name: 'localeString',
  title: 'Text (EN / BM)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'ms', title: 'Bahasa Melayu', type: 'string' }),
  ],
});

export const localeText = defineType({
  name: 'localeText',
  title: 'Paragraph (EN / BM)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
    defineField({ name: 'ms', title: 'Bahasa Melayu', type: 'text', rows: 3 }),
  ],
});

// Rich text (headings, bold, lists, links, inline images) per language.
const blockArray = {
  type: 'array' as const,
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt text (describe the image)', type: 'string', validation: (Rule: any) => Rule.required() },
      ],
    },
  ],
};

export const localePortableText = defineType({
  name: 'localePortableText',
  title: 'Article body (EN / BM)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', ...blockArray }),
    defineField({ name: 'ms', title: 'Bahasa Melayu', ...blockArray }),
  ],
});
