import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// 🚩 TODO(setup): paste your Sanity project id here (from sanity.io/manage),
// or set it once via `npx sanity init` which writes it for you.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'REPLACE_WITH_PROJECT_ID';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'homade',
  title: 'HOMADE SELANGOR — Blog & Photos',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
