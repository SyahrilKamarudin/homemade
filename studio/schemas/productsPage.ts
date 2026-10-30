import { defineType, defineField } from 'sanity';

// Singleton: editable intro copy for the Products page. The product cards
// themselves are the `product` documents; this is just the top-of-page text.
const L = (name: string, title: string, text = false) =>
  defineField({ name, title, type: text ? 'localeText' : 'localeString' });

export const productsPage = defineType({
  name: 'productsPage',
  title: 'Products page intro',
  type: 'document',
  fields: [
    L('catalogKicker', 'Eyebrow'),
    L('prodTitle', 'Heading'),
    L('catalogLead', 'Intro paragraph', true),
  ],
  preview: { prepare: () => ({ title: 'Products page intro' }) },
});
