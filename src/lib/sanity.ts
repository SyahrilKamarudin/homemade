// Sanity client + helpers. Only used at BUILD TIME (static output stays SEO-safe).
// If no project id is configured, the site falls back to local seed content
// (see src/lib/posts.ts) so the build always works before the CMS is connected.
import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// HOMADE SELANGOR Sanity project. The project id is public (not a secret), so it
// is committed here as the default; an env var can still override it per build.
const projectId = (import.meta.env.PUBLIC_SANITY_PROJECT_ID as string | undefined) ?? 'wdldkf7t';
const dataset = (import.meta.env.PUBLIC_SANITY_DATASET as string | undefined) ?? 'production';
const apiVersion = (import.meta.env.PUBLIC_SANITY_API_VERSION as string | undefined) ?? '2024-01-01';

/** True when a Sanity project id is configured (always true now it ships a default). */
export const sanityEnabled = Boolean(projectId);

export const sanityClient: SanityClient | null = sanityEnabled
  ? createClient({ projectId: projectId!, dataset, apiVersion, useCdn: true })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Build an optimised image URL from a Sanity image ref (width-capped, auto format). */
export function imageUrl(source: any, width = 800): string {
  if (!builder || !source) return '';
  return builder.image(source).width(width).auto('format').fit('max').url();
}
