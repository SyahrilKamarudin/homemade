import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'wdldkf9t';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

// Singletons are edited as a single document (no "create new" list).
const singleton = (S: any, type: string, title: string) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type));

export default defineConfig({
  name: 'homade',
  title: 'HOMADE SELANGOR — Admin',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Page content & settings (single editable documents)
            singleton(S, 'homePage', 'Home page content'),
            singleton(S, 'aboutPage', 'About page content'),
            singleton(S, 'productsPage', 'Products page intro'),
            singleton(S, 'seoMeta', 'SEO (titles & descriptions)'),
            singleton(S, 'siteSettings', 'Site Settings (contact & banner)'),
            S.divider(),
            // Collections (add / edit / remove many)
            S.documentTypeListItem('product').title('Products'),
            S.documentTypeListItem('post').title('Blog Posts'),
            S.documentTypeListItem('project').title('Projects / Photos'),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
